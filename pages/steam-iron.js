import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ2 from '../components/faq2'

const SteamIron = (props) => {
  return (
    <>
      <div className="steam-iron-container1">
        <Head>
          <title>SteamIron - Rinsee</title>
          <meta property="og:title" content="SteamIron - Rinsee" />
        </Head>
        <Navbar
          imageAlt="/external/logo-200w.png"
          imageSrc="/external/logo-200w.png"
          brandingLogo="/external/logo-200w.png"
          rootClassName="navbarroot-class-name6"
        ></Navbar>
        <section className="steam-iron-section10">
          <div className="steam-iron-hero">
            <div className="steam-iron-content1">
              <main className="steam-iron-main1">
                <header className="steam-iron-header1">
                  <h1 className="steam-iron-heading1">
                    Steam Iron Laundry Service
                  </h1>
                </header>
                <div className="steam-iron-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="steam-iron-link1"
                  >
                    <div className="steam-iron-get-started1 button">
                      <span className="steam-iron-text1">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="steam-iron-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="steam-iron-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="steam-iron-section11">
          <header className="steam-iron-header2">
            <header className="steam-iron-left">
              <h2 className="section-heading steam-iron-heading2">
                Steam Iron with RINSEE
              </h2>
            </header>
            <div className="steam-iron-right">
              <p className="steam-iron-paragraph section-description">
                A wrinkled blazer. A crumpled bedsheet. A twisted napkin. A
                puckered curtain. A scrunched-up pocket square. If this pile
                looks all too familiar, don’t let the wrinkles win—press pause
                and let the steam work its magic.
              </p>
            </div>
          </header>
        </section>
        <section className="steam-iron-section12">
          <section className="steam-iron-note1">
            <div className="steam-iron-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="pickup"
                rootClassName="card4root-class-name28"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; dry"
                rootClassName="card4root-class-name29"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name30"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name31"
              ></Card4>
            </div>
            <div className="steam-iron-content2">
              <main className="steam-iron-main2">
                <header className="steam-iron-caption1">
                  <span className="steam-iron-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="steam-iron-heading3">
                  <header className="steam-iron-header3">
                    <h2 className="section-heading steam-iron-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="steam-iron-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="steam-iron-link2"
              >
                <div className="steam-iron-get-started2 button">
                  <span className="steam-iron-text2">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="steam-iron-section14">
          <section className="steam-iron-note2">
            <div className="steam-iron-container2">
              <div className="steam-iron-container3">
                <Script
                  html={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tabbed Table Example</title>
<style>
  body, html {
    height: 1000px;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color:inherit;
  }

  /* Tab button styles */
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
    background-color: #C6FF4B;
  }

  /* Tab content styles */
  .tabcontent {
    display: none;
    
    height: calc(100% - 56px); /* Adjust height considering the tab buttons height */
    box-sizing: border-box; /* Include padding in height calculation */
    background-color: inherit;
  }

  /* Specific styles for tab content backgrounds */
  #Home { background-color: inherit; }
  #News { background-color: inherit; }
  #Contact { background-color: inherit; }
  #About { background-color: inherit; }

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
    height:100%;
  }

  td {
    padding: 10px;
    border: 1px solid #ccc;
    background: #fff; /* Optional: Adds a white background for a cleaner look */
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
  }
</style>
</head>
<body>

<!-- Tab buttons -->
<button class="tablink" onclick="openPage('Home', this, '#C6FF4B')" id="defaultOpen">Men</button>
<button class="tablink" onclick="openPage('News', this, '#C6FF4B')">Women</button>
<button class="tablink" onclick="openPage('Contact', this, '#C6FF4B')">Kids</button>
<button class="tablink" onclick="openPage('About', this, '#C6FF4B')">Household</button>

<!-- Tab content for Home -->
<div id="Home" class="tabcontent">
  <div class="table-container">
    <table>
      <tr>
        <td>
          <div class="item-container">
            <!-- Left section with image and name -->
            <div class="left-section">
              <div class="circle-container">
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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

<!-- Other tab content sections -->
<div id="News" class="tabcontent">
<div class="table-container">
<table>
      <tr>
        <td>
          <div class="item-container">
            <!-- Left section with image and name -->
            <div class="left-section">
              <div class="circle-container">
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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

<div id="Contact" class="tabcontent">
  <div class="table-container">
<table>
      <tr>
        <td>
          <div class="item-container">
            <!-- Left section with image and name -->
            <div class="left-section">
              <div class="circle-container">
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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

<div id="About" class="tabcontent">
<div class="table-container">
<table>
      <tr>
        <td>
          <div class="item-container">
            <!-- Left section with image and name -->
            <div class="left-section">
              <div class="circle-container">
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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
                <img src="https://via.placeholder.com/150" alt="Product Image">
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

<script>
  function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent"
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }

  // Click on the element with id="defaultOpen" to open the default tab
  document.getElementById("defaultOpen").click();
</script>

