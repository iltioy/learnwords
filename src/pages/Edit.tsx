import "./edit.css";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

interface Props {
    words: any;
    setWords: React.Dispatch<any>;
}

const Edit: React.FC<Props> = ({ words, setWords }) => {
    const [firstWord, setFirstWord] = useState<string>("");
    const [secondWord, setSecondWord] = useState<string>("");

    const [collection, setCoolection] = useState<string | null>(null);
    const [repeat, setRepeat] = useState<string | null>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstWord.trim() !== "" && secondWord.trim() !== "") {
            setWords((prevState: any) => {
                if (!prevState) {
                    return [{ firstWord, secondWord }];
                }
                return [...prevState!, { firstWord, secondWord }];
            });

            localStorage.setItem("words", JSON.stringify(words));
            setSecondWord("");
            setFirstWord("");
        }
    };

    return (
        <div className="editPage">
            <form action="" onSubmit={(e) => handeSubmit(e)}>
                <Input
                    placeholder="Первое слово"
                    value={firstWord}
                    setValue={setFirstWord}
                />
                <Input
                    placeholder="Второе слово"
                    value={secondWord}
                    setValue={setSecondWord}
                />
                <div style={{ marginTop: "15px" }}>
                    <Button type="submit" width="120px">
                        Сохранить
                    </Button>
                </div>
            </form>

            <div className="optionsDiv">
                <div style={{ fontSize: "24px" }}>Добавить параметры</div>
                <div className="options">
                    <Dropdown
                        className="option"
                        placeholder="Коллекция"
                        selectedItem={collection}
                        setSelectedItem={setCoolection}
                    />

                    <div className="option">
                        Интенсивное повторение{" "}
                        <label htmlFor="" className="checkbox-google">
                            <input type="checkbox" checked disabled />
                            <span className="checbox-google-switch"></span>
                        </label>
                    </div>

                    <Dropdown
                        className="option"
                        placeholder="Язык"
                        selectedItem={language}
                        setSelectedItem={setLanguage}
                    />
                    <Dropdown
                        className="option"
                        placeholder="Сложность"
                        selectedItem={difficulty}
                        setSelectedItem={setDifficulty}
                    />
                </div>
            </div>
        </div>
    );
};

export default Edit;
