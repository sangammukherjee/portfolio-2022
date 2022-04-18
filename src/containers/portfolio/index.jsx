import React from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaBlackTie } from "react-icons/fa";

function Portfolio() {
    return ( 
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
          headerText="My Portfolio"
          icon={<FaBlackTie color="white" size={40} />}
        /> 
        </section>
    );
}

export default Portfolio;