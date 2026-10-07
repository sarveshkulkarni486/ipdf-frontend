# 📄 iPDF Frontend

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Git-GitHub-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
</p>

<p align="center">
  <b>🎨 Modern React frontend for creating, customizing and generating professional PDF documents.</b>
</p>

<p align="center">
  <a href="https://github.com/sarveshkulkarni486/ipdf-frontend">
    <img src="https://img.shields.io/github/stars/sarveshkulkarni486/ipdf-frontend?style=social" alt="GitHub Stars"/>
  </a>
  <a href="https://github.com/sarveshkulkarni486/ipdf-frontend">
    <img src="https://img.shields.io/github/forks/sarveshkulkarni486/ipdf-frontend?style=social" alt="GitHub Forks"/>
  </a>
</p>

---

## 🚀 About iPDF

**iPDF Frontend** is a React-based web application designed to provide an interactive interface for creating and customizing PDF documents.

Users can enter document data, configure the appearance of tables and sections, select colors and styles, and submit the information to the backend for PDF generation.

The frontend communicates with the backend using **Axios REST API calls**.

### 🎯 Main Goal

> Provide a simple, modern and user-friendly interface for generating professional business PDFs dynamically.

---

## ✨ Features

### 📝 Dynamic Form

- Enter document information through an interactive form
- Add and manage dynamic data
- Validate user input
- Organize information into different sections

### 🎨 PDF Customization

Customize the appearance of the generated PDF:

- 🎨 Column colors
- 🖌️ Background colors
- 🔤 Font styling
- 📏 Column formatting
- 📐 Alignment
- 📊 Table styling
- 🧩 Section customization

### 📊 Dynamic Tables

Create tables based on the information entered by the user.

Example:

| Date | Transaction | Reference | Type | Amount |
|---|---|---|---|---:|
| 01-10-2026 | NEFT Transfer | NEFT-100234 | Debit | ₹10,000 |
| 02-10-2026 | UPI Payment | UPI-100235 | Credit | ₹5,000 |
| 03-10-2026 | IMPS Transfer | IMPS-100236 | Debit | ₹2,500 |

### 🔄 Backend Integration

The application communicates with the Spring Boot backend using **Axios**.

```text
React Frontend
      │
      │ Axios
      ▼
Spring Boot REST API
      │
      ▼
iText PDF Generator
      │
      ▼
📄 Generated PDF
```

---

## 🏗️ Architecture

```text
                         ┌───────────────────────┐
                         │      iPDF Frontend    │
                         │                       │
                         │   React + Vite        │
                         └───────────┬───────────┘
                                     │
                                     │ Axios
                                     ▼
                         ┌───────────────────────┐
                         │    Spring Boot API    │
                         │                       │
                         │   Business Logic      │
                         └───────────┬───────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │       iText           │
                         │   PDF Generation      │
                         └───────────┬───────────┘
                                     │
                                     ▼
                              📄 PDF Document
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| ⚛️ React | Frontend UI |
| ⚡ Vite | Development server & build tool |
| 📡 Axios | REST API communication |
| 🟨 JavaScript | Application logic |
| 🎨 CSS | UI styling |
| 📦 npm | Package management |
| 🐙 Git | Version control |
| ☁️ GitHub | Source code repository |

---

## 📁 Project Structure

```text
ipdf-frontend/
│
├── public/
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │   └── ...
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── pages/
│   │   └── ...
│   │
│   ├── services/
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The exact structure may vary as the application grows.

---

## 🔄 Application Workflow

```text
        👤 User
          │
          ▼
   ┌───────────────┐
   │  Fill Details │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Customize PDF │
   │ 🎨 Styles     │
   │ 🖌️ Colors     │
   │ 📊 Tables     │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ Preview /     │
   │ Generate      │
   └───────┬───────┘
           │
           │ Axios
           ▼
   ┌───────────────┐
   │ Spring Boot   │
   │ Backend API   │
   └───────┬───────┘
           │
           ▼
   ┌───────────────┐
   │ iText PDF     │
   │ Generation    │
   └───────┬───────┘
           │
           ▼
        📄 PDF
```

---

## 💻 Getting Started

### 📋 Prerequisites

