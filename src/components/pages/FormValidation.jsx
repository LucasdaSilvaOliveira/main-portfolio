/* eslint-disable react/jsx-no-target-blank */
import Foto from '../img/formvalidation_foto.png';
import ContainerPages from './ContainerPages';

export default function FormValidation({classMainDiv, classDivInfo}) {
    return (
        <div className={classMainDiv}>
            <div className={classDivInfo}>
                <ContainerPages img={Foto} linkGithub='https://lucasdasilvaoliveira.github.io/Form-validations/'/>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>SASS</li>
                </ul>
            </div>
            <p>- Desafio feito do site <a href="https://www.frontendmentor.io/home" target='_blank'>Frontend Mentor</a>. Simulação de validação de formulário, realizado para praticar o uso do pré-processador SASS.</p>
        </div>
    )
}