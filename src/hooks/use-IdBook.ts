import { library } from "../services/LibraryService";
import { useQuery } from "@tanstack/react-query";
import type { IdBookState } from "../types/state";


export function useIdBook(id: number): IdBookState {
    const { data,error,isPending,isSuccess,isError,refetch} = useQuery({
        queryKey:['livro',id],
        
        queryFn: async () => library.getBookById(id).then((res) => res.data)
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

