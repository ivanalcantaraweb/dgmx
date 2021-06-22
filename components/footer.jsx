import styles from '../styles/Footer.module.css';
import Link from 'next/Link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.innerFooter}>
                <div className={styles.containerLogoFooter}>
                    <img src="/logo.png" />
                </div>
                <div className={styles.containerSiteMap}>
                    <div className={styles.containerInnerSiteMap}>


                        <ul>
                            <li>

                                <a>
                                    Mapa de sitio
                            </a>

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

                                <a>
                                    Legal
                            </a>

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

                                <a>
                                    Redes sociales
                            </a>

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