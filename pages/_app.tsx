import React from "react";
import { AppProps } from "next/app";
import {
  ChakraProvider,
  Stack,
  Image,
  Input,
  IconButton,
} from "@chakra-ui/react";
import {useRouter} from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    router.push(`/?q=${event.target["query"].value}`);
  }

  return (
    <ChakraProvider>
      <Stack backgroundColor="gray.400" height="100%" minHeight="100vh">
        <Stack
          padding={4}
          spacing={6}
          direction="row"
          backgroundColor="yellow.400"
        >
          <Image src="favicon/favicon-32x32.png" href={"/"}/>
          <form action="" style={{width: "100%"}} onSubmit={handleSubmit}>
            <Stack direction="row" spacing={0} width="100%">
              <Input name="query" backgroundColor="white" roundedRight={0} />
              <IconButton
                roundedLeft={0}
                aria-label="Search database"
                icon={
                  <img src="https://icongr.am/feather/search.svg?size=20&color=#666" />
                }
              />
            </Stack>
          </form>
        </Stack>
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  );
};

export default MyApp;
