import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavbarP from '../components/navbar-p'
import Card4 from '../components/card4'
import Mark from '../components/mark'

const Prices = (props) => {
  return (
    <>
      <div className="prices-container1">
        <Head>
          <title>Prices - Rinsee</title>
          <meta property="og:title" content="Prices - Rinsee" />
        </Head>
        <NavbarP
          brandingLogo="/external/logo-200w.png"
          rootClassName="navbar-proot-class-name"
        ></NavbarP>
        <section className="prices-section1">
          <div className="prices-hero">
            <div className="prices-content1">
              <main className="prices-main1">
                <header className="prices-header1">
                  <h1 className="prices-heading1">
                    Laundry at Affordable Prices
                  </h1>
                </header>
                <div className="prices-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="prices-link10"
                  >
                    <div className="prices-get-started1 button">
                      <span className="prices-text10">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="prices-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="prices-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="prices-section2">
          <section className="prices-note1">
            <div className="prices-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name36"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name37"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name38"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name39"
              ></Card4>
            </div>
            <div className="prices-content2">
              <main className="prices-main2">
                <header className="prices-caption1">
                  <span className="prices-section3 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="prices-heading2">
                  <header className="prices-header2">
                    <h2 className="section-heading prices-heading3">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="prices-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                target="_blank"
                rel="noreferrer noopener"
                className="prices-link11"
              >
                <div className="prices-get-started2 button">
                  <span className="prices-text11">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="prices-section4">
          <section className="prices-note2">
            <div className="prices-container2">
              <div className="prices-container3">
                <Script
                  html={`<style>
  .tablink {
    background-color: #555;
    color: white;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    width: 25%;
    text-align: center;
  }

  .tablink:hover {
    background-color: #c6ff4b;
  }

  /* Tab content styles */
  .tabcontent {
    display: none;

    height: calc(
      100% - 56px
    ); /* Adjust height considering the tab buttons height */
    box-sizing: border-box; /* Include padding in height calculation */
    background-color: inherit;
  }

  /* Specific styles for tab content backgrounds */
  #Home {
    background-color: inherit;
  }
  #News {
    background-color: inherit;
  }
  #Contact {
    background-color: inherit;
  }
  #About {
    background-color: inherit;
  }

  /* Container for scrollable table */
  .table-container {
    height: 400px; /* Adjust height as needed */
    overflow-y: auto; /* Enables vertical scrolling */
    margin-top: 20px; /* Space between the table and tabs */
    /* Optional: Adds a border around the scrollable area */
    padding: 10px; /* Optional: Adds padding inside the scrollable area */
    background-color: inherit; /* Optional: Ensures the background color is white for better visibility */
  }

  /* Table styling */
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px; /* Space between rows */
    height: 100%;
  }

  td {
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 25px; /* Optional: Adds a white background for a cleaner look */
  }

  /* Container for item with image, name, and price */
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  /* Left section containing image and name */
  .left-section {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  /* Circle container to display images in a circular shape */
  .circle-container {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Styling for the price section */
  .price {
    font-size: 14px;
    color: #555;
    margin-left: auto;
    white-space: nowrap;
    margin-right: 10px;
  }
  .container {
    display: flex;
    border: 1px solid inherit;
    background-color: #fff;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }

  .main-tabs {
    display: flex;
    flex-direction: column;
    width: 20%;
    border-right: 1px solid inherit;
    gap: 10px;
    background: inherit;
  }

  .main-tab {
    padding: 10px;
    border: none;
    background: #e0e0e0;
    cursor: pointer;
    text-align: left;
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-radius: 25px;
  }

  .main-tab.active {
    background-color: #d0d0d0;
    font-weight: bold;
  }

  .sub-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .sub-tabs {
    display: flex;
    padding: 10px;
    gap: 20px;
  }

  .sub-tab-content {
    display: none;
  }

  .sub-tab-content.active {
    display: flex;
  }

  .sub-tab {
    padding: 8px;
    border: none;
    background: #f1f1f1;
    cursor: pointer;
    margin-right: 5px;
    border-radius: 24px;
  }

  .sub-tab.active {
    background-color: #0074bc;
  }

  .content {
    display: flex;
    padding: 10px;
    flex: 1;
  }

  .content-item {
    display: none;
  }

  .content-item.active {
    display: block;
    flex: 1;
  }

  .content-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
  }

  .content-table th,
  .content-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .content-table th {
    background-color: inherit;
  }
  .main-tab.tab1 {
    background-color: #f2a0a1; /* Light red */
  }
  .main-tab.tab2 {
    background-color: #a0d2f2; /* Light blue */
  }
  .main-tab.tab3 {
    background-color: #a0f2a0; /* Light blue */
  }
  .main-tab.tab2 {
    background-color: #a0d2f2; /* Light blue */
  }
</style>

<!-- Tab buttons -->
<div class="container">
  <div class="main-tabs">
    <button class="main-tab tab1 active" onclick="showSubTab('tab1')">
      Wash + Fold
    </button>
    <button class="main-tab tab2" onclick="showSubTab('tab2')">
      Wash + Iron
    </button>
    <button class="main-tab tab3" onclick="showSubTab('tab3')">
      Steam Iron
    </button>
    <button class="main-tab tab4" onclick="showSubTab('tab4')">
      Dry Clean
    </button>
  </div>
  <div class="sub-container">
    <div class="sub-tabs">
      <div id="tab1" class="sub-tab-content active">
        <button class="sub-tab active" onclick="showContent('content1')">
          Men
        </button>
        <button class="sub-tab" onclick="showContent('content2')">Women</button>
        <button class="sub-tab" onclick="showContent('content3')">Kids</button>
        <button class="sub-tab" onclick="showContent('content4')">
          Household
        </button>
      </div>
      <div id="tab2" class="sub-tab-content">
        <button class="sub-tab active" onclick="showContent('content5')">
          Men
        </button>
        <button class="sub-tab" onclick="showContent('content6')">Women</button>
        <button class="sub-tab" onclick="showContent('content7')">Kids</button>
        <button class="sub-tab" onclick="showContent('content8')">
          Household
        </button>
      </div>
      <div id="tab3" class="sub-tab-content">
        <button class="sub-tab active" onclick="showContent('content9')">
          Men
        </button>
        <button class="sub-tab" onclick="showContent('content10')">
          Women
        </button>
        <button class="sub-tab" onclick="showContent('content11')">Kids</button>
        <button class="sub-tab" onclick="showContent('content12')">
          Household
        </button>
      </div>
      <div id="tab4" class="sub-tab-content">
        <button class="sub-tab active" onclick="showContent('content13')">
          Men
        </button>
        <button class="sub-tab" onclick="showContent('content14')">
          Women
        </button>
        <button class="sub-tab" onclick="showContent('content15')">Kids</button>
        <button class="sub-tab" onclick="showContent('content16')">
          Household
        </button>
      </div>
    </div>
    <div class="content">
      <div id="content1" class="content-item active">
        <!-- Content for Sub Tab 1-1 with Product Table -->
        <div class="table-container">
          <table>
            <tr>
              <td>
                <div class="item-container">
                  <!-- Left section with image and name -->
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shirt Half Standard Pack</div>
                  </div>
                  <!-- Right section with price -->
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <!-- Example rows with image, name, and price -->
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">T-Shirt Half Standard Pack</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Trousers Standard Pack</div>
                  </div>
                  <div class="price">₹40</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jeans Standard Pack</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shorts Standard Pack</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jacket Hanger Pack</div>
                  </div>
                  <div class="price">₹150</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Half Jacket Standard Pack</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Sweater Premium Pack</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Kurta Standard Pack</div>
                  </div>
                  <div class="price">₹40</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Churidar/Pyjama Standard Pk</div>
                  </div>
                  <div class="price">₹40</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Sweatshirt Standard Pack</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Trackpant Standard Pack</div>
                  </div>
                  <div class="price">₹40</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Muffler</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bathrobe Standard Pack</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Dhoti Standard Pack</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">T-Shirt Full Standard Pack</div>
                  </div>
                  <div class="price">₹35</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shirt Full Standard Pack</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="content2" class="content-item">
        <div class="table-container">
          <table>
            <tr>
              <td>
                <div class="item-container">
                  <!-- Left section with image and name -->
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shirt Half Standard Pack</div>
                  </div>
                  <!-- Right section with price -->
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <!-- Example rows with image, name, and price -->
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">T-Shirt/Top Half Standard Pack</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Trousers/Pant Standard Pack</div>
                  </div>
                  <div class="price">₹40</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jeggings Standard Pack</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shorts/Capris Standard Pack</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jacket Hanger Pack</div>
                  </div>
                  <div class="price">₹150</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Cardigan Standard Pack</div>
                  </div>
                  <div class="price">₹60</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jumpsuit Standard Pack</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Sweatshirt Standard Pack</div>
                  </div>
                  <div class="price">₹60</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Salwar(bottom) Standard Pk</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Dupatta Standard Pack</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Scarf Standard Pack</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Muffler</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bathrobe Standard Pack</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Saree Plain Standard Pack</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Saree - Zaree Standard Pack</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blouse Standard Pack</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Peticoat Standard Pack</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shawl/Stole Plain Standard Pack</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Night Gown Standard Pack</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bathrobe Standard Pack</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Kurta Standard Pack</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Leggings Standard Pack</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shirt Full Standard Pack</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">TShirt Full Standard Pack</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="content3" class="content-item">
        <div class="table-container">
          <table>
            <tr>
              <td>
                <div class="item-container">
                  <!-- Left section with image and name -->
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shirt</div>
                  </div>
                  <!-- Right section with price -->
                  <div class="price">₹15</div>
                </div>
              </td>
            </tr>
            <!-- Example rows with image, name, and price -->
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">T-Shirt</div>
                  </div>
                  <div class="price">₹15</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Trousers</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Dress/Frock</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Kurta</div>
                  </div>
                  <div class="price">₹15</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Jumpsuit</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Sweater</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Shorts</div>
                  </div>
                  <div class="price">₹15</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="content4" class="content-item">
        <div class="table-container">
          <table>
            <tr>
              <td>
                <div class="item-container">
                  <!-- Left section with image and name -->
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Apron</div>
                  </div>
                  <!-- Right section with price -->
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <!-- Example rows with image, name, and price -->
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Single</div>
                  </div>
                  <div class="price">₹35</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Double</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Cover Single</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Cover Double</div>
                  </div>
                  <div class="price">₹70</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Pillow Cover Single</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Single</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Double</div>
                  </div>
                  <div class="price">₹125</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Cover Single</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Cover Double</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Quilt Single</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Quilt Double</div>
                  </div>
                  <div class="price">₹125</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Table Cloth (Small)</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Single Fitted</div>
                  </div>
                  <div class="price">₹45</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Double Fitted</div>
                  </div>
                  <div class="price">₹60</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Table Cloth (Large)</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="content5" class="content-item">
        <div class="table-container">
          <table>
            <tr>
              <td>
                <div class="item-container">
                  <!-- Left section with image and name -->
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Apron</div>
                  </div>
                  <!-- Right section with price -->
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <!-- Example rows with image, name, and price -->
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Single</div>
                  </div>
                  <div class="price">₹35</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Double</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Cover Single</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Cover Double</div>
                  </div>
                  <div class="price">₹70</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Pillow Cover Single</div>
                  </div>
                  <div class="price">₹20</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Single</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Double</div>
                  </div>
                  <div class="price">₹125</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Cover Single</div>
                  </div>
                  <div class="price">₹50</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Blanket Cover Double</div>
                  </div>
                  <div class="price">₹75</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Quilt Single</div>
                  </div>
                  <div class="price">₹100</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Quilt Double</div>
                  </div>
                  <div class="price">₹125</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Table Cloth (Small)</div>
                  </div>
                  <div class="price">₹25</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Single Fitted</div>
                  </div>
                  <div class="price">₹45</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Bed Sheet Double Fitted</div>
                  </div>
                  <div class="price">₹60</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="item-container">
                  <div class="left-section">
                    <div class="circle-container">
                      <img
                        src="https://via.placeholder.com/150"
                        alt="Product Image"
                      />
                    </div>
                    <div class="name">Table Cloth (Large)</div>
                  </div>
                  <div class="price">₹30</div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    showSubTab("tab1"); // Set default main tab
    showContent("content1"); // Set default sub-tab for the default main tab
  });

  function showSubTab(tabId) {
    const mainTabs = document.querySelectorAll(".main-tab");
    const subTabContents = document.querySelectorAll(".sub-tab-content");

    mainTabs.forEach((tab) => tab.classList.remove("active"));
    subTabContents.forEach((content) => content.classList.remove("active"));

    const selectedMainTab = document.querySelector(
      \`.main-tab[onclick="showSubTab('\${tabId}')"]\`
    );
    selectedMainTab.classList.add("active");
    const selectedSubTabContent = document.getElementById(tabId);
    selectedSubTabContent.classList.add("active");

    // Automatically select the first sub-tab of the selected main tab
    const firstSubTab = selectedSubTabContent.querySelector(".sub-tab");
    if (firstSubTab) {
      showContent(firstSubTab.getAttribute("onclick").split("'")[1]);
    }
  }

  function showContent(contentId) {
    const subTabs = document.querySelectorAll(".sub-tab");
    const contentItems = document.querySelectorAll(".content-item");

    subTabs.forEach((tab) => tab.classList.remove("active"));
    contentItems.forEach((content) => content.classList.remove("active"));

    document
      .querySelector(\`.sub-tab[onclick="showContent('\${contentId}')"]\`)
      .classList.add("active");
    document.getElementById(contentId).classList.add("active");
  }
</script>
`}
                ></Script>
              </div>
            </div>
            <div className="prices-content3">
              <main className="prices-main3">
                <header className="prices-caption2">
                  <span className="prices-section5 section-head">
                    Affordable Prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1P9223aocYRuS_xNc6LUhOL3agtRNbevc"
                target="_blank"
                rel="noreferrer noopener"
                className="prices-link12"
              >
                <div className="prices-get-started3 button">
                  <span className="prices-text12">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="prices-section6">
          <section className="prices-note3">
            <div className="prices-content4">
              <main className="prices-main4">
                <header className="prices-caption3">
                  <span className="prices-section7 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="prices-heading4">
                  <header className="prices-header3">
                    <h2 className="prices-heading5 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="prices-footer">
          <div className="prices-content5">
            <main className="prices-main-content">
              <div className="prices-content6">
                <header className="prices-main5">
                  <div className="prices-header4">
                    <img
                      alt="Dry Clean"
                      src="/external/logo-200w.png"
                      className="prices-branding"
                    />
                    <span className="prices-text13">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="prices-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="prices-link13"
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
                      className="prices-link14"
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
                      className="prices-link15"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="prices-categories">
                  <div className="prices-category1">
                    <div className="prices-header5">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="prices-links1">
                      <span className="footer-link">About</span>
                      <a href="#home" className="prices-text16 footer-link">
                        Home
                      </a>
                      <a href="#Faq" className="prices-text17 footer-link">
                        FAQs
                      </a>
                      <Link href="/termsand-conditions">
                        <a className="prices-link16 footer-link">
                          <span>Terms</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="prices-category2">
                    <div className="prices-header6">
                      <span className="footer-header">Services</span>
                    </div>
                    <div className="prices-links2">
                      <Link href="/wash-fold">
                        <a className="prices-link17 footer-link">
                          Wash &amp; Fold
                        </a>
                      </Link>
                      <Link href="/wash-iron">
                        <a className="prices-link18 footer-link">
                          Wash &amp; Iron
                        </a>
                      </Link>
                      <Link href="/steam-iron">
                        <a className="prices-link19 footer-link">Steam Iron</a>
                      </Link>
                      <Link href="/dry-clean">
                        <a className="prices-link20 footer-link">
                          <span>Dry Clean</span>
                          <br></br>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="prices-category3">
                    <div className="prices-header7">
                      <span className="footer-header">Get in touch</span>
                    </div>
                    <div className="prices-links3">
                      <span className="footer-link">
                      <span>Address : TRICKERR FINOO PRIVATE LIMITED , 60, Chandu Park, East Delhi, Krishna Nagar, Delhi, India, 110051</span>
                      <br></br>
                        <span>Email : jatindua2001@gmail.com</span>
                        <br></br>
                        <span>Contact: 7428160047 | 8527064439</span>
                        <br></br>
                        <span>TRICKERR FINOO PRIVATE LIMITED</span>
                      </span>
                    </div>
                  </div>
                  <div className="prices-category4">
                    <div className="prices-header8">
                      <span className="footer-header">About Us</span>
                    </div>
                    <div className="prices-links4">
                      <span className="prices-text35 footer-link">
                        <span>
                          We at Rinsee are dedicated to saving time, effort, and
                          precious resources for all our delighted customers who
                          seek the best laundry service. With exciting ideas
                          that have been spinning in our heads, we are thrilled
                          to introduce you to our compelling and innovative
                          services, including the convenient wash and fold
                          laundry service near me, designed to meet your needs
                          effortlessly.
                        </span>
                        <span>Readmore</span>
                        <br></br>
                      </span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="prices-copyright1"></section>
            </main>
            <main className="prices-subscribe"></main>
            <section className="prices-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .prices-container1 {
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
          .prices-section1 {
            width: 100%;
            height: 105%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .prices-hero {
            width: 100%;
            display: flex;
            max-width: 1100px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .prices-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .prices-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .prices-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            text-align: left;
            font-family: 'Poppins';
            font-weight: 600;
          }
          .prices-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .prices-link10 {
            display: contents;
          }
          .prices-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text10 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .prices-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .prices-section2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note1 {
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
          .prices-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .prices-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section3 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-heading2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-link11 {
            display: contents;
          }
          .prices-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text11 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .prices-section4 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 868px;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .prices-container2 {
            width: 100%;
            height: 600px;
          }
          .prices-container3 {
            display: contents;
          }
          .prices-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section5 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-link12 {
            display: contents;
          }
          .prices-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .prices-text12 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .prices-section6 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .prices-note3 {
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
          .prices-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-section7 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .prices-heading4 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-heading5 {
            text-align: center;
          }
          .prices-footer {
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
          .prices-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .prices-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-content6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .prices-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header4 {
            gap: var(--dl-space-space-unit);
            width: 255px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-branding {
            width: 120px;
            object-fit: cover;
          }
          .prices-text13 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .prices-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .prices-link13 {
            display: contents;
          }
          .prices-link14 {
            display: contents;
          }
          .prices-link15 {
            display: contents;
          }
          .prices-categories {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .prices-category1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-text16 {
            text-decoration: none;
          }
          .prices-text17 {
            text-decoration: none;
          }
          .prices-link16 {
            text-decoration: none;
          }
          .prices-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-link17 {
            text-decoration: none;
          }
          .prices-link18 {
            text-decoration: none;
          }
          .prices-link19 {
            text-decoration: none;
          }
          .prices-link20 {
            text-decoration: none;
          }
          .prices-category3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links3 {
            gap: var(--dl-space-space-unit);
            width: 240px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-category4 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-header8 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .prices-links4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-text35 {
            text-align: justify;
          }
          .prices-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .prices-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .prices-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          @media (max-width: 991px) {
            .prices-section1 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .prices-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .prices-content1 {
              position: relative;
              align-items: center;
            }
            .prices-main1 {
              align-items: center;
            }
            .prices-heading1 {
              text-align: left;
            }
            .prices-buttons {
              width: 100%;
            }
            .prices-get-started1 {
              flex: 1;
            }
            .prices-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .prices-pasted-image {
              width: 95%;
              height: auto;
            }
            .prices-section2 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .prices-section4 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-section6 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .prices-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .prices-categories {
              gap: 10px;
              flex: 1;
              width: 100%;
              grid-gap: var(--dl-space-space-twounits);
              flex-wrap: wrap;
            }
            .prices-category3 {
              width: 100%;
            }
            .prices-category4 {
              width: 100%;
              max-width: 1200px;
            }
            .prices-copyright1 {
              display: none;
            }
            .prices-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .prices-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .prices-heading1 {
              font-size: 40px;
            }
            .prices-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .prices-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .prices-note1 {
              flex-direction: column-reverse;
            }
            .prices-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .prices-note2 {
              flex-direction: column-reverse;
            }
            .prices-note3 {
              flex-direction: column-reverse;
            }
            .prices-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .prices-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .prices-categories {
              gap: var(--dl-space-space-threeunits);
              flex-wrap: wrap;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .prices-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .prices-section1 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .prices-header1 {
              align-items: flex-start;
            }
            .prices-heading1 {
              color: rgb(255, 255, 255);
              width: auto;
              font-size: 50px;
              max-width: 100%;
              align-self: flex-start;
              font-style: normal;
              text-align: center;
              font-family: Poppins;
              font-weight: 600;
            }
            .prices-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .prices-pasted-image {
              width: 95%;
              height: auto;
            }
            .prices-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .prices-heading3 {
              text-align: center;
            }
            .prices-section4 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .prices-section5 {
              color: rgb(198, 255, 75);
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .prices-section7 {
              text-align: center;
              line-height: 36px;
            }
            .prices-text13 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .prices-categories {
              flex-direction: column;
            }
            .prices-text35 {
              text-align: justify;
            }
          }
        `}
      </style>
    </>
  )
}

export default Prices
