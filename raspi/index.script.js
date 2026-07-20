document.getElementById("mc-btn").addEventListener("click", () => {
    window.location.href = "../mc/index.mc.html";
});

async function actualizar() {
    const res = await fetch("/stats");
    const datos = await res.json();

    document.getElementById("cpu-text").textContent = datos.cpu + "%";
    document.getElementById("ram-text").textContent = datos.ram + "%";

    // Actualizar barras de progreso
    document.getElementById("cpu-bar").style.width = datos.cpu + "%";
    document.getElementById("ram-bar").style.width = datos.ram + "%";

    //WIFI STATUS
    const ethres = await fetch("/network");
    const ethdatos = await ethres.json();
    const dot = document.getElementById("dot");
    if (ethdatos.online) {
        if(ethdatos.wifi) {
            dot.className = "online";
            document.getElementById("wifi-status").textContent = "Conectado (WiFi)";
        } else if(ethdatos.ethernet) {
            dot.className = "online";
            document.getElementById("wifi-status").textContent = "Conectado (Ethernet)";
        }
    } else {
        dot.className = "offline";
        document.getElementById("wifi-status").textContent = "Desconectado";
    }

    //HOTSPOT STATUS
    const hpres = await fetch("/hotspot");
    const hpdatos = await hpres.json();
    document.getElementById("hostpotSSID").textContent = "SSID: " + hpdatos.ssid;
    document.getElementById("hostpotPSW").textContent = "Contraseña: " + hpdatos.password;
    document.getElementById("ip").textContent = "ID: " + ethdatos.ip;
}

actualizar();
setInterval(actualizar, 3000);