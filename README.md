# BeyondChats Chatbot Setup UI/UX

## Overview
This project provides a step-by-step UI/UX for setting up a chatbot for new businesses.

## Features

### 1. User Registration
- Name, email, password input
- "Continue with Google" option
- Email verification

### 2. Setup Organisation
- Enter company details (name, website, description)
- Auto-fetch website meta-description (if possible)
- Display scraped webpages (dummy data)
- View data chunks from each webpage

### 3. Chatbot Integration & Testing
- **Test Chatbot** → Opens client's website with chatbot
- **Integrate on Website**
  - Copy-paste `<head>` script
  - Mail instructions to developer
- **Test Integration** → Success UI + options:
  - "Explore Admin Panel"
  - "Start talking to your chatbot"
  - Social sharing buttons
- Failure UI for undetected integration

## Tech Stack
- **Frontend:** React.js (Recommended)
- **Backend:** Dummy API for scraped data

## Setup
1. Clone repo
   ```sh
   git clone https://github.com/your-repo/beyondchats-setup.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Run project
   ```sh
   npm start
   ```

## License
MIT License
