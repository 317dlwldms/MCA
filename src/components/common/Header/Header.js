import {Link} from "react-router-dom";
import "./Header.css";
import logo from "asset/icons/mca.svg";

export default function Header(){
    return(
        <header>
            <Link to="/" className="logo">
                <img alt="mca Logo" src={logo}></img>
            </Link>
            <div className="nav">
                <Link to={"/monthly"}><p>월간도예</p></Link>
                <div><p>뉴스</p></div>
                <div><p>정보</p></div>
                <div><p>소식</p></div>
                <div><p>MCA</p></div>
            </div>
            <div className="logSearch">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M15.75 15.75L12.495 12.495M14.25 8.25C14.25 11.5637 11.5637 14.25 8.25 14.25C4.93629 14.25 2.25 11.5637 2.25 8.25C2.25 4.93629 4.93629 2.25 8.25 2.25C11.5637 2.25 14.25 4.93629 14.25 8.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M9 9.75C11.0711 9.75 12.75 8.07107 12.75 6C12.75 3.92893 11.0711 2.25 9 2.25C6.92893 2.25 5.25 3.92893 5.25 6C5.25 8.07107 6.92893 9.75 9 9.75ZM9 9.75C10.5913 9.75 12.1174 10.3821 13.2426 11.5074C14.3679 12.6326 15 14.1587 15 15.75M9 9.75C7.4087 9.75 5.88258 10.3821 4.75736 11.5074C3.63214 12.6326 3 14.1587 3 15.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </div>
            </div>
        </header>

    )
}