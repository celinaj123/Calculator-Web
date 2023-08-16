const text =document.querySelector(".second");

 const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Calculator";
            }, 0);
            setTimeout(() => {
                text.textContent = "Kalkulator"
            }, 4000);
            setTimeout(() => {
                text.textContent = "Rechner"
            }, 8000);
            setTimeout(() => {
                text.textContent = "калькулятор"
            }, 12000);
        }

textLoad();
// setInterval(textLoad,16000);
