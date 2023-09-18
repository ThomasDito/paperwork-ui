
# Paperwork - UI


## 🧰 Installation

1. Clone the repository

    ```
      git clone git@bitbucket.org:pranalaragamkarya/paperwork-ui.git
    ```

2. Go to project directory, and install dependencies

    ```bash
      npm install 
    ```

## 👀 Usage

1. Build the Project

    ```bash
      npm build
    ```

2. Install the Project Locally

    ```bash
      npm install ../paperwork-ui/dist  
    ```

3. Import global styles
  
    ```js
      import "paperwork-ui/index.min.css";
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
