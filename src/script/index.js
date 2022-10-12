import { aptos } from "./database.js";

class Interactions {
  static showWppBtn() {
    const btn = document.querySelector(".float__wpp");

    window.onscroll = () => {
      if (
        document.body.scrollTop >= 200 ||
        document.documentElement.scrollTop >= 200
      ) {
        btn.classList.add("float__wpp--active");
      } else btn.classList.remove("float__wpp--active");
    };
  }

  static virtualTour() {
    const btn = document.querySelector(".find-us__btn");
    btn.onclick = () => {
      const map = document.querySelector("#find-us__map");
      const tour = document.querySelector("#find-us__tour");

      map.classList.toggle("hidden");
      tour.classList.toggle("hidden");
      btn.classList.toggle("active");

      if (btn.classList.contains("active")) {
        btn.innerText = "Voltar para o mapa";
      } else {
        btn.innerText = "Fazer Tour Vitual";
      }
    };
  }
}

Interactions.showWppBtn();
Interactions.virtualTour();
