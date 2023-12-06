import { ManageReportsPageView } from "@/views";
import Head from "next/head";

export default function ManageReports() {
  return (
    <>
      <Head>
        <title>Manage reports</title>
        <meta name="description" content="Manage reports" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManageReportsPageView />
    </>
  );
}
