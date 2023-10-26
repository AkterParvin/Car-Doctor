import pic1 from '../../../assets/images/about_us/person.jpg'
import pic2 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className=" flex items-center justify-between flex-col md:flex-row gap-8 h-screen mb-12 pb-7 space-y-14">

            <div className='relative h-full flex-1 flex items-center mt-5 '>
                <img src={pic1} alt="" className='w-[85%] md:w-[90%] h-full md:h-[70%] px-10 '/>
                <img src={pic2} alt="" className='absolute -bottom-[19%]
                md:-bottom-[3%] -right-[2%] w-[50%] h-[65%] md:h-[50%] border-8 border-white rounded-lg'/>
            </div>
            <div className='flex-1 pl-5 space-y-5'>
                <h3 className='text-xl text-[#FF3811] font-bold '>About Us</h3>
                <h1 className='text-3xl md:text-5xl font-bold w-[65%]'>We are qualified & of experience in this field</h1>
                <p className='w-[90%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='w-[90%]'>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                </p>
                <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;