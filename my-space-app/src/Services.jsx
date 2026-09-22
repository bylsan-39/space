import React from "react";
import { FaReact } from "react-icons/fa";
import { FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";
const ServicesData = [
    {
        title: "HST",
        content: "300-1000km",
        description: "used for astronmical observition , capturing stunning images of the universe.",
        icon: <FaReact className="icon" />,
        oasDelay: "300",
    },
    {
        title: "GPS",
        content: "300-1500km",
        description: " part of the globale position system (GPS) used for navigation",
        icon: <FaSpaceAwesome className="icon" />,
        oasDelay: "700",
    },
    {
        title: "ISS",
        content: "500-1500km",
        description: " its a habbital artifical satallite orbiting earth nd serves as a space environment reserch laboratory ",
        icon: <FaShuttleSpace className="icon" />,
        oasDelay: "700",
    }
]

function Services() {

    return (
        <div className="services">
            <div className="container">
                <div className="boxes">
                    {
                        ServicesData.map(
                            (data,) => (
                                <div className="box" data-aos="fade-up" data-aos-delay={data.oasDelay}>
                                    {data.icon}
                                    <h1>{data.title}</h1>
                                    <p className="p1">{data.content}</p>
                                    <p>{data.description}</p>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
}
export default Services