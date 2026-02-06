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
                    <h4>공예트렌드페어 20주년… ‘손끝의 미학’으로 한국 공예의 현재와 미래 조명</h4>
                    <p>[2025 공예트렌드페어] 12월 11일부터 14일까지 서울 코엑스 A 홀에서 열렸다.</p>
                </div>
                <div>
                    <img alt="MonthlyNews3" src={MonthlyNews3}></img>
                    <h4>쿠첸 × 달항아리</h4>
                    <p>한국 현대미술작가 최영욱과 주방가전 브랜드 쿠첸이 협업한 아트 콜라보레이션 전시 《CUCHEN 123 CHOI YOUNGWOOK EDITION》가 열렸다.</p>
                </div>
                <div>
                    <img alt="MonthlyNews4" src={MonthlyNews4}></img>
                    <h4>서울문화재단– 신세계L&B 협력 성과 공유 전시 개최</h4>
                    <p>서울문화재단은 신세계L&B와 함께 추진한 테이블웨어 공예상품 개발사업의 결과 전시 《레이어 앤 모어 Layer and More》를 12월 21일까지 서울 중구 신당동 뮤지엄멋에서 개최했다.</p>
                </div>
            </div>
        </div>
    )
}