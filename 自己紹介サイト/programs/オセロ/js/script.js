const field = document.querySelector('.field');
const game = document.querySelector('.game');
const score = document.querySelector('.score');
const bla = document.querySelector('.bla_num');
const whi = document.querySelector('.whi_num');
const info = document.querySelector('.info > span')
const skip = document.querySelector('.skip')
const masu_arr = [];
let all_J = true
let color = 'bla';
let color2 = 'whi';

for(let i = 0; i < 64; i++){
    let masu = document.createElement('div');
    masu.classList.add('cel')

    if(i < 8){
        if(i%2==0){
            masu.classList.add('cel2')
        }
        masu.y = 1;
        masu.x = i+1;
    }else if(i < 16){
        if(i%2!==0){
            masu.classList.add('cel2')
        }
        masu.y = 2;
        masu.x = i-7;
    }else if(i < 24){
        if(i%2==0){
            masu.classList.add('cel2')
        }
        masu.y = 3;
        masu.x = i-15;
    }else if(i < 32){
        if(i%2!==0){
            masu.classList.add('cel2')
        }
        masu.y = 4;
        masu.x = i-23;
    }else if(i < 40){
        if(i%2==0){
            masu.classList.add('cel2')
        }
        masu.y = 5;
        masu.x = i-31;
    }else if(i < 48){
        if(i%2!==0){
            masu.classList.add('cel2')
        }
        masu.y = 6;
        masu.x = i-39;
    }else if(i < 56){
        if(i%2==0){
            masu.classList.add('cel2')
        }
        masu.y = 7;
        masu.x = i-47;
    }else if(i < 64){
        if(i%2!==0){
            masu.classList.add('cel2')
        }
        masu.y = 8;
        masu.x = i-55;
    }
    field.appendChild(masu);
    masu_arr.push({elm:masu,x:masu.x,y:masu.y})
}

