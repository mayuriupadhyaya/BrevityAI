# BrevityAI
This repository contains the codebase for an AI-powered Text Summarizer and Translator App called BrevityAI.

## Demo

![Demo](https://github.com/mayuriupadhyaya/BrevityAI/blob/3898974161b4af014c964d84de34f0c9716c3b8f/public/BrevityAI_demo.gif)

## Tech Stack

**Client-Side:**

- JavaScript
- HTML
- CSS

**Backend:**

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [Express.js](https://expressjs.com/) - Web framework 

**Translation and Summarization APIs:**

- [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index) - Access to multiple machine translation and summarization models:
    - [Facebook bart-large-cnn](https://huggingface.co/facebook/bart-large-cnn) - BART Large Language Model (LLM) fine-tuned for text summarization 
    - [Helsinki-NLP](https://huggingface.co/Helsinki-NLP) - Translation models

**Additional Libraries:**

- [Axios](https://axios-http.com/) - HTTP client for API interactions

## Getting Started

1. **Prerequisites:**

- Node.js and npm (or yarn) installed on your system.
- A Hugging Face API key (obtain one for free at https://huggingface.co/)

2. **Project Setup:**

- Clone this repository:

```bash
git clone https://github.com/mayuriupadhyaya/BrevityAI.git
```

- Change directory:

```bash
cd BrevityAI
```

- Install dependencies:

```bash
npm install 
```

3. **Environment Variables:**

- Create a .env file in the root of your project.
- Add the following line, replacing with your actual Hugging Face API key:

```bash
ACCESS_TOKEN=YOUR_API_KEY
```

4. **Start the Development Server:**

```bash
npm start 
```

- The app will run on http://localhost:3000

## Usage

- Paste your text in the input box.
- Select the desired summary length.
- Click the "Summarize" button.
- Choose the target language for translation.

> 503 errors: Many of the hosted models take a second to warm up from a cold start. You may encounter a 503 error the first time you call a model Wait about 20 seconds and try again!

## Contributing

This project welcomes contributions! Feel free to open issues, submit pull requests, or provide feedback.