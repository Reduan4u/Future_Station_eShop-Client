import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { brandImage, brandName } = brand || {}
    return (
        <Link to={`/brands/${brandName}`}>
            <div>
                <div className="card bg-gray-100 shadow-xl">
                    <div className="card-body text-black px-2 py-4">
                        <h2 className="card-title text-2xl">{brandName}</h2>
                    </div>
                    <figure><img className="w-auto h-52 p-4" src={brandImage} alt="Shoes" /></figure>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;