let plantas = [];

let malbon = {
    nombre: "Malbon",
    tipo: "interior",
    riego: "cada 3 días",
    luz: "luz indirecta",
    img: "img/malbon.jpg",
    descripcion: "Una planta elegante y versátil, perfecta para dar un toque fresco y natural a cualquier espacio interior. Sus hojas vibrantes y su fácil cuidado la convierten en una favorita para principiantes y expertos por igual."
};

let cactus = {
    nombre: "Cactus",
    tipo: "exterior",
    riego: "cada 7 días",
    luz: "luz directa",
    img: "img/cactus.jpg",
    descripcion: "Ideal para aquellos que buscan una planta resistente y de bajo mantenimiento. Su aspecto único y su capacidad para sobrevivir en condiciones áridas lo hacen perfecto para decorar espacios secos y soleados."
};

let suculenta = {
    nombre: "Suculenta",
    tipo: "interior",
    riego: "cada 5 días",
    luz: "luz indirecta",
    img: "img/suculenta.jpg",
    descripcion: "Con sus formas geométricas y colores variados, las suculentas son pequeñas obras de arte naturales. Son excelentes para crear arreglos decorativos y requieren muy poca atención."
};

let ficus = {
    nombre: "Ficus",
    tipo: "interior",
    riego: "cada 4 días",
    luz: "luz indirecta",
    img: "img/ficus.jpg",
    descripcion: "Una planta clásica y atemporal, conocida por su capacidad para purificar el aire. Su follaje denso y brillante añade un toque de elegancia y frescura a cualquier ambiente."
};

// Agrega todas las plantas al array
plantas.push(malbon, cactus, suculenta, ficus);

function agregarPlanta(plantas) {
    plantas.forEach(planta => {
        let articulo = document.createElement("article");

        // Contenedor para la imagen
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let img = document.createElement("img");
        img.src = `img/${planta.nombre.toLowerCase()}.jpg`;
        img.alt = planta.nombre;

        imageContainer.appendChild(img); // Agrega la imagen al contenedor
        articulo.appendChild(imageContainer); // Agrega el contenedor al artículo

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

        // Crear el botón de WhatsApp
        let whatsappButton = document.createElement("button");
        whatsappButton.textContent = "Pedir por WhatsApp";
        whatsappButton.classList.add("whatsapp-button");

        // Configurar el enlace de WhatsApp
        let mensaje = `Quiero ${planta.nombre}, soy `;
        let numeroWhatsApp = "1234567890"; // Reemplaza con tu número de WhatsApp
        let urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        whatsappButton.onclick = () => window.open(urlWhatsApp, "_blank");

        // Agregar elementos al artículo
        articulo.appendChild(h3);
        articulo.appendChild(p);
        articulo.appendChild(p2);
        articulo.appendChild(p3);
        articulo.appendChild(p4);
        articulo.appendChild(whatsappButton);

        document.getElementById("plantas").appendChild(articulo);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    agregarPlanta(plantas);
});