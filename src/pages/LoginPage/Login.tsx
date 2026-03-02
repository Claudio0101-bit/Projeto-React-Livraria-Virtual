import { useForm } from "react-hook-form"
import styles from "./Login.module.css"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"


const userSchema = z.object({
    
    email: z.string().nonempty('Seu e-mail não pode ser vazio.').refine(value => z.string().email().safeParse(value).success, {message: 'O e-mail não é válido.'}),
    
    password: z.string().nonempty('Sua senha não pode ser vazia.').min(6, 'Sua senha deve conter ao menos 6 caracteres.')
})

type User = z.infer<typeof userSchema>

export default function LoginPage() {

    const navigate = useNavigate()

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}, setError} = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    async function verifyUser(data: User) {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(data)
            navigate("/home")
            
        } catch {
            setError('root', {
                message: 'Erro ao entrar com Usuário.'
            })
        }
        reset()
    }

    return (
        <>
            <main className={styles.main}>
                
                <figure className={styles.pictureSide}>
                    
                    <img src="src/assets/bancada_livros.png" alt="Imagem de uma Bancada de Livros" />
                
                </figure>
                
                <section className={styles.loginSide}>
                    
                    <figure className={styles.logo}>
                        
                        <img src="src/assets/logo.png" alt="Logo da Livraria Virtual" />
                    
                    </figure>
                    
                    <form onSubmit={handleSubmit(verifyUser)} className={styles.form}>
                        <div className={styles.welcomeDiv}>
                            <h3 className={styles.welcomeText}>Bem vindo(a)!</h3>
                            
                            <h1 className={styles.entryText}>Entre na sua conta</h1>
                        </div>
                        
                        <div className={styles.inputsDiv}>
                            <div className={styles.eachInput}>
                                <label htmlFor="email" className={styles.labelText}>E-mail</label>
                                <input type="email" id="email" placeholder="Digite aqui seu e-mail" {...register('email')}/>
                                {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
                            </div>
                            
                            <div className={styles.eachInput}>
                                <label htmlFor="password" className={styles.labelText}>Senha</label>
                                <input type="password" id="password" placeholder="Digite aqui sua senha" {...register('password')}/>
                                {errors.password && <span className={styles.errorMsg}>{errors.password.message}</span>}
                            </div>
                        </div>

                        <div className={styles.buttonsDiv}>
                            <button disabled={isSubmitting} className={styles.entryBtn}>{isSubmitting ? 'Carregando...': 'Entrar'}</button>

                            {errors.root && <span className={styles.errorMsg}>{errors.root.message}</span>}

                            <button className={styles.registerBtn}>Cadastrar-se</button>
                        </div>

                    </form>
                
                </section>
            
            </main>
        </>
    )
}