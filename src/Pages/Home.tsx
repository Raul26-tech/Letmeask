import illustrationImg from '../assets/images/illustration.svg'
import logoImg from "../assets/images/logo.svg"
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.css'

export function Home(){


    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="ilustração da page login"/>
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="div">
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Digite o código da sala'
                        />
                        <button type='submit'>
                            Entar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}