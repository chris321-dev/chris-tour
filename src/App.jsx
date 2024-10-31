import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Middle from "./Components/Middle/Middle";
import Portfolio from "./Components/Portfolio/Portfolio";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";
import Destinations from "./Components/Destinations/dest";
import BackToTop from "./Components/BackToTop/BackToTop";
import Preloader from "./Components/Preloader/Preloader";


function App() {

    const [loading, setLoading] = useState(true); // Track the loading state

    useEffect(() => {
        //  a delay before removing the preloader
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2500);

        return () => clearTimeout(timer); 
    }, []);

    return (
        <>
            {loading ? (
                <Preloader />  // Shows the Preloader when loading is true
            ) : (
                <div>
                    <Navbar />
                    <Home />
                    <Middle />
                    <section id="destinations">
                        <Destinations />
                    </section>
                    <section id="portfolio">
                        <Portfolio />
                    </section>
                        <Reviews />
                    <section id="questions">
                        <Questions />
                    </section>
                    <section id="subscribe">
                        <Subscribe />
                    </section>
                    <section id="footer">
                        <Footer />
                    </section>
                        <BackToTop /> 
                </div>
            )}
        </>
    );
}

export default App;
