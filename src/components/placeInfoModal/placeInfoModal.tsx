import React, {useRef, useState} from "react";
import "./placeInfoModal.css";
import Sheet, {SheetRef} from "react-modal-sheet";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function PlaceInfoModal() {

    return (
        <div className={"wrapperPlace"}>
            <div className={"headerPlace"}>
                <div className={"headerTextPlace"}>
                    <div className={"namePlace titlePlace"}>Эрмитаж - Урал</div>
                    <div className={"namePlace"}>ул. Вайнера, 11</div>
                </div>
                <div className={"headerGradePlace"}>
                    <StarBorderIcon style={{alignSelf: 'center'}}/>
                    <div className={"namePlace gradePlace"}>4.8</div>
                </div>
            </div>

            <div className={"tagsPlace"}>
                <div className={"tag"}>Музей</div>
                <div className={"tag"}>Искусство</div>
                <div className={"tag"}>Городской туризм</div>
                <div className={"tag addTag"}>Добавить тег</div>
            </div>

            <div className={"imagePlaceDiv"}>
                <img src={require("../../assets/img.png")} className={"imagePlace"}/>
            </div>

            <div className={"textPlaceDiv"}>
                <div className={"textPlace"}>
                    Однозначно, тщательные исследования конкурентов набирают популярность среди определенных слоев населения, а значит, должны быть указаны как претенденты на роль ключевых факторов. Как принято считать, базовые сценарии поведения пользователей объективно рассмотрены соответствующими инстанциями!
                </div>
            </div>

            <button className={"addButton"}>Добавить в маршрут</button>

            <div className={"textPlace"}>вт-вс 11:00–20:00</div>
        </div>
    );
}
