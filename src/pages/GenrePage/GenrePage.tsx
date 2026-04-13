import styles from "./GenrePage.module.css"
import arrowSyboml from "../../assets/arrow.png"
import searchSyboml from "../../assets/Search.png" 
import { useGenreBooks } from "../../hooks/use-GenreBooks"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import BookItem2 from "../../components/BookItem2/BookItem2"

export default function GenrePage() {

    const [title, setTitle] = useState<string>('')
    const [search, setSearch] = useState<string>('')

    const navigete = useNavigate()

    function BackClick() {
        navigete("/home")
    }

    function handleSubmitSearch(e: React.FormEvent<HTMLFormElement>){
        
        e.preventDefault();
        
        setSearch(title)
    }

    function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>){
        
        e.preventDefault();
        
        setTitle(e.target.value)
    }

    const { genre } = useParams()

    const { data: books, isPending, isError } = useGenreBooks(genre || '', search) 

    return (
        
        <>

            <section className={styles.genreSection}>

                <form className={styles.searchBar} onSubmit={handleSubmitSearch}>
                        <button type="submit">
                            <img src={searchSyboml} alt="Símbolo de Lupa para Busca" />
                        </button>
                        
                        <input type="text" name="titleBook" className={styles.searchInput} placeholder="Pesquisar por título" value={title}
                        onChange={handleChangeTitle} />
                </form>
                
                
                <div className={styles.titleGenre}>
                    <button onClick={BackClick}>
                        <img src={arrowSyboml} alt="Seta para voltar" />
                        <h3>{genre}</h3>
                    </button>
                </div>

                
                <section className={styles.bookSection}>
                    <ul className={styles.bookList}>
                        
                        {/* Mensagens de Carregamento e de Erro */}
                        {isPending && <h2 className={styles.pendingMsg}>Carregando Todos os Livros de {genre}...</h2>}
                        {isError && <h2 className={styles.errorMsg}>Erro ao Carregar Livros de {genre}</h2>}
                        
                    
                        {!isPending && !isError && books! && books.length > 0 ? (
                            
                            books?.map((book) =>
                            
                                <BookItem2 
                                    key={book.id}
                                    {...book}
                                />
                            )) : // else
                            
                            (
                                (!isError && !isPending && title === '' ? (<h2 className={styles.errorMsg}>Erro ao Carregar Livros de {genre}</h2>) : (<h2 className={styles.errorMsg}>Livro Não Encontrado</h2>))
                            )

                        
                        }
                            
                    </ul>
                </section>
            </section>
            

        </>
    )
}