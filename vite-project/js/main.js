import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { menu } from "./menu";
document.querySelector("#app").innerHTML = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
`;

setupCounter(document.querySelector("#counter"));
console.log(menu);
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});
