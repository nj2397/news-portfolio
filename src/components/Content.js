import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
    Box, 
    Card, 
    CardContent,
    CardMedia,
    Container, 
    Grid,
    Stack 
} from "@mui/material";

import Cards from "./CardChips.js";
import ContentChips from "./ContentChips.js";
import "./Content.css";

const Content = () => {
    const [contentNews, setContentNews] = useState([]);

    //Fetching the news list from API
    const fetchList = async () => {
        try{
            const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1f273f1ac36c4640a7fe1dba445dbed0");
            // console.log(response.data.articles);
            setContentNews(response.data.articles); 
            return;
        } catch(error) {
            return error.message;
        }
    }

    useEffect(() => {
        fetchList();
    }, [])

    // Calculating Time wrt Days elapsed from the date of publish
    const calculateDays = (time) => {
        const splitTime = time.split('T');
        const considerHour = splitTime[1].split(':');
        
        if(new Date().getHours() > considerHour[0])
            return new Date().getHours() - considerHour[0];
        else
            return considerHour[0] - new Date().getHours();
    }

    return (
        <>
            <Cards />   
            <Container>
                <Box className="feed-title">
                    <p>Top Stories for you</p>
                </Box>

                {/* Section Chips Display */}
                <ContentChips />

                <Grid container spacing={2} className="container">
                    {contentNews.length > 0 && contentNews.map((ele) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card className="indiCard">
                                <Grid container spacing={1} my={2} px={2}>
                                    <Grid item xs={12} sx={{ textAlign: "left", height: "10%" }}>
                                        <p>{calculateDays(ele.publishedAt)} day ago</p>
                                    </Grid>
                                    <Grid item xs={6} className="articleContainer">
                                        <p className="article">{ele.content}</p>
                                    </Grid>
                                    <Grid item xs={6} className="imgContainer">
                                        <CardMedia 
                                            component="img"
                                            className="imgDimensions" 
                                            src={ele.urlToImage}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={{ textAlign: "left"}}>
                                        <p>Matt Young, Daily Beast</p>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        
        </>
    )
}

export default Content;