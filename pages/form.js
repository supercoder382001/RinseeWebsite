import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Card6 from '../components/card6'

function submit() {
  const queryParams = new URLSearchParams(window.location.search);
  const value = queryParams.get('userRef');
    try {
      const response = fetch('https://zmvjylvafmgqpxqtrblc.supabase.co/rest/v1/rpc/ReferredUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptdmp5bHZhZm1ncXB4cXRyYmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0ODk4MTIsImV4cCI6MjAzOTA2NTgxMn0.-qK5cu9zPoVtcpGAf14-XuJ55SMYXpfpXXgp6lz-Z4M',
          'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inptdmp5bHZhZm1ncXB4cXRyYmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0ODk4MTIsImV4cCI6MjAzOTA2NTgxMn0.-qK5cu9zPoVtcpGAf14-XuJ55SMYXpfpXXgp6lz-Z4M'
        },
        body: JSON.stringify({
          name: namer.value,
          mobilenumber: mobile.value,
          gender: gender.value,
          email: email.value,
          referid:value
        })
      })   
      if (response.code==101) {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU';
      } else {
        console.error('Error:', response);
      }  } 
    catch (error) {
      console.error('Error:', error);
    }  
  } 

const Form = (props) => {
  const [namer, setNamer] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setmobile] = useState('');
  const [gender, setGender] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'email') {
      setEmail(value);
    } else if (id === 'namer') {
      setNamer(value);
    } else if (id === 'mobile') {
      setmobile(value);
    } else if (id === 'gender') {
      setGender(value);
    }
  };

  return (
    <>
      <div className="form-container1">
        <Head>
          <title>Form - Rinsee</title>
          <meta property="og:title" content="Form - Rinsee" />
        </Head>
        <section id="home" className="form-section1">
          <div className="form-hero1">
            <div className="form-content1">
              <img
                src="/external/logo%20back-500w.png"
                alt="image"
                className="form-image1"
              />
            </div>
          </div>
          <div className="form-hero2">
            <div className="form-content2">
              <main className="form-main1">
                <header className="form-header1">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="namer"
                    value={namer}
                    required="true"
                    className="form-textinput1 input namer"
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    max="10"
                    required={true}
                    placeholder="Enter your Mobile Number"
                    value={mobile}
                    id="mobile"
                    className="form-textinput2 input"
                    onChange={handleInputChange}
                  />
                  <input
                    type="email"
                    required={true}
                    placeholder="Enter your email id"
                    value={email}
                    id="email"
                    className="form-textinput3 input"
                    onChange={handleInputChange}
                  />
                  <select 
                  name="Gender"
                  required={true}
                  id="gender"
                  value={gender}
                  className="form-select"
                  onChange={handleInputChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Option 3">Others</option>
                  </select>
                </header>
                <div className="form-buttons1">
                    <div className="form-get-started button" onClick={submit}>
                      <span className="form-text1">Get started</span>
                    </div>
                </div>
              </main>
              <div className="form-highlight">
                <div className="form-avatars">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="form-image2 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="form-image3 avatar"
                  />
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                    className="form-image4 avatar"
                  />
                </div>
                <label className="form-caption">
                  Loved by 10,000+ people like you.
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="form-section2">
          <header className="form-header2">
            <header className="form-left">
              <h2 className="section-heading">Our Services</h2>
            </header>
            <div className="form-right">
              <p className="form-paragraph section-description">
                You wear it, we clean it
              </p>
            </div>
          </header>
          <main className="form-cards">
            <Card6
              header="card6-wash + fold"
              description="card6-you just want spotlessly clean clothes, carefully folded and shelf-ready? well, what’s wrong with expecting that"
              rootClassName="card6root-class-name4"
              className="form-component1"
            ></Card6>
            <Card6
              header="card6-wash + iron"
              description="card6-you need your clothes super clean, neatly pressed and easily stackable? sure, that’s a reasonable ask."
              rootClassName="card6root-class-name5"
              className="form-component2"
            ></Card6>
            <Card6
              header="card6-steam iron"
              description="card6-you need smoothly ironed, creaselessly presented clothes, ready-to-wear? of course, that’s something you should insist on."
              rootClassName="card6root-class-name6"
              className="form-component3"
            ></Card6>
            <Card6
              header="card6-dry clean"
              description="card6-you need delicately handled, professionally dry-cleaned clothes, on handy hangers? now, your premium wear does deserve that"
              rootClassName="card6root-class-name7"
              className="form-component4"
            ></Card6>
          </main>
        </section>
        <section className="form-section3">
          <main className="form-content3">
            <header className="form-header3">
              <h2 className="section-heading">
                Stop searching online for Laundry and use Rinsee app!
              </h2>
              <div className="form-buttons2">
                <div className="form-ios button">
                  <img
                    alt="image"
                    src="/Icons/apple-200w.png"
                    className="form-icon1"
                  />
                  <span className="form-text2">Download for iOS</span>
                </div>
                <a
                  href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="form-link2"
                >
                  <div className="form-android button">
                    <img
                      alt="image"
                      src="/Icons/android-200h.png"
                      className="form-icon2"
                    />
                    <span className="form-text3">Download for Android</span>
                  </div>
                </a>
              </div>
            </header>
            <img
              alt="image"
              src="/external/logo-1200w.png"
              className="form-image5"
            />
          </main>
        </section>
        <footer className="form-footer">
          <div className="form-content4">
            <main className="form-main-content">
              <div className="form-content5">
                <header className="form-main2">
                  <div className="form-header4">
                    <img
                      alt="image"
                      src="/external/logo-1200w.png"
                      className="form-branding"
                    />
                    <span className="form-text4">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="form-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="form-link3"
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
                      className="form-link4"
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
                      className="form-link5"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="form-categories">
                  <div className="form-category">
                    <div className="form-header5">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="form-links">
                      <span className="footer-link">About</span>
                      <a href="#home" className="form-text7 footer-link">
                        Home
                      </a>
                      <span className="form-text8 footer-link">FAQs</span>
                      <Link href="/termsand-conditions">
                        <a className="form-link6 footer-link">Terms</a>
                      </Link>
                    </div>
                  </div>
                </header>
              </div>
              <section className="form-copyright1"></section>
            </main>
            <main className="form-subscribe"></main>
            <section className="form-copyright2"></section>
          </div>
        </footer>
        <div>
          <div className="form-container3">
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
          .form-container1 {
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
          .form-section1 {
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
          .form-hero1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .form-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .form-image1 {
            width: 428px;
            height: 654px;
            object-fit: cover;
            border-radius: 25px;
          }
          .form-hero2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .form-content2 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
          }
          .form-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .form-header1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .form-textinput1 {
            width: 100%;
            font-size: 25px;
            max-width: 700px;
          }
          .form-textinput2 {
            width: 100%;
            font-size: 25px;
            max-width: 700px;
          }
          .form-textinput3 {
            width: 100%;
            font-size: 25px;
            max-width: 700px;
          }
          .form-select {
            width: 100%;
            font-size: 25px;
            max-width: 700px;
          }
          .form-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .form-link1 {
            display: contents;
          }
          .form-get-started {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .form-text1 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .form-highlight {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .form-avatars {
            width: 115px;
            height: var(--dl-size-size-small);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .form-image2 {
            left: 0px;
            position: absolute;
          }
          .form-image3 {
            left: var(--dl-space-space-twounits);
            position: absolute;
            object-fit: cover;
          }
          .form-image4 {
            left: var(--dl-space-space-fourunits);
            position: absolute;
            object-fit: cover;
          }
          .form-caption {
            color: rgb(255, 255, 255);
            font-family: Poppins;
            line-height: 24px;
          }
          .form-section2 {
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
          .form-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-right {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-paragraph {
            font-size: 34px;
          }
          .form-cards {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .form-component1 {
            text-decoration: none;
          }
          .form-component2 {
            text-decoration: none;
          }
          .form-component3 {
            text-decoration: none;
          }
          .form-component4 {
            text-decoration: none;
          }
          .form-section3 {
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
          .form-content3 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .form-header3 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .form-buttons2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .form-ios {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            background-color: #0f0f0f;
          }
          .form-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .form-text2 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .form-link2 {
            display: contents;
          }
          .form-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: #0f0f0f;
          }
          .form-icon2 {
            width: 16px;
            object-fit: cover;
          }
          .form-text3 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .form-image5 {
            right: 0px;
            width: 406px;
            bottom: 0px;
            height: 450px;
            position: absolute;
            object-fit: cover;
          }
          .form-footer {
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
          .form-content4 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .form-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form-content5 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .form-main2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .form-header4 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .form-branding {
            width: 120px;
            object-fit: cover;
          }
          .form-text4 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .form-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .form-link3 {
            display: contents;
          }
          .form-link4 {
            display: contents;
          }
          .form-link5 {
            display: contents;
          }
          .form-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 0;
            width: var(--dl-size-size-xxlarge);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .form-category {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .form-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .form-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form-text7 {
            text-decoration: none;
          }
          .form-text8 {
            text-decoration: none;
          }
          .form-link6 {
            text-decoration: none;
          }
          .form-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .form-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .form-container3 {
            display: contents;
          }
          @media (max-width: 991px) {
            .form-section1 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .form-hero1 {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .form-content1 {
              position: relative;
              max-width: 95%;
              align-items: center;
            }
            .form-hero2 {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .form-content2 {
              position: relative;
              max-width: 95%;
              align-items: center;
            }
            .form-main1 {
              align-items: center;
            }
            .form-buttons1 {
              width: 100%;
              justify-content: center;
            }
            .form-get-started {
              flex: 1;
              max-width: var(--dl-size-size-xlarge);
            }
            .form-highlight {
              width: 100%;
              flex-direction: column;
            }
            .form-section2 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .form-header2 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .form-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .form-content3 {
              align-items: center;
              flex-direction: column;
            }
            .form-buttons2 {
              width: 100%;
            }
            .form-ios {
              flex: 1;
              justify-content: center;
            }
            .form-android {
              flex: 1;
              justify-content: center;
            }
            .form-image5 {
              position: static;
            }
            .form-content4 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .form-copyright1 {
              display: none;
            }
            .form-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .form-content1 {
              gap: var(--dl-space-space-threeunits);
              max-width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .form-content2 {
              gap: var(--dl-space-space-threeunits);
              max-width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .form-get-started {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .form-caption {
              font-size: 14px;
              line-height: 21px;
            }
            .form-header2 {
              align-items: center;
            }
            .form-left {
              gap: var(--dl-space-space-unit);
            }
            .form-cards {
              max-width: 600px;
            }
            .form-section3 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .form-header3 {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .form-buttons2 {
              flex-direction: column;
            }
            .form-ios {
              flex: 0 0 auto;
              width: 100%;
            }
            .form-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .form-content5 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .form-main2 {
              gap: var(--dl-space-space-twounits);
            }
            .form-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .form-section1 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .form-hero2 {
              margin-top: var(--dl-space-space-unit);
            }
            .form-content2 {
              margin-top: var(--dl-space-space-unit);
            }
            .form-main1 {
              width: 100%;
            }
            .form-header1 {
              width: 100%;
              height: 190px;
              align-items: flex-start;
            }
            .form-textinput1 {
              width: 100%;
            }
            .form-textinput2 {
              width: 100%;
            }
            .form-textinput3 {
              width: 100%;
            }
            .form-select {
              width: 100%;
            }
            .form-header2 {
              align-items: center;
              justify-content: center;
            }
            .form-paragraph {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
              text-align: center;
            }
            .form-image5 {
              width: 100%;
            }
            .form-text4 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .form-link6 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Form
