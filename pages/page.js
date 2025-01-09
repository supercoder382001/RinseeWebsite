import React from "react";
import axios from "axios";

export default function Page() {
  const handleClick = async () => {
    try {
      const response = await axios.post("/api/create", {
        merchantTransactionId: "MT7850590068188105",
        merchantUserId: "MUID124",
        mobileNumber: "9999999998",
        amount: 100,
      });

      window.open(
        response.data.data.instrumentResponse.redirectInfo.url,
        "_blank"
      );
    } catch (error) {
      console.error("Error making API request:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}