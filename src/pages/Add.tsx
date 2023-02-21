import "./styles/add.css";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { Category, Word } from "../type";

interface Props {
    words: Word[];
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
    categories: Category;
}

const Add: React.FC<Props> = ({ words, setWords, categories }) => {
    const [firstWord, setFirstWord] = useState<string>("");
    const [secondWord, setSecondWord] = useState<string>("");

    const [collection, setCoolection] = useState<string | null>(null);
    const [repeat, setRepeat] = useState<boolean | null>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);

    const handeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstWord.trim() !== "" && secondWord.trim() !== "") {
            setWords((prevState: any) => {
                if (!prevState) {
                    return [
                        {
                            firstWord,
                            secondWord,
                            options: {
                                collection,
                                repeat,
                                language,
                                difficulty,
                                added: Date.now(),
                            },
                        },
                    ];
                }
                return [
                    {
                        firstWord,
                        secondWord,
                        options: {
                            collection,
                            repeat,
                            language,
                            difficulty,
                            added: Date.now(),
                        },
                    },
                    ...prevState!,
                ];
            });

            setSecondWord("");
            setFirstWord("");
        }
    };

    return (
        <div className="addPage">
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
                        items={categories?.collections}
                    />

                    <div className="option">
                        Интенсивное повторение
                        <label
                            htmlFor="repeatCheckbox"
                            className="checkbox-google"
                        >
                            <input
                                id="repeatCheckbox"
                                type="checkbox"
                                onChange={(e) => setRepeat(e.target.checked)}
                            />
                            <span className="checbox-google-switch"></span>
                        </label>
                    </div>

                    <Dropdown
                        className="option"
                        placeholder="Язык"
                        selectedItem={language}
                        setSelectedItem={setLanguage}
                        items={categories?.languages}
                    />
                    <Dropdown
                        className="option"
                        placeholder="Сложность"
                        selectedItem={difficulty}
                        setSelectedItem={setDifficulty}
                        items={categories?.difficulties}
                    />
                </div>
            </div>
        </div>
    );
};

export default Add;
