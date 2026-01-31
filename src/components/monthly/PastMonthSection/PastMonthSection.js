import { Link } from "react-router-dom";
import { monthlyList } from "data/monthlyList";
import "./PastMonthSection.css";


export default function PastMonthSection(){
    return(
        <div className="PastMonthSection">
            <div className="title">
                <h3>지난호 보기 | </h3>
                    <select name="category" className="select_month" defaultValue="yearSelect">
                        <option value="yearSelect">년도 별</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                    </select>
            </div>
            <div className="magazine_wrapper">
                {monthlyList.slice(1).map(item => (
                    <div>
                    <Link key={item.id} to={`/monthly/${item.id}`}>
                        <img src={item.cover} alt={item.vol} />
                        <h4>{item.vol}</h4>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}