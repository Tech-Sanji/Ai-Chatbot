
# AI Chatbot for Website

An AI-powered chatbot specifically built to integrate into any website, offering intelligent, conversational assistance to users.  
This project uses **React + Vite** for a fast, modern UI and **Node.js** for securely communicating with **OpenAI's ChatGPT API**.

---

## Features
- Smart, human-like conversation powered by ChatGPT
- Seamless integration into any website as a floating chatbot widget
- React frontend with clean, responsive UI
- Node.js backend to securely handle OpenAI API requests
- Fast performance with Vite development server
- Mobile-responsive and optimized for smooth user experience

---

## Technologies Used
- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express
- **AI Service**: OpenAI GPT API (Chat Completion endpoint)

---

## Project Structure
```
/frontend       --> React + Vite app (chat widget UI)
/backend        --> Node.js + Express server (API bridge to OpenAI)
/public         --> Static files (optional)
/.env           --> Environment variables (OpenAI API key, server configs)
README.md       --> Project documentation
```

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Tech-Sanji/Ai-Chatbot.git
cd Ai-Chatbot
```

---

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `.env` file inside `/backend/` with the following:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

> The backend will listen on `http://localhost:5000`

---

### 3. Set up the frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```

> The frontend will run on `http://localhost:5173/` (default Vite port)

---

## How It Works
- The user interacts with the chatbot widget on the website.
- The frontend sends the user's message to the Node.js backend.
- The backend securely forwards the message to OpenAI's ChatGPT API.
- OpenAI returns the chatbot's reply, which is displayed instantly to the user.

---

## Screenshot
*(Optional: Insert a screenshot showing your chatbot embedded in a website.)*

---

## Future Enhancements
- User authentication and custom conversation sessions
- Admin panel for monitoring chat history
- Customizable bot personality and responses
- Voice input and output support
- Integration with CRM or support ticket systems

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Credits
Built with ❤️ by [Tech-Sanji](https://github.com/Tech-Sanji), powered by OpenAI.

