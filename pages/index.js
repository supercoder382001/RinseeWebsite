import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Card1 from '../components/card1'
import Card2 from '../components/card2'
import Card3 from '../components/card3'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import Card7 from '../components/card7'
import Card from '../components/card'
import Card6 from '../components/card6'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import FAQ from '../components/faq'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Rinsee</title>
          <meta property="og:title" content="Rinsee" />
        </Head>
        <Navbar
          brandingLogo="/external/logo-1200w.png"
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <section id="home" className="home-section10">
          <div className="home-hero">
            <div className="home-content1">
              <main className="home-main1">
                <header className="home-header10">
                  <h1 className="home-heading10">
                    A Better You Start with Clean Clothes 
                  </h1>
                  <span className="home-caption1">
                    Laundry and dry cleaning picked up and delivered to your
                    door, hassle free and affordable dry cleaning and delivered
                    to your home or office
                  </span>
                </header>
                <div className="home-buttons1">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link10"
                  >
                    <div className="home-get-started1 button">
                      <span className="home-text10">Get started</span>
                    </div>
                  </a>
                  <div className="home-get-started2 button">
                    <span className="home-text11">View features</span>
                  </div>
                </div>
              </main>
              <div className="home-highlight">
                <div className="home-avatars">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image10 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image11 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="home-image12 avatar"
                  />
                </div>
                <label className="home-caption2">
                  Loved by 10,000+ people like you.
                </label>
              </div>
            </div>
            <div className="home-image13">
              <img
                alt="pastedImage"
                src="/external/banner-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
        </section>
        <section id="features" className="home-section11">
          <header className="home-header11">
            <h2 className="home-text12">We Collect, Clean And Deliver</h2>
            <span className="home-text13">
              Your laundry and Dry Cleaning in 24 hours
            </span>
          </header>
          <section className="home-note1">
            <div className="home-image14">
              <img
                alt="image"
                src="/external/ban1-500h.png"
                className="home-image15"
              />
            </div>
            <div className="home-content2">
              <div className="home-main2">
                <Card1
                  text={
                    <Fragment>
                      <span className="home-text14">1</span>
                    </Fragment>
                  }
                  rootClassName="card1root-class-name"
                ></Card1>
                <Card2
                  text={
                    <Fragment>
                      <span className="home-text15">
                        <span>2</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="card2root-class-name"
                ></Card2>
                <Card3
                  text={
                    <Fragment>
                      <span className="home-text18">
                        <span>3</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="card3root-class-name"
                ></Card3>
              </div>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                <div className="home-get-started3 button">
                  <span className="home-text21">Get started</span>
                </div>
              </a>
            </div>
          </section>
          <section className="home-note2">
            <div className="home-image16">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="pickup"
                rootClassName="card4root-class-name"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="wash &amp; dry"
                rootClassName="card4root-class-name3"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="fold"
                rootClassName="card4root-class-name2"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name1"
              ></Card4>
            </div>
            <div className="home-content3">
              <main className="home-main3">
                <header className="home-caption3">
                  <span className="home-section12 section-head">
                    Your Clothes&apos; Ultimate Retreat
                  </span>
                </header>
                <main className="home-heading11">
                  <header className="home-header12">
                    <h2 className="section-heading home-heading12">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="home-checkmarks">
                    <Mark
                      label="mark-how it works ?"
                      rootClassName="markroot-class-name"
                    ></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                <div className="home-get-started4 button">
                  <span className="home-text22">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="home-section13">
          <header className="home-header13">
            <h2 className="home-text23">Special Offer</h2>
            <span className="home-text24">Refer and Earn Daily</span>
          </header>
          <section className="home-note3">
            <div className="home-image17">
              <img
                alt="image"
                src="/external/ban1-500h.png"
                className="home-image18"
              />
            </div>
            <div className="home-content4">
              <div className="home-main4">
                <Card7
                  text={
                    <Fragment>
                      <span className="home-text25">
                        <span>1</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  header="refer your friend"
                  description="Share your unique code with your friend and ask them to install rinsee app"
                  rootClassName="card7root-class-name"
                ></Card7>
                <Card7
                  text={
                    <Fragment>
                      <span className="home-text28">
                        <span>2</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  header="You get"
                  description="Every time they order you get 10% upto 7 rs of their order value into your wallet"
                  rootClassName="card7root-class-name2"
                ></Card7>
                <Card7
                  text={
                    <Fragment>
                      <span className="home-text31">
                        <span>3</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  header="Your friend get"
                  description="10% off on every item on their first order"
                  rootClassName="card7root-class-name1"
                ></Card7>
              </div>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                <div className="home-get-started5 button">
                  <span className="home-text34">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="home-section14">
          <header className="home-header14">
            <header className="home-left1">
              <h2 className="home-heading13 section-heading">
                Professional Laundry Services You Can Rely On
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph1 section-description">
                So Fresh, So Clean, So You
              </p>
            </div>
          </header>
          <main className="home-cards1">
            <Card
              header="certified machinery "
              description="To prevent colour loss and shrinkage"
              rootClassName="cardroot-class-name"
            ></Card>
            <Card
              icon="/Icons/group%201314-200h.png"
              header="Experienced team"
              description="Team with excellent knowledge of fabrics and how to process them"
              rootClassName="cardroot-class-name1"
            ></Card>
            <Card
              icon="/Icons/group%201314-200h.png"
              header="Eco friendly cleaning solutions"
              description="Tough on stains, gentle on fabric"
              rootClassName="cardroot-class-name2"
            ></Card>
          </main>
        </section>
        <section className="home-section15">
          <header className="home-header15">
            <header className="home-left2">
              <h2 className="section-heading">Our Services</h2>
            </header>
            <div className="home-right2">
              <p className="home-paragraph2 section-description">
                You wear it, we clean it
              </p>
            </div>
          </header>
          <main className="home-cards2">
            <Link href="/wash-fold">
              <a className="home-link14">
                <Card6
                  header="wash + fold"
                  description="You just want spotlessly clean clothes, carefully folded and shelf-ready? well, what’s wrong with expecting that"
                  rootClassName="card6root-class-name"
                  className="home-component25"
                ></Card6>
              </a>
            </Link>
            <Link href="/wash-iron">
              <a className="home-link15">
                <Card6
                  header="Wash + Iron"
                  description="You need your clothes super clean, neatly pressed and easily stackable? sure, that’s a reasonable ask."
                  rootClassName="card6root-class-name3"
                  className="home-component26"
                ></Card6>
              </a>
            </Link>
            <Link href="/steam-iron">
              <a className="home-link16">
                <Card6
                  header="Steam iron"
                  description="You need smoothly ironed, creaselessly presented clothes, ready-to-wear? of course, that’s something you should insist on."
                  rootClassName="card6root-class-name2"
                  className="home-component27"
                ></Card6>
              </a>
            </Link>
            <Link href="/dry-clean">
              <a className="home-link17">
                <Card6
                  header="Dry clean"
                  description="You need delicately handled, professionally dry-cleaned clothes, on handy hangers? now, your premium wear does deserve that"
                  rootClassName="card6root-class-name1"
                  className="home-component28"
                ></Card6>
              </a>
            </Link>
          </main>
        </section>
        <section id="WhyUs" className="home-section16">
          <div className="home-note4">
            <div className="home-image19">
              <img
                alt="image"
                src="/external/ban2-500h.png"
                className="home-image20"
              />
            </div>
            <div className="home-content5">
              <div className="home-caption4">
                <span className="section-head">
                  Experience the Magic of Clean Clothes
                </span>
              </div>
              <div className="home-heading15">
                <div className="home-header16">
                  <h2 className="section-heading home-heading16">
                    We are working hard to earn your trust
                  </h2>
                </div>
                <Accordion
                  text="100% happiness guarantee"
                  text1="If you are not completely satisfied with the wash or dry cleaning, we will reprocess your clothes for free"
                  text2="High quality services"
                  text3="We work hard to make sure that the clothes you get back are spotless and ready for action"
                  text4="We give fast services"
                  text5="We pickup, process and deliver in less than 24 hours"
                  text41="Affordable prices for you"
                  text51="The amount we charge is equivalent to the cost you bear to get the laundry done at your home"
                  rootClassName="accordionroot-class-name"
                ></Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="home-section18">
          <div className="home-cube1">
            <div className="home-top1 side"></div>
            <div className="home-front1 side"></div>
            <div className="home-left3 side"></div>
          </div>
          <main className="home-banner">
            <div className="home-header17">
              <h2 className="section-heading home-heading17">
                Rinsee makes laundry service easy
              </h2>
              <p className="home-description1 section-description">
                Clean Beyond Compare
              </p>
            </div>
            <div className="home-buttons2">
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <div className="home-get-started6 button">
                  <span className="home-text35">Get started</span>
                </div>
              </a>
            </div>
          </main>
        </section>
        <section className="home-section19">
          <div className="home-cube2">
            <div className="home-top2 side"></div>
            <div className="home-front2 side"></div>
            <div className="home-left4 side"></div>
          </div>
          <main className="home-pricing1">
            <header className="home-header18">
              <header className="home-left5">
                <span className="section-head">Pricing</span>
                <h2 className="section-heading home-heading18">
                  Start small, think big
                </h2>
              </header>
              <div className="home-right3">
                <p className="home-paragraph3 section-description">
                  Leave the laundry to us and reclaim your time, energy, and
                  savings—so you can focus on what truly matters.
                </p>
              </div>
            </header>
            <div className="home-plans-container">
              <main className="home-plans">
                <div className="home-plan1">
                  <div className="home-details1">
                    <div className="home-header19">
                      <label className="home-name1">Starter</label>
                      <div className="home-pricing2">
                        <h1 className="home-price1">₹999</h1>
                        <span className="home-duration1">/mo</span>
                      </div>
                    </div>
                    <p className="home-description2">
                      <span className="home-text36">50 Clothes per month</span>
                      <br className="home-text37"></br>
                      <br></br>
                      <span>
                        Good for bachelors and if you want to try our service
                      </span>
                    </p>
                  </div>
                  <div className="home-buy-details1">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link19"
                    >
                      <div className="home-buy1 button">
                        <span className="home-text40">
                          <span>Start Basic</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div className="home-features1">
                      <span className="home-heading19">You will get</span>
                      <div className="home-list1">
                        <Includes
                          label="Get your clothes wash and iron"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Get your clothes wash and iron"
                          rootClassName="includesroot-class-name28"
                        ></Includes>
                        <Includes
                          label="Every week free pickup and drop"
                          rootClassName="includesroot-class-name22"
                        ></Includes>
                        <Includes
                          label="Reschedule your pickup"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="You can give us 50 clothes per month"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Premium laundry"
                          rootClassName="includesroot-class-name21"
                        ></Includes>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-plan2">
                  <div className="home-details2">
                    <div className="home-header20">
                      <label className="home-name2">Professional</label>
                      <div className="home-pricing3">
                        <h1 className="home-price2">₹1499</h1>
                        <span className="home-duration2">/mo</span>
                      </div>
                    </div>
                    <p className="home-description3">
                      <span className="home-text43">75 Clothes per month</span>
                      <br className="home-text44"></br>
                      <br></br>
                      <span>
                        Good for Couples and if you want to try our service 
                      </span>
                    </p>
                  </div>
                  <div className="home-buy-details2">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link20"
                    >
                      <div className="home-buy2 button">
                        <span className="home-text47">
                          <span>Start Professional</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div className="home-features2">
                      <span className="home-heading20">You will get</span>
                      <div className="home-list2">
                        <Includes
                          label="Set of sheet free"
                          rootClassName="includesroot-class-name23"
                        ></Includes>
                        <Includes
                          label="Get your clothes wash and iron"
                          rootClassName="includesroot-class-name29"
                        ></Includes>
                        <Includes
                          label="Every week free pickup and drop"
                          rootClassName="includesroot-class-name24"
                        ></Includes>
                        <Includes
                          label="Reschedule your pickup"
                          rootClassName="includesroot-class-name25"
                        ></Includes>
                        <Includes
                          label="You can give us 75 clothes per month"
                          rootClassName="includesroot-class-name26"
                        ></Includes>
                        <Includes
                          label="Express 24 hrs delivery"
                          rootClassName="includesroot-class-name27"
                        ></Includes>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-plan3">
                  <div className="home-details3">
                    <div className="home-header21">
                      <label className="home-name3">Enterprise</label>
                      <div className="home-pricing4">
                        <span className="home-price3">₹2099</span>
                        <span className="home-duration3">/mo</span>
                      </div>
                    </div>
                    <p className="home-description4">
                      <span className="home-text50">130 Clothes per month</span>
                      <br className="home-text51"></br>
                      <br></br>
                      <span>
                        Good for family and if you want to try our service
                      </span>
                    </p>
                  </div>
                  <div className="home-buy-details3">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link21"
                    >
                      <div className="home-buy3 button">
                        <span className="home-text54">
                          <span>Start Enterprise</span>
                          <br></br>
                        </span>
                      </div>
                    </a>
                    <div className="home-features3">
                      <span className="home-heading21">You will get</span>
                      <div className="home-list3">
                        <Includes
                          label="2 set of sheet free"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Get your clothes wash and iron"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Reschedule your pickup"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Every week free pickup and drop"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="You can give us 100 clothes per month"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                        <Includes
                          label="Express 24 hrs delivery"
                          rootClassName="includesroot-class-name"
                        ></Includes>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </main>
          <div className="home-help">
            <span className="home-text57">
              <span>Need any help?</span>
              <br></br>
            </span>
            <div className="home-contact-support">
              <p className="home-text60">Contact support -&gt;</p>
            </div>
          </div>
        </section>
        <section id="Faq" className="home-section21">
          <header className="home-header22">
            <span className="section-head">FAQ</span>
            <h2 className="home-heading22 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="home-accordion">
            <FAQ rootClassName="fa-qroot-class-name"></FAQ>
          </main>
        </section>
        <section className="home-section23">
          <main className="home-content6">
            <header className="home-header23">
              <h2 className="section-heading">
                Stop searching online for Laundry and use Rinsee app!
              </h2>
              <div className="home-buttons3">
                <div className="home-ios button">
                  <img
                    alt="image"
                    src="/Icons/apple-200w.png"
                    className="home-icon1"
                  />
                  <span className="home-text61">Download for iOS</span>
                </div>
                <a
                  href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link22"
                >
                  <div className="home-android button">
                    <img
                      alt="image"
                      src="/Icons/android-200h.png"
                      className="home-icon2"
                    />
                    <span className="home-text62">Download for Android</span>
                  </div>
                </a>
              </div>
            </header>
            <img
              alt="image"
              src="/external/logo-1200w.png"
              className="home-image21"
            />
          </main>
        </section>
        <footer className="home-footer">
          <div className="home-content7">
            <main className="home-main-content">
              <div className="home-content8">
                <header className="home-main5">
                  <div className="home-header24">
                    <img
                      alt="image"
                      src="/external/logo-1200w.png"
                      className="home-branding"
                    />
                    <span className="home-text63">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="home-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link23"
                    >
                      <img
                        alt="image"
                        src="/Icons/linkedin-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link24"
                    >
                      <img
                        alt="image"
                        src="/Icons/instagram-200h.png"
                        className="social"
                      />
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link25"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header25">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="home-links">
                      <span className="footer-link">About</span>
                      <a href="#home" className="home-text66 footer-link">
                        Home
                      </a>
                      <a href="#Faq" className="home-text67 footer-link">
                        FAQs
                      </a>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright1"></section>
            </main>
            <main className="home-subscribe"></main>
            <section className="home-copyright2"></section>
          </div>
        </footer>
        <div>
          <div className="home-container3">
            <Script
              html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-section10 {
            width: 100%;
            height: 105%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header10 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading10 {
            color: rgb(255, 255, 255);
            font-size: 60px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-caption1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link10 {
            display: contents;
          }
          .home-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text10 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-get-started2 {
            background-color: #2a2a2a;
          }
          .home-text11 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-image10 {
            left: 0px;
            position: absolute;
          }
          .home-image11 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
          }
          .home-image12 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
          }
          .home-caption2 {
            color: rgb(255, 255, 255);
            font-family: Poppins;
            line-height: 24px;
          }
          .home-image13 {
            width: 457px;
            height: 534px;
            align-items: center;
            justify-content: center;
          }
          .home-pasted-image {
            width: 100%;
            height: 546px;
          }
          .home-section11 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header11 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text13 {
            color: #ffffff;
            font-size: 35px;
            font-family: 'Poppins';
          }
          .home-note1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image14 {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image15 {
            width: 470px;
            height: 440px;
            object-fit: inherit;
            border-radius: var(--dl-radius-radius-buttonradius);
          }
          .home-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text14 {
            display: inline-block;
            font-size: 24px;
          }
          .home-text15 {
            display: inline-block;
            font-size: 24px;
          }
          .home-text18 {
            display: inline-block;
            font-size: 24px;
          }
          .home-link11 {
            display: contents;
          }
          .home-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text21 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .home-image16 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-section12 {
            color: rgb(198, 255, 75);
          }
          .home-heading11 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header12 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-checkmarks {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link12 {
            display: contents;
          }
          .home-get-started4 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text22 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section13 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-header13 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-text24 {
            color: rgb(255, 255, 255);
            font-size: 35px;
            font-family: 'Poppins';
          }
          .home-note3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image17 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-image18 {
            width: 470px;
            height: 440px;
            object-fit: inherit;
            border-radius: var(--dl-radius-radius-buttonradius);
          }
          .home-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text25 {
            display: inline-block;
            font-size: 24px;
          }
          .home-text28 {
            display: inline-block;
            font-size: 24px;
          }
          .home-text31 {
            display: inline-block;
            font-size: 24px;
          }
          .home-link13 {
            display: contents;
          }
          .home-get-started5 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text34 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section14 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header14 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading13 {
            text-align: center;
          }
          .home-right1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph1 {
            width: 100%;
            font-size: 34px;
            max-width: 480px;
          }
          .home-cards1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section15 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header15 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph2 {
            font-size: 34px;
          }
          .home-cards2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link14 {
            display: contents;
          }
          .home-component25 {
            text-decoration: none;
          }
          .home-link15 {
            display: contents;
          }
          .home-component26 {
            text-decoration: none;
          }
          .home-link16 {
            display: contents;
          }
          .home-component27 {
            text-decoration: none;
          }
          .home-link17 {
            display: contents;
          }
          .home-component28 {
            text-decoration: none;
          }
          .home-section16 {
            gap: var(--dl-space-space-sixunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-note4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row-reverse;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-image19 {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image20 {
            width: 435px;
            height: 436px;
            object-fit: contain;
            border-radius: var(--dl-radius-radius-buttonradius);
          }
          .home-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption4 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading15 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-section18 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube1 {
            top: 20px;
            left: 0px;
            width: 120px;
            height: 120px;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(25deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top1 {
            transform: translateZ(-120px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front1 {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left3 {
            width: 120px;
            transform: translateZ(-120px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            justify-content: space-between;
            background-color: #292929;
          }
          .home-header17 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-description1 {
            font-size: 20px;
            line-height: 30px;
          }
          .home-buttons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-link18 {
            display: contents;
          }
          .home-get-started6 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text35 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
            white-space: nowrap;
          }
          .home-section19 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-cube2 {
            right: -150px;
            width: 210px;
            bottom: -80px;
            height: 210px;
            margin: auto;
            display: flex;
            position: absolute;
            transform: rotateX(240deg) rotateY(50deg) rotateZ(-110deg);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            transform-style: preserve-3d;
          }
          .home-top2 {
            transform: translateZ(-210px);
            background-image: linear-gradient(
              270deg,
              rgb(253, 253, 253) 0%,
              rgb(178, 178, 178) 100%
            );
          }
          .home-front2 {
            transform: rotateX(90deg);
            background: grey;
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: bottom;
          }
          .home-left4 {
            width: 210px;
            transform: translateZ(-210px) rotateY(90deg);
            background-image: linear-gradient(
              90deg,
              rgb(247, 247, 247) 0%,
              rgb(203, 203, 203) 100%
            );
            transform-origin: right;
          }
          .home-pricing1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 20px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-right3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph3 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            text-align: center;
            line-height: 32px;
          }
          .home-plans-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-plans {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 50;
            max-width: 1200px;
            align-items: center;
            border-radius: 50px;
            flex-direction: row;
            justify-content: center;
          }
          .home-plan1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price1 {
            color: #ffffff;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-duration1 {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            font-family: Poppins;
            line-height: 22px;
          }
          .home-text36 {
            font-weight: 700;
          }
          .home-buy-details1 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link19 {
            display: contents;
          }
          .home-buy1 {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text40 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading19 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name2 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing3 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price2 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-duration2 {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description3 {
            color: rgba(255, 255, 255, 0.8);
            font-family: Poppins;
            line-height: 22px;
          }
          .home-text43 {
            font-weight: 700;
          }
          .home-text44 {
            font-weight: 700;
          }
          .home-buy-details2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link20 {
            display: contents;
          }
          .home-buy2 {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text47 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading20 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-plan3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
            background-color: #292929;
          }
          .home-details3 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header21 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-name3 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-family: Poppins;
            line-height: 36px;
          }
          .home-pricing4 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-price3 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .home-duration3 {
            color: #b3b3b3;
            font-size: 20px;
            font-family: Poppins;
            line-height: 40px;
          }
          .home-description4 {
            color: rgba(255, 255, 255, 0.8);
            font-family: 'Poppins';
            line-height: 22px;
          }
          .home-text50 {
            font-weight: 700;
          }
          .home-text51 {
            font-weight: 700;
          }
          .home-buy-details3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link21 {
            display: contents;
          }
          .home-buy3 {
            width: 100%;
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .home-text54 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-features3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading21 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 28px;
          }
          .home-list3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-help {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text57 {
            color: #ffffff;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-contact-support {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-contact-support:hover {
            opacity: 0.5;
          }
          .home-text60 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section21 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header22 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading22 {
            text-align: center;
          }
          .home-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section23 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #292929;
          }
          .home-content6 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-header23 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-buttons3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-ios {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            background-color: #0f0f0f;
          }
          .home-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .home-text61 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-link22 {
            display: contents;
          }
          .home-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .home-icon2 {
            width: 16px;
            object-fit: cover;
          }
          .home-text62 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-image21 {
            right: 0px;
            width: 406px;
            bottom: 0px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .home-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-content7 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content8 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header24 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-branding {
            width: 120px;
            object-fit: cover;
          }
          .home-text63 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link23 {
            display: contents;
          }
          .home-link24 {
            display: contents;
          }
          .home-link25 {
            display: contents;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 0;
            width: var(--dl-size-size-xxlarge);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header25 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text66 {
            text-decoration: none;
          }
          .home-text67 {
            text-decoration: none;
          }
          .home-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container3 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content1 {
              position: relative;
              max-width: 95%;
              align-items: center;
            }
            .home-main1 {
              align-items: center;
            }
            .home-heading10 {
              text-align: left;
            }
            .home-caption1 {
              text-align: left;
            }
            .home-buttons1 {
              width: 100%;
            }
            .home-get-started1 {
              flex: 1;
            }
            .home-get-started2 {
              flex: 1;
            }
            .home-highlight {
              width: 100%;
              flex-direction: column;
            }
            .home-image13 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .home-pasted-image {
              width: 488px;
              height: 549px;
            }
            .home-text12 {
              text-align: center;
            }
            .home-image16 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .home-text23 {
              text-align: center;
            }
            .home-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-header14 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-cards1 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section15 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-header15 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-cards2 {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-section16 {
              padding-top: 0px;
            }
            .home-note4 {
              flex-direction: column-reverse;
            }
            .home-banner {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-buttons2 {
              width: 100%;
              flex-direction: column;
            }
            .home-get-started6 {
              width: 100%;
            }
            .home-plans {
              flex-direction: column;
            }
            .home-content6 {
              align-items: center;
              flex-direction: column;
            }
            .home-buttons3 {
              width: 100%;
            }
            .home-ios {
              flex: 1;
              justify-content: center;
            }
            .home-android {
              flex: 1;
              justify-content: center;
            }
            .home-image21 {
              position: static;
            }
            .home-content7 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-copyright1 {
              display: none;
            }
            .home-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
              max-width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading10 {
              font-size: 40px;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-get-started2 {
              display: none;
            }
            .home-caption2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-pasted-image {
              width: 474px;
              height: 530px;
            }
            .home-section11 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text12 {
              font-size: 32px;
              text-align: center;
            }
            .home-text13 {
              text-align: center;
            }
            .home-note1 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-content2 {
              align-items: center;
            }
            .home-note2 {
              flex-direction: column-reverse;
            }
            .home-image16 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .home-section13 {
              gap: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text23 {
              font-size: 32px;
              text-align: center;
            }
            .home-note3 {
              max-width: 1200px;
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-content4 {
              width: 100%;
              max-width: 600px;
              align-items: center;
            }
            .home-main4 {
              width: 100%;
            }
            .home-header14 {
              align-items: center;
            }
            .home-left1 {
              gap: var(--dl-space-space-unit);
            }
            .home-cards1 {
              max-width: 600px;
            }
            .home-header15 {
              align-items: center;
            }
            .home-left2 {
              gap: var(--dl-space-space-unit);
            }
            .home-cards2 {
              max-width: 600px;
            }
            .home-note4 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content5 {
              width: 100%;
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-header17 {
              align-items: center;
            }
            .home-heading17 {
              text-align: center;
            }
            .home-description1 {
              text-align: center;
            }
            .home-cube2 {
              right: -250px;
            }
            .home-plan1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan2 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-plan3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-help {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-section23 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-header23 {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-buttons3 {
              flex-direction: column;
            }
            .home-ios {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-content8 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-header10 {
              align-items: flex-start;
            }
            .home-heading10 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 50px;
              max-width: 100%;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-caption1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-family: Poppins;
              line-height: 24px;
            }
            .home-image13 {
              width: 100%;
              height: 627px;
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-pasted-image {
              width: 100%;
              height: 506px;
            }
            .home-header11 {
              align-items: flex-start;
            }
            .home-text12 {
              text-align: center;
            }
            .home-image14 {
              width: 450px;
              height: 430px;
            }
            .home-image15 {
              width: 364px;
              height: 384px;
            }
            .home-content2 {
              align-items: center;
              justify-content: center;
            }
            .home-image16 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .home-heading11 {
              align-self: center;
              align-items: center;
            }
            .home-heading12 {
              text-align: center;
            }
            .home-header13 {
              align-items: center;
            }
            .home-text23 {
              text-align: left;
            }
            .home-note3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-image17 {
              width: 450px;
              height: 430px;
            }
            .home-image18 {
              width: 364px;
              height: 384px;
            }
            .home-content4 {
              align-items: center;
              justify-content: center;
            }
            .home-header14 {
              align-items: center;
              justify-content: center;
            }
            .home-paragraph1 {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
              text-align: center;
            }
            .home-header15 {
              align-items: center;
              justify-content: center;
            }
            .home-paragraph2 {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
              text-align: center;
            }
            .home-image20 {
              width: 375px;
              height: 399px;
            }
            .home-heading16 {
              text-align: center;
            }
            .home-description1 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-pricing1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading18 {
              font-size: 32px;
              text-align: center;
            }
            .home-paragraph3 {
              font-size: 16px;
              line-height: 32px;
            }
            .home-name1 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-family: Poppins;
              line-height: 36px;
            }
            .home-price1 {
              color: rgb(255, 255, 255);
              font-size: 40px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-description2 {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-text36 {
              font-size: 30px;
              font-weight: 700;
              line-height: 28px;
              text-transform: capitalize;
            }
            .home-text37 {
              font-weight: 700;
              line-height: 28px;
              text-transform: capitalize;
            }
            .home-name2 {
              color: rgb(255, 255, 255);
              font-size: 24px;
              font-family: Poppins;
              line-height: 36px;
            }
            .home-price2 {
              color: rgb(255, 255, 255);
              font-size: 40px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-description3 {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-text43 {
              font-size: 25px;
              font-weight: 700;
            }
            .home-text44 {
              font-size: 25px;
              font-weight: 700;
            }
            .home-description4 {
              color: rgba(255, 255, 255, 0.8);
              font-family: Poppins;
              line-height: 22px;
            }
            .home-text50 {
              font-size: 25px;
              font-weight: 700;
            }
            .home-image21 {
              width: 100%;
            }
            .home-text63 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
