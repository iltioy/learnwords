import { createContext } from "react";
import { Word } from "./type";

interface Props {
    words: Word[];
}

const defaultValues: Props = {
    words: [],
};

export const Context = createContext(defaultValues);
