import AvailableBrands from "./AvailableBrands/AvailableBrands.jsx/AvailableBrands";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <AvailableBrands></AvailableBrands>
            <Discount></Discount>

        </div>
    );
};

export default Home;