import "./ExhibitionSection.css";
import MonthlyExhibition1 from "asset/images/home/exhibition/2601exhibition_1.png"
import MonthlyExhibition2 from "asset/images/home/exhibition/2601exhibition_2.png"
import MonthlyExhibition3 from "asset/images/home/exhibition/2601exhibition_3.png"
import MonthlyExhibition4 from "asset/images/home/exhibition/2601exhibition_4.png"
import MonthlyExhibition5 from "asset/images/home/exhibition/2601exhibition_5.png"

export default function ExhibitionSection(){
    return(
        <div className="ExhibitionSection article">
            <h3>전시</h3>
            <div className="contents_wrap exhibition">
                <div>
                    <img alt="MonthlyExhibition1" src={MonthlyExhibition1}></img>
                    <h4>배열 속에 또 다른 배열</h4>
                    <p>작가 : 홍유영</p>
                    <p>장소 : 소마 미술관</p>
                    <p>2026.01.02 - 2026.02.08</p>
                </div>
                <div>
                    <img alt="MonthlyExhibition2" src={MonthlyExhibition2}></img>
                    <h4>배열 속에 또 다른 배열</h4>
                    <p>작가 : 홍유영</p>
                    <p>장소 : 소마 미술관</p>
                    <p>2026.01.02 - 2026.02.08</p>
                </div>
                <div>
                    <img alt="MonthlyExhibition3" src={MonthlyExhibition3}></img>
                    <h4>배열 속에 또 다른 배열</h4>
                    <p>작가 : 홍유영</p>
                    <p>장소 : 소마 미술관</p>
                    <p>2026.01.02 - 2026.02.08</p>
                </div>
                <div>
                    <img alt="MonthlyExhibition4" src={MonthlyExhibition4}></img>
                    <h4>배열 속에 또 다른 배열</h4>
                    <p>작가 : 홍유영</p>
                    <p>장소 : 소마 미술관</p>
                    <p>2026.01.02 - 2026.02.08</p>
                </div>
                <div>
                    <img alt="MonthlyExhibition5" src={MonthlyExhibition5}></img>
                    <h4>배열 속에 또 다른 배열</h4>
                    <p>작가 : 홍유영</p>
                    <p>장소 : 소마 미술관</p>
                    <p>2026.01.02 - 2026.02.08</p>
                </div>
                
            </div>
        </div>
    )
}