// first state

// const box = document.createElement("div");
// document.body.appendChild(box);
// box.classList.add("box", "faded-out");

// requestAnimationFrame(() => {
//   //second state
//   box.classList.remove("faded-out");
// });

let contact = document.querySelector("#contact");
let content = document.querySelector("#content");
let container = document.querySelector("#container");

contact.addEventListener("mouseover", (e) => {
  e.stopPropagation();
  if (content.classList.contains("invisible")) {
    console.log("log");
    content.classList.remove(
      "w-0",
      "h-0",
      "opacity-0",
      "invisible",
      "scale-75"
    );
    content.classList.add("opacity-100", "visible", "scale-100");
    container.classList.add("block");
    container.classList.remove("hidden");
  } else {
    content.classList.add("w-0", "h-0", "opacity-0", "invisible", "scale-75");
    content.classList.remove("opacity-100", "visible", "scale-100");
    container.classList.remove("block");
    container.classList.add("hidden");
  }
});

container.addEventListener("mousedown", () => {
  if (content.classList.contains("invisible")) {
    console.log("log");
    content.classList.remove(
      "w-0",
      "h-0",
      "opacity-0",
      "invisible",
      "scale-75"
    );
    content.classList.add("opacity-100", "visible", "scale-100");
    container.classList.add("block");
    container.classList.remove("hidden");
  } else {
    content.classList.add("w-0", "h-0", "opacity-0", "invisible", "scale-75");
    content.classList.remove("opacity-100", "visible", "scale-100");
    container.classList.remove("block");
    container.classList.add("hidden");
  }
});
