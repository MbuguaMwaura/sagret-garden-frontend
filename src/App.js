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
import { Image, Modal, Button } from 'react-bootstrap'
import React, { useRef, useEffect, useState } from "react";
import BookModal from './components/BookModal'

import SuccessModal from './components/SuccessModal'

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

var toggleMobileMenu = false

const scrollTo = (ele, shouldCloseMenu) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  if (shouldCloseMenu == true) {
    toggleMobileMenu = false
  } else {
    toggleMenu()
  }


};
const toggleMenu = () => {

  toggleMobileMenu = !toggleMobileMenu
}

function App() {

  var formHasBeenValidated = false
  const [visibleSection, setVisibleSection] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [successModalShow, setSuccessModalShow] = React.useState(false);

  const headerRef = useRef(null);
  const aboutUsRef = useRef(null);
  const bannerRef = useRef(null);
  const ourGardensRef = useRef(null);
  const amenitiesRef = useRef(null);
  const footerRef = useRef(null);

  const sectionRefs = [
    { section: "Banner", ref: bannerRef },
    { section: "About_Us", ref: aboutUsRef },
    { section: "OurGardens", ref: ourGardensRef },
    { section: "Amenities", ref: amenitiesRef },
    { section: "Footer", ref: footerRef }
  ];

  const sendDataToParent = (message) => {

    if (message === "success") {
      setModalShow(false)
      setSuccessModalShow(true)
    } else if ("hide") {
      setModalShow(false)
      setSuccessModalShow(false)
      formHasBeenValidated = false
    }
  };

  const validateForm = (validate) => {
    return validate
  }

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
          {/* Start of large Menu */}
          <div className="large_menu header" ref={headerRef}>
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
            }} src="sagret_garden_logo.png" style={{ height: "70px", margin: "0 50px" }} />

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
                scrollTo(footerRef.current);
              }}
            >
              BOOK NOW
            </button>
          </div>
          {/* End of Large Menu */}

          {/* Start of Mobile Menu */}

          <div className="mobile_menu header_mobile" ref={headerRef} >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Image src="sagret_garden_logo.png" style={{ height: "40px", width: "40px", margin: "10px 20px" }} />
              <div className="center title">Sagret Gardens</div>
              {!toggleMobileMenu ?
                <a style={{display:"contents"}} href="tel:+254715398758">
                  <Image src="phone-icon.png" style={{ margin: "auto 22px", height:"22px" }} />
                </a>
                 : <>
                </>
              }
            </div>


            {toggleMobileMenu ?

              <>
                <button
                  style={{ width: "150px" }}
                  type="button"
                  className={`header_link ${visibleSection === "About_Us" ? "selected" : ""} nav_style`}
                  onClick={() => {
                    scrollTo(aboutUsRef.current);
                  }}
                >
                  ABOUT US
            </button>
                <button
                  style={{ width: "150px" }}
                  type="button"
                  className={`header_link ${visibleSection === "OurGardens" ? "selected" : ""} nav_style`}
                  onClick={() => {
                    scrollTo(ourGardensRef.current);
                  }}
                >
                  OUR GARDENS
            </button>


                <button
                  style={{ width: "150px" }}
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
                  style={{ marginTop: "0px !important", textAlign: "center", width: "150px" }}
                  onClick={() => {
                    scrollTo(footerRef.current);
                  }}
                >
                  BOOK NOW
            </button>
              </> : <></>
            }
          </div>
          {/* End of Mobile Menu */}
        </div>
        <BookModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          sendDataToParent={sendDataToParent}

        />
        <SuccessModal
          show={successModalShow}
          onHide={() => setSuccessModalShow(false)}
          sendDataToParent={sendDataToParent}
        />
        <div id="Banner" ref={bannerRef} >
          <BannerComponent />
        </div>
        <div id="About_Us" ref={aboutUsRef}>
          <AboutComponent />

        </div>


        <div  id="OurGardens" ref={ourGardensRef} >
          <GardenLayoutComponent
            book={() => scrollTo(footerRef.current, true)}
            value="ew"
          />

        </div>
        <div id="Amenities" ref={amenitiesRef} >
          <AmenitiesComponent />

        </div>


        <GalleryComponent />
        <div id="Footer" ref={footerRef} >
          <FooterComponent />
        </div>
      </div>


    </div>
  );
}

export default App;
