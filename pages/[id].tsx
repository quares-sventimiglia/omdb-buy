import React from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import api from "../product/api";
import { Product } from "../product/types";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
  const router = useRouter();

  const contactCreatePayment = () => {
    axios.post("/api/checkout", result).then((res: any) => {
      router.push(res.data.init_point);
    });
  };

  if(!result) return <h1>Not found</h1>

  return (
    <Box padding={4}>
      <Stack
        width="100%"
        backgroundColor="white"
        padding={4}
        borderRadius={2}
        boxShadow="sm"
      >
        <Stack direction="row" spacing={10}>
          <Image src={result.image} />
          <Stack justifyContent="space-between">
            <Stack direction="row" justifyContent="space-between">
              <Text fontSize="4xl" fontWeight="bold">
                {result.title}
              </Text>
              <Text fontSize="4xl" fontWeight="bold" color="yellow.400">
                {result.rated}
              </Text>
            </Stack>
            <Text fontSize="4xl" fontWeight="bold">
              $ {result.year} ARS
            </Text>
            <Text>{result.plot}</Text>
            <Text>Duration : {result.time}</Text>
            <Button size="lg" color="yellow.400" onClick={contactCreatePayment}>
              Buy
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  if(!query.id) {
    return {
      props : {}
    }
  }

  const result = await api.fetch(query.id as string);

  return {
    props: {
      result,
    },
  };
};

export default IndexPage;