masu_arr.map((num,index)=>{

    if(num.y == 4){
        if(num.x == 4){
            num.elm.classList.add('whi')
            num.elm.classList.add('on')
        }else if(num.x == 5){
            num.elm.classList.add('bla')
            num.elm.classList.add('on')
        }
    }else if(num.y == 5){
        if(num.x == 4){
            num.elm.classList.add('bla')
            num.elm.classList.add('on')
        }else if(num.x == 5){
            num.elm.classList.add('whi')
            num.elm.classList.add('on')
        }
    }

    num.elm.addEventListener('click',()=>{
        if(num.elm.classList.contains('on')){
            console.log('muri')
        }else{
            let aroJ = [];
            masu_arr.map((num2)=>{
                if(num2.y==num.y-1){
                    if(num2.x==num.x-1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }else if(num2.x==num.x){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }else if(num2.x==num.x+1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }
                }else if(num2.y==num.y){
                    if(num2.x==num.x-1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }else if(num2.x==num.x+1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }
                }else if(num2.y==num.y+1){
                    if(num2.x==num.x-1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }else if(num2.x==num.x){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }else if(num2.x==num.x+1){
                        if(num2.elm.classList.contains(color2)){
                            aroJ.push(num2)
                        }
                    }
                }
            })

            if(aroJ){
                let j3 = false

                aroJ.map((num2)=>{
                    console.log(num2)
                    let j = true
                    let j2 = false
                    let i = 1;
                    let i_arr = [];
                    if(num.y+1 == num2.y){
                        if(num.x-1 == num2.x){
                            console.log('左下')
                            while(j){
                                masu_arr.map((num3)=>{
                                    if(num.x-i == num3.x && num.y+i == num3.y){
                                        if(num3.elm.classList.contains('on')==true){
                                            if(num3.elm.classList.contains(color)){
                                                j = false
                                                j2 = true
                                            }else{
                                                i_arr.push(num3.elm)
                                            }
                                        }else{
                                            j2 = false
                                            j = false
                                        }
                                    }
                                })
                                if(i > 7){
                                    j = false
                                    console.log('empty')
                                }
                                i++
                            }
                            if(j2){
                                num.elm.classList.add(color)
                                num.elm.classList.add('on')
                                j3=true
                                i_arr.map((num)=>{
                                    num.classList.remove(color2)
                                    num.classList.add('on');
                                    num.classList.add(color);
                                })
                            }
                        }else if(num.x == num2.x){
                            console.log('下')
                            while(j){
                                console.log(i)
                                masu_arr.map((num3)=>{
                                    if(num.x == num3.x && num.y+i == num3.y){
                                        if(num3.elm.classList.contains('on')==true){
                                            if(num3.elm.classList.contains(color)){
                                                j = false
                                                j2 = true
                                            }else{
                                                i_arr.push(num3.elm)
                                            }
                                        }else{
                                            j2 = false
                                            j = false
                                        }
                                    }
                                })
                                if(i > 7){
                                    j = false
                                    console.log('empty')
                                }
                                i++
                            }
                            if(j2){
                                num.elm.classList.add(color)
                                num.elm.classList.add('on')
                                j3=true
                                i_arr.map((num)=>{
                                    num.classList.remove(color2)
                                    num.classList.add('on');
                                    num.classList.add(color);
                                })
                            }
                        }else if(num.x+1 == num2.x){
                            console.log('右下')
                            while(j){
                                console.log(i)
                                masu_arr.map((num3)=>{
                                    if(num.x+i == num3.x && num.y+i == num3.y){
                                        if(num3.elm.classList.contains('on')==true){
                                            if(num3.elm.classList.contains(color)){
                                                j = false
                                                j2 = true
                                            }else{
                                                i_arr.push(num3.elm)
                                            }
                                        }else{
                                            j2 = false
                                            j = false
                                        }
                                    }
                                })
                                if(i > 7){
                                    j = false
                                    console.log('empty')
                                }
                                i++
                            }
                            if(j2){
                                num.elm.classList.add(color)
                                num.elm.classList.add('on')
                                j3=true
                                i_arr.map((num)=>{
                                    num.classList.remove(color2)
                                    num.classList.add('on');
                                    num.classList.add(color);
                                })
                            }
                        }
                    }else if(num.y == num2.y){
                        if(num.x-1 == num2.x){
                            console.log('左')
                            while(j){
                                console.log(i)
                                masu_arr.map((num3)=>{
                                    if(num.x-i == num3.x && num.y == num3.y){
                                        if(num3.elm.classList.contains('on')==true){
                                            if(num3.elm.classList.contains(color)){
                                                j = false
                                                j2 = true
                                            }else{
                                                i_arr.push(num3.elm)
                                            }
                                        }else{
                                            j2 = false
                                            j = false
                                        }
                                    }
                                })
                                if(i > 7){
                                    j = false
                                    console.log('empty')
                                }
                                i++
                            }
                            if(j2){
                                num.elm.classList.add(color)
                                num.elm.classList.add('on')
                                j3=true
                                i_arr.map((num)=>{
                                    num.classList.remove(color2)
                                    num.classList.add('on');
                                    num.classList.add(color);
                                })
                            }
                        }else if(num.x+1 == num2.x){
                            console.log('右')
                            while(j){
                                console.log(i)
                                masu_arr.map((num3)=>{
                                    if(num.x+i == num3.x && num.y == num3.y){
                                        if(num3.elm.classList.contains('on')==true){
                                            if(num3.elm.classList.contains(color)){
                                                j = false
                                                j2 = true
                                            }else{
                                                i_arr.push(num3.elm)
                                            }
                                        }else{
                                            j2 = false
                                            j = false
                                        }
                                    }
                                })
                                if(i > 7){
                                    j = false
                                    console.log('empty')
                                }
                                i++
                            }
                            if(j2){
                                num.elm.classList.add(color)
                                num.elm.classList.add('on')
                                j3=true
                                i_arr.map((num)=>{
                                    num.classList.remove(color2)
                                    num.classList.add('on');
                                    num.classList.add(color);
                                })
                            }
                        }
                        }else if(num.y-1 == num2.y){
                            if(num.x-1 == num2.x){
                                console.log('左上')
                                while(j){
                                    console.log(i)
                                    masu_arr.map((num3)=>{
                                        if(num.x-i == num3.x && num.y-i == num3.y){
                                            if(num3.elm.classList.contains('on')==true){
                                                if(num3.elm.classList.contains(color)){
                                                    j = false
                                                    j2 = true
                                                }else{
                                                    i_arr.push(num3.elm)
                                                }
                                            }else{
                                                j2 = false
                                                j = false
                                            }
                                        }
                                    })
                                    if(i > 7){
                                        j = false
                                        console.log('empty')
                                    }
                                    i++
                                }
                                if(j2){
                                    num.elm.classList.add(color)
                                    num.elm.classList.add('on')
                                    j3=true
                                    i_arr.map((num)=>{
                                        num.classList.remove(color2)
                                        num.classList.add('on');
                                        num.classList.add(color);
                                    })
                                }
                            }else if(num.x == num2.x){
                                console.log('上')
                                while(j){
                                    console.log(i)
                                    masu_arr.map((num3)=>{
                                        if(num.x == num3.x && num.y-i == num3.y){
                                            if(num3.elm.classList.contains('on')==true){
                                                if(num3.elm.classList.contains(color)){
                                                    j = false
                                                    j2 = true
                                                }else{
                                                    i_arr.push(num3.elm)
                                                }
                                            }else{
                                                j2 = false
                                                j = false
                                            }
                                        }
                                    })
                                    if(i > 7){
                                        j = false
                                        console.log('empty')
                                    }
                                    i++
                                }
                                if(j2){
                                    num.elm.classList.add(color)
                                    num.elm.classList.add('on')
                                    j3=true
                                    i_arr.map((num)=>{
                                        num.classList.remove(color2)
                                        num.classList.add('on');
                                        num.classList.add(color);
                                        
                                    })
                                }
                            }else if(num.x+1 == num2.x){
                                console.log('右上')
                                while(j){
                                    console.log(i)
                                    masu_arr.map((num3)=>{
                                        if(num.x+i == num3.x && num.y-i == num3.y){
                                            if(num3.elm.classList.contains('on')==true){
                                                if(num3.elm.classList.contains(color)){
                                                    j = false
                                                    j2 = true
                                                }else{
                                                    i_arr.push(num3.elm)
                                                }
                                            }else{
                                                j2 = false
                                                j = false
                                            }
                                        }
                                    })
                                    if(i > 7){
                                        j = false
                                        console.log('empty')
                                    }
                                    i++
                                }
                                if(j2){
                                    num.elm.classList.add(color)
                                    num.elm.classList.add('on')
                                    j3=true
                                    i_arr.map((num)=>{
                                        num.classList.remove(color2)
                                        num.classList.add('on');
                                        num.classList.add(color);
                                    })
                                }
                            }
                        }
                })
                if(j3){
                    let sub = color;
                    color = color2;
                    color2 = sub
                    color == 'bla'? info.innerHTML='黒':info.innerHTML='白'
                }
                let whi_num = 0;
                let bla_num = 0;
                let all_masu = 0
                masu_arr.map((num2)=>{
                    if(num2.elm.classList.contains('whi')){
                        whi_num++
                    }else if(num2.elm.classList.contains('bla')){
                        bla_num++
                    }else{
                        null
                    }
                    if(num2.elm.classList.contains('on')){
                        all_masu++
                    }
                })
                if(whi_num == 0|| bla_num == 0 || all_masu == 64){
                    const game = document.querySelector('.game')
                    game.classList.add('act')
                    all_J = false
                    masu_arr.map((num)=>{
                        num.elm.classList.add('on')
                    })
                    whi_num > bla_num ? 
                    game.innerHTML = `<p>白の勝ち！</p><div class='replay'>もう一度</div>`:
                    game.innerHTML = `<p>黒の勝ち！</p><div class='replay'>もう一度</div>`
                    const replay = document.querySelector('.replay')
                    replay.addEventListener('click',()=>{
                        location.reload();
                    })
                }
                whi.innerHTML = whi_num;
                bla.innerHTML = bla_num;
            }
        }
    }
)
})
skip.addEventListener('click',()=>{
    if(all_J){
        let sub = color;
    color = color2;
    color2 = sub
    color == 'bla'? info.innerHTML='黒':info.innerHTML='白'
    }
})