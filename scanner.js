const BarcodeScanner = require("node-barcode");

const scanner = new BarcodeScanner();

scanner.on("scan", (code) => {
  console.log("Scanned barcode:", code);
});

scanner.startScanning();

// Stop scanning after 10 seconds
setTimeout(() => {
  scanner.stopScanning();
}, 10000);
