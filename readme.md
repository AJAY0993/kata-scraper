# Codewars Kata Scraper

## Overview

- **Codewars Kata Scraper**: A web scraping tool developed with **Node.js** and **Puppeteer**.
- **Purpose**: Automates the retrieval and organization of completed Codewars katas into a local folder, categorized by problem and language.
- **Key Features**:
  - Efficient data retrieval and organization
  - Asynchronous operations for improved performance
  - Resilient API handling with exponential back-off
  - Automated updates via **GitHub Actions**

## Features

- **Efficient Data Retrieval**: 
  - Scrapes and organizes Codewars katas by problem and language.
- **Asynchronous Operations**: 
  - Reduces processing time by approximately 60% through effective caching.
- **Resilient API Handling**: 
  - Implements an exponential back-off strategy to manage API rate limits and prevent crashes.
- **Automated Updates**: 
  - Uses GitHub Actions to automate the scraping process and ensure regular updates.


## Installation

1. **Clone the repository**:
```bash
   git clone https://github.com/ajay0993/kata-scraper.git
```
   
2. **Navigate to the project directory:**
```bash
   cd kata-scraper
```
 
3. **Install dependencies:**
 ```bash
    npm install
 ```
 
4. **Create a .env file in the root directory and add your environment variables:**
```
CODEWARS_USERNAME=your_codewars_username
CODEWARS_EMAIL=your_codewars_email
CODEWARS_PASSWORD=your_codewars_password
REDIS_URL=your_redis_url
```
## Usage
1. **Run the scraper:**

```bash
node index.js
```
## Contact
For questions or inquiries, please reach out to me at ajaymishra5277919886@gmail.com
