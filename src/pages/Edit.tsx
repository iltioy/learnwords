import "./styles/edit.css";
import { useEffect, useMemo, useState } from "react";
import Input from "../components/Input";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineEdit, AiOutlineArrowDown } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { Category, Word } from "../type";

import Filters from "../components/Filters";

interface Props {
    words: Word[];
    setWords: React.Dispatch<React.SetStateAction<Word[]>>;
    editWord: (word: Word) => void;
    createCategory: (category: string) => void;
    categories: Category;
}

const Edit: React.FC<Props> = ({ setWords, editWord, words }) => {
    const [search, setSeatch] = useState<string>("");
    const [page, setPage] = useState<number>(1);

    const [areFiltersShowed, setAreFiltersShowed] = useState<boolean>(false);

    const [filteredWords, setFilteredWords] = useState<Word[]>(words);

    console.log(page);
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

        // eslint-disable-next-line
    }, [inView]);

    console.log(areFiltersShowed);

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
                <div
                    className="filtersHeaderDiv"
                    onClick={() =>
                        setAreFiltersShowed((prevState) => !prevState)
                    }
                >
                    <div className="filtersHeader">Фильтры</div>
                    <div className="iconDiv">
                        <AiOutlineArrowDown className="icon" />
                    </div>
                </div>

                <Filters
                    setFilteredWords={setFilteredWords}
                    className={areFiltersShowed ? "" : "hidden"}
                    search={search}
                    areFiltersShowed={areFiltersShowed}
                />

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
                    // eslint-disable-next-line
                }, [words, filteredWords, page])}
            </div>
        </>
    );
};

export default Edit;
