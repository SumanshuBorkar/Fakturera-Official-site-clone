import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Order/Order.css"
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

const OurCustomers = () => {

    const customersData = [
        { count: 654, label: "Lawyers" },
        { count: 143, label: "Auditors" },
        { count: 518, label: "Accountant" },
        { count: 2412, label: "Construction company" },
        { count: 1464, label: "Transport company" },
        { count: 1223, label: "Consulting services" },
        { count: 742, label: "Machine company" },
        { count: 64, label: "Municipalities" },
      
        { count: 665, label: "Property company" },
        { count: 521, label: "Restaurants" },
        { count: 439, label: "Electrician" },
        { count: 432, label: "Cleaning company" },
        { count: 406, label: "Industries" },
        { count: 328, label: "Workshops" },
        { count: 312, label: "Painter" },
        { count: 290, label: "Hotel" },
      
        { count: 252, label: "Associations" },
        { count: 249, label: "Design company" },
        { count: 244, label: "Gardener" },
        { count: 236, label: "Car workshops" },
        { count: 238, label: "Investment company" },
        { count: 232, label: "Boat & Marine Company" },
        { count: 226, label: "Entrepreneurs" },
        { count: 212, label: "Computer company" },
      
        { count: 209, label: "Engineers" },
        { count: 205, label: "Interior company" },
        { count: 197, label: "Car dealer" },
        { count: 184, label: "Photographers" },
        { count: 184, label: "Mason" },
        { count: 182, label: "Office Service" },
        { count: 170, label: "Florists" },
        { count: 168, label: "Architects" },
      
        { count: 167, label: "Sports company" },
        { count: 166, label: "Glazier" },
        { count: 165, label: "Importers" },
        { count: 159, label: "Renovation" },
        { count: 154, label: "Mech. Workshops" },
        { count: 151, label: "Facility services" },
        { count: 148, label: "Welding company" },
        { count: 139, label: "Advertising agencies" },
      
        { count: 130, label: "Wood products" },
        { count: 124, label: "Music Company" },
        { count: 122, label: "Schools" },
        { count: 118, label: "Gas stations" },
        { count: 115, label: "Traffic schools" },
        { count: 109, label: "Plumbing" },
        { count: 109, label: "Tiles" },
        { count: 107, label: "Campsites" },
      
        { count: 106, label: "Flooring" },
        { count: 102, label: "Printing houses" },
        { count: 102, label: "Concrete Industries" },
        { count: 98, label: "Roofing" },
        { count: 98, label: "Inspectors" },
        { count: 97, label: "Churches" },
        { count: 96, label: "Installers" },
        { count: 93, label: "Tire company" },
      
        { count: 91, label: "Plastics Industries" },
        { count: 89, label: "Fish farming" },
        { count: 89, label: "Doctor" },
        { count: 83, label: "Installers" },
        { count: 76, label: "Course & Training" },
        { count: 75, label: "Culture & Community House" },
        { count: 72, label: "Caretaker" },
        { count: 71, label: "Textile and Seam" },
      
        { count: 71, label: "Kitchen" },
        { count: 71, label: "Tinsmith" },
        { count: 70, label: "Clothing & Shoe Shops" },
        { count: 65, label: "Ventilation company" },
        { count: 61, label: "Graphic Companies" },
        { count: 60, label: "Bathroom shops" },
        { count: 59, label: "Travel agencies" },
        { count: 59, label: "Sports clubs" },
      
        { count: 55, label: "Taxi" },
        { count: 52, label: "Refrigeration Service" },
        { count: 51, label: "Bakeries" },
        { count: 49, label: "Kindergarten" },
        { count: 48, label: "Dentist" },
        { count: 46, label: "Security company" },
        { count: 46, label: "Agricultural Service" },
        { count: 46, label: "Bus company" },
      
        { count: 41, label: "Dive Company" },
        { count: 41, label: "House company" },
        { count: 39, label: "Gym" },
        { count: 33, label: "Car rental" },
        { count: 33, label: "Pet Shops" },
        { count: 31, label: "Publisher" },
        { count: 29, label: "Banks" },
        { count: 28, label: "Hairdressers" },
      
        { count: 27, label: "Broker" },
        { count: 26, label: "Steel industries" },
        { count: 26, label: "Business service" },
        { count: 23, label: "Newspapers" },
        { count: 23, label: "Veterinarians" },
        { count: 22, label: "Shipping companies" },
        { count: 21, label: "Football clubs" },
        { count: 16, label: "National Confederation" },
      
        { count: 15, label: "Sports team" },
        { count: 14, label: "Prisons" },
        { count: 14, label: "Ski slopes" },
        { count: 12, label: "Energy plant" },
        { count: 11, label: "Radio stations" },
        { count: 10, label: "Dairies" },
        { count: 10, label: "Sports halls" },
        { count: 9, label: "Museum" },
      
        { count: 9, label: "Waterworks" },
        { count: 8, label: "Ambulances" },
        { count: 8, label: "Trade union" },
        { count: 7, label: "Hospital" },
        { count: 6, label: "Government agencies" },
        { count: 6, label: "Sports Confederation" },
        { count: 4, label: "Political parties" },
        { count: 3, label: "Universiteit" },
      
        { count: 3, label: "Sausage manufacturer" },
        { count: 2, label: "Ferry connection" },
        { count: 2, label: "County council" },
        { count: 22054, label: "Industry not known" }
      ];
      

    return (

        <>

            <div className="Order-Page-Container">

                <Navbar />
                <h1 className="text-top-Order-page">
                    <span className="text-Top-HeroComp">Our Customers </span>
                    is everywhere there are people
                </h1>
                <div className="form-container">

                    <div className="trial-form">
                        <div className="section-description">
                            <p><span className="Highlited">We have</span> today over 43,000 companies as customers.</p>
                            <br /><br />
                            <p>Our programs are used in everything from Scandinavia's largest companies to small 1- and 2-man companies.</p>
                            <br />
                            <br />
                            <p>Among our larger customers can e.g. mentioned: ABB, ISS, Adidas, Electrolux and many, many more. Yes, almost every large company in Scandinavia has one or more subdivisions that use programs from us alongside their main program.</p>
                            <br />
                            <p>We are equally happy to have customers in almost every community from north to south.</p>
                            <br />
                            <p>Sweden is full of nice places and we are happy to have customers in every city, both small and large.</p>
                        </div>
                    </div>

                </div>

                <h1 className="text-top-Order-page">
                    <span className="text-Top-HeroComp">Our Customers </span>
                    available in all industries

                </h1>
                <div className="form-container">

                    <div className="trial-form">
                        <div className="section-description">
                            <p><span className="Highlited">Either it is</span> the legal profession, where we have 654 clients.</p>
                            <br /><br />
                            <p>Or the accountancy industry, where we have 143 accountants as clients.</p>
                            <br />
                            <br />
                            <p>We have 518 accountants as customers.</p>
                            <br />
                            <p>64 municipalities, over 2400 builders and thousands of other craftsmen.</p>
                            <br />
                            <p>A variety of stores from the Ica and Coop chains.</p>
                            <br />
                            <p>A variety of service stations from Circle K, Shell and others.</p>
                            <br />
                            <p>Grand Hotel in many cities and 521 restaurants.
                            </p>
                            <br />
                            <p>Several sports associations and a number of associations, condominium associations and trade unions.</p>
                            <br />
                            <p>Hospitals, dentists and doctors.</p>
                            <br />
                            <p>Over 1200 consultants, 209 engineers and over 1460 transport companies.</p>
                            <br />
                            <p>Several banks and newspapers, 318 workshops, etc. etc.</p>
                            <br />
                            <p>Unfortunately, it is not possible to include all industries in this list, but all industries are represented in our customer list and all are equally important to us.</p>
                        </div>
                    </div>

                </div>
                <div className="Customers-Bottom">
                    <div className="Hero-Bottom-Heading">
                        <h2
                            className="section-header-title">
                            {" Of our customers are"}
                        </h2>
                    </div>
                    <div className="Feature-Cards-Container-ourCustomers">
                        {customersData.map((card, idx) => (
                            <div
                                key={card.label}
                                className="Individual-Card"
                            >
                                <h5>
                                    <span className="heading-accent">{card.count} </span>
                                    {card.label}
                                </h5>
                            </div>
                        ))}
                    </div>
                    <div className="Customer-Bottom-Button">
                        <button className="submit-btn margin-bottom">Download Now</button>
                    </div>
                    <div>
                        <Slider/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>

        </>

    )
}

export default OurCustomers;
