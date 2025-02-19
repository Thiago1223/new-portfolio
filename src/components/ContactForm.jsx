import { useState } from "react";
import Modal from "./Modal";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [modal, setModal] = useState({ show: false, title: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/mbldpryq?noRedirect=true", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setModal({ show: true, title: "Sucesso!", message: "Mensagem enviada com sucesso!" });
            setFormData({ first_name: "", last_name: "", email: "", phone: "", subject: "", message: "" });
        } else {
            setModal({ show: true, title: "Erro!", message: "Erro ao enviar mensagem. Tente novamente." });
        }
    };

    const handleChangePhone = (e) => {
        let { name, value } = e.target;

        if (name === "phone") {
            value = value.replace(/\D/g, "");

            if (value.length <= 10) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
            } else {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
            }
        }

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="container-contact-input">
                <div className="container-contact-input-initial">
                    <input type="text" name="first_name" placeholder="Primeiro Nome *" value={formData.first_name} onChange={handleChange} required />
                    <input type="text" name="last_name" placeholder="Sobrenome *" value={formData.last_name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Telefone *" value={formData.phone} onChange={handleChangePhone} required />
                </div>
                <input type="text" name="subject" placeholder="Assunto *" className="first-contact-input" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" className="second-contact-input" placeholder="Descrição *" value={formData.message} onChange={handleChange} required />
                <button type="submit">Enviar</button>
            </form>

            {modal.show && <Modal title={modal.title} message={modal.message} onClose={() => setModal({ show: false })} />}
        </>
    );
};

export default ContactForm;