import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { brandImage, brandName } = brand || {}
    return (
        <Link to={`/brands/${brandName}`}>
            <div className="card w-72 bg-base-100 shadow-xl">
                <div className="card-body px-2 py-4">
                    <h2 className="card-title text-2xl">{brandName}</h2>
                </div>
                <figure><img className="w-auto h-52 p-4" src={brandImage} alt="Shoes" /></figure>
            </div>
        </Link>
    );
};

export default BrandCard;