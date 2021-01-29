import { useEffect } from "react";
import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.scss";

SwiperCore.use([EffectFade, Autoplay]);

export default function Carousel({ sliderData: data }) {
  return (
    <div className={styles.carouselWrap}>
      {data && data.length > 0 ? (
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          speed={2000}
        >
          {data.map((item) => (
            <SwiperSlide key={item.slide} className={styles.slideItem}>
              <div className={styles.slideContent}>
                <span className={styles.contentTitle}>{item.title}</span>
                {item && item.date && item.date.length > 0 && (
                  <span className={styles.contentDate}>{item.date}</span>
                )}
                {item &&
                  item.content &&
                  item.content.map((subItem) => (
                    <span className={styles.contentItem} key={subItem}>
                      {subItem}
                    </span>
                  ))}
              </div>
              <div className={styles.slideImage}>
                <div className={styles.imageWrap}>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
