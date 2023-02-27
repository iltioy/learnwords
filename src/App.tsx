import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import EditModal from "./components/Modals/EditModal";
import { Word } from "./type";
import CreateCategoryModal from "./components/Modals/CreateCategoryModal";
import { Context } from "./Context";
import { Category } from "./type";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Theme } from "./defaultTheme";
import { themes } from "./defaultTheme";

let editWord: Word = {
    firstWord: "",
    secondWord: "",
    options: {
        collection: null,
        difficulty: null,
        language: null,
        repeat: null,
    },
};

let createCategory = "";

function App() {
    // theme
    const [theme, setTheme] = useState<Theme>(themes.dark);

    // words + collections
    const [words, setWords] = useState<Word[]>(
        JSON.parse(localStorage.getItem("words")!)
    );
    useEffect(() => {
        if (words !== undefined) {
            localStorage.setItem("words", JSON.stringify(words));
        }
    }, [words]);

    // categories
    const [categories, setCategories] = useState<Category>(
        JSON.parse(localStorage.getItem("categories")!)
    );

    useEffect(() => {
        if (categories !== undefined) {
            localStorage.setItem("categories", JSON.stringify(categories));
        }
    }, [categories]);

    // modals
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [isCreateCategoryModal, setIsCreateCatygoryModal] =
        useState<boolean>(false);

    useEffect(() => {
        if (isEditModal) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isEditModal]);

    const invokeEditModal = (word: Word) => {
        editWord = word;
        setIsEditModal(true);
    };

    const invokeCreateCategoryModal = (category: string) => {
        createCategory = category;
        setIsCreateCatygoryModal(true);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                {isEditModal && (
                    <EditModal
                        setModal={setIsEditModal}
                        word={editWord}
                        setWords={setWords}
                        categories={categories}
                    />
                )}

                {isCreateCategoryModal && (
                    <CreateCategoryModal
                        setModal={setIsCreateCatygoryModal}
                        category={createCategory}
                        setCategories={setCategories}
                    />
                )}

                <Navbar theme={theme} setTheme={setTheme} />
                <div className="container">
                    <Context.Provider
                        value={{ invokeCreateCategoryModal, words, categories }}
                    >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/add"
                                element={
                                    <Add
                                        words={words}
                                        setWords={setWords}
                                        categories={categories}
                                    />
                                }
                            />
                            <Route
                                path="/edit"
                                element={
                                    <Edit
                                        words={words}
                                        setWords={setWords}
                                        editWord={invokeEditModal}
                                        createCategory={
                                            invokeCreateCategoryModal
                                        }
                                        categories={categories}
                                    />
                                }
                            />
                        </Routes>
                    </Context.Provider>
                </div>
                <GlobalStyle />
            </ThemeProvider>
        </>
    );
}

export default App;
