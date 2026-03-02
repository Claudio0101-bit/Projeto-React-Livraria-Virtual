import styles from "./BooksRow.module.css"
import BookItem from "../BookItem/BookItem.tsx"
import type { Genre } from "../../types/book.ts"
import { useHomeBooks } from "../../hooks/use-HomeBooks.ts"
import { useNavigate } from "react-router-dom"



export default function BooksRow({ genre }: Genre) {

    const navigate = useNavigate()

    function SeeMoreClick() {
        navigate(`genres/${genre}`)
    }
    
    const {data: books, isPending, isError} = useHomeBooks(genre)
    console.log(books)

    return (
        <>
            <section className={styles.bookSection}>
                    
                    <div className={styles.titleSection}>
                        
                        <h3>{genre}</h3>
                        <button onClick={SeeMoreClick}>Ver mais</button>
                    
                    </div>
                    
                    <ul className={styles.bookList}>

                        {/* Mensagens de Carregamento e de Erro */}
                        {isPending && <h2 className={styles.pendingMsg}>Buscando Livros...</h2>}
                        {isError && <h2 className={styles.errorMsg}>Erro ao carregar livros</h2>}

                        
                        {!isPending && !isError && books! && books.length > 0 ? (
                                
                                books?.map((book) =>
                                
                                    <BookItem 
                                        key={book.id}
                                        {...book}
                                    />
                                )) : // else
                                
                                (
                                    (!isError && !isPending) && (
                                    <h2 className={styles.errorMsg}>Erro ao Carregar Livros de {genre}</h2>)
                                )

                            
                        }
                    </ul>
            
            </section>
        </>
    )
}