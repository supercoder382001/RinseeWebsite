import React from 'react'

import PropTypes from 'prop-types'

const FAQ1 = (props) => {
  return (
    <>
      <div className={`faq1-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq1-element1 accordion-element"
        >
          <div className="faq1-details1">
            <span className="faq1-text1">What does wash &amp; fold mean ?</span>
            <span data-role="accordion-content" className="faq1-text2">
              If you’ve been searching for “wash and fold” online you’d see that
              it’s a basic laundry service where the garments are washed, dried
              and folded before being returned to you. It does not however
              include ironing or pressing. But remember that, at RINSEE,
              while we do have a wash and fold service we also have options to
              wash and iron, steam iron and even dry clean.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon1">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element2 accordion-element"
        >
          <div className="faq1-details2">
            <span className="faq1-text3">
              What is the difference between wash and fold and laundry?
            </span>
            <span data-role="accordion-content" className="faq1-text4">
              While they are often used interchangeably the phrase wash and fold
              usually refers to a laundry service offering – as opposed to
              washing clothes at home. It must be said, though,that the two
              processes are quite similar in that they involve the same process
              – wash, dry,fold the laundry to be cupboard ready. The scale,
              technology and performance factors of the machines are what make
              the difference, as RINSEE demonstrates.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon3">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element3 accordion-element"
        >
          <div className="faq1-details3">
            <span className="faq1-text5">
              Why is it important to fold laundry?
            </span>
            <span data-role="accordion-content" className="faq1-text6">
              Folding greatly reduces the number of wrinkles and creases in your
              laundry making it easy to iron and wear. Also, it reduces storage
              space, keeps the shelves more organised, even increases the
              lifespan of clothes. So when you’re looking for an option for wash
              and fold near you, RINSEE – with its reach all across
              Delhi and its 24-hour delivery – is the ideal choice.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon5">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq1-element4 accordion-element"
        >
          <div className="faq1-details4">
            <span className="faq1-text7">
              What is not considered wash and fold?
            </span>
            <span data-role="accordion-content" className="faq1-text8">
              Dry cleaning, steam ironing or pressing are not part of the wash
              and fold process. But since RINSEE has all these services as
              individual offerings, you will have no problem at all.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq1-icon7">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq1-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text1 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text2 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq1-icon1 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text4 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon3 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text6 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon5 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq1-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq1-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq1-text7 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq1-text8 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq1-icon7 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq1-text1 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text3 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text5 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq1-text7 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq1-text1 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text2 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq1-text3 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text4 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq1-text5 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text6 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq1-text7 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq1-text8 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
          }
        `}
      </style>
    </>
  )
}

FAQ1.defaultProps = {
  rootClassName: '',
}

FAQ1.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ1
