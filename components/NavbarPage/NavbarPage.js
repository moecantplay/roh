import { useEffect, useState } from "react";
import SwiperCore, { EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from 'html-react-parser';
import styles from "./NavbarPage.module.scss";

SwiperCore.use([EffectFade, Pagination]);

export default function NavbarPage({ navData }) {
  const [defaultBackground, setDefaultBackground] = useState({});
  const [navListData, setNavListData] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const hoverListenerOn = () => {
    document.querySelectorAll(".nav-list-item").forEach((item) => {
      item.addEventListener("mouseover", (evt) => {
        evt.currentTarget.click();
      });
    });
  };

  const hoverListenerOff = () => {
    document.querySelectorAll(".nav-list-item").forEach((item) => {
      item.removeEventListener("mouseover", (evt) => {
        evt.currentTarget.click();
      });
    });
  };

  useEffect(() => {
    if (navData.length > 0) {
      const tempArr = [...navData];

      setDefaultBackground(tempArr[0]);
      setNavListData(tempArr);
    }

    return () => {
      hoverListenerOff();
    };
  }, []);

  const paginationProps = {
    pagination: {
      el: ".nav-list",
      clickable: true,
      bulletElement: "li",
      renderBullet: (index, className) => {
        const text = navListData.find((item, i) => i === index).title;

        return `<li class="nav-list-item ${className}">${text}</li>`;
      },
    },
  };

  return (
    <div className={styles.navListWrap}>
      <div className={styles.listItem}>
        <div className={styles.listImage}>
          <img src={defaultBackground.image} alt={defaultBackground.title} />
        </div>

        {defaultBackground.about && defaultBackground.about.length > 0 && (
          <div className={styles.listAbout}>
            {defaultBackground.about.map((item) => (
              <span className={styles.aboutChild} key={item}>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      {navListData && navListData.length > 0 && (
        <div className={styles.navList}>
          <Swiper
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={false}
            speed={700}
            onAfterInit={hoverListenerOn}
            onSlideChange={(props) => setActiveSlide(props.activeIndex)}
            {...paginationProps}
          >
            {navListData.map((item) => (
              <SwiperSlide className={styles.listItem} key={item.title}>
                <div className={styles.listImage}>
                  <img src={item.image} alt={item.title} />
                </div>

                {item.about && item.about.length > 0 && (
                  <div className={`list-about ${styles.listAbout}`}>
                    {item.about.map((subItem) => (
                      <span className={styles.aboutChild} key={subItem}>
                        {parse(subItem)}
                      </span>
                    ))}
                  </div>
                )}
              </SwiperSlide>
            ))}

            <ul
              className={`nav-list ${styles.navListPagination} ${
                activeSlide > 0 ? styles.navListHasActive : ""
              }`}
            ></ul>
          </Swiper>
        </div>
      )}
    </div>
  );
}
