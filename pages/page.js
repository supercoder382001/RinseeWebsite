import React, { useEffect } from "react";
import axios from "axios";

export default function Page() {
    const queryParams = new URLSearchParams(window.location.search);
    const mid = queryParams.get('mid');
    const muid = queryParams.get('muid');
    const mno = queryParams.get('mno');
    const amount = queryParams.get('amount'); 
    const handleClick = async () => {
    try {
        const body=req.data;
        const response = await axios.post("/api/create", {
        merchantTransactionId: mid,
        merchantUserId: muid,
        mobileNumber: mno,
        amount: amount,
      });
      window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
    //   window.open(
    //     response.data.data.instrumentResponse.redirectInfo.url,
    //     "_blank"
    //   );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };
  useEffect(() => {
    // Automatically call the redirect function when the page loads
    handleRedirect();
  }, []); // Empty dependency array ensures it runs only once on page load

  return <div>Redirecting...</div>;
}
