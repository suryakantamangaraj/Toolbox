# Tools by Suryaraj

Welcome to the **Tools** repository! This repository houses a collection of web-based utilities, including calculators, converters, and other handy tools. Each tool is developed in a modular fashion, making it easy to add, maintain, and scale as new functionalities are introduced.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Adding New Tools](#adding-new-tools)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

## Overview

The **Tools** project is designed to be a one-stop solution for various web-based tools that users might need in their day-to-day lives. Whether it's calculating age, converting discounts, or performing simple arithmetic, this project aims to provide an easy-to-use, well-structured platform.

### Features

- **Modular Design**: Each tool resides in its own directory, making it easy to manage and update.
- **Common Template**: All tools share a common header, footer, and style for a consistent look and feel.
- **Scalable**: New tools can be easily added with minimal configuration.
- **Automatic Deployment**: The site is automatically deployed to GitHub Pages using GitHub Actions.

## Project Structure

```plaintext
Tools/
├── .github/workflows/        # GitHub Actions workflow for deployment
│   └── deploy.yml
├── template/                 # Common template files
│   ├── header.html
│   ├── footer.html
│   └── style.css
├── Age-Calculator/           # Example tool - Age Calculator
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Discount-Conversion/      # Example tool - Discount Conversion
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Simple-Calculator/        # Example tool - Simple Calculator
│   ├── index.html
│   ├── style.css
│   └── script.js
└── index.html                # Main landing page
```

## Setup and Installation

### Prerequisites

Before you start, make sure you have the following installed:

- [Git](https://git-scm.com/)
- A text editor (e.g., [VS Code](https://code.visualstudio.com/))

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/Tools.git
   cd Tools
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Tools
   ```

3. **Open the Project in Your Text Editor:**

   ```bash
   code .
   ```

## Adding New Tools

To add a new tool to the site:

1. **Create a New Directory:**
   - Inside the main `Tools` directory, create a new directory named after your tool (e.g., `New-Tool`).

2. **Copy Template Files:**
   - Copy the `template/style.css` file into your new directory if you need custom styles.
   - Create an `index.html` and `script.js` file for your tool.

3. **Include Header and Footer:**
   - Use the following code to dynamically include the common header and footer in your `index.html` file:
   
   ```html
   <div id="header"></div>
   <!-- Your Tool Content Here -->
   <div id="footer"></div>

   <script>
       fetch('../template/header.html').then(res => res.text()).then(data => document.getElementById('header').innerHTML = data);
       fetch('../template/footer.html').then(res => res.text()).then(data => document.getElementById('footer').innerHTML = data);
   </script>
   ```

4. **Link the Tool in the Main Landing Page:**
   - Edit the root `index.html` file to include a link to your new tool.

5. **Test Locally:**
   - Test the tool locally to ensure it functions as expected.

6. **Commit and Push:**
   - Add, commit, and push your changes to the `main` branch.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top of this page.
2. **Clone Your Fork**: Clone the forked repository to your local machine.
3. **Create a Branch**: Create a new branch for your feature or bugfix.
4. **Make Changes**: Implement your changes or new feature.
5. **Test**: Ensure that all tools function as expected.
6. **Push to GitHub**: Push your branch to your GitHub fork.
7. **Submit a Pull Request**: Open a pull request to merge your changes into the main repository.

Please ensure your code adheres to the project’s style guidelines and is thoroughly tested before submitting.

## Deployment

Deployment to GitHub Pages is automated using GitHub Actions. Every time you push to the `main` branch, the site is automatically built and deployed to the `gh-pages` branch.

You can access the live site at: `https://your-username.github.io/Tools`

### Manual Deployment

If you need to deploy manually, follow these steps:

1. **Build the Project:**
   - Run any necessary build steps locally (if applicable).

2. **Push to the `gh-pages` Branch:**
   - Use Git to push the contents of the `main` branch to `gh-pages`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
