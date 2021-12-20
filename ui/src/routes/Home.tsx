import React from "react";
import { useMatch } from "react-location";
import Card from "../components/Card/Card";

const Home = () => {
    const { data: { scrapers } } = useMatch();

    console.log(scrapers);

    return (
        <Card />
    )
};

export default Home;