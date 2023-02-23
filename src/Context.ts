import { createContext } from "react";
import { Category, Word } from "./type";

interface Props {
    invokeCreateCategoryModal: (category: string) => void;
    words: Word[];
    categories: Category;
}

const defaultValues: Props = {
    invokeCreateCategoryModal: (category: string) => {},
    words: [],
    categories: {
        collections: [],
        difficulties: [],
        languages: [],
    },
};

export const Context = createContext(defaultValues);
