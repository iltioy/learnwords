import { useState, useContext, useMemo, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Context } from "../Context";
import { Word } from "../type";
import Dropdown from "./Dropdown";
import { StyledFilters } from "./StyledFilters";

interface Props {
    search?: string;
    setFilteredWords: React.Dispatch<React.SetStateAction<Word[]>>;
    className: string;
    areFiltersShowed: boolean;
}

const Filters: React.FC<Props> = ({
    search,
    setFilteredWords,
    className,
    areFiltersShowed,
}) => {
    const [collection, setCollection] = useState<string | null>(null);
    const [difficulty, setDifficulty] = useState<string | null>(null);
    const [language, setLanguage] = useState<string | null>(null);
    const [repeat, setRepeat] = useState<boolean | null>(null);

    const {
        invokeCreateCategoryModal: createCategory,
        words,
        categories,
    } = useContext(Context);

    const handleCreateCategory = (category: string) => {
        createCategory(category);
    };

    const resetFilters = () => {
        setCollection(null);
        setDifficulty(null);
        setLanguage(null);
        setRepeat(null);
    };

    const newFilteredWords = useMemo(() => {
        return words?.filter((word: Word) => {
            if (search) {
                return (
                    (word.firstWord
                        .toLowerCase()
                        .includes(search?.toLowerCase()) ||
                        word.secondWord
                            .toLowerCase()
                            .includes(search?.toLowerCase())) &&
                    (word.options.collection === collection ||
                        collection === null) &&
                    (word.options.difficulty === difficulty ||
                        difficulty === null) &&
                    (word.options.language === language || language === null) &&
                    (word.options.repeat === repeat || repeat === null)
                );
            } else {
                return (
                    (word.options.collection === collection ||
                        collection === null) &&
                    (word.options.difficulty === difficulty ||
                        difficulty === null) &&
                    (word.options.language === language || language === null) &&
                    (word.options.repeat === repeat || repeat === null)
                );
            }
        });
    }, [words, search, collection, difficulty, language, repeat]);

    useEffect(() => {
        setFilteredWords(newFilteredWords);
    }, [newFilteredWords]);

    return (
        <>
            <StyledFilters
                className={`filters ${className ? className : ""}`}
                areFiltersShowed={areFiltersShowed}
            >
                <div className="filter flex column">
                    <div className="filterHeader">Колекция:</div>
                    <Dropdown
                        className="filterOption"
                        placeholder="Не выбрано"
                        selectedItem={collection}
                        setSelectedItem={setCollection}
                        height="25px"
                        bg="#e8e5e5"
                        items={categories?.collections}
                    />
                    <div
                        className="filterAdd"
                        onClick={() => handleCreateCategory("коллекция")}
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
                        items={categories?.difficulties}
                    />
                    <div
                        className="filterAdd"
                        onClick={() => handleCreateCategory("сложность")}
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
                        items={categories?.languages}
                    />
                    <div
                        className="filterAdd"
                        onClick={() => handleCreateCategory("язык")}
                    >
                        <AiOutlinePlus />
                        создать новую
                    </div>
                </div>
                <div
                    className="filter flex column"
                    style={{ marginTop: "5px" }}
                >
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
                    <div className="reset" onClick={() => resetFilters()}>
                        cбрость фильтры
                    </div>
                </div>
            </StyledFilters>
        </>
    );
};

export default Filters;
