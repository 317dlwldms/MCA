import MonthlyInfo from "components/monthlyDetail/MonthlyInfo/MonthlyInfo";
import MonthlyPrevButton from "components/monthlyDetail/MonthlyPrevButton/MonthlyPrevButton";
import SubscribeButton from "components/monthlyDetail/SubscribeButton/SubscribeButton";
import "./MonthlyDetail.css";

export default function MonthlyDetail(){
    return(
        <div className="MonthlyDetail">
            <MonthlyPrevButton />
            <div>
                <MonthlyInfo />
                <SubscribeButton />
            </div>
        </div>
    )
}