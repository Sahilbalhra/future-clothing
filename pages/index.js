import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/dist/client/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Future Clothing-life too short to wear boring clothes</title>
        <meta
          name="description"
          content="Future Clothing-life's too short to wear boring clothes"
        />
        <link rel="icon" href="/favlogo.png" />
      </Head>
      <Navbar />
      <Image src="/tshirt1.png" alt="" width={1500} height={1000} />
      <Footer />
    </>
  );
}
