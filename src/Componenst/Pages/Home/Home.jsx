import About from "../About/About";
import Contact from "../Contact/Contact";
import Product from "../Product/Product";
import Services from "../Service/Services";
import Team from "../Team/Team";
import Banner from "./Banner";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;