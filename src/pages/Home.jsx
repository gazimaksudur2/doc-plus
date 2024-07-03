import Banner from '../componentes/Banner';
import NavBar from '../componentes/NavBar';
import OurMission from '../componentes/OurMission';
import Empower from '../componentes/Empower';
import FAQ from '../componentes/FAQ';
import Offer from '../componentes/Offer';
import AboutUs from '../componentes/AboutUs';
import Footer from '../componentes/Footer';

const Home = () => {
    return (
        <div className='min-h-screen bg-base-100 flex flex-col justify-between'>
            <div className='w-[90%] mx-auto my-8'>
                <NavBar />
                <Banner />
                <OurMission />
                <Empower />
                <AboutUs />
                <FAQ />
                <Offer />
            </div>
            <Footer />
        </div>
    );
};

export default Home;