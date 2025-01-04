import Banner from "./HomeComponents/Banner";
import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";

const HomeLayout = () => {
    return (
        <div className=" ">
            <header>
                <Navbar></Navbar>
            </header>
            <main className="max-w-screen-2xl min-h-[calc(100vh-229px)] mx-auto px-2">
                <section className="">
                    <Banner></Banner>
                </section>
            </main>
            <footer className="max-w-screen-2xl mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;