import { library } from "../services/LibraryService";
import type { HomeBooksState } from "../types/state";
import { useQuery } from "@tanstack/react-query";

export function useHomeBooks(genre: string): HomeBooksState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        
        queryKey:['books-home', genre],
        
        queryFn: async () => library.get4BooksByGenre(4, genre).then((res) => res.data),

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