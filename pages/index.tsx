import { useEffect } from 'react';
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Menu from '../elements/menu';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <>
            <div className={styles.home}>
                <Menu/>
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        <div className={styles.title}>MOBLIE<br/>DEVELOPER</div>
                        <div className={styles.des}>모바일 앱 개발자를 지망하는 <br/>초보 개발자입니다</div>
                        <Link passHref href="/info"><div className={styles.home_btn}>자세히 알아보기</div></Link>
                    </div>
                    <div className={styles.main_content}>
                        <div className={styles.img}></div>
                    </div>
                </div>
            </div>
        </>
    );
}