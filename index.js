const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');
const translateText = require('./translate.js');

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', (req, res) => {
  // get the text_to_summarize property from the request body
  const text = req.body.text_to_summarize;

  // Call the summarizeText function, passing in the text from the request
  summarizeText(text)
    .then(summary => {
      res.send(summary); // Send the summarized text as a response to the client
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send("Error summarizing text");
    });
});

// Handle POST requests to the '/translate' endpoint
app.post('/translate', (req, res) => {
  // Get the text to translate from the request body
  const text = req.body.text_to_translate;
  // Get the target language
  const targetLanguage = req.body.target_language;

  translateText(text, targetLanguage)
    .then(translation => {
      res.send(translation); // Send the translation as the response
    })
    .catch(error => {
      console.log(error.message);
      res.status(500).send("Error translating text");
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
