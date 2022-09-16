import React from "react";
import { Link } from "react-router-dom";

import AboutUs from "../aboutUs/AboutUs";
import SearchACar from "../searchACar/SearchACar";
import CorporateEnquiries from "../CorporateEnquiries/CorporateEnquiries";
import OurClients from "../ourClients/OurClients";
import Blog from "../Blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import DialogueLoginBox from "./DialogueLoginBox";

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/purple-bg.8549cebf891a98bf6552.png)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          width: "100%",
        }}
        className="w-100% h-[110px] background-size-100% background-no-repeat"
      >
        <img
          src="./images/logo.png"
          alt="logo"
          className="h-[60px] w-100 pl-20 "
        />
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}
          className="pl-20 font-light"
        >
          <Link to="/about-us" className="text-[20px] text-white">
            About Us
          </Link>
          <Link to="/search-a-car" className="text-[20px] text-white">
            Search A Car
          </Link>
          <Link to="/corporate-enquiries" className="text-[20px] text-white">
            Corporate Enquiries
          </Link>
          <Link to="/our-clients" className="text-[20px] text-white">
            Our Clients
          </Link>
          <Link to="/blog" className="text-[20px] text-white">
            Blog
          </Link>
          <Link to="/contact-us" className="text-[20px] text-white">
            Contact Us
          </Link>
          <h1 className="text-[20px] font-bold text-white">
            <DialogueLoginBox />
          </h1>
          <h1 className="text-[20px]  text-white">|</h1>
          <Link to="/sign-up" className="text-[20px]  text-white">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
