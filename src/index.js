console.log("Kak interesno!");

// создаем элемент заголовка
const heading = document.createElement("h1");
heading.textContent = "Kak interesno!";

new toastui.Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",
  height: "500px",
  initialValue: "content",
});

// добавляем заголовок в DOM
const root = document.querySelector("#root");
root.append(heading);
