import { useEffect } from 'react';
import styles from "../styles/Contact.module.css";
import Menu from '../elements/menu';
import Link from 'next/link';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <div className={styles.home}>
                <Menu/>
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        <div className={styles.title}>연락하기</div>
                        <div className={styles.des}>저에게 연락하는 여러가지 방법입니다!<br/>모두 비즈니스 겸용 연락처이니, 언제든 연락주세요!</div>
                        <div className={styles.flex}>
                            <Link passHref href="https://www.instagram.com/jw._308"><span className={styles.btn}>Insta: jw._308</span></Link>
                            <Link passHref href="s2460@e-mirim.hs.kr"><span className={styles.btn2}>Email: s2460@e-mirim.hs.kr</span></Link>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}