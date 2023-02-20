import "./styles/edit.css";
import { useEffect, useMemo, useState } from "react";
import Input from "../components/Input";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { Word } from "../type";
import Dropdown from "../components/Dropdown";

interface Props {
    words: Word[];
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
    editWord: (word: Word) => void;
    createCategory: () => void;
}

const Edit: React.FC<Props> = ({
    words,
    setWords,
    editWord,
    createCategory,
}) => {
    const [search, setSeatch] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    // const [isSettingShowed, setIsSettingShowed] = useState<boolean>(false);
    const [collection, setCollection] = useState<string | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const [repeat, setRepeat] = useState<boolean | null>(null);

    const filteredWords = useMemo(() => {
        return words.filter((word: Word) => {
            return (
                (word.firstWord.toLowerCase().includes(search.toLowerCase()) ||
                    word.secondWord
                        .toLowerCase()
                        .includes(search.toLowerCase())) &&
                (word.options.collection === collection ||
                    collection === null) &&
                (word.options.difficulty === difficulty ||
                    difficulty === null) &&
                (word.options.language === language || language === null) &&
                (word.options.repeat === repeat || repeat === null)
            );
        });
    }, [words, search, collection, difficulty, language, repeat]);

    const { ref, inView } = useInView();

    const handleDelete = (word: Word) => {
        setWords((prevState: any) => {
            return prevState.filter((el: Word) => el !== word);
        });
    };

    useEffect(() => {
        if (inView && words.length > page * 10) {
            setPage((prevState) => prevState + 1);
        }
    }, [inView]);

    return (
        <>
            <div className="editPage">
                <div style={{ fontSize: "20px" }}>
                    <div
                        className="flex"
                        style={{ justifyContent: "space-between" }}
                    >
                        <div>Поиск слов</div>
                    </div>
                    <Input setValue={setSeatch} value={search} forLabel="4" />
                </div>
                <div className="filtersHeader">Фильтры</div>
                <div className="filters">
                    <div className="filter flex column">
                        <div className="filterHeader">Колекция:</div>
                        <Dropdown
                            className="filterOption"
                            placeholder="Не выбрано"
                            selectedItem={collection}
                            setSelectedItem={setCollection}
                            height="25px"
                            bg="#e8e5e5"
                        />
                        <div
                            className="filterAdd"
                            onClick={() => createCategory()}
                        >
                            <AiOutlinePlus />
                            создать новую
                        </div>
                    </div>
                    <div className="filter flex column">
                        <div className="filterHeader">Сложность:</div>
                        <Dropdown
                            className="filterOption"
                            placeholder="Не выбрано"
                            selectedItem={difficulty}
                            setSelectedItem={setDifficulty}
                            height="25px"
                            bg="#e8e5e5"
                        />
                        <div
                            className="filterAdd"
                            onClick={() => createCategory()}
                        >
                            <AiOutlinePlus />
                            создать новую
                        </div>
                    </div>
                    <div className="filter flex column">
                        <div className="filterHeader">Язык:</div>
                        <Dropdown
                            className="filterOption"
                            placeholder="Не выбрано"
                            selectedItem={language}
                            setSelectedItem={setLanguage}
                            height="25px"
                            bg="#e8e5e5"
                        />
                        <div
                            className="filterAdd"
                            onClick={() => createCategory()}
                        >
                            <AiOutlinePlus />
                            создать новую
                        </div>
                    </div>
                    <div className="filter flex row">
                        <div className="checkBoxFilter">
                            <div className="filterHeader">Повторение:</div>
                            <input
                                className="checkBox"
                                id="checkBox"
                                type="checkbox"
                                onChange={(e) =>
                                    e.target.checked
                                        ? setRepeat(e.target.checked)
                                        : setRepeat(null)
                                }
                                checked={repeat ? true : false}
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="titles">
                    <div className="title">Слово</div>
                    <div className="title">Перевод</div>
                </div>
                {useMemo(() => {
                    return words ? (
                        <div className="showedWords">
                            {filteredWords
                                .slice(0, 10 * page)
                                .map((word: Word, index: number) => {
                                    return (
                                        <div
                                            className={`words ${
                                                index === 0 ? "firstWord" : ""
                                            } ${
                                                words.length === 1
                                                    ? "onlyWord"
                                                    : ""
                                            }`}
                                            key={index}
                                        >
                                            <div className="word">
                                                {word.firstWord}
                                            </div>
                                            <div className="word">
                                                {word.secondWord}
                                            </div>
                                            <div className="icons">
                                                <div
                                                    className="editIconDiv"
                                                    onClick={() =>
                                                        editWord(word)
                                                    }
                                                >
                                                    <AiOutlineEdit className="editIcon" />
                                                </div>
                                                <div
                                                    className="deleteIconDiv"
                                                    onClick={() =>
                                                        handleDelete(word)
                                                    }
                                                >
                                                    <RxCross1 className="deleteIcon" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            <div ref={ref} className="viewRef"></div>
                        </div>
                    ) : (
                        <div>Слова не найдены</div>
                    );
                }, [
                    words,
                    filteredWords,
                    page,
                    collection,
                    difficulty,
                    language,
                    repeat,
                ])}
            </div>
        </>
    );
};

export default Edit;
