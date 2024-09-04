import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ1 from '../components/faq1'

const WashFold = (props) => {
  return (
    <>
      <div className="wash-fold-container1">
        <Head>
          <title>WashFold - Rinsee</title>
          <meta property="og:title" content="WashFold - Rinsee" />
        </Head>
        <Navbar
          imageAlt="/Icons/hamburger-200h.png"
          imageSrc="/Icons/hamburger-200h.png"
          brandingLogo="/external/logo-200w.png"
          rootClassName="navbarroot-class-name2"
        ></Navbar>
        <section className="wash-fold-section10">
          <div className="wash-fold-hero">
            <div className="wash-fold-content1">
              <main className="wash-fold-main1">
                <header className="wash-fold-header1">
                  <h1 className="wash-fold-heading1">
                    Wash &amp; Fold Laundry Service
                  </h1>
                </header>
                <div className="wash-fold-buttons">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="wash-fold-link1"
                  >
                    <div className="wash-fold-get-started1 button">
                      <span className="wash-fold-text1">Download App now</span>
                    </div>
                  </a>
                </div>
              </main>
            </div>
            <div className="wash-fold-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="wash-fold-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="wash-fold-section11">
          <header className="wash-fold-header2">
            <header className="wash-fold-left">
              <h2 className="section-heading wash-fold-heading2">
                Wash &amp; Fold with RINSEE
              </h2>
            </header>
            <div className="wash-fold-right">
              <p className="wash-fold-paragraph section-description">
                You’re dealing with a laundry load that’s far more than mere
                fabricit’s an intricate collection of personal essentials,
                nostalgic keepsakes, and daily necessities, all requiring an
                unparalleled level of care, attention, and meticulousness.
              </p>
            </div>
          </header>
        </section>
        <section className="wash-fold-section12">
          <section className="wash-fold-note1">
            <div className="wash-fold-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name4"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; Dry"
                rootClassName="card4root-class-name5"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name6"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name7"
              ></Card4>
            </div>
            <div className="wash-fold-content2">
              <main className="wash-fold-main2">
                <header className="wash-fold-caption1">
                  <span className="wash-fold-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="wash-fold-heading3">
                  <header className="wash-fold-header3">
                    <h2 className="section-heading wash-fold-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="wash-fold-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="wash-fold-link2"
              >
                <div className="wash-fold-get-started2 button">
                  <span className="wash-fold-text2">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="wash-fold-section14">
          <section className="wash-fold-note2">
            <div className="wash-fold-container2">
              <div className="wash-fold-container3">
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
    font-size: 14px;
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
            <div className="wash-fold-content3">
              <main className="wash-fold-main3">
                <header className="wash-fold-caption2">
                  <span className="wash-fold-section15 section-head">
                    Wash and Fold prices
                  </span>
                </header>
              </main>
              <a
                href="https://drive.google.com/uc?export=download&id=1ihTuvA8i7Ppk5QFui8PeEzdZsoLxJYWU"
                target="_blank"
                rel="noreferrer noopener"
                className="wash-fold-link3"
              >
                <div className="wash-fold-get-started3 button">
                  <span className="wash-fold-text3">Get started</span>
                </div>
              </a>
            </div>
          </section>
        </section>
        <section className="wash-fold-section16">
          <header className="wash-fold-header4">
            <span className="section-head">FAQ</span>
            <h2 className="wash-fold-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="wash-fold-accordion">
            <FAQ1 rootClassName="faq1root-class-name"></FAQ1>
          </main>
        </section>
        <section className="wash-fold-section18">
          <section className="wash-fold-note3">
            <div className="wash-fold-content4">
              <main className="wash-fold-main4">
                <header className="wash-fold-caption3">
                  <span className="wash-fold-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="wash-fold-heading6">
                  <header className="wash-fold-header5">
                    <h2 className="wash-fold-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="wash-fold-footer">
          <div className="wash-fold-content5">
            <main className="wash-fold-main-content">
              <div className="wash-fold-content6">
                <header className="wash-fold-main5">
                  <div className="wash-fold-header6">
                    <img
                      alt="image"
                      src="/external/logo-200w.png"
                      className="wash-fold-branding"
                    />
                    <span className="wash-fold-text4">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="wash-fold-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="wash-fold-link4"
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
                      className="wash-fold-link5"
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
                      className="wash-fold-link6"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="wash-fold-categories">
                  <div className="wash-fold-category">
                    <div className="wash-fold-header7">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="wash-fold-links">
                      <span className="footer-link">About</span>
                      <Link href="/">
                        <a className="wash-fold-link7 footer-link">Home</a>
                      </Link>
                      <Link href="/">
                        <a className="wash-fold-link8 footer-link">Terms</a>
                      </Link>
                    </div>
                  </div>
                </header>
              </div>
              <section className="wash-fold-copyright1"></section>
            </main>
            <main className="wash-fold-subscribe"></main>
            <section className="wash-fold-copyright2"></section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .wash-fold-container1 {
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
          .wash-fold-section10 {
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
          .wash-fold-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-fold-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .wash-fold-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .wash-fold-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .wash-fold-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .wash-fold-link1 {
            display: contents;
          }
          .wash-fold-get-started1 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .wash-fold-text1 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .wash-fold-section11 {
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
          .wash-fold-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-paragraph {
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .wash-fold-section12 {
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
          .wash-fold-note1 {
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
          .wash-fold-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section13 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-fold-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-link2 {
            display: contents;
          }
          .wash-fold-get-started2 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .wash-fold-text2 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-section14 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 868px;
            display: flex;
            align-items: center;
            padding-top: 21px;
            border-color: #51515a;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            border-top-width: 1px;
          }
          .wash-fold-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .wash-fold-container2 {
            width: 100%;
            height: 531px;
          }
          .wash-fold-container3 {
            display: contents;
          }
          .wash-fold-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section15 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-fold-link3 {
            display: contents;
          }
          .wash-fold-get-started3 {
            display: flex;
            text-decoration: none;
            background-color: #80ff44;
          }
          .wash-fold-text3 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-fold-section16 {
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
          .wash-fold-header4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-heading5 {
            text-align: center;
          }
          .wash-fold-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-section18 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 343px;
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
          .wash-fold-note3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 354px;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .wash-fold-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-section19 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-fold-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-heading7 {
            text-align: center;
          }
          .wash-fold-footer {
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
          .wash-fold-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-fold-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-content6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-fold-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-branding {
            width: 120px;
            object-fit: cover;
          }
          .wash-fold-text4 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .wash-fold-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-fold-link4 {
            display: contents;
          }
          .wash-fold-link5 {
            display: contents;
          }
          .wash-fold-link6 {
            display: contents;
          }
          .wash-fold-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 0;
            width: var(--dl-size-size-xxlarge);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .wash-fold-category {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-link7 {
            text-decoration: none;
          }
          .wash-fold-link8 {
            text-decoration: none;
          }
          .wash-fold-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-fold-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-fold-copyright2 {
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
            .wash-fold-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .wash-fold-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .wash-fold-content1 {
              position: relative;
              align-items: center;
            }
            .wash-fold-main1 {
              align-items: center;
            }
            .wash-fold-heading1 {
              text-align: left;
            }
            .wash-fold-buttons {
              width: 100%;
            }
            .wash-fold-get-started1 {
              flex: 1;
            }
            .wash-fold-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-fold-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-header2 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-fold-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .wash-fold-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-fold-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-fold-copyright1 {
              display: none;
            }
            .wash-fold-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .wash-fold-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-heading1 {
              font-size: 40px;
            }
            .wash-fold-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .wash-fold-left {
              gap: var(--dl-space-space-unit);
            }
            .wash-fold-note1 {
              flex-direction: column-reverse;
            }
            .wash-fold-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .wash-fold-note2 {
              flex-direction: column-reverse;
            }
            .wash-fold-note3 {
              flex-direction: column-reverse;
            }
            .wash-fold-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .wash-fold-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .wash-fold-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .wash-fold-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-fold-header1 {
              align-items: flex-start;
            }
            .wash-fold-heading1 {
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
            .wash-fold-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .wash-fold-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-fold-header2 {
              align-items: center;
              justify-content: center;
            }
            .wash-fold-heading2 {
              text-align: center;
            }
            .wash-fold-paragraph {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
            }
            .wash-fold-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .wash-fold-heading4 {
              text-align: center;
            }
            .wash-fold-container2 {
              width: 95%;
            }
            .wash-fold-section15 {
              text-align: center;
              line-height: 49px;
            }
            .wash-fold-text4 {
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-family: Poppins;
              line-height: 21px;
            }
            .wash-fold-link8 {
              text-decoration: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default WashFold
