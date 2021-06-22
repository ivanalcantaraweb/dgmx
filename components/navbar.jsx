import styles from '../styles/Navbar.module.css';
import Link from 'next/Link';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.innerNavbar}>

                <img src="/Logo.png"></img>
                <div className={styles.containerMenu}>
                    <ul>
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
                                    Transformar
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar;