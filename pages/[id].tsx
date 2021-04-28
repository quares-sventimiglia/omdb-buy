import React, { useState } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import api from "../product/api";
import { Product } from "../product/types";
import {
  Stack,
  Box,
  Image,
  Text,
  Button,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import FailurePage from "../pages/failure"

interface Props {
  result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const contactCreatePayment = async () => {
    setLoading(true);
    const response = await axios.post("/api/checkout", result);

    router.push(response.data.init_point)
    setLoading(false);
  };

  if (!result) return <h1>Not found</h1>;
  if (result && result.error) return <FailurePage message={result.error} />

  return (
    <Box padding={4}>
      <Stack
        width="100%"
        backgroundColor="white"
        padding={4}
        borderRadius={2}
        boxShadow="sm"
      >
        <IconButton
          aria-label="Go back"
          icon={
            <img src="https://icongr.am/feather/arrow-left.svg?size=30&color=currentColor" />
          }
          width="min-content"
          onClick={() => router.back()}
        />
        <Stack direction="row" spacing={10}>
          <Image src={result.image} />
          <Stack width="100%" justifyContent="space-between">
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
  if (!query.id) {
    return {
      props: {},
    };
  }

  const result = await api.fetch(query.id as string);

  return {
    props: {
      result,
    },
  };
};

export default IndexPage;
