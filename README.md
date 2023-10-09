
# Paperwork - UI


## 🧰 Installation

1. Clone the repository

    ```
      git clone git@bitbucket.org:pranalaragamkarya/paperwork-ui.git
    ```

2. Go to project directory, and install dependencies

    ```bash
      cd paperwork-ui
      npm install 
    ```

## 👀 Usage

1. Build the Project

    ```bash
      npm run build // or npm run watch
    ```

2. Install the Project Locally

    ```bash
      npm install ../paperwork-ui/dist  
    ```

3. Import global styles in your project
  
    ```js
      import "paperwork-ui/index.min.css";
    ```

4. Add Theme Provider to your project

    ```js
      import React from "react";
      import ReactDOM from "react-dom/client";
      import App from "./App.tsx";
      import "@/styles/globals.css";
      import { ThemeProvider } from "paperwork-ui";
      import "paperwork-ui/index.min.css";

      ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      );

    ```
## ⚙️ Configuration

1. Google Fonts
   
    ```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    ```

2. TailwindCSS Configuration
   
    ```js
    const theme = require("paperwork-ui/lib/config");

    /** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: [...theme.default.darkMode],
      content: [
        "../paperwork-ui/dist/**/*.{js,ts,jsx,tsx}",
        "..."
      ],
      theme: {
        ...theme.default.theme,
      },
      plugins: [...theme.default.plugins],
    };
    ```
