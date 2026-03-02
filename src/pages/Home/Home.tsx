import { allGenres } from "../../utils/genres";
import styles from "./Home.module.css"
import banner from "../../assets/Banner Area.png"
import BooksRow from "../../components/BooksRow/BooksRow";


export default function Home() {
    

    return (
        <>
            <main className={styles.main}>
                <div className={styles.banner}>
                    <img src={banner} alt="Banner de Desconto" />
                </div>

                {allGenres.map((genre) => (
                    <BooksRow key={genre} genre={genre} />
                
                ))}
                

            
            </main>
        </>
    )
}