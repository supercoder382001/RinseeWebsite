import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header className={`navbar-navbar ${props.rootClassName} `}>
        <img
          alt="Rinsee"
          src={props.brandingLogo}
          className="navbar-branding-logo"
        />
        <div className="navbar-nav-content">
          <div className="navbar-nav-links1">
            <a href="#features" className="navbar-link10 nav-link">
              Features
            </a>
            <a href="#WhyUs" className="navbar-link11 nav-link">
              Why us
            </a>
            <Link href="/prices">
              <a className="navbar-link13 nav-link">Prices</a>
            </Link>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started navbar-get-started1">
            <a href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU" className="navbar-text1">Get started</a>
          </div>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="navbar-image1"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile-menu">
          <div className="navbar-branding">
            <img
              src={props.brandingLogo}
              alt="Rinsee"
              className="navbar-branding-logo"
            />
            <div id="close-mobile-menu" className="navbar-container1">
              <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-nav-links2">
            <a href="#features" className="navbar-link15 nav-link">
              Features
            </a>
            <a href="#WhyUs" className="navbar-link16 nav-link">
              Why us
            </a>
            <Link href="/prices">
              <a className="navbar-link18 nav-link">Prices</a>
            </Link>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <a href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU" className="navbar-text2">Get started</a>
          </div>
        </div>
        <div>
          <div className="navbar-container3">
            <Script
              html={`<script defer>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
            ></Script>
          </div>
        </div>
      </header>
      <style jsx>
        {`
          .navbar-navbar {
            width: 85%;
            display: flex;
            opacity: 0.95;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: 13px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: 19px;
            background-color: #6d6767;
          }
          .navbar-branding-logo {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            box-sizing: inherit;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-link10 {
            text-decoration: none;
          }
          .navbar-link11 {
            text-decoration: none;
          }
          .navbar-link13 {
            text-decoration: none;
          }
          .navbar-text1 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image1 {
            width: 100px;
            object-fit: cover;
          }
          .navbar-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image2 {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-icon1 {
            width: 24px;
            height: 24px;
          }
          .navbar-nav-links2 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-link15 {
            text-decoration: none;
          }
          .navbar-link16 {
            text-decoration: none;
          }
          .navbar-link18 {
            text-decoration: none;
          }
          .navbar-text2 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          .navbar-container3 {
            display: contents;
          }
          .navbarroot-class-name {
            width: 95%;
          }
          .navbarroot-class-name1 {
            width: 95%;
          }
          .navbarroot-class-name2 {
            opacity: 0.95;
          }
          .navbarroot-class-name3 {
            opacity: 0.95;
          }
          .navbarroot-class-name4 {
            width: 95%;
          }
          .navbarroot-class-name5 {
            width: 95%;
          }
          .navbarroot-class-name6 {
            opacity: 0.95;
          }
          .navbarroot-class-name7 {
            opacity: 0.95;
          }
          .navbarroot-class-name8 {
            width: 90%;
            opacity: 0.95;
          }
          .navbarroot-class-name9 {
            width: 95%;
          }
          @media (max-width: 991px) {
            .navbar-branding-logo {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .navbar-branding-logo {
              width: 80px;
            }
            .navbar-nav-links1 {
              display: none;
            }
            .navbar-get-started1 {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image1 {
              width: 16px;
              height: 14px;
            }
            .navbar-mobile-menu {
              z-index: 100;
            }
            .navbar-branding {
              width: 100%;
            }
            .navbar-nav-links2 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              width: 95%;
              height: 107px;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-image2 {
              width: 80px;
              height: var(--dl-size-size-medium);
            }
            .navbarroot-class-name {
              height: auto;
            }
            .navbarroot-class-name1 {
              height: auto;
            }
            .navbarroot-class-name4 {
              height: auto;
            }
            .navbarroot-class-name5 {
              height: auto;
            }
            .navbarroot-class-name9 {
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/Icons/hamburger-200h.png',
  rootClassName: '',
  brandingLogo: '/Branding/planical7012-wzf.svg',
}

Navbar.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  brandingLogo: PropTypes.string,
}

export default Navbar
