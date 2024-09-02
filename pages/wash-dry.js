import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Card4 from '../components/card4'
import Mark from '../components/mark'
import FAQ1 from '../components/faq1'
import Feature1wf from '../components/feature1wf'
import Feature2wf from '../components/feature2wf'
import Feature3wf from '../components/feature3wf'
import Feature4wf from '../components/feature4wf'

const WashDry = (props) => {
  return (
    <>
      <div className="wash-dry-container1">
        <Head>
          <title>WashDry - Rinsee</title>
          <meta property="og:title" content="WashDry - Rinsee" />
        </Head>
        <Navbar
          imageAlt="/external/logo-200w.png"
          imageSrc="/external/logo-200w.png"
          brandingLogo="/external/logo-200w.png"
          rootClassName="navbarroot-class-name3"
        ></Navbar>
        <section className="wash-dry-section10">
          <div className="wash-dry-hero">
            <div className="wash-dry-content1">
              <main className="wash-dry-main1">
                <header className="wash-dry-header1">
                  <h1 className="wash-dry-heading1">
                    Wash &amp; Iron Laundry Service
                  </h1>
                </header>
                <div className="wash-dry-buttons">
                  <div className="wash-dry-get-started1 button">
                    <span className="wash-dry-text1">Download App now</span>
                  </div>
                </div>
              </main>
            </div>
            <div className="wash-dry-image1">
              <img
                alt="pastedImage"
                src="/external/washandfold-1200w.png"
                className="wash-dry-pasted-image"
              />
            </div>
          </div>
        </section>
        <section className="wash-dry-section11">
          <header className="wash-dry-header2">
            <header className="wash-dry-left">
              <h2 className="section-heading wash-dry-heading2">
                Wash &amp; Iron with RINSEE
              </h2>
            </header>
            <div className="wash-dry-right">
              <p className="wash-dry-paragraph section-description">
                You’re dealing with a laundry load that’s far more than mere
                fabricit’s an intricate collection of personal essentials,
                nostalgic keepsakes, and daily necessities, all requiring an
                unparalleled level of care, attention, and meticulousness.
              </p>
            </div>
          </header>
        </section>
        <section className="wash-dry-section12">
          <section className="wash-dry-note1">
            <div className="wash-dry-image2">
              <Card4
                header="Step 1"
                imageSrc="/external/pickup-300w.png"
                description="Pickup"
                rootClassName="card4root-class-name12"
              ></Card4>
              <Card4
                header="Step 2"
                imageSrc="/external/wash-300w.png"
                description="Wash &amp; dry"
                rootClassName="card4root-class-name13"
              ></Card4>
              <Card4
                header="Step 3"
                imageSrc="/external/fold-300w.png"
                description="Fold"
                rootClassName="card4root-class-name14"
              ></Card4>
              <Card4
                header="Step 4"
                imageSrc="/external/delivery-300w.png"
                description="Delivery"
                rootClassName="card4root-class-name15"
              ></Card4>
            </div>
            <div className="wash-dry-content2">
              <main className="wash-dry-main2">
                <header className="wash-dry-caption1">
                  <span className="wash-dry-section13 section-head">
                    OUR PROCESS
                  </span>
                </header>
                <main className="wash-dry-heading3">
                  <header className="wash-dry-header3">
                    <h2 className="section-heading wash-dry-heading4">
                      Great care, wherever you are
                    </h2>
                  </header>
                  <div className="wash-dry-checkmarks">
                    <Mark label="How it works ?"></Mark>
                  </div>
                </main>
              </main>
              <div className="wash-dry-get-started2 button">
                <span className="wash-dry-text2">Get started</span>
              </div>
            </div>
          </section>
        </section>
        <section className="wash-dry-section14">
          <section className="wash-dry-note2">
            <div className="wash-dry-container2">
              <div className="wash-dry-container3">
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
            <div className="wash-dry-content3">
              <main className="wash-dry-main3">
                <header className="wash-dry-caption2">
                  <span className="wash-dry-section15 section-head">
                    Wash and IRON prices
                  </span>
                </header>
              </main>
              <div className="wash-dry-get-started3 button">
                <span className="wash-dry-text3">Get started</span>
              </div>
            </div>
          </section>
        </section>
        <section className="wash-dry-section16">
          <header className="wash-dry-header4">
            <span className="section-head">FAQ</span>
            <h2 className="wash-dry-heading5 section-heading">
              Frequently asked questions
            </h2>
          </header>
          <main className="wash-dry-accordion">
            <FAQ1 rootClassName="faq1root-class-name1"></FAQ1>
          </main>
        </section>
        <section className="wash-dry-section18">
          <section className="wash-dry-note3">
            <div className="wash-dry-image3">
              <Feature1wf rootClassName="feature1wfroot-class-name5"></Feature1wf>
              <Feature2wf rootClassName="feature2wfroot-class-name1"></Feature2wf>
              <Feature3wf rootClassName="feature3wfroot-class-name1"></Feature3wf>
              <Feature4wf rootClassName="feature4wfroot-class-name1"></Feature4wf>
            </div>
            <div className="wash-dry-content4">
              <main className="wash-dry-main4">
                <header className="wash-dry-caption3">
                  <span className="wash-dry-section19 section-head">
                    What you GET ?
                  </span>
                </header>
                <main className="wash-dry-heading6">
                  <header className="wash-dry-header5">
                    <h2 className="wash-dry-heading7 section-heading">
                      Quality without a doubt, day in, day out.
                    </h2>
                  </header>
                </main>
              </main>
            </div>
          </section>
        </section>
        <footer className="wash-dry-footer">
          <div className="wash-dry-content5">
            <main className="wash-dry-main-content">
              <div className="wash-dry-content6">
                <header className="wash-dry-main5">
                  <div className="wash-dry-header6">
                    <img
                      alt="image"
                      src="/external/logo-200w.png"
                      className="wash-dry-branding"
                    />
                    <span className="wash-dry-text4">
                      Make your everyday laundry easy
                    </span>
                  </div>
                  <div className="wash-dry-socials">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="wash-dry-link1"
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
                      className="wash-dry-link2"
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
                      className="wash-dry-link3"
                    >
                      <img
                        alt="image"
                        src="/Icons/twitter-200h.png"
                        className="social"
                      />
                    </a>
                  </div>
                </header>
                <header className="wash-dry-categories">
                  <div className="wash-dry-category">
                    <div className="wash-dry-header7">
                      <span className="footer-header">Company</span>
                    </div>
                    <div className="wash-dry-links">
                      <span className="footer-link">About</span>
                      <span className="footer-link">Home</span>
                      <span className="footer-link">FAQs</span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="wash-dry-copyright1"></section>
            </main>
            <main className="wash-dry-subscribe"></main>
            <section className="wash-dry-copyright2">
              <span className="wash-dry-text9">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .wash-dry-container1 {
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
          .wash-dry-section10 {
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
          .wash-dry-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-dry-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .wash-dry-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .wash-dry-heading1 {
            color: rgb(255, 255, 255);
            font-size: 64px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .wash-dry-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .wash-dry-get-started1 {
            display: flex;
            background-color: #80ff44;
          }
          .wash-dry-text1 {
            color: rgb(12, 16, 12);
            font-size: 16px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 500;
            line-height: 24px;
          }
          .wash-dry-image1 {
            width: 493px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-pasted-image {
            width: 100%;
            height: 455px;
            border-radius: var(--dl-radius-radius-buttonradius);
            justify-content: initial;
          }
          .wash-dry-section11 {
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
          .wash-dry-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-right {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-paragraph {
            font-size: 34px;
            max-width: 100%;
            text-align: center;
            line-height: 36px;
          }
          .wash-dry-section12 {
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
          .wash-dry-note1 {
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
          .wash-dry-image2 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-dry-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-caption1 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-section13 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-dry-heading3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-checkmarks {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-dry-get-started2 {
            display: flex;
            background-color: #80ff44;
          }
          .wash-dry-text2 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-dry-section14 {
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
          .wash-dry-note2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: 706px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column-reverse;
            justify-content: center;
          }
          .wash-dry-container2 {
            width: 100%;
            height: 531px;
          }
          .wash-dry-container3 {
            display: contents;
          }
          .wash-dry-content3 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-caption2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-section15 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-dry-get-started3 {
            display: flex;
            background-color: #80ff44;
          }
          .wash-dry-text3 {
            color: #0c100c;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .wash-dry-section16 {
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
          .wash-dry-header4 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-heading5 {
            text-align: center;
          }
          .wash-dry-accordion {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-dry-section18 {
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
          .wash-dry-note3 {
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
          .wash-dry-image3 {
            gap: var(--dl-space-space-halfunit);
            flex: 1;
            width: 100%;
            height: 410px;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .wash-dry-content4 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-main4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-caption3 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-section19 {
            color: rgb(198, 255, 75);
            font-size: 35px;
          }
          .wash-dry-heading6 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-heading7 {
            text-align: center;
          }
          .wash-dry-footer {
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
          .wash-dry-content5 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .wash-dry-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-dry-content6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-dry-main5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-branding {
            width: 120px;
            object-fit: cover;
          }
          .wash-dry-text4 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .wash-dry-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .wash-dry-link1 {
            display: contents;
          }
          .wash-dry-link2 {
            display: contents;
          }
          .wash-dry-link3 {
            display: contents;
          }
          .wash-dry-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 0;
            width: var(--dl-size-size-xxlarge);
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .wash-dry-category {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-links {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-dry-copyright1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-subscribe {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .wash-dry-copyright2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .wash-dry-text9 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .wash-dry-section10 {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .wash-dry-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .wash-dry-content1 {
              position: relative;
              align-items: center;
            }
            .wash-dry-main1 {
              align-items: center;
            }
            .wash-dry-heading1 {
              text-align: left;
            }
            .wash-dry-buttons {
              width: 100%;
            }
            .wash-dry-get-started1 {
              flex: 1;
            }
            .wash-dry-image1 {
              width: 515px;
              height: 640px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .wash-dry-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-dry-section11 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-dry-header2 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-dry-section12 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-dry-image2 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .wash-dry-section14 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-dry-section18 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .wash-dry-image3 {
              flex-wrap: wrap;
              flex-direction: row;
            }
            .wash-dry-content5 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .wash-dry-copyright1 {
              display: none;
            }
            .wash-dry-copyright2 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .wash-dry-content1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .wash-dry-heading1 {
              font-size: 40px;
            }
            .wash-dry-get-started1 {
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .wash-dry-pasted-image {
              width: 95%;
              height: fit-content;
            }
            .wash-dry-left {
              gap: var(--dl-space-space-unit);
            }
            .wash-dry-note1 {
              flex-direction: column-reverse;
            }
            .wash-dry-image2 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .wash-dry-note2 {
              flex-direction: column-reverse;
            }
            .wash-dry-note3 {
              flex-direction: column-reverse;
            }
            .wash-dry-image3 {
              flex-wrap: initial;
              flex-direction: column;
            }
            .wash-dry-content6 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .wash-dry-main5 {
              gap: var(--dl-space-space-twounits);
            }
            .wash-dry-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .wash-dry-container1 {
              gap: var(--dl-space-space-unit);
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-dry-section10 {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .wash-dry-header1 {
              align-items: flex-start;
            }
            .wash-dry-heading1 {
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
            .wash-dry-image1 {
              width: 100%;
              height: auto;
              align-items: center;
            }
            .wash-dry-pasted-image {
              width: 95%;
              height: auto;
            }
            .wash-dry-header2 {
              align-items: center;
              justify-content: center;
            }
            .wash-dry-heading2 {
              text-align: center;
            }
            .wash-dry-paragraph {
              fill: #ffffff;
              color: #ffffff;
              font-size: 20px;
            }
            .wash-dry-image2 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .wash-dry-heading4 {
              text-align: center;
            }
            .wash-dry-section15 {
              color: rgb(198, 255, 75);
              font-size: 35px;
              text-align: center;
              line-height: 49px;
            }
            .wash-dry-image3 {
              gap: var(--dl-space-space-unit);
              flex-wrap: inherit;
              flex-direction: column;
            }
            .wash-dry-text4 {
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

export default WashDry
