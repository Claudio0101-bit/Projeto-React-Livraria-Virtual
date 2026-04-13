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

    if (isPending) {
        return <h1 className={styles.pendingMsg}>Carregando informações do livro...</h1>
    }

    else if (isError || !book) {

        const status = (error as any)?.response?.status;
        switch (status){
            case 404:
                return (
                    <div className={styles.errorContainer}>
                        <h1 className={styles.errorMsg}>Error 404 - Not Found</h1>
                        <h2 className={styles.errorMsg}>O livro que você está procurando não foi encontrado.</h2>
                        <button onClick={BackClick} className={styles.backBtn}>
                            <img src={arrowSyboml} alt="Seta para voltar" />
                            Voltar para Home
                        </button>
                    </div>
                );
                
            case 401:
                return (
                    <div className={styles.errorContainer}>
                        <h1 className={styles.errorMsg}>Error 401 - Unathorized</h1>
                        <h2 className={styles.errorMsg}>Você não tem permissão para acessar este recurso.</h2>
                        <button onClick={BackClick} className={styles.backBtn}>
                            <img src={arrowSyboml} alt="Seta para voltar" />
                            Voltar para Home
                        </button>
                    </div>
                );
            case 400:
                return (
                    <div className={styles.errorContainer}>
                        <h1 className={styles.errorMsg}>Error 400 - Bad Request</h1>
                        <h2 className={styles.errorMsg}>Há um problema com a sua solicitação.</h2>
                        <button onClick={BackClick} className={styles.backBtn}>
                            <img src={arrowSyboml} alt="Seta para voltar" />
                            Voltar para Home
                        </button>
                    </div>
                );
            case 500:
                return (
                    <div className={styles.errorContainer}>
                        <h1 className={styles.errorMsg}>Error 500 - Internal Server Error</h1>
                        <h2 className={styles.errorMsg}>Há um problema com o servidor.</h2>
                        <button onClick={BackClick} className={styles.backBtn}>
                            <img src={arrowSyboml} alt="Seta para voltar" />
                            Voltar para Home
                        </button>
                    </div>
                );
            default:
                return (
                    <div className={styles.errorContainer}>
                        <h1 className={styles.errorMsg}>Unknown Error</h1>
                        <h2 className={styles.errorMsg}>Erro desconhecido, tente novamente mais tarde.</h2>
                        <button onClick={BackClick} className={styles.backBtn}>
                            <img src={arrowSyboml} alt="Seta para voltar" />
                            Voltar para Home
                        </button>
                    </div>
                );
        }
    }

    return (
        <>
            <section className={styles.bookSection}>
                
                <div className={styles.titleDetails}>
                    <button onClick={BackClick}>
                        <img src={arrowSyboml} alt="Seta para voltar" />
                        <h3>Detalhes do Livro</h3>
                    </button>
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