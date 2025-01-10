import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';
import Script from 'dangerous-html/react';
export default function Page() {
    const queryParams = useSearchParams();
    const mid = queryParams.get('mid');
    const linked = atob(mid)
    console.log(linked);
    // const muid = queryParams.get('muid');
    // const mno = queryParams.get('mno');
    // const amount = queryParams.get('amount'); 
    const handleClick = async () => {
    try {
      //   const response = await axios.post("/api/create", {
      //   merchantTransactionId: mid,
      //   merchantUserId: muid,
      //   mobileNumber: mno,
      //   amount: amount,
      // });      
      window.open(
        // response.data.data.instrumentResponse.redirectInfo.url,
        linked,
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
