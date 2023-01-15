import { Routes, Route } from 'react-router-dom';
import MediaPlayer from '../pages/MediaPlayer';
import Pizzeria from '../pages/Pizzeria';
import FormValidation from '../pages/FormValidation';
import APIRickandMorty from '../pages/APIRickandMorty';
import Home from './Home';

import styles from './Main.module.css';

export default function Main() {
    return (
        <div className={styles.main_container}>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/mediaplayer' element={<MediaPlayer classMainDiv={styles.container} classDivInfo={styles.info_container}/>} />
                <Route path='/pizzeria' element={<Pizzeria  classMainDiv={styles.container} classDivInfo={styles.info_container}/>} />
                <Route path='/formvalidation' element={<FormValidation classMainDiv={styles.container} classDivInfo={styles.info_container}/>} />
                <Route path='/rickandmorty' element={<APIRickandMorty classMainDiv={styles.container} classDivInfo={styles.info_container}/>} />
            </Routes>
        </div>
    )
}