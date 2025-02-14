
import AboutMe from "./HomeComponents/AboutMe";
import Banner from "./HomeComponents/Banner";
import Contact from "./HomeComponents/Contact";
import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";
import Projects from "./HomeComponents/Projects";
import Skills from "./HomeComponents/Skills";

const HomeLayout = () => {
    return (
        <div className=" ">
            <header className="max-w-screen-2xl  mx-auto h-[50px]">
                {/* navbar */}
                <Navbar></Navbar>
            </header>
            <main className="max-w-screen-2xl min-h-[calc(100vh-229px)] mx-auto px-2 space-y-10">
                <section className="pt-5">
                    <Banner></Banner>
                </section>
                <section>
                    <AboutMe></AboutMe>
                </section>
                <section>
                    <Skills></Skills>
                </section>
                <section>
                    <Projects></Projects>
                </section>
                <section>
                    <Contact></Contact>
                </section>
            </main>
            <footer className="max-w-screen-2xl mx-auto">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;