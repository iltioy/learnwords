interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ setModal }) => {
    return <div className="modal" onClick={() => setModal(false)}></div>;
};

export default Modal;
