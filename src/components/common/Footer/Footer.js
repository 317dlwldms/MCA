import "./Footer.css";
import logo from "asset/icons/mca.svg";

export default function Footer(){
    return(
        <footer>
            <div className="footerTop">
                <img alt="mca Logo" src={logo}></img>
                <p> © cerazine.co.kr All rights reserved.</p>
            </div>
            <div className="footerInfo">
                <div>
                    <p>연락처</p>
                    <p>02)3487-9982~6</p>
                </div>
                <div>
                    <p>이메일</p>
                    <p>adcera@naver.com(광고) cerazine@hanmail.net(기사)</p>
                </div>
                <div>
                    <p>주소</p>
                    <p>주소서울특별시 서초구 서초대로 40길 41, 대호IR빌딩 5층</p>
                </div>
            </div>
        </footer>
    )
}