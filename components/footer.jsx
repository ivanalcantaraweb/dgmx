import styles from '../styles/Footer.module.css';
import Link from 'next/Link';
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerFooter}>
                <div className={styles.containerLogoFooter}>
                    <Image src="/Logo.png" layout='fixed' width='191px' height='77px' />
                </div>
                <div className={styles.containerSiteMap}>
                    <div className={styles.containerInnerSiteMap}>


                        <ul>
                            <li>
                                <Link href="">
                                    <a>
                                        Mapa de sitio
                                 </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Servicios
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Contacto
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Cotizaciones
                                </a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="">
                                    <a>
                                        Legal
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Política de privacidad
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Privacidad de datos
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Cookies
                                </a>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link href="">
                                    <a>
                                        Redes sociales
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Linkedin
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Facebook
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Instagram
                                </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicios">
                                    <a>
                                        Whatsapp
                                </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className={styles.copyright}>
                    2021 Derechos reservados | DGMX
                </div>
            </div>

        </footer>
    )
}

export default Footer;