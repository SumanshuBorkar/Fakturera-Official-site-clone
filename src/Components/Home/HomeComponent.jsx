import React, { useState, useEffect } from "react";
import "./HomeComponent.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import HomeBottom from "./HomeBottom";
import FreeTrialForm from "./FreeTrialForm";
import Form1 from "../../assets/Form1.png"
import Form2 from "../../assets/Form2.png"
import Form3 from "../../assets/Form3.png"

const HomeComponent = () => {
    // Array of images (you can replace with your own paths)
    const images = [
        Form1,
        Form2,
        Form3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);   
    }, [images.length]);

    return (
        <>
            <div className="HomePageContianer">
                <Navbar />
                <div className="UpperHeroContent">
                    <div className="UpperHeroLeft">
                        <h1 className="text-Top-HeroComp">
                            Market leader in simple invoice programs for over 25 years
                        </h1>
                        <h1 className="text-Bttom-HeroComp">
                            Do like over 43,000 other companies. Discover Sweden's Simplest
                            Invoice Program.
                        </h1>
                    </div>

                    {/* 🔥 Image slider */}
                    <div className="UpperHeroRight">
                        <div className="slider">
                            <div
                                className="slider-track"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >
                                {images.map((img, i) => (
                                    <img key={i} src={img} alt={`slide-${i}`} className="slide" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Contact-Form-Container">
                    <FreeTrialForm />
                </div>
                <div>
                    <Slider />
                </div>
                <div>
                    <HomeBottom />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;
