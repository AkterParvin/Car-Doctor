import img from '../../../assets/images/products/1.png'
import { FaStar } from "react-icons/fa";
const Product = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto text-center md:mt-20 space-y-3">
                <h3 className="text-xl font-bold text-[#FF3811] ">Popular Products</h3>
                <h1 className="text-3xl md:text-5xl text-black font-bold">Browse Our Products</h1>
                <p className="text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>
            <div className="card w-80 border border-gray-300 bg-base-100 shadow-xl my-8">
                <figure className='w-full bg-zinc-300'>
                    <img src={img} alt="Shoes" className='w-1/2 m-8'/></figure>
                <div className="card-body items-center">
                    <span className='flex gap-1 text-orange-400'><FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar /></span>
                    <h2 className="card-title text-2xl font-bold">Cools Led Light</h2>
                    <p className='text-[#FF3811] font-semibold text-xl'>$20.00</p>
                   
                </div>
            </div>
            <span className="flex justify-center items-center my-12"><button className="btn btn-md btn-outline btn-error ">More Products</button></span>
            
        </div>
    );
};

export default Product;