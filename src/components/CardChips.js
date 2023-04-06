import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
    Box, 
    Card,
    CardContent, 
    Container, 
    Stack 
} from "@mui/material";
import "./CardChips.css";

const Cards = () => {
    const [list, setList] = useState([]);

    //Fetching the news list from API
    const fetchList = async () => {
        try {
            const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f273f1ac36c4640a7fe1dba445dbed0");
            console.log(response.data.articles);
            setList(response.data.articles);
            return;
        } catch (error) {
            return error.message;
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    //Calculating Time wrt Days elapsed from the day of publish
    const calculateDays = (time) => {
        const splitTime = time.split('T');
        const considerHour = splitTime[1].split(':');
        
        if(new Date().getHours() > considerHour[0])
            return new Date().getHours() - considerHour[0];
        else
            return considerHour[0] - new Date().getHours();
    }

    return (
        <Container className="container">
            <Box className="slider">
                <Stack direction="row" spacing={1} className="slide">
                    {list.length > 0 && list.map((ele) => (
                        <Card sx={{ maxWidth: 350 }}>
                            <CardContent className="card-content">
                                <p>{calculateDays(ele.publishedAt)} days ago</p>
                                <p>{ele.title}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Container>
    )
}

export default Cards;