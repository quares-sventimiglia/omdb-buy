import React from "react";
import { Stack, Box, Image, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  message: string;
}

const FailurePage: React.FC<Props> = ({message}) => {
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
            src="https://icongr.am/fontawesome/window-close-o.svg?size=64&color=ce2222"
          />
          <Stack
            spacing={10}
            width="100%"
            alignItems="center"
            justifyContent="space-around"
          >
            <Text fontSize="6xl" fontWeight="bold">
              {message ? message : "Payment Failed"}
            </Text>
            <Text fontSize="xl">{message ? "" : "Please try another payment method"} </Text>
            <Button
              size="lg"
              color="red.400"
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

export default FailurePage;