Make sure you have the following installed:

- 🟢 **Node.js**
- 📦 **npm**
- 💻 **VS Code** or another IDE
- 🐙 **Git**

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/sarveshkulkarni486/ipdf-frontend.git
```

Navigate to the project:

```bash
cd ipdf-frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Application

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in your browser. 🎉

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files will be generated inside:

```text
dist/
```

---

## 🔌 API Configuration

The frontend communicates with the Spring Boot backend through REST APIs.

For example:

```javascript
import axios from "axios";

axios.post(
  "http://localhost:8080/api/pdf/generate",
  requestData
);
```

For production, it is recommended to configure the backend URL through environment variables.

Example:

```env
VITE_API_URL=http://localhost:8080
```

Then:

```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

And:

```javascript
axios.post(`${API_URL}/api/pdf/generate`, requestData);
```

> 🔐 Do not commit sensitive credentials or secrets to GitHub.

---

## 🎨 PDF Customization

One of the main purposes of iPDF is to allow the frontend to control the appearance of the generated PDF.

For example:

```text
┌──────────────────────────────────────────────┐
│                 iPDF REPORT                   │
├───────────┬───────────────┬──────────────────┤
│ Date      │ Transaction   │ Amount           │
├───────────┼───────────────┼──────────────────┤
│ 01-10-26  │ NEFT Transfer │ ₹10,000          │
│ 02-10-26  │ UPI Payment   │ ₹5,000           │
└───────────┴───────────────┴──────────────────┘
```

The frontend can send formatting information along with the actual document data.

```json
{
  "title": "Transaction Statement",
  "tableStyle": {
    "headerColor": "#1F4E78",
    "fontSize": 10,
    "alignment": "CENTER"
  },
  "transactions": [
    {
      "date": "01-10-2026",
      "description": "NEFT Transfer",
      "amount": 10000
    }
  ]
}
```

The backend can then use this information while generating the final PDF.

---

## 🔮 Future Enhancements

Some planned improvements include:

- 👁️ Real-time PDF preview
- 🎨 Advanced theme customization
- 🧩 Drag-and-drop document sections
- 📊 Advanced table designer
- 🖼️ Custom logo upload
- ✍️ Custom font selection
- 📄 Multiple PDF templates
- 💾 Save document templates
- 📤 PDF download
- 📧 Email generated PDF
- ☁️ Cloud deployment
- 🔐 User authentication
- 👥 Multi-user support
- 📱 Responsive mobile UI

---

## 🤝 Contributing

Contributions, ideas and improvements are welcome! 🎉

### Create a feature branch

```bash
git checkout -b feature/new-feature
```

### Add your changes

```bash
git add .
```

### Commit

```bash
git commit -m "Added new PDF customization feature"
```

### Push

```bash
git push origin feature/new-feature
```

Then open a Pull Request on GitHub.

---

## 🐛 Issues & Suggestions

Found a bug? 🐞

Have an idea? 💡

Feel free to create an issue in the GitHub repository.

---

## 📌 Related Project

### 🔙 iPDF Backend

The backend is responsible for:

- 🌱 Spring Boot REST APIs
- 🧠 PDF business logic
- 📄 iText PDF generation
- 🎨 Applying frontend styling
- 📊 Dynamic table generation

Repository:

[iPDF Backend — GitHub](https://github.com/sarveshkulkarni486/Ipdf?utm_source=chatgpt.com)

---

## 👨‍💻 Author

### Sarvesh Kulkarni

**Java Developer | Spring Boot Developer | React Developer**

<p align="center">
  <a href="https://github.com/sarveshkulkarni486">
    <img src="https://img.shields.io/badge/GitHub-Sarvesh%20Kulkarni-181717?style=for-the-badge&logo=github" alt="GitHub"/>
  </a>
</p>

---

## ⭐ Show Your Support

If you find **iPDF** useful or interesting:

⭐ Star the repository  
🍴 Fork the project  
🐛 Report issues  
💡 Suggest improvements  

---

<p align="center">
  <b>🚀 Built with ❤️ using React, Vite & Axios</b>
</p>

<p align="center">
  📄 <b>iPDF — Create. Customize. Generate.</b>
</p>
