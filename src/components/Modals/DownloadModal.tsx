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

interface Data {
    categories?: {
        collections?: any;
        difficulties?: any;
        languages?: any;
    };
    profileName?: String;
    words?: any;
}

interface CollectionProps {
    items?: string[];
    title: string;
    type?: string;
    words?: Word[];
}

const Collection: React.FC<CollectionProps> = ({
    items,
    title,
    type,
    words,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="listItems">
                <div
                    className="dowanloadTitle"
                    onClick={() => setIsOpen((prevState) => !prevState)}
                >
                    {title}
                </div>

                <div className={`${!isOpen ? "hidden" : ""}`}>
                    {words
                        ? words.map((el: Word, index: number) => (
                              <div className="downloadItem" key={index}>
                                  -
                                  <div className="firstWord">
                                      {el.firstWord}
                                  </div>
                                  <div className="secondWord">
                                      {el.secondWord}
                                  </div>
                              </div>
                          ))
                        : items
                        ? items.map((el: string, index: number) => (
                              <div className="downloadItem" key={index}>
                                  - {el}
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
};

const DownloadModal: React.FC<Props> = ({
    setModal,
    categories,
    setCategories,
    words,
    setWords,
}) => {
    const [profileName, setProfileName] = useState("");
    const [checkData, setCheckData] = useState(false);
    const [data, setData] = useState<Data>({});

    const handleSave = () => {
        console.log(data);

        if (data.categories) {
            setCategories(() => {
                let collections = [];
                let difficulties = [];
                let languages = [];
                if (data.categories?.collections) {
                    collections = data.categories.collections;
                }
                if (data.categories?.difficulties) {
                    difficulties = data.categories.difficulties;
                }
                if (data.categories?.languages) {
                    languages = data.categories.languages;
                }

                const newState = {
                    collections,
                    difficulties,
                    languages,
                };

                return newState;
            });
        }

        if (data.words) {
            setWords(data.words);
        }
    };

    const handleSend = async () => {
        if (profileName !== "") {
            try {
                const res = await axios.post(
                    "http://62.113.108.76:5000/api/v1/words/create",
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

    const handleGet = async () => {
        if (profileName !== "") {
            try {
                const res = await axios.get(
                    `http://62.113.108.76:5000/api/v1/words/get/${profileName}`
                );

                if (res.data) {
                    setData(res.data);
                    setCheckData(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <Modal setModal={setModal} />
            <StyledModal height={`${checkData ? "450px" : "400px"}`}>
                <div
                    className={`content ${checkData ? "downloadContent" : ""}`}
                >
                    {!checkData ? (
                        <>
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
                                    onClick={() => handleGet()}
                                >
                                    Получить
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="preshow">
                                <Collection
                                    title={"Слова"}
                                    words={data.words}
                                />

                                <Collection
                                    title={"Коллекции"}
                                    items={data.categories?.collections}
                                />

                                <Collection
                                    title={"Уровни сложности"}
                                    items={data.categories?.difficulties}
                                />

                                <Collection
                                    title={"Языки"}
                                    items={data.categories?.languages}
                                />
                            </div>
                        </>
                    )}
                </div>

                {checkData ? (
                    <div className="saveDownloadButtons">
                        <Button
                            bg="#018001"
                            color="white"
                            onClick={() => handleSave()}
                        >
                            Сохранить
                        </Button>
                        <Button
                            bg="#C71E13"
                            color="white"
                            className="cancelButton"
                            onClick={() => setCheckData(false)}
                        >
                            Отмена
                        </Button>
                    </div>
                ) : null}
            </StyledModal>
        </>
    );
};

export default DownloadModal;
