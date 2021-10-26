const form = document.getElementById("form");
const input =document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(input.value);
  add();
});

function add() {
  const li = document.createElement("li");
  li.innerText = input.value;
  li.classList.add("list-gropu-item");
  ul.appendChild(li);
}