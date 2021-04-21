import React from "react";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";



const PendingPage: React.FC = () => {
  const router = useRouter();

  return (
    <Box padding={4} display="flex" flexGrow={1}>
      <Stack
        width="100%"
        backgroundColor="white"
        padding={4}
        borderRadius={2}
        boxShadow="sm"
      >
        <Stack
          direction="column"
          alignItems="center"
          height="100%"
          spacing={10}
        >
          <Image
            width={500}
            height={500}
            src="https://icongr.am/fontawesome/exclamation-circle.svg?size=64&color=ecc94b"
          />
          <Stack
            spacing={10}
            width="100%"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text fontSize="6xl" fontWeight="bold">
              Payment pending review
            </Text>
            <Text fontSize="xl">
              Please wait a few minutes, we are verifying the payment
            </Text>
            <Button
              size="lg"
              color="yellow.400"
              fontSize="xl"
              onClick={() => router.push("/")}
            >
              Go To Home
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PendingPage;
