import styles from '../styles/Navbar.module.css';
import { useRef, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);



    {/* 
    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector("#logoPrincipal"),
            {
                opacity: 1,
                x: 0
            },
            {
                opacity: 0,
                x: -20,
                duration: 0.4,
                delay: 0,
                scrollTrigger: {
                    trigger: element.querySelector("#navbarContainer"),
                    start: "top top",
                    end: "bottom center",
                    toggleActions: "play none reverse reset",


                },

            }

        );
    }, []);
*/}

    useEffect(() => {
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            toggleClass: { className: 'navbarContainer--active', targets: '.navbarContainer' },

        });

    }, []);

    return (
        <nav className={`${styles.navbar} navbarContainer`} ref={ref}>
            <div className={styles.innerNavbar}>
                <div className={styles.logoContainer}>
                    <Image src="/isotipo.png" layout='fixed' width='43px' height='40px' id="isotipoPrincipal" />
                    <Image src="/logotipo.png" layout='fixed' width='142' height='40px' id="logoPrincipal" />
                </div>
                <div className={styles.containerMenu}>
                    <ul>
                        {/* 
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
                        */}
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