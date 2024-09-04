import { useEffect } from 'react';
import styles from "../styles/Stack.module.css";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function Stack() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Menu />
            <div className={styles.container}>
                <h2 className={styles.animatedTitle}>
                    기술 스택
                </h2>

                <div className={styles.cardGrid}>
                    <div className={`${styles.card} ${styles.fadeIn}`}>
                        <h3 className={`${styles.cardTitle} ${styles.animatedText}`}>언어 및 기술</h3>
                        <ul className={styles.animatedList}>
                            <li>Typescript / Javascript</li>
                            <li>React(Next.js)</li>
                            <li>Node.js</li>
                            <li>VanillaJs</li>
                            <li>Kotiln</li>
                            <li>Java</li>
                            <li>Chart.js</li>
                            <li>Mysql</li>
                            <li>C++</li>
                            <li>Flutter</li>
                        </ul>
                    </div>

                    <div className={`${styles.card} ${styles.fadeIn}`}>
                        <h3 className={`${styles.cardTitle} ${styles.animatedText}`}>툴</h3>
                        <ul className={styles.animatedList}>
                            <li>깃헙</li>
                            <li>웹스톰</li>
                            <li>깃</li>
                            <li>Visual Studio Code</li>
                            <li>AWS</li>
                            <li>CloudFlare</li>
                            <li>XD</li>
                            <li>Andriod Studio</li>
                            <li>InteliJ</li>
                            <li>PyCharm</li>
                        </ul>
                    </div>
                </div>

                <Link passHref href="/contact">
                    <span className={`${styles.link} ${styles.animatedText}`}>연락하기</span>
                </Link>
            </div>
        </>
    );
}