import React from "react";
import {
    Button, 
    Stack
} from "@mui/material";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import "./ExploreButton.css";

const Explore = () => {
    return (
        <Button className="explore" variant="outlined">
            <Stack direction="row" spacing={1}>
                <TravelExploreIcon />
                <p>Explore</p>
            </Stack>
        </Button>
    )
}

export default Explore;