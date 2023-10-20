import AvailableBrands from "./AvailableBrands/AvailableBrands.jsx/AvailableBrands";
import Banner from "./Banner/Banner";
import Discount from "./Discount/Discount";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <AvailableBrands></AvailableBrands>
            <Discount></Discount>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;