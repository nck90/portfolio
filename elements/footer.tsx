import footer_styles from '../styles/Footer.module.css';
import classnames from 'classnames';
import Link from 'next/link';

interface Props {
    image: string;  // 소문자 'string'으로 변경
}

export default function Footer({ image }: Props) {
    // 'main' 페이지에서만 푸터를 렌더링합니다.
    if (image !== 'main') {
        return null; // 'main'이 아닌 경우 푸터를 렌더링하지 않음
    }

    return (
        <div className={classnames(footer_styles.footer, footer_styles.footer_main)}>
            <div className={classnames(footer_styles.footer_content, footer_styles.footer_content_main)}>
                <div className={footer_styles.footer_title}>Nck</div>
                <div className={footer_styles.footer_des}>
                    <Link passHref href={"/info"}><span className={footer_styles.link}>소개</span></Link>
                    <Link passHref href={"/contact"}><span className={footer_styles.link}>연락</span></Link>
                    <Link passHref href={"/license"}><span className={footer_styles.link}>라이센스</span></Link>
                    <a className={footer_styles.link} href="https://velog.io/@jw_308" target="blank">벨로그</a>
                    <a className={footer_styles.link} href="https://github.com/nck90" target="blank">깃헙</a>
                </div>
                <div className={footer_styles.footer_des}>
                    <div className={footer_styles.link}>Nck90  |  s2460@e-mirim.hs.kr</div>
                </div>
                <div className={footer_styles.footer_des}>
                    <div className={footer_styles.link}>Copyrightⓒ2024 Nck90 All rights reserved.</div>
                </div>
            </div>
        </div>
    );
}