import React, { useEffect, useState } from "react";
import { Box, Chip, Stack } from "@mui/material";
import "./ContentChips.css";

const ContentChips = () => {
    //Creating a list of section chips first
    const chips = [
        {
            id: 1,
            chipName: "All"
        },
        {
            id: 2,
            chipName: "Android"
        },
        {
            id: 3,
            chipName: "Cricket"
        },
        {
            id: 4,
            chipName: "iPhone"
        },
        {
            id: 5,
            chipName: "Google"
        }
    ];

    return (
            <Box className="slider">
                {/* Render the list of chips in row manner */}
                <Stack direction="row" spacing={1} className="chips">
                    {chips.map((ele) => ele.id === 1 ? (
                        <Chip 
                            key={ele.id}
                            label={ele.chipName} 
                            className="selected"
                        />
                    ) : (
                        <Chip 
                            key={ele.id}
                            label={ele.chipName} 
                            className="notSelected"
                        />
                    ))}
                </Stack>
            </Box>
    )

}

export default ContentChips;    //scrollbar-width: none;