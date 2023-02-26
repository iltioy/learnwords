import "./styles/home.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import Input from "../components/Input";
import Button from "../components/Button";
import { Word } from "../type";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

const Home = () => {
    const { words } = useContext(Context);
    const [counter, setCounter] = useState<number>(0);
    const [value, setValue] = useState("");
    const [filteredWords, setFilteredWords] = useState<Word[]>(
        words ? words : []
    );
    const [wordsToUse, setWordsToUse] = useState<Word[]>(words ? words : []);
    const [areSettingsShowed, setAreSettingsShowed] = useState<boolean>(false);
    const [isRepeat, setIsRepeat] = useState<boolean>(false);
    const [correct, setCorrect] = useState<number>(0);

    useEffect(() => {
        setCounter(0);

        if (filteredWords) {
            shuffleArray(filteredWords);
        }
    }, [filteredWords, isRepeat]);

    function shuffleArray(array: Word[]) {
        var tempArray: Word[] = JSON.parse(JSON.stringify(array));
        for (var i = tempArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = tempArray[i];
            tempArray[i] = tempArray[j];
            tempArray[j] = temp;
        }
        console.log("first");

        setWordsToUse(tempArray);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValue("");

        if (
            wordsToUse[counter]?.secondWord.toLowerCase() ===
            value.toLowerCase()
        ) {
            setCounter((prevState: number) => prevState + 1);

            if (counter + 2 > wordsToUse.length && isRepeat) {
                setCounter(0);
                if (filteredWords) {
                    shuffleArray(filteredWords);
                }
            }

            setCorrect(1);
        } else {
            if (correct < 2) {
                setCorrect(2);
            } else {
                setCorrect((prevState: number) => {
                    return prevState + 1;
                });
            }
        }
    };

    const skipWord = () => {
        setValue("");

        setCounter((prevState: number) => prevState + 1);
        setCorrect(0);
        if (counter + 2 > wordsToUse.length && isRepeat) {
            setCounter(0);
            if (filteredWords) {
                shuffleArray(filteredWords);
            }
        }
    };
    return (
        <div className="homePage">
            <div className="mainLearner">
                <div className="mainLearnerOuter">
                    <div className="mainLearnerInner">
                        <div className="headerDiv">
                            Переводите слова на другой язык:
                        </div>
                        <div className="wordDiv">
                            {wordsToUse[counter]?.firstWord}
                            {counter + 1 > wordsToUse?.length
                                ? "Все слова переведены!"
                                : ""}
                        </div>

                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <Input
                                value={value}
                                setValue={setValue}
                                className="underlined"
                                placeholder="Перевод слова..."
                            />
                            <div className="flex row">
                                <Button
                                    bg="#3538F1"
                                    color="white"
                                    className="leranButton"
                                    type="submit"
                                >
                                    Далее
                                </Button>
                                <div onClick={() => skipWord()}>
                                    <Button
                                        className={`learnSkipButton ${
                                            correct < 5 ? "hidden" : ""
                                        }`}
                                    >
                                        Пропустить
                                    </Button>
                                </div>
                            </div>
                        </form>

                        <div
                            className={`${
                                correct === 0
                                    ? "hidden"
                                    : correct === 1
                                    ? "correct"
                                    : "incorrect"
                            }`}
                        >
                            {correct === 1
                                ? "Верно!"
                                : correct >= 2
                                ? "Неверно!"
                                : ""}
                        </div>

                        <div className="checkBoxRepeat">
                            <div className="checkboxHeader">
                                Повторять слова:
                            </div>
                            <input
                                className="checkBox"
                                id="checkBox"
                                type="checkbox"
                                onChange={(e) =>
                                    e.target.checked
                                        ? setIsRepeat(e.target.checked)
                                        : setIsRepeat(false)
                                }
                                checked={isRepeat ? true : false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainButtons">
                <div className="mainButtonsInner">
                    <div style={{ position: "relative" }}>
                        <div
                            className="outlineDiv"
                            onClick={() =>
                                setAreSettingsShowed(
                                    (prevState: boolean) => !prevState
                                )
                            }
                        >
                            <div className="settingsHeader">Настройки</div>
                        </div>
                        <Filters
                            areFiltersShowed={areSettingsShowed}
                            className="absolute"
                            setFilteredWords={setFilteredWords}
                        />
                    </div>
                    <div className="outlineDiv">
                        <Link to="/add" className="settingsLink">
                            Добавить слово
                        </Link>
                    </div>
                    <div className="outlineDiv">
                        <Link to="/edit" className="settingsLink">
                            Редактировать слова
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
