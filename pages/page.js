import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const queryParams = useSearchParams();
    const mid = queryParams.get('mid');
    const muid = queryParams.get('muid');
    const mno = queryParams.get('mno');
    const amount = queryParams.get('amount'); 
    const handleClick = async () => {
    try {
        
        const response = await axios.post("/api/create", {
        merchantTransactionId: mid,
        merchantUserId: muid,
        mobileNumber: mno,
        amount: amount,
      });
      // if (!response.ok) {
      //   window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
      // } else {
      // console.error('Error:', response);
      // }  
      
      window.open(
        response.data.data.instrumentResponse.redirectInfo.url,
        "_parent"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };
  // useEffect(() => {
  //   // Automatically call the redirect function when the page loads
  //   handleClick();
  // }, []); // Empty dependency array ensures it runs only once on page load

  // return <div>Redirecting...</div>;
  return (
    <div>
      <body onLoad={handleClick()}>
      <p> 
        The script has been executed. Check 
        the console for the output. 
      </p> 
      </body>
    </div>
  );
}
