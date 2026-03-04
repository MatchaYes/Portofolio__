let count = 0;
const counter = document.getElementById("counter");
const loader = document.getElementById("loader");

let interval = setInterval(() => {
    count++;
    counter.innerText = count;
    if(count >= 100){
        clearInterval(interval);
        loader.style.opacity = "0";
        setTimeout(()=> loader.style.display="none",600);
    }
}, 20);

const card = document.getElementById("profileCard");

card.addEventListener("mousemove", (e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", x + "px");
    card.style.setProperty("--y", y + "px");
});

