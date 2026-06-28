const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const currentValue = event.currentTarget.value;
  output.textContent = currentValue === "" ? "Anonymous" : currentValue.trim();
});