</body>
</html>
`}
                ></Script>
              </div>
            </div>
            <div className="steam-iron-content3">
              <main className="steam-iron-main3">
                <header className="steam-iron-caption2">
                  <span className="steam-iron-section15 section-head">
                    Wash and IRON prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/file/d/1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU/view?usp=drive_link"
                target="_blank"
                rel="noreferrer noopener"
                className="steam-iron-link3"
              >
                <div className="steam-iron-get-started3 button">
                  <span className="steam-iron-text3">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="steam-iron-section16">
          <header className="steam-iron-header4">
            <span className="section-head">FAQ</span>
            <h2 className="steam-iron-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="steam-iron-accordion">
            <FAQ2 rootClassName="faq2root-class-name"></FAQ2>
          </main>
        </section>
        <section className="steam-iron-section18">
          <section className="steam-iron-note3">
            <div className="steam-iron-content4">
              <main className="steam-iron-main4">
                <header className="steam-iron-caption3">
                  <span className="steam-iron-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="steam-iron-heading6">
                  <header className="steam-iron-header5">
                    <h2 className="steam-iron-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="steam-iron-footer">
          <div className="steam-iron-content5">
            <main className="steam-iron-main-content">
              <div className="steam-iron-content6">
                <header className="steam-iron-main5">
                  <div className="steam-iron-header6">
                    <img
                      alt="image"
                      src="/external/logo-200w.png"
                      className="steam-iron-branding"
                    />
                    <span className="steam-iron-text4">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="steam-iron-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="steam-iron-link4"
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
                      className="steam-iron-link5"
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
                      className="steam-iron-link6"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="steam-iron-categories">
                  <div className="steam-iron-category">
                    <div className="steam-iron-header7">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="steam-iron-links">
                      <span className="footer-link">About</span>
                      <Link href="/">
                        <a className="steam-iron-link7 footer-link">Home</a>
                      </Link>
                    </div>
                  </div>
                </header>
              </div>
              <section className="steam-iron-copyright1"></section>
            </main>
            <main className="steam-iron-subscribe"></main>
            <section className="steam-iron-copyright2">
              <span className="steam-iron-text8">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .steam-iron-container1 {
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
          .steam-iron-section10 {
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
          .steam-iron-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .steam-iron-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .steam-iron-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .steam-iron-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .steam-iron-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .steam-iron-link1 {
            display: contents;
          }
          .steam-iron-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .steam-iron-text1 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .steam-iron-section11 {
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
          .steam-iron-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-paragraph {
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .steam-iron-section12 {
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
          .steam-iron-note1 {
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
          .steam-iron-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section13 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .steam-iron-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-link2 {
            display: contents;
          }
          .steam-iron-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .steam-iron-text2 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-section14 {
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
          .steam-iron-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .steam-iron-container2 {
            width: 100%;
            height: 531px;
          }
          .steam-iron-container3 {
            display: contents;
          }
          .steam-iron-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section15 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .steam-iron-link3 {
            display: contents;
          }
          .steam-iron-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .steam-iron-text3 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .steam-iron-section16 {
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
          .steam-iron-header4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-heading5 {
            text-align: center;
          }
          .steam-iron-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-section18 {
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
          .steam-iron-note3 {
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
          .steam-iron-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-section19 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .steam-iron-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-heading7 {
            text-align: center;
          }
          .steam-iron-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 27px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .steam-iron-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .steam-iron-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-content6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .steam-iron-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-branding {
            width: 120px;
            object-fit: cover;
          }
          .steam-iron-text4 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .steam-iron-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .steam-iron-link4 {
            display: contents;
          }
          .steam-iron-link5 {
            display: contents;
          }
          .steam-iron-link6 {
            display: contents;
          }
          .steam-iron-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 0;
            width: var(--dl-size-size-xxlarge);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .steam-iron-category {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-link7 {
            text-decoration: none;
          }
          .steam-iron-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .steam-iron-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steam-iron-text8 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .steam-iron-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .steam-iron-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .steam-iron-content1 {
              position: relative;
              align-items: center;
            }
            .steam-iron-main1 {
              align-items: center;
            }
            .steam-iron-heading1 {
              text-align: left;
            }
            .steam-iron-buttons {
              width: 100%;
            }
            .steam-iron-get-started1 {
              flex: 1;
            }
            .steam-iron-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: auto;
            }
            .steam-iron-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-header2 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .steam-iron-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .steam-iron-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .steam-iron-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .steam-iron-copyright1 {
              display: none;
            }
            .steam-iron-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .steam-iron-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-heading1 {
              font-size: 40px;
            }
            .steam-iron-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .steam-iron-left {
              gap: var(--dl-space-space-unit);
            }
            .steam-iron-note1 {
              flex-direction: column-reverse;
            }
            .steam-iron-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .steam-iron-note2 {
              flex-direction: column-reverse;
            }
            .steam-iron-note3 {
              flex-direction: column-reverse;
            }
            .steam-iron-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .steam-iron-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .steam-iron-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .steam-iron-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .steam-iron-header1 {
              align-items: flex-start;
            }
            .steam-iron-heading1 {
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
            .steam-iron-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .steam-iron-pasted-image {
              width: 95%;
              height: auto;
            }
            .steam-iron-header2 {
              align-items: center;
              justify-content: center;
            }
            .steam-iron-heading2 {
              text-align: center;
            }
            .steam-iron-paragraph {
              fill: #ffffff;
              color: rgb(255, 255, 255);
              font-size: 20px;
              line-height: 36px;
            }
            .steam-iron-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .steam-iron-heading4 {
              text-align: center;
            }
            .steam-iron-section14 {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .steam-iron-section15 {
              color: rgb(198, 255, 75);
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .steam-iron-text4 {
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

export default SteamIron
