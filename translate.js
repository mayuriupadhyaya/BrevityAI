const axios = require('axios');

// Function to translate the text
async function translateText(text, targetLanguage) {
  try {
    let data = JSON.stringify({
      "inputs": text
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: getTranslationModelUrl(targetLanguage),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
      },
      data: data
    };

    const response = await axios.request(config);
    return response.data[0].translation_text; // Return the translated text
  } catch (err) {
    console.log(err);
    throw err; // Propagate the error
  }
}

// Helper function to get the translation model URL based on the target language
function getTranslationModelUrl(targetLanguage) {
  const models = {
    'zh': 'Helsinki-NLP/opus-mt-en-zh',
    'es': 'Helsinki-NLP/opus-mt-en-es',
    'nl': 'Helsinki-NLP/opus-mt-en-nl'
  };

  // Ensure a valid model name is returned
  const modelName = models[targetLanguage];
  if (!modelName) {
    console.error("Invalid translation model for language:", targetLanguage);

  }

  const url = 'https://api-inference.huggingface.co/models/' + modelName;
  console.log("Translation API URL:", url); // Log the URL 
  return url;
}

// Export the function to allow it to be called outside of this file
module.exports = translateText;