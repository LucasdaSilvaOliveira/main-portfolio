/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import styles from './ContainerPages.module.css';

export default function ContainerPages({linkGithub ,img}) {
    return (
        <section className={styles.section}>
                <a href={linkGithub} target='_blank'><img className={styles.img} src={img}/></a>
        </section>
    )
}