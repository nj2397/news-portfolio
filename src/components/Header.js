import React, { useState, useEffect } from "react";
import { Box, Container, IconButton, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';   
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"; 

const Header = () => {
    return (
        <Box className="navheader">
            <IconButton><MenuIcon /></IconButton>
            <p className="brand">Zintlr News</p>
            <IconButton><SearchIcon /></IconButton>
        </Box>
    )
}

export default Header;