import {Link,Outlet} from "react-router-dom";
import serch_logo from "./img/icon_search.svg";
import type_logo from "./img/pokemon-4657023_960_720.png";
import logo from "./img/logo.png";
import './App.css';

function Header(){
    return(
        <>
        <header className='menu'>
            <h1><img src={logo}></img></h1>
            <nav>
                <ul className='nav'>
                    <li>
                        <img src={serch_logo}></img>
                        <Link className="link" to="/page1" >探す</Link>
                    </li>
                    <li>
                        <img src={type_logo}></img>
                        <Link className="link" to="/page2" >タイプ相性</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        </>
    )
}
export default Header;