/* eslint-disable react/jsx-no-target-blank */
import styles from './Home.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
    return (
        <div className={styles.home_container}>
            <h1>Bem-vindo ao meu projeto <span>Main Portfolio</span></h1>
            <p>Projeto iniciado para praticar meus conhecimentos em React. Aqui eu mostrarei alguns projetos que tenho, informando as tecnologias que usei e o propósito de cada uma delas (React só esta sendo aplicado neste projeto).</p>
            <div className={styles.favicon}>
                <p><a href="https://web.facebook.com/profile.php?id=100001716380388" target='_blank'>
                    <FaFacebook /> Facebook
                </a></p>
                <p><a href="https://www.instagram.com/lucksilva01/" target='_blank'>
                    <FaInstagram /> Instagram
                </a></p>
                <p><a href="https://www.linkedin.com/in/lucas-da-silva-12154a240/" target='_blank'>
                    <FaLinkedin /> Linkedin
                </a></p>
                <p><FaWhatsapp/>(21)9 8331-0764 </p>
            </div>
        </div>
    )
}