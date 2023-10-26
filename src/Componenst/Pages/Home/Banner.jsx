import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
   
   
   
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide6" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                       </div>

                   </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide1" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide2" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide3" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide4" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide6" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                        </div>

                    </div>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full " />
                <div className="absolute flex justify-end gap-5 mr-10 transform -translate-y-1/2 left-5 right-5 bottom-0 z-40">
                    <a href="#slide5" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline text-white hover:bg-[#FF3811] ">❯</a>
                </div>
                <div className="absolute overflow-hidden rounded-xl  top-0  h-full w-full inset-0 bg-gradient-to-r  from-[#151515] to-[rgba(21, 21, 21, 0.00)] z-10">
                    <div className='space-y-7 pt-8 md:pt-14 px-6 md:px-16  lg:w-1/2'>
                        <h2 className='text-2xl md:text-5xl font-bold text-white '>Affordable Price For Car Servicing</h2>
                        <p className='text-white text-lg '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex flex-col items-center md:gap-5 w-2/3 md:flex-row'>
                            <button className='btn  btn-outline md: text-white my-2 hover:bg-[#FF3811] font-bold'>Discover More</button>
                            <button className='btn bg-[#FF3811] text-white btn-outline hover:bg-slate-700'>Latest Project</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;