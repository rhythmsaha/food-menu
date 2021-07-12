import reactdom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onBackdropClick}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    return (
        <>
            {reactdom.createPortal(
                <Backdrop onBackdropClick={props.onBackdropClick} />,
                document.getElementById("overlays")
            )}
            {reactdom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById("overlays")
            )}
        </>
    );
};

export default Modal;
