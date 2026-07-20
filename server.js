const express = require("express");
const si = require("systeminformation");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/stats", async (req, res) => {
    const load = await si.currentLoad();
    const mem = await si.mem();

    res.json({
        cpu: load.currentLoad.toFixed(1),
        ram: ((mem.used / mem.total) * 100).toFixed(1)
    });
});

app.get("/network", async (req, res) => {
    const interfaces = await si.networkInterfaces();

    const activa = interfaces.find(i =>
        i.operstate === "up" &&
        !i.internal &&
        !i.virtual &&
        !i.iface.toLowerCase().includes("virtual") &&
        !i.iface.toLowerCase().includes("vbox") &&
        !i.iface.toLowerCase().includes("vmware")
    );

    if (!activa) {
        return res.json({
            online: false
        });
    }

    res.json({
        online: true,
        nombre: activa.iface,
        tipo: activa.type,
        wifi: activa.type === "wireless",
        ethernet: activa.type === "wired",
        ssid: activa.ssid,
        ip: activa.ip4
    });
});

app.get("/hotspot", (req, res) => {
    res.json({
        enabled: true,
        ssid: "RaspiMC",
        password: "raspimc123",
        users: 2
    });
});

app.listen(3000, () => {
    console.log("Servidor en http://localhost:3000");
});
