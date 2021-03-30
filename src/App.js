import './App.css';
import './components/Navbar'
import NavBarComponent from './components/Navbar';
import BannerComponent from './components/BannerComponent';
import AboutComponent from './components/AboutComponent'
import GardenLayoutComponent from './components/GardenLayoutComponent'
import AmenitiesComponent from './components/AmenitiesComponent'
import GalleryComponent from './components/GalleryComponent'
import FooterComponent from './components/FooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap'
import React, { useRef, useEffect, useState } from "react";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const bannerRef = useRef(null);
  const ourGardensRef = useRef(null);
  const amenitiesRef = useRef(null);

  const sectionRefs = [
    { section: "Banner", ref: bannerRef },
    { section: "About_Us", ref: aboutUsRef },
    { section: "OurGardens", ref: ourGardensRef },
    { section: "Amenities", ref: amenitiesRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  return (
    <div className="App">
      <div className="" />

      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${visibleSection === "About_Us" ? "selected" : ""} nav_style`}
              onClick={() => {
                scrollTo(aboutUsRef.current);
              }}
            >
              ABOUT US
            </button>
            <button
              type="button"
              className={`header_link ${visibleSection === "OurGardens" ? "selected" : ""} nav_style`}
              onClick={() => {
                scrollTo(ourGardensRef.current);
              }}
            >
              OUR GARDENS
            </button>
            <Image onClick={() => {
              scrollTo(bannerRef.current);
            }} src="sagret_garden_logo.png" style={{ height: "70px", margin: "0 100px" }} />

            <button
              type="button"
              className={`header_link ${visibleSection === "Amenities" ? "selected" : ""} nav_style`}
              onClick={() => {
                scrollTo(amenitiesRef.current);
              }}
            >
              AMENITIES
            </button>
            <button
              type="button"
              className={`header_link nav_style book_btn`}
              onClick={() => {
                console.log("book now");
              }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div id="Banner" ref={bannerRef} >
          <BannerComponent />
        </div>
        <div style={{ paddingTop: "35px" }} id="About_Us" ref={aboutUsRef}>
          <AboutComponent />

        </div>

        <div style={{ paddingTop: "35px" }} id="OurGardens" ref={ourGardensRef} >
          <GardenLayoutComponent />

        </div>
        <div style={{ paddingTop: "35px" }} id="Amenities" ref={amenitiesRef} >
          <AmenitiesComponent />

        </div>


        <GalleryComponent />
        <FooterComponent />
      </div>

   
    </div>
  );
}

export default App;
