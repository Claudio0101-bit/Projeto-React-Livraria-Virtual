import type { Book } from "../types/book";
import type { HttpResponse } from "../types/http";
import { BaseService } from "./base-service";
import { httpAdapter } from "../lib/adapter";


class LibraryService extends BaseService {
    public async get4BooksByGenre(limit: number = 4, genre: string): Promise<HttpResponse<Book[]>> {
        
        return this.execute<void, Book[]>({
            method: "GET",
            url: "/livros",
            params: {
                genero: genre,
                _limit: String(limit),
            }
        })
    }

    public async getBookById(id: number): Promise<HttpResponse<Book>> {

        return this.execute<void, Book>({
            method: "GET",
            url: `/livros/${id}`
        })
    }

    public async getAllBooksByGenreOrSearch(genre: string, title?: string): Promise<HttpResponse<Book[]>>{
        
        return this.execute<void, Book[]>({
            method: "GET",
            url: '/livros',
            params: {
            genero: genre,
            ...(title && { titulo_like: title } )
        }
        })
        
    }
}

export const library = new LibraryService(httpAdapter)