import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import api from "../product/api";
import { Product } from "../product/types";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
console.log("result", result)
  return (
    <Box padding={4}>
      <Stack
        width="100%"
        backgroundColor="white"
        padding={4}
        borderRadius={2}
        boxShadow="sm"
      >
        <Stack direction="row">
          <Image src={result.image}/>
          <Stack>
            <Text>{result.title}</Text>
            <Text>{result.year}</Text>
            <Text>{result.plot}</Text>
            <Text>{result.rated}</Text>
            <Text>{result.time}</Text>
            <Button color="yellow.400">Buy</Button>
          </Stack>
        </Stack>
        
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const result = await api.fetch(query.id as string);

  return {
    props: {
      result,
    },
  };
};

export default IndexPage;
