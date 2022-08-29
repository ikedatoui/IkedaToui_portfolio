const field = document.querySelector('.field');
const game = document.querySelector('.game');
const app = document.querySelector('.app > .num')
let sna_arr = [];
let now_arr = null;
let app_pt = 0;
let pluJ = 0;
let speed = 200;
for(let i = 0; i < 255; i++ ){
    field.innerHTML += `<div class='cel'></div>`;
}

const cel_arr = Array.from(document.querySelectorAll('.cel'));

const randomFunc = (hebi) =>{
    let ranJ = true;
    let hebiJ = true;
    while(ranJ){
        let random = Math.random() * 255 | 0;
        hebi.map((num)=>{
            if(random==num){
                hebiJ = false
            }
        })
        if(hebiJ){
            cel_arr[random].classList.add('apple')
            ranJ = false
        }
    }
}

const gameOver = () =>{
    game.classList.add('act')
    game.innerHTML += `<p class='over'>ゲームオーバー</p><div class='replay'>やり直す</div>`
    const replay = document.querySelector('.replay');
    replay.addEventListener('click',()=>{
        location.reload();
    })
}



const move = () =>{
    let over = false
    const sna_arr2 = Array.from(document.querySelectorAll('.snake'))
    let sna_ind = [];
    let sna_num = 0;
    
    for(let i = 0; i < sna_arr2.length; i++){
        sna_arr2.map((num)=>{
            if(num.classList.contains(`snake${i+1}`)){
                num.classList.remove(`snake${i+1}`)
                num.classList.remove('snake')
                cel_arr.map((num2,index)=>{
                    if(num2 == num){
                        sna_ind = [...sna_ind,index]
                    }
                })
            }
        })
    }

    const count_app = () =>{
        app_pt+=1
        app.innerHTML = app_pt
        if(app_pt%5==0){
            speed -= 10
        }
    }
    
    if(now_arr == 'ArrowRight'||now_arr=='KeyD'){

        if(sna_ind[0]==16||sna_ind[0]==33||sna_ind[0]==50||sna_ind[0]==67||sna_ind[0]==84||
        sna_ind[0]==101||sna_ind[0]==118||sna_ind[0]==135||sna_ind[0]==152||sna_ind[0]==169||
        sna_ind[0]==186||sna_ind[0]==203||sna_ind[0]==220||sna_ind[0]==237||sna_ind[0]==254){
            over = true
            return gameOver();
        }

        if(cel_arr[sna_ind[0]+1].classList.contains('apple')){
            randomFunc(sna_ind);
            cel_arr[sna_ind[0]+1].classList.remove('apple');
            count_app();
            pluJ++
            if(pluJ%2 == 0){
                sna_ind.push(0)
            }
        }

        sna_num = 0;
        let sna_num2 = null;
        sna_ind.map((num)=>{
            sna_num+=1
            if(sna_num2 == null){
                if(cel_arr[num+1].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[num+1].classList.add(`snake${sna_num}`)
                cel_arr[num+1].classList.add('snake')
            }else{
                if(cel_arr[sna_num2].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[sna_num2].classList.add(`snake${sna_num}`)
                cel_arr[sna_num2].classList.add('snake')
            }
            sna_num2 = num;
        })

    }else if(now_arr == 'ArrowLeft'|| now_arr=='KeyA'){

        if(sna_ind[0]==0||sna_ind[0]==17||sna_ind[0]==34||sna_ind[0]==51||sna_ind[0]==68||
        sna_ind[0]==85||sna_ind[0]==102||sna_ind[0]==119||sna_ind[0]==136||sna_ind[0]==153||
        sna_ind[0]==170||sna_ind[0]==187||sna_ind[0]==204||sna_ind[0]==221||sna_ind[0]==238){
            over = true
            return gameOver();
        }

        if(cel_arr[sna_ind[0]-1].classList.contains('apple')){
            randomFunc(sna_ind)
            cel_arr[sna_ind[0]-1].classList.remove('apple')
            count_app()
            pluJ++
            if(pluJ%2==0){
                sna_ind.push(0)
            }
        }

        sna_num = 0;
        let sna_num2 = null;
        sna_ind.map((num)=>{
            sna_num+=1
            if(sna_num2 == null){
                if(cel_arr[num-1].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[num-1].classList.add(`snake${sna_num}`)
                cel_arr[num-1].classList.add('snake')
            }else{
                if(cel_arr[sna_num2].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[sna_num2].classList.add(`snake${sna_num}`)
                cel_arr[sna_num2].classList.add('snake')
            }
            sna_num2 = num;
        })

    }else if(now_arr == 'ArrowUp'||now_arr=='KeyW'){
        if(sna_ind[0]==0||sna_ind[0]==1||sna_ind[0]==2||sna_ind[0]==3||sna_ind[0]==4||
        sna_ind[0]==5||sna_ind[0]==6||sna_ind[0]==7||sna_ind[0]==8||sna_ind[0]==9||
        sna_ind[0]==10||sna_ind[0]==11||sna_ind[0]==12||sna_ind[0]==13||sna_ind[0]==14||
        sna_ind[0]==15||sna_ind[0]==16){
            over = true
            return gameOver();
        }

        if(cel_arr[sna_ind[0]-17].classList.contains('apple')){
            randomFunc(sna_ind)
            cel_arr[sna_ind[0]-17].classList.remove('apple')
            count_app()
            pluJ++
            if(pluJ%2==0){
                sna_ind.push(0)
            }
        }
        
        sna_num = 0;
        let sna_num2 = null;
        sna_ind.map((num)=>{
            sna_num+=1
            if(sna_num2 == null){
                if(cel_arr[num-17].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[num-17].classList.add(`snake${sna_num}`)
                cel_arr[num-17].classList.add('snake')
            }else{
                if(cel_arr[sna_num2].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[sna_num2].classList.add(`snake${sna_num}`)
                cel_arr[sna_num2].classList.add('snake')
            }
            sna_num2 = num;
        })

    }else if(now_arr == 'ArrowDown'||now_arr=='KeyS'){
        if(sna_ind[0]==238||sna_ind[0]==239||sna_ind[0]==240||sna_ind[0]==241||sna_ind[0]==242||
        sna_ind[0]==243||sna_ind[0]==244||sna_ind[0]==245||sna_ind[0]==246||sna_ind[0]==247||
        sna_ind[0]==248||sna_ind[0]==249||sna_ind[0]==250||sna_ind[0]==251||sna_ind[0]==252||
        sna_ind[0]==253||sna_ind[0]==254){
            over = true
            return gameOver();
        }

        if(cel_arr[sna_ind[0]+17].classList.contains('apple')){
            randomFunc(sna_ind)
            cel_arr[sna_ind[0]+17].classList.remove('apple')
            count_app()
            pluJ++
            if(pluJ%2==0){
                sna_ind.push(0)
            }
        }
        
        sna_num = 0;
        let sna_num2 = null;
        sna_ind.map((num)=>{
            sna_num+=1
            if(sna_num2 == null){
                if(cel_arr[num+17].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[num+17].classList.add(`snake${sna_num}`)
                cel_arr[num+17].classList.add('snake')
            }else{
                if(cel_arr[sna_num2].classList.contains('snake')){
                    over = true
                    return gameOver();
                }
                cel_arr[sna_num2].classList.add(`snake${sna_num}`)
                cel_arr[sna_num2].classList.add('snake')
            }
            sna_num2 = num;
        })

    }

    if(!over){
        setTimeout(move,speed)
    }
}

const start = (e) =>{
    if(e.code=='ArrowUp' || e.code=='ArrowLeft' || e.code=='ArrowRight' || e.code=='ArrowDown'||
    e.code=='KeyA'||e.code == 'KeyS'||e.code=='KeyW'||e.code=='KeyD'){
        if(now_arr == null){
            if(e.code=='ArrowLeft'||e.code == 'KeyA'){
                null
            }else{
                now_arr = e.code;
                move();
            }
        }else if(e.code=='ArrowUp'||e.code=='KeyW'){
            if(now_arr=='ArrowDown'||now_arr=='KeyS'){
                null
            }else{
                now_arr = e.code; 
            }
        }else if(e.code=='ArrowDown'||e.code == 'KeyS'){
            if(now_arr=='ArrowUp'||now_arr=='KeyW'){
                null
            }else{
                now_arr = e.code; 
            }
        }else if(e.code=='ArrowRight'||e.code == 'KeyD'){
            if(now_arr=='ArrowLeft'||now_arr=='KeyA'){
                null
            }else{
                now_arr = e.code; 
            }
        }else if(e.code=='ArrowLeft'||e.code == 'KeyA'){
            if(now_arr=='ArrowRight'||now_arr=='KeyD'){
                null
            }else{
                now_arr = e.code; 
            }
        }
        e.preventDefault();
    }

    return false;
}

cel_arr.map((num,index)=>{
    if(index % 2 == 0){
        num.classList.add('cel2')
    }
    if(index == 123){
        let sna_num = 0;
        sna_arr = [...sna_arr,num,cel_arr[122],cel_arr[121]]
        sna_arr.map((num2)=>{
            num2.classList.add(`snake`)
            num2.classList.add(`snake${sna_num+=1}`)
        })
        cel_arr[131].classList.add('apple')
    }
})

document.addEventListener('keydown',start)

