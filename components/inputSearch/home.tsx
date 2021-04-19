import React from "react";
import { Stack, Box, Image, Text, Grid, Spinner } from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Box margin={0} padding={0}>
      <video muted autoPlay loop style={{ margin: 0 , width: "100%"}}>
        <source src="/background-video.mov"></source>
      </video>
      <Text
        pos="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%,-50%)"

        bgGradient="linear(to-l,#ecc94b, #ffffff )"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to "OMDB BUY"
      </Text>
    </Box>
  );
};

export default Home;
