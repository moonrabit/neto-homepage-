const clock = document.getElementById('clock');
setInterval(() => {
    clock.innerHTML = (new Date()).toString();
}, 1000);