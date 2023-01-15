import Foto from '../img/pizzeria_foto.png';
import ContainerPages from './ContainerPages';

export default function Pizzeria({classMainDiv, classDivInfo}) {
    return (
        <div className={classMainDiv}>
        <div className={classDivInfo}>
            <ContainerPages img={Foto} linkGithub='https://lucasdasilvaoliveira.github.io/Pizzaria-simulation/'/>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
            </ul>
        </div>
        <p>- Simulação de site de pizzaria feito para praticar metodologia AJAX.</p>
    </div>
    )
}