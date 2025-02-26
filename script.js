let plantas = [];

let malbon = {
    nombre: "Malbon",
    tipo: "interior",
    riego: "cada 3 días",
    luz: "luz indirecta",
    img: "img/malbon.jpg",
    descripcion: "Una planta elegante y versátil..."
};
let cactus = {
    nombre: "Cactus",
    tipo: "exterior",
    riego: "cada 7 días",
    luz: "luz directa",
    img: "img/cactus.jpg",
    descripcion: "Ideal para espacios secos y soleados..."
};
let suculenta = {
    nombre: "Suculenta",
    tipo: "interior",
    riego: "cada 5 días",
    luz: "luz indirecta",
    img: "img/suculenta.jpg",
    descripcion: "Pequeñas obras de arte naturales..."
};
let ficus = {
    nombre: "Ficus",
    tipo: "interior",
    riego: "cada 4 días",
    luz: "luz indirecta",
    img: "img/ficus.jpg",
    descripcion: "Conocida por purificar el aire..."
};

plantas.push(malbon, cactus, suculenta, ficus);

function agregarPlanta(plantas) {
    plantas.forEach(planta => {
        let articulo = document.createElement("article");

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let img = document.createElement("img");
        img.src = planta.img;
        img.alt = planta.nombre;

        imageContainer.appendChild(img);
        articulo.appendChild(imageContainer);

        let h3 = document.createElement("h3");
        h3.textContent = planta.nombre;

        let p = document.createElement("p");
        p.textContent = "Tipo: " + planta.tipo;

        let p2 = document.createElement("p");
        p2.textContent = "Riego: " + planta.riego;

        let p3 = document.createElement("p");
        p3.textContent = "Luz: " + planta.luz;

        let p4 = document.createElement("p");
        p4.textContent = planta.descripcion;

        articulo.appendChild(h3);
        articulo.appendChild(p);
        articulo.appendChild(p2);
        articulo.appendChild(p3);
        articulo.appendChild(p4);

        document.getElementById("plantas").appendChild(articulo);
    });
}

addEventListener("DOMContentLoaded", () => agregarPlanta(plantas));
    });
};

addEventListener("DOMContentLoaded", agregarPlanta(plantas));
