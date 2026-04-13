import { library } from "../services/LibraryService";
import type { GenreBooksState } from "../types/state";
import { useQuery } from "@tanstack/react-query";

export function useGenreBooks(genre: string, title?: string): GenreBooksState {
    const { data,error,isPending, isSuccess,isError,refetch} = useQuery({
        
        queryKey:['books-genre',genre, title],
        
        queryFn: async ()=> library.getAllBooksByGenreOrSearch(genre, title).then((res) => res.data),
        
        refetchInterval: 1000 * 60 * 10
    
    });
    
    return (
        {
            data,
            error: error ?? undefined,
            isPending,
            isError,
            isSuccess,
            execute:() => refetch()
        }

    )
}