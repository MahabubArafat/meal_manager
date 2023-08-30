// QRScannerComponent.js
import React, { useState } from "react";
import axios from "axios";
import QrScanner from "react-qr-scanner";

function QRScannerComponent() {
  const [scannedData, setScannedData] = useState("");
  const [mealData, setMealData] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      setScannedData(data);

      //   try {
      //     const response = await axios.get("/api/meal");
      //     setMealData(response.data);
      //   } catch (error) {
      //     console.error("Error submitting QR data:", error);
      //   }
    }
  };

  const handleError = (error) => {
    console.error("QR scan error:", error);
  };

  return (
    <div>
      <h1>QR Scanner</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "10%" }}
      />

      {scannedData && (
        <div>
          <p>Scanned Data: {scannedData.text}</p>
        </div>
      )}

      {/* {mealData && <div>{mealData}</div>} */}
    </div>
  );
}

export default QRScannerComponent;
