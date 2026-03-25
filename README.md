# 📱 QR Code Generator

A simple and efficient Node.js application that generates QR codes from user-provided URLs or text strings.

## 🚀 Features
*   **Instant Generation:** Convert any URL or text into a high-quality QR code image.
*   **Interactive CLI:** Uses command-line prompts to gather user input seamlessly.
*   **File Storage:** Automatically saves the generated QR code as a `.png` file for easy sharing.
*   **History Log:** (Optional) Keeps a record of generated URLs in a local text file.

## 🛠️ Tech Stack
*   **Runtime:** [Node.js](https://nodejs.org)
*   **Packages:** 
    *   `inquirer`: For handling user input via terminal.
    *   `qr-image` or `qrcode`: For generating the actual QR code data.
    *   `fs` (File System): For saving files locally.

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd QR-code-generator
