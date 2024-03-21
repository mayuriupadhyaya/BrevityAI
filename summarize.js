const axios = require('axios');

// Function to summarize the text
async function summarizeText(text) {
  try {
    let data = JSON.stringify({
      "inputs": text,
      "parameters": {
        "max_length": 100,
        "min_length": 30
      }
    });

    let config = {
      method: 'post',
      url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
      },
      data: data
    };

    const response = await axios.request(config);
    // Return the summary text from the response
    return response.data[0].summary_text;
  } catch (err) {
    console.log(err);
    throw err; // Propagate the error
  }
}

// Export the function to allow it to be called outside of this file
module.exports = summarizeText;
