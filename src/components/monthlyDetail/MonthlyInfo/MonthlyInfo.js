import { useParams } from "react-router-dom";
import "./MonthlyInfo.css";
import { monthlyList } from "data/monthlyList";

function InfoRow({label, value}){
    if(!value || value.length === 0) return null;
    return(
        <div>
            <h4>{label}</h4>
            <p>
                {Array.isArray(value)
                    ? value.map((v,i)=>(
                        <span key={i}>{v}<br/></span>
                    ))
                :value}
            </p>
        </div>
    )
}

export default function MonthlyInfo(){
    const {id} = useParams();
    const data = monthlyList.find(item => item.id === id);

    if (!data) return <p>존재하지 않는 페이지 입니다.</p>;

    return(
        <div className="MonthlyInfo">
            <img src={data.cover} alt={data.vol}></img>
            <div className="info_wrapper">
                <h2>{data.vol}<br/>{data.title}</h2>
                <div className="info_text">

                    <InfoRow label="전시 일정" value={data.exhibitions} />
                    <InfoRow label="공모전" value={data.contest} />
                    <InfoRow label="축제/페어" value={data.fair} />
                    <InfoRow label="추천 도서" value={data.books} />
                    
                </div>
            </div>
        </div>
    )
}