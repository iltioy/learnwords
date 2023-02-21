import { useState } from "react";
import Dropdown from "../Dropdown";
import Modal from "./Modal";
import { Category, Word } from "../../type";
import "./styles.css";
import Button from "../Button";

interface Props {
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
    word: Word;
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
    categories: Category;
}

const EditModal: React.FC<Props> = ({
    setModal,
    word,
    setWords,
    categories,
}) => {
    const [collection, setCollection] = useState<string | null>(
        word.options.collection
    );
    const [difficulty, setDifficulty] = useState<string | null>(
        word.options.difficulty
    );
    const [language, setLanguage] = useState<string | null>(
        word.options.language
    );
    const [repeat, setRepeat] = useState<boolean | null>(word.options.repeat);

    const handleSave = () => {
        setWords((prevState: any) => {
            const newWord: Word = {
                firstWord: word.firstWord,
                secondWord: word.secondWord,
                options: {
                    collection,
                    difficulty,
                    language,
                    repeat,
                },
            };
            const newState = prevState.map((el: Word) => {
                if (el === word) {
                    return newWord;
                } else {
                    return el;
                }
            });

            return newState;
        });
        setModal(false);
    };

    return (
        <>
            <Modal setModal={setModal} />
            <div className="editModal">
                <div className="content">
                    <div>
                        <div className="ddLabel">Коллекция:</div>
                        <Dropdown
                            className="option"
                            placeholder={
                                word.options.collection
                                    ? word.options.collection
                                    : "Коллекция"
                            }
                            selectedItem={collection}
                            setSelectedItem={setCollection}
                            height="35px"
                            bg="white"
                            items={categories?.collections}
                        />
                    </div>

                    <div>
                        <div className="ddLabel">Сложность:</div>
                        <Dropdown
                            className="option"
                            placeholder={
                                word.options.difficulty
                                    ? word.options.difficulty
                                    : "Язык"
                            }
                            selectedItem={difficulty}
                            setSelectedItem={setDifficulty}
                            height="35px"
                            bg="white"
                            items={categories?.difficulties}
                        />
                    </div>
                    <div>
                        <div className="ddLabel">Язык:</div>

                        <Dropdown
                            className="option"
                            placeholder={
                                word.options.language
                                    ? word.options.language
                                    : "Язык"
                            }
                            selectedItem={language}
                            setSelectedItem={setLanguage}
                            height="35px"
                            bg="white"
                            items={categories?.languages}
                        />
                    </div>
                    <div className="checkBoxDiv">
                        Интенсивное повторение
                        <label
                            htmlFor="repeatCheckbox"
                            className="checkBoxLabel"
                        >
                            <input
                                id="checkBox"
                                type="checkbox"
                                onChange={(e) =>
                                    e.target.checked
                                        ? setRepeat(e.target.checked)
                                        : setRepeat(null)
                                }
                                checked={repeat ? true : false}
                            />
                        </label>
                    </div>
                    <div className="saveButton" onClick={() => handleSave()}>
                        <Button>Сохранить</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;
