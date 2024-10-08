// import next.js things
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

// import styles
import '../styles/globals.css';

// import menu & footer
import Footer from '../elements/footer';

// final return object
export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    let image, title;

    if(router.pathname === '/') {
        image = 'main';
        title = 'DEV Nck90';
    }
    else if(router.pathname === '/info') {
        image = 'info';
        title = 'DEV Nck90 | 소개';
    }
    else if(router.pathname === '/contact') {
        image = 'contact';
        title = 'DEV Nck90 | 연락';
    }
    else if(router.pathname === '/license') {
        title = 'DEV Nck90 | 라이센스';
        image = 'license';
    }
    else {
        image = '404';
        title = 'DEV Nck90 | 페이지를 찾을 수 없음';
    }

    let analytics_script = "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-YER8B5T7XX');"

    return <>
        <Head>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-YER8B5T7XX"></script>
            <script data-ad-client="ca-pub-8685517859414452" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

            <meta name="twitter:url" content="" />
            <meta name="twitter:type" content="website" />
            <meta name="twitter:title" content="DEV Nck90" />
            <meta name="twitter:description" content="학생 개발자 Nck입니다" />
            <meta name="twitter:image" content="https://repository-images.githubusercontent.com/450323911/44da9596-b21a-4b7c-8e94-c4e29934a931" />
            <meta name="twitter:card" content="summary_large_image" />

            <script>
                {analytics_script}
            </script>
        </Head>

        <Component {...pageProps} />
        <Footer image={image} />
    </>
}
