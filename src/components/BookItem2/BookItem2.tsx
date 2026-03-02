import { Link } from "react-router-dom"
import type { Book } from "../../types/book"
import { formatPrice } from "../../utils/formatPrice"
import styles from "./BookItem2.module.css"


export default function BookItem2(bookProps: Book) {

    

    return (
        <>
            <Link className={styles.link} to={`/home/books/${bookProps.id}`}>
                <li className={styles.bookItem}>
                    
                    <figure>
                        
                        <img src={bookProps.capa} alt="Capa de Livro" />
                    
                    </figure>
                    
                    <div className={styles.bookInfo}>
                        
                        <div className={styles.titleBook}>
                                        
                            <h3>{bookProps.titulo}</h3>
                                    
                        </div>

                        
                        <div className={styles.priceAuthorText}>
                            
                            <h4>{bookProps.autor}</h4>
                            
                            <div className={styles.priceText}>
                                <p>R$ {formatPrice(bookProps.preco)}</p>
                            </div>
                        
                        </div>
                    
                    </div>
                
                </li>
            </Link>
        </>
    )
}