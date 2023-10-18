import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BrandCard from "./BrandCard";

const AvailableBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div className="w-10/12 m-auto mb-20">
            <h1 className="py-4 border-b-2 border-gray-400 text-4xl ">Our Brands</h1>
            <div>

                <Marquee pauseOnHover={true}>
                    <section className="bg-white border-b-2 border-gray-400 ">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap -mx-4 ">
                                <div className="w-full px-4">
                                    <div className="flex flex-wrap items-center justify-center">
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png
                                            "
                                                alt="image"
                                                className="w-1/2 "
                                            />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/z5hKwZy/canon-logo-BDB2346982-seeklogo-com.png
                                            "
                                                alt="image"
                                                className="w-1/2  "
                                            />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/FBBbymM/google-2015-new-logo-2-CA9-E5213-B-seeklogo-com.png
                                            "
                                                alt="image"
                                                className="w-1/2 "
                                            />
                                        </a>

                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/TctQTy0/intel-logo-3-F88-C332-C8-seeklogo-com.png
                                            "
                                                alt="image"
                                                className="w-1/2"
                                            />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/H7S4prv/samsung-logo-BBBE39-AD49-seeklogo-com.png
                                            "
                                                alt="image"
                                                className="w-1/2"
                                            />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/yYtkLDT/sony-logo-9-A5581-F3-B3-seeklogo-com.png  "
                                                alt="image"
                                                className="w-1/2"
                                            />
                                        </a>
                                        <a
                                            href="javascript:void(0)"
                                            className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                        >
                                            <img
                                                src="https://i.ibb.co/F6dSx2c/microlab-logo-043-D62-D483-seeklogo-com.png
                                                "
                                                alt="image"
                                                className="w-1/2"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Marquee>

            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 mb-20 mt-10" data-aos="fade-up">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)

                }
            </div>
        </div>
    );
};

export default AvailableBrands;