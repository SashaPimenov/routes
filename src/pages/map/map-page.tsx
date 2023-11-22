import "./map-page.css";
import YaMap from "../../components/YaMap";
import {TextField} from "@mui/material";
import Sheet, {SheetRef} from "react-modal-sheet";
import React, {useRef, useState} from "react";
import OneRoutComponent from "../../components/forMainPage/oneRoutComponent";
import OneRoutComponentMap from "../../components/forMapPage/oneRoutComponentMap";

const personality = [
    {
        title: "Семейный отдых на Плотинке",
        description: "Лорем ипсум долор сит амет, консект",
        id: 1,
    },
    {
        title: "Маршрут по стрит-арту",
        description: "Лорем ипсум долор сит амет, консект",
        id: 2,
    },
    {
        title: "Ology",
        description: "Galant",
        id: 3,
    },
    {
        title: "Ology",
        description: "Galant",
        id: 4,
    },
    {
        title: "Ology",
        description: "Galant",
        id: 5,
    },
];

export default function MapPage() {
    const [isOpen, setOpen] = useState(true);
    const [pull, setPull] = useState(false);
    const ref = useRef<SheetRef>();
    const snapTo = (i: number) => ref.current?.snapTo(i);

    return (
        <>
            <YaMap width={"100vw"} height={"100vh"} zoomControl={true}/>


            {/* Opens to 400 since initial index is 1 */}
            <Sheet
                ref={ref}
                isOpen={isOpen}
                onClose={() => null}
                snapPoints={[800,700, 600, 500, 400,300, 200,100]}
                initialSnap={7}
                onSnap={(snapIndex) => (snapIndex==7 || snapIndex==6) ? setPull(true) : setPull(false)}
            >
                <Sheet.Container style={{borderRadius: 30}}>
                    <Sheet.Content>
                        <div style={{width: 32, height: 4, background: "rgba(121, 116, 126, 0.4)", margin: '16px auto', borderRadius: 4}}></div>
                        {
                            pull ? <div style={{margin: '0 auto', fontWeight: 400, fontSize: 22}}>
                            Показать сколько-то мест
                            </div> :
                            <div></div>
                        }
                        {personality.map((e, index) => (
                                <OneRoutComponentMap
                                    title={e.title}
                                    id={e.id}
                                    description={e.description}
                                />
                        ))}

                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </>
    );
}
