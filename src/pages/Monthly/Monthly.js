import "./Monthly.css";
import { monthlyList } from "data/monthlyList";
import ThisMonthSection from "components/monthly/ThisMonthSection/ThisMonthSection";
import PastMonthSection from "components/monthly/PastMonthSection/PastMonthSection";


export default function Monthly(){
    const thisMonth = monthlyList[0];
    return(
        <div className="Monthly">
            <ThisMonthSection item={thisMonth} />
            <PastMonthSection/>
        </div>
    )
    
}

