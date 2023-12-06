import { ManageCategoriesPageView } from "@/views";
import Head from "next/head";

export default function ManageCategories() {
  return (
    <>
      <Head>
        <title>Manage categories</title>
        <meta name="description" content="Manage categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManageCategoriesPageView />
    </>
  );
}
