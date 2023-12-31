import { HomePageView } from "@/views";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volunteer report</title>
        <meta name="description" content="Volunteer report" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageView />
    </>
  );
}
