import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Carousel from "../components/Carousel/Carousel";
import Navbar from "../components/Navbar/Navbar";
import NavbarPage from "../components/NavbarPage/NavbarPage";
import styles from "../styles/Home.module.scss";

Home.getInitialProps = () => {
  const sliderData = [
    {
      slide: 1,
      title: "APOCALYPSE NOW",
      date: "25.07.2020",
      content: ["IRWAN AHMET", "TITA SALINA"],
      imgSrc: "/assets/slider/slider-1.jpg",
      imgAlt: "Apocalypse Now",
    },
    {
      slide: 2,
      title: "ART FOR TITLE",
      date: "",
      content: [
        "THE WORK OF SCAVENGERS,",
        "SEISMOGRAPHERS AND",
        "SOCIAL ACTORS",
      ],
      imgSrc: "/assets/slider/slider-2.jpg",
      imgAlt: "Art For Title",
    },
    {
      slide: 3,
      title: "MARIA TANEGUCHI",
      date: "10.11.2020",
      content: [
        "ADITYA NOVALI",
        "ARIN SUNARYO",
        "BAGUS PANDEGA",
        "FAISAL HABIBI",
        "SYAGINI RATNA WULAN",
        "SYAIFUL GARIBALDI",
        "UJI " + `"HAHAN" ` + "HANDOKO",
        "KEI IMAZU.",
      ],
      imgSrc: "/assets/slider/slider-3.jpg",
      imgAlt: "Maria Taneguchi",
    },
    {
      slide: 4,
      title: "EXHIBITION TITLE",
      date: "10.11.2020",
      content: [
        "ADITYA NOVALI",
        "ARIN SUNARYO",
        "BAGUS PANDEGA",
        "FAISAL HABIBI",
        "SYAGINI RATNA WULAN",
        "SYAIFUL GARIBALDI",
        "UJI " + `"HAHAN" ` + "HANDOKO",
        "KEI IMAZU.",
      ],
      imgSrc: "/assets/slider/slider-4.jpg",
      imgAlt: "Exhibition Title",
    },
  ];

  const navData = [
    {
      title: "DEFAULT",
      image: "/assets/nav/nav-0.jpg",
      about: [
        "LUCIO FONTANA. Spatial Environment / Ambienti Spaziali (1968). Installation view at ROH",
      ],
    },
    {
      title: "ARTISTS",
      image: "/assets/nav/nav-1.jpg",
      about: [
        "WOLFGANG LAIB. " +
          "Pollen from Hazelnut ".italics() +
          "(2021). Installation progress at ROH",
      ],
    },
    {
      title: "EXHIBITIONS",
      image: "/assets/nav/nav-2.jpg",
      about: ["ROH Installation view at S.E.A Focus, Singapore (2020)"],
    },
    {
      title: "INFO",
      image: "/assets/nav/nav-3.jpg",
      about: [
        "ADITYA NOVALI. " + "AcrylicilycrA ".italics() + "(2021). Details",
      ],
    },
    {
      title: "SEARCH",
      image: "/assets/nav/nav-4.jpg",
      about: [
        "ELMGREEN & DRAGSET. " + "Black Socks, ".italics() + "(2019)",
        `aluminium, steel, lacquer, socks, 46-7/8" x 24-7/16" x 31-1/2" (119.1 cm x 62.1 cm x 80 cm) unique`,
      ],
    },
  ];

  return { sliderData, navData };
};

export default function Home({ sliderData, navData }) {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    if (!navbarActive) setNavbarActive(true);
    if (navbarActive) setNavbarActive(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar buttonFunc={() => toggleNavbar()} />
      </div>
      <div className={styles.carousel}>
        <Carousel sliderData={sliderData} />
      </div>

      <CSSTransition
        in={navbarActive}
        classNames="fade"
        timeout={350}
        unmountOnExit
      >
        <div className={styles.navbarPage}>
          <NavbarPage navData={navData} />
        </div>
      </CSSTransition>
    </div>
  );
}
