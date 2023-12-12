import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import OneRoutComponent from "../oneRoutComponent";
import {Button, Skeleton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import {BAZE_URL} from "../../../api/BAZE_URL";

export const PersonalRoutes = () => {
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

    const [personalityRoutes, setPersonalityRoutes] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [isError, setIsError] = useState(false);

    const getData = async () => {
        try {
            const req = await fetch(`${BAZE_URL}/`, {
                method: "GET",
            });
            const data = await req.json();
            if (req.status >= 200 && req.status < 299) {
                setPersonalityRoutes(data);
            } else {
                setIsError(true);
            }
        } catch (e) {
            console.log(e);
            setIsError(true);
        } finally {
            setIsLoad(false);
        }
    };

    useEffect(() => {
        // getData();
    }, []);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
            }}
        >
            <div style={{display: "flex", flexDirection: "row", gap: 16}}>
                <p className="headerText">Личные маршруты</p>
                <Button
                    variant="outlined"
                    startIcon={<AddIcon sx={{color: "#304FD9"}}/>}
                    style={{
                        width: 122,
                        height: 32,
                        alignSelf: "center",
                        color: "#304FD9",
                        borderColor: "#304FD9",
                        borderRadius: 28,
                        textTransform: "none",
                    }}
                >
                    Создать
                </Button>
            </div>
            <div className="headerDiv">
                <Swiper spaceBetween={20} slidesPerView={2}>
                    {isLoad
                        ? [1, 2, 3, 4].map((e, index) => (
                            <SwiperSlide key={index}>
                                <Skeleton
                                    width={"170px"}
                                    height={"476px"}
                                    sx={{marginTop: "-100px", marginBottom: "-60px"}}
                                />
                            </SwiperSlide>
                        ))
                        : personality.map((e, index) => (
                            <SwiperSlide key={index}>
                                <OneRoutComponent
                                    title={e.title}
                                    id={e.id}
                                    description={e.description}
                                />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
