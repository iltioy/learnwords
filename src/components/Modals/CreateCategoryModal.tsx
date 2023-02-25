import { useState } from "react";
import { Category } from "../../type";
import Button from "../Button";
import Input from "../Input";
import Modal from "./Modal";
import "./styles.css";

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    category: string;
    setCategories: React.Dispatch<React.SetStateAction<Category>>;
}

const CreateCategoryModal: React.FC<Props> = ({
    setModal,
    category,
    setCategories,
}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setCategories((prevState: Category) => {
            let collections = prevState?.collections;
            let difficulties = prevState?.difficulties;
            let languages = prevState?.languages;

            if (inputValue !== "" && category === "коллекция") {
                collections = prevState?.collections
                    ? [...prevState.collections, inputValue]
                    : [inputValue];
            } else if (inputValue !== "" && category === "сложность") {
                difficulties = prevState?.difficulties
                    ? [...prevState.difficulties, inputValue]
                    : [inputValue];
            } else if (inputValue !== "" && category === "язык") {
                languages = prevState?.languages
                    ? [...prevState.languages, inputValue]
                    : [inputValue];
            }
            let newState: Category = {
                collections,
                difficulties,
                languages,
            };

            return newState;
        });

        setModal(false);
    };

    return (
        <>
            <Modal setModal={setModal} />
            <div className="createCategoryModal">
                <form className="content" onSubmit={(e) => handleSave(e)}>
                    <div className="categoryEdit">
                        Настройка категории {category}
                    </div>
                    <Input value={inputValue} setValue={setInputValue} />
                    <div>
                        <Button
                            bg="#5B53F1"
                            color="white"
                            className="createCategoryButton"
                            type="submit"
                        >
                            Создать
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateCategoryModal;
