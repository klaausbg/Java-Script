document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value;
  const normalizedInput = input.toLowerCase().replace(/[\W_]/g, "");
  const reversedInput = normalizedInput.split("").reverse().join("");
  const resultDiv = document.getElementById("result");

  if (!input) {
    alert("Please input a value");
  } else if (normalizedInput === reversedInput) {
    resultDiv.textContent = `${input} is a palindrome`;
  } else {
    resultDiv.textContent = `${input} is not a palindrome`;
  }
});
