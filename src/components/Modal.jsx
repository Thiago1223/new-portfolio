import React from "react";
import '../styles/Modal.css'

const Modal = ({ title, message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-dialog">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" onClick={onClose}>✖</button>
                </div>
                <div className="modal-body">
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
