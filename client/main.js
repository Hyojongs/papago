let input_text = document.getElementById("write");
let transe_btn = document.getElementById("trans_btn");
let show_text = document.getElementById("show");

transe_btn.addEventListener("click", transe);

function transe() {
  fetch(
    `http://localhost:5000/translate?source=ko&target=en&text=${input_text.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      show_text.innerHTML += `<div>${data.message.result.translatedText}</div>`;
    });
}
