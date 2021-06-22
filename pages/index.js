import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/Link';

export default function Home() {
  return (
    <div className={styles.bodyContainer}>
      <Head>
        <title>DGMX</title>
        <meta name="description" content="Conectamos con lo mejor de la tecnología" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/MaaxMono/Maax-RegularMono.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Maax/maax.otf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar></Navbar>

      <main className={styles.main}>

        <section className={styles.section1}>
          <div id={styles.innerSection1}>
            <h1>El impulso hacia tu <span>transformación</span> digital</h1>
            <p>Nosotros construiremos tu estrategia digital y las soluciones enfocadas en hacer realidad tus ideas,
             mismas que te llevarán al siguiente nivel.</p>
          </div>

          <div id={styles.coheteSection1}>
            <Image src='/Cohete.svg' alt='next' layout='fixed' height={612} width={462} />
          </div>
        </section>

        <section className={styles.section2}>
          <div className={styles.innerSection2}>
            <div className={styles.contentSection2}>
              <h3>Somos los arquitectos de la tecnología</h3>
              <h2>Transformamos negocios en empresas</h2>
              <p>Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto TextoTexto Texto Texto Texto Texto Texto Texto Texto  </p>
            </div>
            <div className={styles.boxesSection2}>
              <div className={styles.innerBoxesSection2}>




                <div className={styles.boxSection1} id={styles.box1}>
                  <div className={styles.numberBox}>
                    01
                  </div>
                  <div className={styles.titleBox}>
                    Automatización de procesos empresariales
                  </div>
                </div>
                <div className={styles.boxSection1} id={styles.box2}>
                  <div className={styles.numberBox}>
                    02
                </div>
                  <div className={styles.titleBox}>
                    Consultoría Tecnológica
                </div>
                </div>
                <div className={styles.boxSection1} id={styles.box3}>
                  <div className={styles.numberBox}>
                    03
                </div>
                  <div className={styles.titleBox}>
                    Branding y Digital Marketing
                </div>
                </div>
                <div className={styles.boxSection1} id={styles.box4}>
                  <div className={styles.numberBox}>
                    04
                </div>
                  <div className={styles.titleBox}>
                    Logística Tecnológica
                </div>
                </div>
              </div>
            </div>
          </div>

          {/* 
            Pattern            
          */}
          <div className={styles.pattern1}>
            <Image src='/pattern1.png' alt='next' layout='fixed' height={189} width={641} />
          </div>
          <div className={styles.pattern2}>
            <Image src='/pattern1.png' alt='next' layout='fixed' height={189} width={641} />
          </div>



        </section>


        <section className={styles.section3}>
          <div id={styles.innerSection3}>
            <h1>El impulso hacia tu <span>transformación</span> digital</h1>
            <div className={styles.buttonsContainerSeccion3}>
              <Link href="">
                <a id={styles.btnTransomate}>
                  Transformate
                </a>
              </Link>
              <span>ó</span>
              <Link href="">
                <a id={styles.btnContactanos}>
                  Contactanos
              </a>
              </Link>

            </div>
          </div>
        </section>




        <Footer />
      </main>
    </div>
  )
}
