import React, { useState } from "react";
import Modal from "./Modal";
import { StyledModal } from "./StyledModal.styled";
import Input from "../Input";
import Button from "../Button";
import { Category, Word } from "../../type";
import axios from "axios";

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    categories: Category;
    setCategories: React.Dispatch<React.SetStateAction<Category>>;
    words: Word[];
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
}

const DownloadModal: React.FC<Props> = ({
    setModal,
    categories,
    setCategories,
    words,
    setWords,
}) => {
    const [profileName, setProfileName] = useState("");

    const handleSend = async () => {
        if (profileName !== "") {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/v1/words/create",
                    {
                        profileName,
                        words,
                        categories,
                    }
                );

                setModal(false);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleGet = () => {};

    return (
        <>
            <Modal setModal={setModal} />
            <StyledModal>
                <div className="content">
                    <Input
                        value={profileName}
                        setValue={setProfileName}
                        className="downloadInput"
                    />

                    <div className="downloadButtons">
                        <Button
                            bg="green"
                            color="white"
                            className="sendButton"
                            onClick={() => handleSend()}
                        >
                            Отправить
                        </Button>
                        <Button
                            bg="#24399A"
                            color="white"
                            className="getButton"
                            onClick={() => console.log("asd")}
                        >
                            Получить
                        </Button>
                    </div>
                </div>
            </StyledModal>
        </>
    );
};

export default DownloadModal;
