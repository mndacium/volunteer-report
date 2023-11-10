import { VolunteerDetailedPageView } from "@/views";
import Head from "next/head";

export default function VolunteerDetailed() {
  return (
    <>
      <Head>
        <title>Volunteer Detailed</title>
        <meta name="description" content="Volunteer Detailed page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VolunteerDetailedPageView />
    </>
  );
}
