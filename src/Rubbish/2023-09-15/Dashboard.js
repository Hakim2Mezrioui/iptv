import IptvContext from "../../context/Iptv";
import EditAbonnement from "../EditAbonnement/EditAbonnement";
import Header from "../Header/Header";
import SideBar from "../Header/Header";
import React, { useContext, useEffect } from "react";
import Statistique from "../Statistique/Statistique";

let Dashboard = () => {
    const ctx = useContext(IptvContext);
    useEffect(() => {
        ctx.checkAdminPage(true);
    });
    return (
        <React.Fragment>
            <Header />
            <Statistique />
        </React.Fragment>
    )
}

export default Dashboard;