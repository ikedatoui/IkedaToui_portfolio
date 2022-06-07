import './App.css';
import { useState, useEffect } from 'react';
import nameData from './name.json';
import typeJson from './type.json';

const Serch = function () {
  const [data, setData] = useState(false);
  const [name, setname] = useState();
  const [type, setType] = useState([]);
  const [img, setImg] = useState();
  const [enName, setEnName] = useState();
  const [stat,setStat] = useState([])
  const func1 = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${
        document.getElementById('inp').value
      }`
    )
      .then((response) => response.json())
      .then((APIdata) => {
        setData(APIdata);
      });
  };

  const func2 = () => {
    console.log(data);
    nameData.poke_name.map((num) => {
      if (num.en.toLowerCase() === data.name) {
        setname(num.ja);
      }
    });

    const typeArr = data.types.map((num) => num.type.name);
    const jpType = []
    typeJson.type_name.map((num)=>{
      typeArr.map((num2)=>{
        if(num.en===num2){
          jpType.push(num.jp)
        }
      })
    })
    setType(jpType);

    setImg(data.sprites.front_default);

    setEnName(data.forms[0].name);

    const statArr =  data.stats.map((num)=>
      num.base_stat
    )

    setStat(statArr)
  };

  useEffect(() => {
    if (data) {
      func2();
    } else {
      console.log('ef');
    }
  }, [data]);
  console.log(data);
  
  return (
    <div className="App">
      <input type="text" id="inp"  placeholder='idを入力' />
      <input type="button" id="btn" value="探す" onClick={func1} />

      <div className={`pokemon ${data ? 'act' : ''}`}>
        <div id="base_data">
          <section className="img">
            <h2>
              <img src={img} />
            </h2>
          </section>

          <div id="base_data_about">
            <section id="name">
              <p>{name}</p>
            </section>

            <section id="id">
              <p>全国No.{data.id}</p>
            </section>

            <section>
              <p>英名 : {enName}</p>
            </section>

            <section id="type">
              <ul>
                {type.map((num) => (
                  <li>{num}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        {/* <div id='body_data'>
            <h2>身長/体重</h2>
            <p></p>
          </div> */}
        <div id="base_stats">
          <h2>種族値</h2>
          <dl>
            <dt>HP</dt>
            <dd>{stat[0]}</dd>
            <dt>こうげき</dt>
            <dd>{stat[1]}</dd>
            <dt>ぼうぎょ</dt>
            <dd>{stat[2]}</dd>
            <dt>とくこう</dt>
            <dd>{stat[3]}</dd>
            <dt>とくぼう</dt>
            <dd>{stat[4]}</dd>
            <dt>すばやさ</dt>
            <dd>{stat[5]}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Serch;