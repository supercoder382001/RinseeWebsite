import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Script from 'dangerous-html/react';
export default function Page() {
    const queryParams = useSearchParams();
    const mid = queryParams.get('mid');
    let jsonObject={};
    // const jsonString=atob(mid);
    // jsonObject=JSON.parse(jsonString);
    // console.log(jsonObject);
    // const muid = queryParams.get('muid');
    // const mno = queryParams.get('mno');
    // const amount = queryParams.get('amount');
    if (mid) {
      try {
        // Decode the Base64-encoded token
        const jsonString = atob(mid);
        // Parse the decoded string into a JSON object
        jsonObject = JSON.parse(jsonString);
        console.log(jsonObject);
      } catch (error) {
        console.error('Error decoding token:', error);
        alert('Invalid Base64-encoded token or JSON format.');
      }
    } 
    const handleClick = async () => {
    try {
      //   const response = await axios.post("/api/create", {
      //   merchantTransactionId: mid,
      //   merchantUserId: muid,
      //   mobileNumber: mno,
      //   amount: amount,
      // });      
      window.open(
        jsonObject.data.data.instrumentResponse.redirectInfo.url,
        "_parent"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };
  return (
    <div>
      <button id="myButton" onClick={handleClick}>Click me</button>
      <div>
        <Script html={`<script>
          
          const button = document.getElementById('myButton');

          function autoClick() {
              button.click(); // Triggers the button's click event
          }

          button.addEventListener('click', function() {
          console.log('Button was clicked automatically!');
          });

          setTimeout(autoClick, 1000)
          
          </script>`}></Script>
      </div>
    </div>
  );
}
