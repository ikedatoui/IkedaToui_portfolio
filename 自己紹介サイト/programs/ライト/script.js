const light = document.querySelector('.light');
const elm = document.querySelector('.elm');
const swi = document.querySelector('.switch');
const room = document.querySelector('.room');
let swi_j = false;

const mouseMove =(e)=>{
    const w = document.querySelector('.light').clientWidth;
    const h = document.querySelector('.light').clientHeight;
    const mX = e.pageX;
    const mY = e.pageY;

    const xP = (Math.round((mX/w*100) * 100) / 100);
    const yP = (Math.round((mY/h*100) * 100) / 100);
    light.style.background = `radial-gradient(circle at ${xP}% ${yP}%, transparent, transparent 80px, rgba(0,0,0,0.9) 120px, rgba(0,0,0,0.9))`;
}
document.addEventListener("mousemove", function(e){
    if(!swi_j){
        mouseMove(e);
    };
});

swi.addEventListener('click',()=>{
    if(swi_j){
        light.classList.add('light');
        room.src = 'room_off.png';
        mouseMove(event);
        swi_j = false;
    }else{
        light.classList.remove('light');
        room.src = 'room_on.png';
        swi_j = true;
    }
})
