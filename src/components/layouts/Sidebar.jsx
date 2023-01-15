import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <h1 className={styles.div_tittle}>Projetos</h1>
            <nav className={styles.menu_container}>
                <Link to='/mediaplayer'>Media Player</Link>
                <Link to='/pizzeria'>Pizzeria Simulation</Link>
                <Link to='/formvalidation'>Form Validation Simulation</Link>
                <Link to='/rickandmorty'>API Rick and Morty</Link>
            </nav>
                <Link to='/'>Home</Link>
        </div>
    )
}