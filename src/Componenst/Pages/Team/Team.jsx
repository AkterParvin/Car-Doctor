import TeamSlider from "./TeamSlider";


const Team = () => {
    return (
        <div>
            <div className="w-1/2 mx-auto text-center md:my-24 space-y-3">
                <h3 className="text-xl font-bold text-[#FF3811] ">Team</h3>
                <h1 className="text-3xl md:text-5xl text-black font-bold">Meet Our Team</h1>
                <p className="text-gray-600">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
            </div>
            <div>
                <TeamSlider></TeamSlider>
           </div>

        </div>
    );
};

export default Team;