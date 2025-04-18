import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@shadcn/ui";

const QrReader = dynamic(() => import("react-qr-scanner"), { ssr: false });

export default function QRScannerPage() {
  const [scannedData, setScannedData] = useState<string | null>(null);

  const handleScan = (data: string | null) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (error: any) => {
    console.error("QR scan error", error);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">QR Scanner</h1>
      <Card>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      </Card>
      {scannedData && (
        <p className="text-green-500 mt-4">Scanned Data: {scannedData}</p>
      )}
    </div>
  );
}