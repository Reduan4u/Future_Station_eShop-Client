import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProductBanner = () => {
    return (
        <div className='mb-10'>
            <AutoplaySlider play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000} >
                <div data-src="https://static.vecteezy.com/system/resources/previews/025/867/963/original/apple-s-first-ever-iphone-iphone-1-front-and-back-banner-for-editorial-use-only-free-vector.jpg" />
                <div data-src="https://cdnb.artstation.com/p/assets/images/images/016/802/459/large/shuja-shuaib-banner.jpg?1553535424" />
                <div data-src="https://wearepolaris.sg/wp-content/uploads/2021/10/Apple_Watch_S7_Cell_Web_Banner_Avail_1400x700_Shop_AppleWatch.jpg" />
            </AutoplaySlider>
        </div>
    );
};

export default ProductBanner;