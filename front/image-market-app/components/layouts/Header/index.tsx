import Head from "next/head";
import { FC } from "react";

// Components
import { default as Nav } from "../Nav";

const Header: FC = () => {
  return (
    <>
      <Head>
        <title>Tienda de Productos | ImageMarket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="h-20 w-full" style={{ backgroundColor: "#eef0f4" }}>
        <Nav />
      </header>
    </>
  );
};

export default Header;
