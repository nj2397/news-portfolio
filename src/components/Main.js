import React, { useState, useEffect } from "react";
import { Box, Container, Stack } from "@mui/icons-material";
import Header from "./Header.js";
import Content from "./Content.js";
import Explore from "./ExploreButton.js"

const Main = () => {
    //Main conglomerating component
    return (
        <>
            <Header />
            <Content />
            <Explore />
        </>
        
    )
}

export default Main;