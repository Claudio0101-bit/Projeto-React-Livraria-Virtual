import type { Book } from "./book";


export interface ApiHookState<TPayload, TData>{
    data?:TData;
    error?: Error;
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    execute: (payload: TPayload) => void;
    reset?: ()=> void;
}

export interface ApiHookState2<TPayload, TData>{
    data?:TData;
    error?: Error;
    isPending:boolean;
    isSuccess:boolean;
    isError:boolean;
    execute: (payload: TPayload) => void;
    reset?: ()=> void;
}

export type HomeBooksState = ApiHookState<void,Book[]>;
export type IdBookState = ApiHookState<number,Book>;
export type GenreBooksState = ApiHookState<string,Book[]>;