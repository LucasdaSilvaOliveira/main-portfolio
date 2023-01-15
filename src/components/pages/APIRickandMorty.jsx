/* eslint-disable react/jsx-no-target-blank */
import Foto from '../img/rickandmorty_foto.png';
import ContainerPages from './ContainerPages';

export default function RickandMorty({classMainDiv, classDivInfo}) {
    return (
        <div className={classMainDiv}>
            <div className={classDivInfo}>
                <ContainerPages img={Foto} linkGithub='https://lucasdasilvaoliveira.github.io/API-Rick-Morty/'/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <p>- Projeto feito para praticar consumo e manipulação de API, utilizando a do <a href="https://rickandmortyapi.com/" target='_blank'>Rick and Morty</a>.</p>
        </div>
    )
}