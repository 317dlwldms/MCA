import { Link } from "react-router-dom";
import "./ThisMonthSection.css";

export default function ThisMonthSection({item}){
    return(
        <div className="ThisMonthSection">
            <Link to={`/monthly/${item.id}`}>
                <img alt={item.vol} src={item.cover} />
            </Link>
            <h4>{item.vol}</h4>
        </div>
    )
}