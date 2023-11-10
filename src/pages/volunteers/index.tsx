import { VolunteersPageView } from "@/views";
import Head from "next/head";

export default function Volunteers() {
  return (
    <>
      <Head>
        <title>Volunteers</title>
        <meta name="description" content="Volunteers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VolunteersPageView />
    </>
  );
}
