import './App.css';
import { useState, useEffect } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import typeJson from './type.json';

const Type_serch = function (){
    const [type, setType] = useState(false);
    const [damage,setDamage] = useState();
    const [double, setDouble] = useState([]);
    const [half, setHalf] = useState([]);
    const [invalid, setInvalid] = useState([]);
    const [doubleFrom, setDoubleFrom] = useState([]);
    const [halfFrom, setHalfFrom] = useState([]);
    const [invalidFrom, setInvalidFrom] = useState([]);

    const func1 = (num) =>{
        fetch(
        `https://pokeapi.co/api/v2/type/${num}`
    )
        .then((response) => response.json())
        .then((typeData) => {
            console.log(typeData)
            setType(typeData)
            setDamage(typeData.damage_relations)
        });
    }

    const func2 = () =>{
        const jp_double = [];
        const jp_half = [];
        const jp_invalid = [];
        const jp_doubleFrom = [];
        const jp_halfFrom = [];
        const jp_invalidFrom = [];

        const func3 = (arg,arg2) => {
                arg.map((num)=>{
                typeJson.type_name.map((num2)=>{
                    if(num.name===num2.en){
                        arg2.push(num2.jp)
                    }
                })
            })
        }
        func3(damage.double_damage_to,jp_double)
        func3(damage.half_damage_to,jp_half)
        func3(damage.no_damage_to,jp_invalid)
        func3(damage.double_damage_from,jp_doubleFrom)
        func3(damage.half_damage_from,jp_halfFrom)
        func3(damage.no_damage_from,jp_invalidFrom)
        setDouble(jp_double)
        setHalf(jp_half)
        setInvalid(jp_invalid)
        setDoubleFrom(jp_doubleFrom)
        setHalfFrom(jp_halfFrom)
        setInvalidFrom(jp_invalidFrom)
    }
    //     const typeArr = data.types.map((num) => num.type.name);
    //     const jpType = []
    //     typeJson.type_name.map((num)=>{
    //     typeArr.map((num2)=>{
    //     if(num.en===num2){
    //       jpType.push(num.jp)
    //     }
    //   })
    // })
    useEffect(() => {
        if (damage) {
            func2();
        } else {
            console.log('ef');
        }
    }, [damage]);
    
    return(
        <>
        <div id='type_list'>
            <h1>タイプ相性表</h1>
            <ul>
                <li className='type1' onClick={()=>{func1(1)}}><AnchorLink href="#scroll" className='li'>ノーマル</AnchorLink></li>
                <li className='type2' onClick={()=>{func1(2)}}><AnchorLink href="#scroll" className='li'>かくとう</AnchorLink></li>
                <li className='type3' onClick={()=>{func1(3)}}><AnchorLink href="#scroll" className='li'>ひこう</AnchorLink></li>
                <li className='type4' onClick={()=>{func1(4)}}><AnchorLink href="#scroll" className='li'>どく</AnchorLink></li>
                <li className='type5' onClick={()=>{func1(5)}}><AnchorLink href="#scroll" className='li'>じめん</AnchorLink></li>
                <li className='type6' onClick={()=>{func1(6)}}><AnchorLink href="#scroll" className='li'>いわ</AnchorLink></li>
                <li className='type7' onClick={()=>{func1(7)}}><AnchorLink href="#scroll" className='li'>むし</AnchorLink></li>
                <li className='type8' onClick={()=>{func1(8)}}><AnchorLink href="#scroll" className='li'>ゴースト</AnchorLink></li>
                <li className='type9' onClick={()=>{func1(9)}}><AnchorLink href="#scroll" className='li'>はがね</AnchorLink></li>
                <li className='type10' onClick={()=>{func1(10)}}><AnchorLink href="#scroll" className='li'>ほのお</AnchorLink></li>
                <li className='type11' onClick={()=>{func1(11)}}><AnchorLink href="#scroll" className='li'>みず</AnchorLink></li>
                <li className='type12' onClick={()=>{func1(12)}}><AnchorLink href="#scroll" className='li'>くさ</AnchorLink></li>
                <li className='type13' onClick={()=>{func1(13)}}><AnchorLink href="#scroll" className='li'>でんき</AnchorLink></li>
                <li className='type14' onClick={()=>{func1(14)}}><AnchorLink href="#scroll" className='li'>エスパー</AnchorLink></li>
                <li className='type15' onClick={()=>{func1(15)}}><AnchorLink href="#scroll" className='li'>こおり</AnchorLink></li>
                <li className='type16' onClick={()=>{func1(16)}}><AnchorLink href="#scroll" className='li'>ドラゴン</AnchorLink></li>
                <li className='type17' onClick={()=>{func1(17)}}><AnchorLink href="#scroll" className='li'>あく</AnchorLink></li>
                <li className='type18' onClick={()=>{func1(18)}}><AnchorLink href="#scroll" className='li'>フェアリー</AnchorLink></li>
            </ul>
            <div id='scroll'>
            </div>
        </div>
        
        <div className={`type_phase ${type ? 'act' : ''}`}>
            <h2 id='tit'>相性表</h2>
            <section id='atk'>
                <h2>攻撃側</h2>
                <dl>
                    <dt>ばつぐん(2倍)</dt>
                    <dd className='first_dd'>
                        <ul>
                            {double.length > 0 ? 
                                double.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                    <dt>いまひとつ(0.5倍)</dt>
                    <dd>
                        <ul>
                            {half.length > 0 ? 
                                half.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                    <dt className='last_dt'>効果なし(無効)</dt>
                    <dd>
                        <ul>
                            {invalid.length > 0 ?
                                invalid.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                </dl>
            </section>
            <section id='dfn'>
                <h2>防御側</h2>
                <dl>
                    <dt>ばつぐん(2倍)</dt>
                    <dd className='first_dd'>
                        <ul>
                            {doubleFrom.length > 0 ?
                                doubleFrom.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                    <dt>いまひとつ(0.5倍)</dt>
                    <dd>
                        <ul>
                            {halfFrom.length > 0 ?
                                halfFrom.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                    <dt className='last_dt'>効果なし(無効)</dt>
                    <dd>
                        <ul>
                            {invalidFrom.length > 0 ?
                                invalidFrom.map((num)=>(
                                    <li>{num}</li>
                                )):(<li>なし</li>)
                            }
                        </ul>
                    </dd>
                </dl>
            </section>
        </div>
        </>
    )
}

export default Type_serch;