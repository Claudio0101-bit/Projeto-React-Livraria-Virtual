import { formatPrice } from "../../utils/formatPrice"
import styles from "./BookPage.module.css"
import arrowSyboml from "../../assets/arrow.png"
import { useIdBook } from "../../hooks/use-IdBook";
import { useNavigate, useParams } from "react-router-dom";

export default function BookPage() {

    const navigate = useNavigate();

    function BackClick(){
        navigate('/home')
    }

    const { bookId } = useParams()
    
    const { data: book, isPending, isError, error} = useIdBook(Number(bookId))

    // if(isPending) {
    //     return (
    //         <h1 className={styles.pendingMsg}>Carregando Livro...</h1>
    //     )
    // }

    // else if(isError) {
        
    //     // const status = Number((error as any)?.response?.status);
    //     // let errorText: string

    //     // switch (status) {
    //     //     case 404:
    //     //         errorText = "O Livro Requisitado não foi Encontrado."
    //     //     case 401:
    //     //         errorText = "Você não tem Permissão para acessar esses Dados."
    //     //     case 400:
    //     //         errorText = "Não foi possível realizar a Busca."
    //     //     case 500:
    //     //         errorText = "Erro interno no servidor. Tente novamente mais tarde"
    //     //     default:
    //     //         errorText = "Erro Desconhido!"
    //     // }

    //     return (
    //         <h1 className={styles.errorMsg}>Algo deu Errado</h1>
    //     )
    // }

    return (
        <>
            <section className={styles.bookSection}>
                
                <div className={styles.titleDetails}>
                    <button onClick={BackClick}>
                        <img src={arrowSyboml} alt="Seta para voltar" />
                    </button>
                    <h3>Detalhes do Livro</h3>
                </div>
                
                <div className={styles.bookContainer}>
                    
                    <div className={styles.coverDiv}>
                        <figure>
                            <img src={book?.capa} alt="Capa do Livro" />
                        </figure>
                    </div>
                    
                    <div className={styles.bookInfo}>
                        <div className={styles.titleAuthor}>
                            <h2>{book?.titulo}</h2>
                            <h3>{book?.autor}</h3>
                        </div>
                        <div className={styles.sinopse}>
                            <h4>Sinopse</h4>
                            <p>{book?.sinopse}</p>
                        </div>
                    
                    </div>
                
                </div>
                
                <div className={styles.btnDiv}>

                    <button>
                        <p className={styles.priceText}>R$ {formatPrice(book?.preco)}</p>
                        <p className={styles.addCartText}>Adicionar ao Carrinho</p>
                    </button>
                
                </div>
            
            </section>
        </>
    )
}