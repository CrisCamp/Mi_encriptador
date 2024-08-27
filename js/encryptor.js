// Function to encrypt the input text
function encryptText(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
}

// Function to decrypt the input text
function decryptText(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

// Function to handle encryption and display the result
function handleEncrypt() {
  const inputText = document.querySelector(".text-input").value;
  const outputTextElement = document.querySelector(".output-text");
  const encryptedText = encryptText(inputText);
  outputTextElement.value = encryptedText;
  toggleResultDisplay(encryptedText);
}

// Function to handle decryption and display the result
function handleDecrypt() {
  const inputText = document.querySelector(".text-input").value;
  const outputTextElement = document.querySelector(".output-text");
  const decryptedText = decryptText(inputText);
  outputTextElement.value = decryptedText;
  toggleResultDisplay(decryptedText);
}

// Function to handle text copying to clipboard
function handleCopy() {
  const outputTextElement = document.querySelector(".output-text");
  outputTextElement.select();
  document.execCommand("copy");
}

// Function to toggle the visibility of the result section
function toggleResultDisplay(text) {
  const cardContent = document.querySelector(".card-content");
  const outputTextElement = document.querySelector(".output-text");
  const copyButton = document.querySelector(".btn-copy");

  if (text.length > 0) {
    cardContent.style.display = "none";
    outputTextElement.style.visibility = "visible";
    copyButton.style.visibility = "visible";
  } else {
    cardContent.style.display = "block";
    outputTextElement.style.visibility = "hidden";
    copyButton.style.visibility = "hidden";
  }
}

// Adding event listeners to buttons
document.querySelector(".btn-encrypt").addEventListener("click", handleEncrypt);
document.querySelector(".btn-decrypt").addEventListener("click", handleDecrypt);
document.querySelector(".btn-copy").addEventListener("click", handleCopy);
