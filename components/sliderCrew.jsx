
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import styles from '../styles/Crew.module.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderCrew = () => {
    return (
        <Swiper
            spaceBetween={12}
            slidesPerView={4}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            id={styles.sliderCrewContainer}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
        >
            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew1}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Angelica
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew2}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Daniel
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew3}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Francisco
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew4}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Emilio
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew5}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Pablo
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew6}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Andrea
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={styles.containerItemCrew}>
                    <div className={styles.innerItemCrew} id={styles.crew7}>
                        <div className={styles.cargoItemCrew}>
                            Digitalent
                        </div>
                        <div className={styles.nombreItemCrew}>
                            Daniel
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderCrew;