import { useLoaderData } from "react-router-dom";
import AvailableBrands from "./AvailableBrands/AvailableBrands.jsx/AvailableBrands";
import Banner from "./Banner/Banner";

const Home = () => {
    const brand = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <AvailableBrands></AvailableBrands>

        </div>
    );
};

export default Home;