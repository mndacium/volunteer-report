import { ReportsPageView } from "@/views";
import Head from "next/head";

export default function Reports() {
  return (
    <>
      <Head>
        <title>Reports</title>
        <meta name="description" content="Reports" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReportsPageView />
    </>
  );
}
