import styles from "./Header.module.css"
import logo from "../../assets/logo.png"
import userSyboml from "../../assets/user.svg"
import cartSyboml from "../../assets/shopping-cart.svg"
import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate()

    function handleLogin() {
        navigate("/")
    }


    return (
        <>
            <header className={styles.header}>
                <figure className={styles.logo}>
                    <img src={logo} alt="Logo da Livraria Virtual" />
                </figure>
                <nav className={styles.nav}>

                    <button className={styles.buttons} onClick={handleLogin}>
                        <img src={userSyboml} alt="Símbolo de Usuário" />
                    </button>
                    
                    <button className={styles.buttons}>
                        <img src={cartSyboml} alt="Símbolo de Carrinho de Compras" />
                    </button>
                                       
                </nav>
            </header>

        </>
    )
}