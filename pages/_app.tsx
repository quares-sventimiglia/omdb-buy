import React, { useState } from "react";
import { AppProps } from "next/app";
import {
  ChakraProvider,
  Stack,
  Image,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  const [movie, setMovie] = useState("");

  function handleSubmit(event?: React.FormEvent<HTMLFormElement>) {
    event && event.preventDefault();
    router.push(`/?q=${movie}`);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovie(event.target.value);
  };

  function backHome() {
    router.push("/");
  }

  return (
    <ChakraProvider>
      <Head>
        <title>OMDB BUY</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Stack
        backgroundColor="#0b0a0c"
        height="100%"
        minHeight="100vh"
        margin="0"
      >
        <Stack
          padding={4}
          spacing={6}
          direction="row"
          backgroundColor="yellow.400"
          width="100%"
          zIndex="1"
        >
          <IconButton
            colorScheme="yellow.400"
            aria-label="Back Home"
            icon={<img src="/favicon/imdb.png" />}
            onClick={backHome}
          />
          <form action="" style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack direction="row" spacing={0}>
              <Input
                name="query"
                backgroundColor="white"
                roundedRight={0}
                onChange={handleChange}
              />
              <IconButton
                roundedLeft={0}
                aria-label="Search database"
                icon={
                  <img src="https://icongr.am/feather/search.svg?size=20&color=#666" />
                }
                onClick={() => handleSubmit()}
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
