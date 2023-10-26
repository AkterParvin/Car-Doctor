import { SlCalender } from 'react-icons/sl';
import { BsFillClockFill } from 'react-icons/bs';
import { MdCall, MdLocationPin } from 'react-icons/md';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { TbOvalVerticalFilled } from 'react-icons/tb';

const Contact = () => {
    return (
        <div className="bg-[#151515] py-10 lg:py-20 rounded-xl shadow-md flex flex-col lg:flex-row space-y-6 justify-evenly items-center my-10 ">
            <div className='flex items-center justify-start gap-8 mx-6'>
                <span className=''>
                    <SlCalender className='text-white text-2xl'></SlCalender>
                    <BsFillClockFill className='text-[#FF3811] -mt-2 ml-3'></BsFillClockFill>
                </span>
                <span>
                    <p className="text-white ">We are open monday-friday</p>
                    <h2 className="text-white font-bold text-2xl">7:00 am - 9:00 pm</h2>
                </span>
            </div>

            <div className='flex items-center justify-start gap-8 mx-6'>
                <span className=''>
                    <MdCall className='text-white text-3xl'></MdCall>
                    <BiSolidMessageRoundedDots className='text-[#FF3811] -mt-6 ml-3'></BiSolidMessageRoundedDots>
                </span>
                <span>
                    <p className="text-white ">Have a question?</p>
                    <h2 className="text-white font-bold text-2xl">+2546 251 2658</h2>
                </span>
            </div>
            <div className='flex items-center justify-start gap-8 mx-6'>
                <span className=''>
                    <TbOvalVerticalFilled
                        className='text-white text-2xl '></TbOvalVerticalFilled>
                    <MdLocationPin className='text-[#FF3811] text-2xl -mt-8 '></MdLocationPin>
                </span>
                <span>
                    <p className="text-white ">Need a repair? our address</p>
                    <h2 className="text-white font-bold text-2xl">Liza Street, New York</h2>
                </span>
            </div>
            
        </div>
    );
};

export default Contact;