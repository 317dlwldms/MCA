import "./ExhibitionSection.css";

import { exhibitionList } from "data/exhibitionList";

export default function ExhibitionSection(){
    return(
        <div className="ExhibitionSection article">
            <h3>전시</h3>
            <div className="contents_wrap exhibition">
                {exhibitionList.map(exhibition => (
                    <div key={exhibition.id}>
                        <img alt={exhibition.title} src={exhibition.url} />
                        <h4>{exhibition.title}</h4>
                        <p>작가 : {exhibition.artist}</p>
                        <p>장소 : {exhibition.place}</p>
                        <p>{exhibition.date}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}