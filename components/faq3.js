import React from 'react'

import PropTypes from 'prop-types'

const FAQ3 = (props) => {
  return (
    <>
      <div className={`faq3-accordion ${props.rootClassName} `}>
        <div
          data-role="accordion-container"
          className="faq3-element1 accordion-element"
        >
          <div className="faq3-details1">
            <span className="faq3-text10">
              What is the meaning of dry cleaning?
            </span>
            <span data-role="accordion-content" className="faq3-text11">
              There’s a reason why the term &apos;dry cleaning&apos; has become
              part of our vocabulary. The process uses a liquid solvent to clean
              clothes instead of conventional water and detergent. The solvent
              contains little or no water. It requires specialised machinery and
              expert handling, so choose the right dry cleaning service near
              you. Luckily, RINSEE covers all of Delhi … so no worry there!
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon10">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element2 accordion-element"
        >
          <div className="faq3-details2">
            <span className="faq3-text12">
              What is the importance of professional dry cleaning for your
              clothes?
            </span>
            <span data-role="accordion-content" className="faq3-text13">
              Especially when it comes to formal wear, occasion wear or delicate
              fabrics, dry cleaning helps to return garments to an
              as-good-as-new condition. People opt for dry cleaning services
              also because the process focuses on stain removal, protects
              against shrinkage, prevents loss of colour and maintains texture.
              That’s why RINSEE advanced technology works well for your
              expensive or delicate outfits.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon12">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element3 accordion-element"
        >
          <div className="faq3-details3">
            <span className="faq3-text14">
              What are the benefits of dry cleaning your clothes?
            </span>
            <span data-role="accordion-content" className="faq3-text15">
              Dry cleaning clothes is a sensible opOon if there are stains and
              odours you want removed. It is also good for apparel that are
              bulky, large and heavy. Dry cleaning restores old clothes, and
              even protects garments from moths and insects. Needless to say, at
              RINSEE we also make sure your aHre feels extra-fresh and adds
              a flawless finish to your ensemble.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon14">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element4 accordion-element"
        >
          <div className="faq3-details4">
            <span className="faq3-text16">Is dry cleaning safe?</span>
            <span data-role="accordion-content" className="faq3-text17">
              A valid question when it comes to one-of-a-kind clothes. There are
              several instances where dry cleaning may be the only option and
              yes, dry cleaning does involve chemicals. Look for a name that you
              can trust, like RINSEE, where safe dry cleaning is a norm and the
              chemicals for dry cleaning are carefully chosen and judiciously
              used.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon16">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
        <div
          data-role="accordion-container"
          className="faq3-element5 accordion-element"
        >
          <div className="faq3-details5">
            <span className="faq3-text18">
              Is ironing included in dry cleaning service?
            </span>
            <span data-role="accordion-content" className="faq3-text19">
              Yes, the final stage of the dry cleaning process does include
              finishing, pressing and steam ironing. At RINSEE, we spend
              Ome on this last mile to ensure that you get a perfect end result
              from both the dry clean and iron processes.
            </span>
          </div>
          <div data-role="accordion-icon">
            <svg viewBox="0 0 1024 1024" className="faq3-icon18">
              <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq3-accordion {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-element1 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text10 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text11 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 24px;
          }
          .faq3-icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element2 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text12 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text13 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element3 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text14 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text15 {
            color: rgb(204, 204, 204);
            text-align: justify;
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element4 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text16 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text17 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq3-element5 {
            width: 100%;
            max-width: 800px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .faq3-details5 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .faq3-text18 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 28px;
          }
          .faq3-text19 {
            color: rgb(204, 204, 204);
            font-family: 'Poppins';
            line-height: 28px;
          }
          .faq3-icon18 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }

          @media (max-width: 767px) {
            .faq3-text10 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text12 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text14 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text16 {
              font-size: 16px;
              line-height: 24px;
            }
            .faq3-text18 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .faq3-text10 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text11 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 24px;
            }
            .faq3-text12 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text13 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text15 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text16 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text17 {
              color: rgb(204, 204, 204);
              font-family: Poppins;
              line-height: 28px;
            }
            .faq3-text18 {
              color: rgb(255, 255, 255);
              font-size: 16px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              line-height: 24px;
            }
            .faq3-text19 {
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

FAQ3.defaultProps = {
  rootClassName: '',
}

FAQ3.propTypes = {
  rootClassName: PropTypes.string,
}

export default FAQ3
