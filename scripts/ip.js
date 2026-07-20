async function actualizar() {
    ethres = await fetch("/network");
    const ethdatos = await ethres.json();
    document.getElementById("ip").textContent = "ID: " + ethdatos.ip;
}

actualizar();
setInterval(actualizar, 3000);