import "./styles/home.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import Input from "../components/Input";
import Button from "../components/Button";
import { Word } from "../type";
import Filters from "../components/Filters";

const Home = () => {
    const { words } = useContext(Context);
    const [counter, setCounter] = useState<number>(0);
    const [value, setValue] = useState("");
    const [filteredWords, setFilteredWords] = useState<Word[]>(words);
    // const [currentWord, setCurrentWord] = useState<Word | null | undefined>(
    //     filteredWords ? filteredWords[counter] : null
    // );

    useEffect(() => {
        //setCurrentWord(filteredWords[0]);
        setCounter(0);
    }, [filteredWords]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValue("");

        if (filteredWords[counter]?.secondWord === value) {
            setCounter((prevState: number) => prevState + 1);
        }
        // if (currentWord?.secondWord === value) {
        //     counter++;

        //     setCurrentWord(filteredWords[counter]);
        // }
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
                            {filteredWords[counter]?.firstWord}{" "}
                            {counter + 1 > filteredWords?.length
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
                            <Button
                                bg="#3538F1"
                                color="white"
                                className="leranButton"
                                type="submit"
                            >
                                Далее
                            </Button>

                            {/* <div className="checkBoxRepeat">
                            <div className="checkboxHeader">
                                Повторять слова:
                            </div>
                            <input
                                className="checkBox"
                                id="checkBox"
                                type="checkbox"
                            />
                        </div> */}
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="settingsHeaderDiv">
                    <div className="settingsHeader">Настройки</div>
                </div>
                <Filters
                    areFiltersShowed={true}
                    className=""
                    setFilteredWords={setFilteredWords}
                />
            </div>
        </div>
    );
};

export default Home;
