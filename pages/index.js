import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react'

import SliderCrew from '../components/sliderCrew'

export default function Home() {
  const [box1, setBox1] = useState(false)
  const [box2, setBox2] = useState(false)
  const [box3, setBox3] = useState(false)
  const [box4, setBox4] = useState(false)

  gsap.registerPlugin(ScrollTrigger);

  function smoothScroll(content, viewport, smoothness) {
    content = gsap.utils.toArray(content)[0];
    smoothness = smoothness || 1;

    gsap.set(viewport || content.parentNode, { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 });
    gsap.set(content, { overflow: "visible", width: "100%" });

    let getProp = gsap.getProperty(content),
      setProp = gsap.quickSetter(content, "y", "px"),
      setScroll = ScrollTrigger.getScrollFunc(window),
      removeScroll = () => content.style.overflow = "visible",
      killScrub = trigger => {
        let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
        scrub && scrub.kill();
        trigger.animation.progress(trigger.progress);
      },
      height, isProxyScrolling;

    function onResize() {
      height = content.clientHeight;
      content.style.overflow = "visible"
      document.body.style.height = height + "px";
    }
    onResize();
    ScrollTrigger.addEventListener("refreshInit", onResize);
    ScrollTrigger.addEventListener("refresh", () => {
      removeScroll();
      requestAnimationFrame(removeScroll);
    })
    ScrollTrigger.defaults({ scroller: content });
    ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

    ScrollTrigger.scrollerProxy(content, {
      scrollTop(value) {
        if (arguments.length) {
          isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value);
          setScroll(value);
          return;
        }
        return -getProp("y");
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    return ScrollTrigger.create({
      animation: gsap.fromTo(content, { y: 0 }, {
        y: () => document.documentElement.clientHeight - height,
        ease: "none",
        onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: () => height - document.documentElement.clientHeight,
      scrub: smoothness,
      onUpdate: self => {
        if (isProxyScrolling) {
          killScrub(self);
          isProxyScrolling = false;
        }
      },
      onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    });
  }


  useEffect(() => {
    smoothScroll("#home");
  }, [])





  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bodyContainer} id="home">
        <Head>
          <title>DGMX</title>
          <meta name="description" content="Conectamos con lo mejor de la tecnología" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
                  <div className={styles.boxSection1} id={styles.box1} onMouseEnter={() => { setBox1(true) }} onMouseLeave={() => { setBox1(false) }}>
                    <div className={`${styles.box1Base}`} style={{ display: box1 ? 'none' : 'flex' }}>
                      <div className={styles.numberBox}>
                        01
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                    </div>
                    <div className={styles.box1Active} style={{ display: box1 ? 'flex' : 'none' }}>
                      <div className={styles.numberBoxActive}>
                        01
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                      <div className={styles.pBox}>
                        Nos encargamos de transformar tus procesos y agilizar tu día a día
                        </div>

                    </div>
                  </div>


                  <div className={styles.boxSection2} id={styles.box2} onMouseEnter={() => { setBox2(true) }} onMouseLeave={() => { setBox2(false) }}>
                    <div className={`${styles.box2Base}`} style={{ display: box2 ? 'none' : 'flex' }}>
                      <div className={styles.numberBox}>
                        01
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                    </div>
                    <div className={styles.box2Active} style={{ display: box2 ? 'flex' : 'none' }}>
                      <div className={styles.numberBoxActive}>
                        01
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                      <div className={styles.pBox}>
                        Nos encargamos de transformar tus procesos y agilizar tu día a día
                        </div>

                    </div>
                  </div>


                  <div className={styles.boxSection3} id={styles.box3} onMouseEnter={() => { setBox3(true) }} onMouseLeave={() => { setBox3(false) }}>
                    <div className={`${styles.box3Base}`} style={{ display: box3 ? 'none' : 'flex' }}>
                      <div className={styles.numberBox}>
                        01
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                    </div>
                    <div className={styles.box3Active} style={{ display: box3 ? 'flex' : 'none' }}>
                      <div className={styles.numberBoxActive}>
                        03
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                      <div className={styles.pBox}>
                        Nos encargamos de transformar tus procesos y agilizar tu día a día
                        </div>

                    </div>
                  </div>


                  <div className={styles.boxSection4} id={styles.box4} onMouseEnter={() => { setBox4(true) }} onMouseLeave={() => { setBox4(false) }}>
                    <div className={`${styles.box4Base}`} style={{ display: box4 ? 'none' : 'flex' }}>
                      <div className={styles.numberBox}>
                        04
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                    </div>
                    <div className={styles.box4Active} style={{ display: box4 ? 'flex' : 'none' }}>
                      <div className={styles.numberBoxActive}>
                        04
                        </div>
                      <div className={styles.titleBox}>
                        Automatización de procesos empresariales.
                        </div>
                      <div className={styles.pBox}>
                        Nos encargamos de transformar tus procesos y agilizar tu día a día
                        </div>

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
              <h1>
                Hemos transformado +15 empresas en +5 industrias y tú, ¿te unes a la transformación?
              </h1>
              <div className={styles.iconsSection3}>
                <div className={styles.itemIconSection3}>
                  <Image src='/acero.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Acero</h2>
                </div>
                <div className={styles.itemIconSection3}>
                  <Image src='/educacion.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Educación</h2>
                </div>
                <div className={styles.itemIconSection3}>

                  <Image src='/inmobiliaria.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Bienes raíces</h2>

                </div>
                <div className={styles.itemIconSection3}>
                  <Image src='/inversiones.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Inversiones</h2>
                </div>
                <div className={styles.itemIconSection3}>
                  <Image src='/retail.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Retail</h2>
                </div>
                <div className={styles.itemIconSection3}>
                  <Image src='/seguridad.png' alt='next' layout='fixed' height={128} width={128} />
                  <h2>Seguridad</h2>
                </div>
              </div>
            </div>

          </section>






          <section className={styles.section4}>
            <div id={styles.innerSection4}>
              <div className={styles.headerSection4}>
                <div className={styles.titleHeaderSection4}>
                  <h3>Como te Transformamos</h3>
                  <h2>Tu <span>transformación</span> digital</h2>
                </div>

                <p>Texto TextoTextoTextoText oText oTextoText oTextoTe xtoTextoTextoTextoTex toTextoTexto Te
                xtoTexto Texto TextoTextoTextoText oTextoTextoText oTextoTe xtoTextoTextoTextoT
                  ex toTextoTexto TextoTexto TextoTexto</p>
              </div>

              <div className={styles.boxesSeccion4}>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>



                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/conocemos.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      01
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Te conocemos
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.
                    </div>
                  </div>
                </div>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>
                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/enamoramos.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      02
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Te enamoramos
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.

                    </div>
                  </div>
                </div>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>
                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/reclutamos.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      03
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Te reclutamos
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.

                    </div>
                  </div>
                </div>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>
                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/bienvenida.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      04
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Bienvenida
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.

                    </div>
                  </div>
                </div>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>
                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/satisfacemos.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      05
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Te satisfacemos
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.

                    </div>
                  </div>
                </div>

                <div className={styles.itemboxSeccion4}>
                  <div className={styles.itemInnerBoxSeccion4}>
                    <div className={styles.iconItemBoxSeccion4}>
                      <Image src='/aseguramos.png' alt='next' layout='fixed' height={95} width={95} />
                    </div>
                    <div className={styles.numberItemBoxSeccion4}>
                      06
                    </div>
                    <div className={styles.tituloItemBoxSeccion4}>
                      Te aseguramos
                    </div>
                    <div className={styles.textoItemBoxSeccion4}>
                      El viaje con DGMX empieza desde el día 1. Nos ayudarás con una encuesta muy sencilla para que empecemos a conocerte.

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>





          <section className={styles.section5}>
            <div id={styles.innerSection5}>
              <h1>
                Hacking crew
              </h1>
              <div className={styles.ceoCrew}>
                <div className={styles.itemCeoCrew} >
                  <div className={styles.itemInnerCeoCrew} id={styles.crewJean}>
                    <div>
                      <div className={styles.cargoItemCeoCrew}>
                        CEO
                        </div>
                      <div className={styles.nombreItemCeoCrew}>
                        Jean Padilla
                        </div>
                      <div className={styles.descripcionItemCeoCrew}>
                        Apasionado por la tecnología y siempre aprendiendo lo más nuevo, implementación en más de +15 proyectos de tecnologíca en empresa transnacional, con ahorros a nivel nacional.
                        </div>
                    </div>
                  </div>
                </div>


                <div className={styles.itemCeoCrew}>
                  <div className={styles.itemInnerCeoCrew} id={styles.crewJose}>
                    <div>
                      <div className={styles.cargoItemCeoCrew}>
                        Vicepresiedente
                        </div>
                      <div className={styles.nombreItemCeoCrew}>
                        José Villanueva
                        </div>
                      <div className={styles.descripcionItemCeoCrew}>
                        Creativo y apasiona do por la mejora continua, certificado en Lean Six Sigma – Green Belt, liderando +40 proyectos de productividad simultáneamente con resultados por +$2,000,000.00 USD
                        </div>
                    </div>
                  </div>
                </div>



                <div className={styles.itemCeoCrew}>
                  <div className={styles.itemInnerCeoCrew} id={styles.crewFilemon}>
                    <div>
                      <div className={styles.cargoItemCeoCrew}>
                        Director creativo
                        </div>
                      <div className={styles.nombreItemCeoCrew}>
                        Filemón Garza
                        </div>
                      <div className={styles.descripcionItemCeoCrew}>
                        Fiel creyente en que el servicio al cliente es vital para una buena relación de negocios. Experiencia en la Banca. Corporativa gestionando proyectos para clientes multinacionales.
                        </div>
                    </div>
                  </div>
                </div>
              </div>



              <div style={{ marginTop: '10em' }}>
                <h1 style={{ margin: '0.6em 0px' }}>
                  Digitalent
              </h1>
                <SliderCrew></SliderCrew>
              </div>


            </div>

          </section>

















          <section className={styles.section7}>
            <div id={styles.innerSection7}>
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
    </>
  )
}
