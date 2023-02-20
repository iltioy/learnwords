import "./styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import EditModal from "./components/Modals/EditModal";
import { Word } from "./type";
import CreateCategoryModal from "./components/Modals/CreateCategoryModal";

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

function App() {
    const [words, setWords] = useState<Word[]>(
        JSON.parse(localStorage.getItem("words")!)
    );

    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [isCreateCategoryModal, setIsCreateCatygoryModal] =
        useState<boolean>(true);

    useEffect(() => {
        localStorage.setItem("words", JSON.stringify(words));
    }, [words]);

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

    const invokeCreateCategoryModal = () => {
        setIsCreateCatygoryModal(true);
    };

    return (
        <>
            {isEditModal && (
                <EditModal
                    setModal={setIsEditModal}
                    word={editWord}
                    setWords={setWords}
                />
            )}

            {isCreateCategoryModal && (
                <CreateCategoryModal setModal={setIsCreateCatygoryModal} />
            )}

            <div className="navbar">as</div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/add"
                        element={<Add words={words} setWords={setWords} />}
                    />
                    <Route
                        path="/edit"
                        element={
                            <Edit
                                words={words}
                                setWords={setWords}
                                editWord={invokeEditModal}
                                createCategory={invokeCreateCategoryModal}
                            />
                        }
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
