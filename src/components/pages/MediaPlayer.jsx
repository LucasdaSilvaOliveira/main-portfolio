import ContainerPages from "./ContainerPages";
import Foto from '../img/mediaplayer_foto.png';

export default function MediaPlayer({classMainDiv, classDivInfo}) {
    return (
        <div className={classMainDiv}>
            <div className={classDivInfo}>
                <ContainerPages img={Foto} linkGithub='https://lucasdasilvaoliveira.github.io/PlayerMusic/'/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </div>
            <p>- Projeto para praticar lógica JavaScript e manipulação de áudios em uma playlist feita com músicas que eu gosto.</p>
        </div>
    )
}