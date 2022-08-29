const easy = document.querySelector('.easy');
const field = document.querySelector('.field');
const game = document.querySelector('.game');
const arr = [];
let click_jjj = true;
let random_jjj = true;
let ini_j = true
let init_arr = [];
let count_arr = [];

easy.addEventListener('click',()=>{
    if(click_jjj){

        field.classList.add('start')
        for(let i = 0; i < 80; i++){
            field.innerHTML += `<div class='masu_easy'><div></div></div>`
        }

        const random_func = (init_arr) =>{
            if(random_jjj){
                for(let l = 0; l < 10; l++){
                    const random = Math.random() * 80 | 0;
                    let jjj = true;
                    let ini_ran = init_arr.filter((init)=>{
                        return init === random
                    })

                    if(ini_ran.length > 0){
                        l--
                    }else{
                        if(!l){
                            arr.push(random)
                        } else {
                            arr.map((num)=>{
                                let ini_num = init_arr.filter((init)=>{
                                    return init === random
                                })
                                if(num === random || ini_num.length > 0){
                                    l--
                                    jjj = false
                                }
                            })
                            if(jjj){
                                arr.push(random)
                            }
                        }
                    }
                }
                random_jjj = false
            }
        }
        
        const masu_arr = Array.from(document.querySelectorAll('.masu_easy'));

        const cli_masu =(ind)=>{

            if(masu_arr[ind].classList.contains('bomb')){
                return gameOver()
            }

            masu_arr[ind].classList.add('click')

            if(masu_arr[ind].classList.contains('around') !== true && masu_arr[ind].classList.contains('bomb')!== true){
                op_masu(ind)
            }
        }

        const op_masu = (ind) =>{
            let arr = []

            if(ind.toString().slice(-1) == 0){
                if(ind.toString() == 0){
                    arr = [...arr,ind+1,ind+10,ind+11]
                }else if(ind.toString() == 70){
                    arr = [...arr,ind-10,ind-9,ind+1]
                }else{
                    arr = [...arr,ind-10,ind-9,ind+1,ind+10,ind+11]
                }
            }else if(ind.toString().slice(-1) == 9){
                if(ind.toString() == 9){
                    arr = [...arr,ind-1,ind+9,ind+10]
                }else if(ind.toString() == 79){
                    arr = [...arr,ind-1,ind-10,ind-11]
                }else{
                    arr = [...arr,ind-11,ind-10,ind-1,ind+9,ind+10]
                }
            }else if(String(ind).length == 1){
                if(ind !== 0 && ind !== 9){
                    arr = [...arr,ind-1,ind+9,ind+10,ind+11,ind+1]
                }
            }else if(ind.toString().slice(0,1) == 7){
                if(ind !== 70 && ind !== 79){
                    arr = [...arr,ind-1,ind+1,ind-11,ind-10,ind-9]
                }
            }else{
                arr = [...arr,ind-1,ind+1,ind-11,ind+11,ind-10,ind+10,ind-9,ind+9]
            }

            arr.map((e)=>{
                if(masu_arr[e].classList.contains('click') !== true){
                    cli_masu(e)
                }
            })
        }

        const gameOver = () =>{
            masu_arr.map((num)=>{
                num.classList.add('click')
            })

            
            game.classList.add('act');
            game.innerHTML = "<p>ゲームオーバー</p><div class='replay'>やり直す</div>";

            const replay = document.querySelector('.replay');
            replay.addEventListener('click',()=>{
                location.reload();
            })
        }

        masu_arr.map((num,index)=>{
            num.addEventListener('click',()=>{

                if(ini_j){
                    init_arr = [...init_arr,index,index+1,index+10,index+9,index+11,index-1,index-10,index-11,index-9]
                    console.log(init_arr)
                    random_func(init_arr)
            
                    arr.map((num)=>{
                        masu_arr.map((num2,index)=>{
                            if(num == index){
                                num2.classList.add('bomb')
                            }
                        })
                    })

                    masu_arr.map((num,index)=>{

                        let i = 0;
                        if(num.classList.contains('bomb') !== true){

                            if(index.toString().slice(-1) == 0){
                                if(index.toString() == 0){

                                    if(masu_arr[index+1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+11].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }else if(index.toString() == 70){

                                    if(masu_arr[index+1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-9].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]


                                }else{
                                    
                                    if(masu_arr[index+1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+11].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-9].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }
                            }else if(index.toString().slice(-1) == 9){
                                if(index.toString() == 9){
                                    num.classList.add('only9')
                                    if(masu_arr[index-1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+9].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }else if(index.toString() == 79){

                                    if(masu_arr[index-11].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-1].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }else{

                                    if(masu_arr[index-1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+9].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-11].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-10].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }
                            }else if(String(index).length == 1){
                                if(index !== 0 && index !== 9){

                                    if(masu_arr[index-1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+11].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+9].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }
                            }else if(index.toString().slice(0,1) == 7){
                                if(index !== 70 && index !== 79){

                                    if(masu_arr[index-1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index+1].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-10].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-11].classList.contains('bomb')){
                                        i++
                                    }
                                    if(masu_arr[index-9].classList.contains('bomb')){
                                        i++
                                    }
                                    count_arr = [...count_arr,{elm:num,n:i}]

                                }
                            }else{

                                if(masu_arr[index-1].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index+1].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index-10].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index+10].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index-9].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index+9].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index-11].classList.contains('bomb')){
                                    i++
                                }
                                if(masu_arr[index+11].classList.contains('bomb')){
                                    i++
                                }
                                count_arr = [...count_arr,{elm:num,n:i}]

                            }
                        }
                    })
                    console.log(count_arr)

                    count_arr.map((num)=>{
                        if(num.n > 0){
                            num.elm.classList.add(`around`);
                            num.elm.children[0].innerHTML = `${num.n}`
                        }
                    })

                    cli_masu(index)

                    ini_j = false
                }
                cli_masu(index)

                let opMasu = Array.from(document.querySelectorAll('.click'));
                console.log(opMasu)
                if(opMasu.length == 70){
                    game.classList.add('act');
                    game.innerHTML += '<p>クリア</p><div class="replay">やり直す</div>'
                    const replay = document.querySelector('.replay');
                    replay.addEventListener('click',()=>{
                        location.reload();
                    })
                }
            })
        })
    }
    click_jjj = false
})


