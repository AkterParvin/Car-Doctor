import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res=>res.json())
            .then(data => {
                console.log(data);
                setService(data);
        })
    },[])
    return (
    
        <div>
            <div className="w-1/2 mx-auto text-center md:mt-20 space-y-3">
                <h3 className="text-xl font-bold text-[#FF3811] ">Service</h3>
                <h1 className="text-3xl md:text-5xl text-black font-bold">Our Service Area</h1>
                <p className="text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {
                    service.map(item => <ServiceCard key={item._id} item={item}></ServiceCard>)
                }
            </div>
            <span className="flex justify-center items-center my-12"><button className="btn btn-md btn-outline btn-error ">More Services</button></span>
            
       </div>
    );
};

export default Services;