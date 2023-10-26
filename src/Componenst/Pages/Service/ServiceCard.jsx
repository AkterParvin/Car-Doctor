/* eslint-disable no-unused-vars */
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item }) => {
    const { service_id, title, price, img } = item;
    return (
        <div className="card  bg-base-100 shadow-2xl shadow-gray-400">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" p-10 items-center space-y-3">
                <h2 className="card-title text-gray-700 text-2xl">{ title}</h2>
                <span className="flex justify-between items-center text-[#FF3811]">
                    <p className=" font-semibold ">Price : ${price} </p>
                    <button className="btn text-[#FF3811]  text-lg">
                        <BsArrowRight></BsArrowRight>
                    </button>
               </span>
            </div>
        </div>
    );
};

export default ServiceCard;