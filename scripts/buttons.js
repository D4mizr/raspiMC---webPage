const mcBtn = document.getElementById("mc-btn");
const raspiBtn = document.getElementById("raspi-btn");
const mcStartBtn = document.getElementById("mc-start");
const mcConfigBtn = document.getElementById("mc-config");
const mcServerBtn = document.getElementById("mc-server");
const raspiStartBtn = document.getElementById("raspi-start");
const raspiConfigBtn = document.getElementById("raspi-config");

if (mcBtn) {
    mcBtn.addEventListener("click", () => {
        window.location.href = "../mc/index.mc.html";
    });
}
if (raspiBtn) {
    raspiBtn.addEventListener("click", () => {
        window.location.href = "../raspi/index.raspi.html";
    });
}
if (mcStartBtn) {
    mcStartBtn.addEventListener("click", () => {
        window.location.href = "../mc/index.mc.html";
    });
}
if (mcConfigBtn) {
    mcConfigBtn.addEventListener("click", () => {
        window.location.href = "../mc/config.mc.html";
    });
}
if (mcServerBtn) {
    mcServerBtn.addEventListener("click", () => {
        window.location.href = "../mc/server.mc.html";
    });
}
if (raspiStartBtn) {
    raspiStartBtn.addEventListener("click", () => {
        window.location.href = "../raspi/index.raspi.html";
    });
}
if (raspiConfigBtn) {
    raspiConfigBtn.addEventListener("click", () => {
        window.location.href = "../raspi/config.raspi.html";
    });
}