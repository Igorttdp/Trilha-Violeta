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

class Render {
  static apartments() {
    aptos.forEach((el) => {
      const ul = document.querySelector(".c-bedrooms");
      const li = document.createElement("li");
      const img = document.createElement("img");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      const aptUl = document.createElement("ul");
      const a = document.createElement("a");

      li.classList.add("c-bedrooms__card");
      img.setAttribute("src", "./src/assets/Camada 5.png");
      h4.innerText = `${el.name} - ${el.num}`;
      p.innerText = el.desc;
      a.innerText = "RESERVE JÁ";
      a.setAttribute(
        "href",
        `https://wa.me/5561999856544?text=Olá!%20Tenho%20interesse%20em%20reservar%20o%20apartamento%20${el.num}`
      );
      a.setAttribute("target", "blank_");

      el.avaliable.forEach((el) => {
        if (el.air) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "Ar condicionado";
          aptUl.appendChild(aptLi);
        }
        if (el.fan) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "Ventilador";
          aptUl.appendChild(aptLi);
        }
        if (el.miniBar) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "Frigobar";
          aptUl.appendChild(aptLi);
        }
        if (el.suite) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "Suíte";
          aptUl.appendChild(aptLi);
        }
        if (el.TV && el.cableTV) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "TV SKY com HBO e Telecine";
          aptUl.appendChild(aptLi);
        } else {
          const aptLi = document.createElement("li");
          aptLi.innerText = "TV Aberta";
          aptUl.appendChild(aptLi);
        }
        if (el.porch) {
          const aptLi = document.createElement("li");
          aptLi.innerText = "Varanda com rede";
          aptUl.appendChild(aptLi);
        }

        li.append(img, h4, p, aptUl, a);
        ul.appendChild(li);
      });
    });
  }
}

Render.apartments();
Interactions.showWppBtn();
Interactions.virtualTour();
