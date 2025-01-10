"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const mid = searchParams.get("mid"); // Get the 'mid' query parameter
  const [linked, setLinked] = useState("");

  useEffect(() => {
    if (mid) {
      try {
        // Decode the Base64-encoded token
        const jsonString = atob(mid);
        const jsonObject = JSON.parse(jsonString);
        console.log("Decoded JSON:", jsonObject);

        // Extract the URL
        const url = jsonObject?.data?.instrumentResponse?.redirectInfo?.url;
        if (url) {
          setLinked(url);
        } else {
          console.error("URL not found in the JSON data.");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        alert("Invalid Base64-encoded token or JSON format.");
      }
    }
  }, [mid]);

  useEffect(() => {
    if (linked) {
      // Automatically click the button after 1 second
      const timer = setTimeout(() => {
        document.getElementById("autoClickButton")?.click();
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [linked]);

  const handleClick = () => {
    if (linked) {
      window.open(linked, "_parent");
    } else {
      console.error("No URL available to open.");
    }
  };

  return (
    <div>
      <h1>Auto Redirect Example</h1>
      <button id="autoClickButton" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
