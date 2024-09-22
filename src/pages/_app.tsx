import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hula.sh</title>
        <meta name="description" content="Programátor, který miluje vyvíjení webových aplikací." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="web development, software engineering, open-source software, web technologies, web applications, web apps, programming, coding, software development, software developer, web developer, developer, programmer" />
        <meta name="author" content="Dominik Hůla" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="language" content="Czech" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
