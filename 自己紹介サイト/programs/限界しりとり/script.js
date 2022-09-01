const start = document.querySelector('.start');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const time = document.querySelector('.timer');
const endingWord = document.querySelector('.endingWord');
const handicap = document.querySelector('.handicap');
const repository = document.querySelector('.repository');
const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const alert = document.querySelector('.alert');
let words_arr = [];
let first = true;
let j = true;
let random = null;
const small_hira = [ ['ぁ', 'あ'],
                    ['ぃ', 'い'],
                    ['ぅ', 'う'],
                    ['ぇ', 'え'],
                    ['ぉ', 'お'],
                    ['っ', 'つ'],
                    ['ゃ', 'や'],
                    ['ゅ', 'ゆ'],
                    ['ょ', 'よ'],
                    ['ゎ', 'わ']
                    ];
let sma_j = true;
var timer;
let count = 120

const startFunc =()=>{
        timer=setInterval(()=>{
            count--;

            const min = Math.floor(count/60);
            const sec = Math.floor(count%60);
            
            time.innerHTML = `0${min}:${( '00' + sec ).slice( -2 )}`;

            if(count < 10){
                time.style.color = "rgb(195, 40, 40)";
            }
            if(count == 0){
                clearInterval(timer);

                const form = document.querySelector('.form1');
                const result = document.querySelector('.result');
                const point = document.querySelector('.point');
                const replay = document.querySelector('.replay');

                form.classList.add('.none');
                result.classList.remove('resultNone');
                point.innerHTML = `総合ポイント：${words_arr.length}pt!`
                replay.addEventListener('click',()=>{
                    location.reload();
                })
            };
            
        },1000);
}


const handFunc =()=>{
    random = Math.floor( Math.random() * 7 ) + 2;
    random == 8 ? handicap.innerHTML = "8+" : handicap.innerHTML = random;
}

start.addEventListener('click',()=>{
    startFunc();

    const menu = document.querySelector('.menu');
    Array.from(document.querySelectorAll('.none')).map((num)=>{
        if(num !== repository){
            num.classList.remove('none');
        };
    });
    menu.classList.add('none');

    const hiraganaArr = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ".split("");
    hiragana = hiraganaArr[Math.floor(Math.random() * hiraganaArr.length)];
    endingWord.innerHTML = hiragana;

    handFunc();
});

const func1 =()=>{
    if(inp.value.length !== random && !(random == 8 && inp.value.length >= 8)){

        alert.innerHTML = '※文字数が違います。';
        alert.classList.remove('alertNone');

    }else if(inp.value.slice( -1 ) == 'ん'){

        alert.innerHTML = '※「ん」がついています。';
        alert.classList.remove('alertNone');

    }else if(first){
        if(hiragana == inp.value.slice( 0, 1 )){

            words_arr.push(inp.value);
            inp.value = '';
            repository.innerHTML += `<li>${words_arr[0]}</li>`;
            first = false;
            repository.classList.remove('none');

            if(words_arr[words_arr.length - 1].slice( -1 ) == "ー"){
                small_hira.map((num)=>{
                    if(num[0] == words_arr[words_arr.length - 1].slice( -2, -1 )){
                        endingWord.innerHTML = num[1];
                        sma_j = false;
                    }
                })

                if(sma_j){
                    endingWord.innerHTML = words_arr[words_arr.length - 1].slice( -2, -1 );
                    sma_j = false;
                }
            }else{
                small_hira.map((num)=>{
                    if(num[0] == words_arr[words_arr.length - 1].slice( -1 )){
                        endingWord.innerHTML = num[1];
                        sma_j = false;
                    }
                })

                if(sma_j){
                    endingWord.innerHTML = words_arr[words_arr.length - 1].slice( -1 );
                }
            }
            handFunc();

            alert.classList.add('alertNone');
        }else{

            alert.innerHTML = '※頭文字が違います';
            alert.classList.remove('alertNone');

        }
    }else if(endingWord.textContent == inp.value.slice( 0, 1 )){
        words_arr.push(inp.value);
        console.log(words_arr);
        inp.value = '';
        
        Array.from(document.querySelectorAll('.repository > li')).map((num)=>{
            num.remove();
        })

        if(words_arr.length > 5){
            words_arr.slice(-5).map((num)=>{
                repository.innerHTML += `<li>${num}</li>`;
            });
        }else{
            words_arr.map((num)=>{
                repository.innerHTML += `<li>${num}</li>`;
            })
        }

        if(words_arr[words_arr.length - 1].slice( -1 ) == "ー"){
            small_hira.map((num)=>{
                if(num[0] == words_arr[words_arr.length - 1].slice( -2, -1 )){
                    endingWord.innerHTML = num[1];
                    sma_j = false;
                }
            })

            if(sma_j){
                endingWord.innerHTML = words_arr[words_arr.length - 1].slice( -2, -1 );
                sma_j = false;
            }
        }else{
            small_hira.map((num)=>{
                if(num[0] == words_arr[words_arr.length - 1].slice( -1 )){
                    endingWord.innerHTML = num[1];
                    sma_j = false;
                }
            })

            if(sma_j){
                endingWord.innerHTML = words_arr[words_arr.length - 1].slice( -1 );
            }
        }
        handFunc();

        alert.classList.add('alertNone');
    }else{
        alert.innerHTML = '※頭文字が違います';
        alert.classList.remove('alertNone');
    }
    
    
    sma_j = true;
}