const konami = [
  "arrowup", "arrowup",
  "arrowdown", "arrowdown",
  "arrowleft", "arrowright",
  "arrowleft", "arrowright",
  "b", "a"
];
let pos = 0;

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === konami[pos]) {
    pos++;
    if (pos === konami.length) {
      window.location.href = "html/konami.html";
      pos = 0;
    }
  } else {
    pos = 0;
  }
});