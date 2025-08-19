import React from "react";
import './HomeBottom.css';
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Pintrest from "../../assets/Pintrest.png"; 

const professionCards = [
    { label: "Lawyers", count: 650, fade: "fade-up-1" },
    { label: "Auditors", count: 140, fade: "fade-up-2" },
    { label: "Accountant", count: 515, fade: "fade-up-3" },
    { label: "Construction company", count: 2410, fade: "fade-up-4" },
    { label: "Consultants", count: 1220, fade: "fade-up-1" },
    { label: "Property company", count: 660, fade: "fade-up-2" },
    { label: "Transport company", count: 1460, fade: "fade-up-3" },
    { label: "Municipalities", count: 60, fade: "fade-up-4" },
    { label: "Restaurants", count: 520, fade: "fade-up-1" },
    { label: "Electrician", count: 435, fade: "fade-up-2" },
    { label: "Computer company", count: 210, fade: "fade-up-3" },
    { label: "Schools", count: 120, fade: "fade-up-4" },
    { label: "Hotel", count: 290, fade: "fade-up-1" },
    { label: "Engineers", count: 205, fade: "fade-up-2" },
    { label: "Associations", count: 250, fade: "fade-up-3" },
    { label: "Doctor", count: 80, fade: "fade-up-4" }
];


const socialLinks = [
    {
        href: "https://www.facebook.com/FakturaProgram",
        img: Facebook
    },
    {
        href: "https://www.instagram.com/FakturaProgram",
        img: Instagram
    },
    {
        href: "https://www.linkedin.com/company/fakturaprogram/",
        img: Linkedin
    },
    {
        href: "https://in.pinterest.com/FakturaProgram/",
        img: Pintrest
    }
];

const HeroBottom = () => (
    <div className="white-section">
        <div className="Hero-Bottom-Heading">
            <h2
                className="section-header-title">
                <span className="heading-highlite">
                    Our Customers
                </span>
                {" available throughout Sweden, and in, so to speak, all professions"}
            </h2>
        </div>

        <div className="section-description-HomeBottom">
            <p>Our programs are used today at everything from Sweden's largest companies to thousands of 1 and 2 man companies, as well as numerous associations and organizations.</p>
            <br /><br />
            <p>Among our larger customers can be mentioned e.g.: ABB, ISS, Adidas, Electrolux, Volvo, MAN, Miele and many, many more. Yes, almost every large company has one or more subdivisions that use programs from us, alongside its main program.</p>
            <br />
            <br />
            <p>Among our over 43,000 small and medium-sized business customers, all kinds of companies are represented. Either it's TV celebrities or a local chapter from the Red Cross.</p>
            <br />
        </div>
        <h2 className="section-header-title">
            Among our customers is over
        </h2>

        <div className="Feature-Cards-Container">
            {professionCards.map((card, idx) => (
                <div
                    key={card.label}
                    className="Individual-Card-HomeBottom"
                >
                    <h5>
                        <span className="heading-accent">{card.count} </span>
                        {card.label}
                    </h5>
                </div>
            ))}
        </div>

        <div className="div-block-2"></div>
        <div className="Description-Socials">
            <div className="section-description-disclainer-HomeBottom">
                <a href="disclaimer.html">
                    Ownership relationships and Disclaimer
                </a>
            </div>

            <div className="socials-link">
                {socialLinks.map((item, idx) => (
                    <a
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href}
                        className=""
                    >
                        <img src={item.img} alt="" />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default HeroBottom;
