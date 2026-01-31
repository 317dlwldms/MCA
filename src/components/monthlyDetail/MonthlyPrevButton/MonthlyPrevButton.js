import { Link } from "react-router-dom";
import "./MonthlyPrevButton.css";
export default function MonthlyPrevButton(){
    return(
        <div className="MonthlyPrevButton">
            <Link to="/monthly">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
                    <path d="M18 8.36396C18.5523 8.36396 19 7.91625 19 7.36396C19 6.81168 18.5523 6.36396 18 6.36396L18 7.36396L18 8.36396ZM0.292892 6.65685C-0.0976314 7.04738 -0.0976315 7.68054 0.292892 8.07107L6.65685 14.435C7.04738 14.8256 7.68054 14.8256 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36396L8.07107 1.70711C8.46159 1.31658 8.46159 0.683417 8.07107 0.292892C7.68054 -0.0976321 7.04738 -0.0976322 6.65685 0.292892L0.292892 6.65685ZM18 7.36396L18 6.36396L1 6.36396L1 7.36396L1 8.36396L18 8.36396L18 7.36396Z" fill="black"/>
                </svg>
            </Link>
        </div>
    )
}