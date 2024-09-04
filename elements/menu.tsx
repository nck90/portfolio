import menu_styles from '../styles/Menu.module.css';
import classnames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

// make menu object
export default function Menu() {
    const router = useRouter();
    const [isMobileMenuOpened, SetMobileIcon] = useState(false);

    function handleMobileMenu() {
        SetMobileIcon(!isMobileMenuOpened);
    }

    // 경로에 따른 스타일 동적 설정
    let menuStyle;
    if (router.pathname === '/') {
        menuStyle = menu_styles.homeMenu;
    } else if (router.pathname === '/info') {
        menuStyle = menu_styles.infoMenu;
    } else if (router.pathname === '/contact') {
        menuStyle = menu_styles.contactMenu;
    } else if (router.pathname === '/stack') {
        menuStyle = menu_styles.stackMenu;
    } else {
        menuStyle = menu_styles.defaultMenu;
    }

    return (
        <>
            {/* Desktop Menu */}
            <div className={classnames(menu_styles.menu, menuStyle)}>
                <Link passHref href="/">
                    <div className={menu_styles.menu_title}>Nck90</div>
                </Link>
                <div className={menu_styles.flex}>
                    <Link passHref href="/info">
                        <div className={menu_styles.menu_btn}>소개</div>
                    </Link>
                    <Link passHref href="/contact">
                        <div className={menu_styles.menu_btn}>연락</div>
                    </Link>
                    <Link passHref href="/stack">
                        <div className={menu_styles.menu_btn}>기술</div>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                style={isMobileMenuOpened ? { backgroundColor: 'white' } : {}}
                className={classnames(menu_styles.mobile_menu, menuStyle)}
            >
                <Link passHref href="/">
                    <div className={menu_styles.menu_title}>Nck90</div>
                </Link>
                <div>
                    {isMobileMenuOpened === false ? (
                        <div
                            onClick={handleMobileMenu}
                            className={classnames('material-icons', menu_styles.menu_icon)}
                        >
                            menu
                        </div>
                    ) : (
                        <div
                            onClick={handleMobileMenu}
                            className={classnames('material-icons', menu_styles.menu_icon)}
                        >
                            close
                        </div>
                    )}
                </div>
                {isMobileMenuOpened === false ? (
                    <div className={classnames(menu_styles.flex, menu_styles.mobile_menu_content, menu_styles.mobile_menu_closed)}>
                        <Link passHref href="/info">
                            <div style={{ display: 'none' }} className={menu_styles.menu_btn}>
                                소개
                            </div>
                        </Link>
                        <Link passHref href="/contact">
                            <div style={{ display: 'none' }} className={menu_styles.menu_btn}>
                                연락
                            </div>
                        </Link>
                        <Link passHref href="/stack">
                            <div style={{ display: 'none' }} className={menu_styles.menu_btn}>
                                기술
                            </div>
                        </Link>
                    </div>
                ) : (
                    <div className={classnames(menu_styles.flex, menu_styles.mobile_menu_content)}>
                        <Link passHref href="/info">
                            <div style={{ display: 'block' }} className={menu_styles.menu_btn}>
                                소개
                            </div>
                        </Link>
                        <Link passHref href="/contact">
                            <div style={{ display: 'block' }} className={menu_styles.menu_btn}>
                                연락
                            </div>
                        </Link>
                        <Link passHref href="/stack">
                            <div style={{ display: 'block' }} className={menu_styles.menu_btn}>
                                스택
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}