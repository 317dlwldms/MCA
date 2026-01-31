import "./NewsSection.css";
import MonthlyNews1 from "asset/images/home/news/2601news_1.png";
import MonthlyNews2 from "asset/images/home/news/2601news_2.png";
import MonthlyNews3 from "asset/images/home/news/2601news_3.png";
import MonthlyNews4 from "asset/images/home/news/2601news_4.png";


export default function NewsSection(){
    return(
        <div className="NewsSection article">
            <h3>뉴스</h3>
            <div className="contents_wrap news">
                <div>
                    <img alt="MonthlyNews1" src={MonthlyNews1}></img>
                    <h4>국립광주박물관, 도자 전문 전시관 ‘도자문화관’ 개관</h4>
                    <p>다시, 교육의 자리에서 도예를 묻다
도예가에게 교육은 언제나 곁에 있었지만, 그 의미는 시대마다 다른 얼굴을 가져왔다.</p>
                </div>
                <div>
                    <img alt="MonthlyNews2" src={MonthlyNews2}></img>
                    <h4>국립광주박물관, 도자 전문 전시관 ‘도자문화관’ 개관</h4>
                    <p>다시, 교육의 자리에서 도예를 묻다
도예가에게 교육은 언제나 곁에 있었지만, 그 의미는 시대마다 다른 얼굴을 가져왔다.</p>
                </div>
                <div>
                    <img alt="MonthlyNews3" src={MonthlyNews3}></img>
                    <h4>국립광주박물관, 도자 전문 전시관 ‘도자문화관’ 개관</h4>
                    <p>다시, 교육의 자리에서 도예를 묻다
도예가에게 교육은 언제나 곁에 있었지만, 그 의미는 시대마다 다른 얼굴을 가져왔다.</p>
                </div>
                <div>
                    <img alt="MonthlyNews4" src={MonthlyNews4}></img>
                    <h4>국립광주박물관, 도자 전문 전시관 ‘도자문화관’ 개관</h4>
                    <p>다시, 교육의 자리에서 도예를 묻다
도예가에게 교육은 언제나 곁에 있었지만, 그 의미는 시대마다 다른 얼굴을 가져왔다.</p>
                </div>
            </div>
        </div>
    )
}