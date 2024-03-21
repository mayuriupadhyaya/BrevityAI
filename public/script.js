const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");
const languageSelect = document.getElementById("language-select");
const translationTextArea = document.getElementById("translation");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);
languageSelect.addEventListener("change", translateSummarizedText);

function verifyTextLength(e) {
  const textarea = e.target;
  const textLength = textarea.value.length;

  if (textLength >= 200 && textLength <= 100000) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

function submitData() {
  submitButton.classList.add("submit-button--loading");
  const textToSummarize = textArea.value;

  fetch('/summarize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text_to_summarize: textToSummarize })
  })
    .then(response => response.text())  // server returns text
    .then(data => {
      summarizedTextArea.value = data;  // Update the summarized text area
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
      submitButton.classList.remove("submit-button--loading");
      summarizedTextArea.value = "Error summarizing text";
    });
}

function translateSummarizedText(e) {
  const selectedLanguage = e.target.value;
  const textToTranslate = summarizedTextArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    text_to_translate: textToTranslate,
    target_language: selectedLanguage
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  if (selectedLanguage) {
    fetch('/translate', requestOptions)
      .then(response => response.text())
      .then(translate => {

        translationTextArea.value = translate;
      })
      .catch(error => {
        console.log(error.message);
        translationTextArea.value = "Error translating text";
      });
  }
}