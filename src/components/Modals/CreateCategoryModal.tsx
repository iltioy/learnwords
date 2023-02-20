import { useState } from "react";
import Input from "../Input";
import Modal from "./Modal";
import "./styles.css";

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateCategoryModal: React.FC<Props> = ({ setModal }) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSave = () => {
        setModal(false);
    };

    return (
        <>
            <Modal setModal={setModal} />
            <div className="editModal">
                <div className="content">
                    <Input value={inputValue} setValue={setInputValue} />
                </div>
            </div>
        </>
    );
};

export default CreateCategoryModal;
