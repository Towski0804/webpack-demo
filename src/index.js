import x from "./x";
import png from "./assets/yuhubaobei.png";

console.log(x);
console.log("hi");

const div = document.getElementById("app");
div.innerHTML = `<img src="${png}" alt="yuhubaobei">`;

const button = document.createElement("button");
button.innerText = "Lazy Loading";
button.onclick = () => {
  const lazy = import("./lazy");
  lazy.then(
    (module) => {
      const fn = module.default;
      fn();
    },
    () => {}
  );
};
div.appendChild(button);
