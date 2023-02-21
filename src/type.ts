export interface Word {
    firstWord: string;
    secondWord: string;
    options: Options;
}

export interface Options {
    added?: Date | null;
    collection: string | null;
    difficulty: string | null;
    language: string | null;
    repeat: boolean | null;
}

export interface Category {
    collections: string[];
    difficulties: string[];
    languages: string[];
}
