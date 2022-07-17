document.addEventListener(
    "scroll",
    (e) => {
        if (
            document.querySelector(".main").scrollTop >=
            document.querySelector("#contacto").offsetTop - 10
        ) {
            if (window.getComputedStyle(document.querySelector(".btn_nav")).display == "none") {
                document.querySelector("nav > ul").style.border = "#f5f5f5 solid 2px";
                document.querySelectorAll("nav a").forEach((e) => {
                    e.classList.add("navdark");
                });
            }
            document.querySelector(".btn_nav").style.color = "#f5f5f5";
        } else {
            document.querySelector("nav > ul").style.border = "#111111 solid 2px";
            document.querySelectorAll("nav a").forEach((e) => {
                e.classList.remove("navdark");
            });
            document.querySelector(".btn_nav").style.color = "#111111";
        }
    },
    true
);

document.querySelector(".btn_nav").addEventListener("click", (e) => {
    document.querySelector(".btn_nav").classList.toggle("active");
    document.querySelectorAll("li > a").forEach((e) => {
        e.addEventListener("click", (e) => {
            document.querySelector(".btn_nav").classList.remove("active");
            document.querySelector("ul").style.visibility = "hidden";
        });
    });
    if (document.querySelector(".btn_nav").classList.contains("active")) {
        document.querySelector("ul").style.visibility = "visible";
    } else {
        document.querySelector("ul").style.visibility = "hidden";
    }
});

let habilidades = [
    {
        nombre: "HTML",
        img: "src/habilidades/html-5.svg",
    },
    {
        nombre: "CSS",
        img: "src/habilidades/css-3.svg",
    },
    {
        nombre: "Javascript",
        img: "src/habilidades/js.svg",
    },
    {
        nombre: "Node JS",
        img: "src/habilidades/node-js.svg",
    },
    {
        nombre: "React",
        img: "src/habilidades/react.svg",
    },
    {
        nombre: "MongoDB",
        img: "src/habilidades/MongoDB.png",
    },
    {
        nombre: "Git",
        img: "src/habilidades/git.svg",
    },
    {
        nombre: "PHP",
        img: "src/habilidades/php.png",
    },
    {
        nombre: "MySQL",
        img: "src/habilidades/sql.png",
    },
    {
        nombre: "Bootstrap",
        img: "src/habilidades/bootstrap.svg",
    },
    {
        nombre: "Wordpress",
        img: "src/habilidades/wordpress.png",
    },
    {
        nombre: "Web Sraping",
        img: "src/habilidades/data.png",
    },
];
let proyectos = [
    {
        nombre: "Login Starter",
        descripcion: "Tecnologias </br> NodeJS, Express, React, Bootstrap y MongoDB",
        img: "src/proyectos/loginmern.png",
        demo: "https://login-djoako22.vercel.app/",
        repo: "https://login-djoako22.vercel.app/",
    },
    {
        nombre: "Pedidos",
        descripcion:
            "App para hacer pedidos a un numero de telefono espcifico </br></br> Tecnologias </br> NodeJS, Express",
        img: "src/proyectos/App Menus.png",
        demo: "https://djoako22.github.io/app_pedidos",
        repo: "https://github.com/Djoako22/app_pedidos",
    },
    {
        nombre: "Cripto Alarma",
        descripcion:
            "Alarma de precio de criptomonedas </br></br> Tecnologias </br> NodeJS, Express",
        img: "src/proyectos/Cripto Alarma.png",
        demo: "https://djoako22.github.io/cripto_alarma/",
        repo: "https://github.com/Djoako22/cripto_alarma",
    },
    {
        nombre: "Juego Cajero",
        descripcion:
            "Juego para practicar y divertirte en el manejo de la caja </br></br> Tecnologias </br> NodeJS, Express",
        img: "src/proyectos/Juego Cajero.png",
        demo: "https://djoako22.github.io/juego_cajero/",
        repo: "https://github.com/Djoako22/juego_cajero",
    },
    {
        nombre: "Que comemos?",
        descripcion:
            "App que te elije un plato de comida aleatoria </br></br> Tecnologias </br> NodeJS, Express",
        img: "src/proyectos/Que Comemos.png",
        demo: "https://djoako22.github.io/que_comemos/",
        repo: "https://github.com/Djoako22/que_comemos",
    },
];

const div_habilidades = document.querySelector(".habilidades");
const div_proyectos = document.querySelector(".proyectos");

function render() {
    // Habilidades
    habilidades.forEach((habilidad) => {
        div_habilidades.innerHTML += `
        <div class="habilidad" >
            <img src=${habilidad.img} width='50' style="border-radius: 50%;">
            ${habilidad.nombre}
        </div>
        `;
    });
    // Proyectos
    proyectos.forEach((proyecto) => {
        div_proyectos.innerHTML += `
        <div class="proyecto">
            <img src="${proyecto.img}" alt="">
            <div class="contenido">
                <h3>${proyecto.nombre}</h3>
                <p>${proyecto.descripcion}</p>
                <div class="enlaces">
                    <a href="${proyecto.repo}" aria-label="REPO"><i class="uil uil-github"></i></a>
                    <a href="${proyecto.demo}" aria-label="DEMO"><i class="uil uil-play-circle"></i></a>
                </div>
            </div>
        </div>
        `;
    });
}

render();
