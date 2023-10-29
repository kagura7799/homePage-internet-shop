import React from 'react';
import Header from "../components/Header";
import moonLogo from "../images/half-moon.png";
import sunLogo from "../images/contrast.png";
import {useTheme} from "../hooks/theme";
import '../styles/servicesStyle.css'

type Props = {
    initTheme: string;
    handleChangeTheme: () => void;
};

const Services = () => {

    const { initTheme, setInitTheme } = useTheme();

    const handleChangeTheme = () => {
        setInitTheme(initTheme === "whiteTheme" ? "darkTheme" : "whiteTheme");
    };

    const thumbnailIcon = initTheme === "whiteTheme" ? moonLogo : sunLogo;
    const textTheme = initTheme === "whiteTheme" ? "Темная тема" : "Светлая тема";

    return (
        <div className='container-services'>
            <Header initTheme={'darkTheme'} handleChangeTheme={() => ''}/>

            <section className='content-services'>
                <h1>Услуги</h1>
            </section>
        </div>
    );
};

export default Services;