import "./Home.css";
import MainSection from "components/home/MainSection/MainSection";
import NewsSection from "components/home/NewsSection/NewsSection";
import SpecialSection from "components/home/SpecialSection/SpecialSection";
import ExhibitionSection from "components/home/ExhibitionSection/ExhibitionSection";


export default function Home(){
    return (
        <div className="Home">
            <MainSection />
            <NewsSection />
            <SpecialSection />
            <ExhibitionSection />
        </div>
    )
}