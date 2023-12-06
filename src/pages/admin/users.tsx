import { ManageUsersPageView } from "@/views";
import Head from "next/head";

export default function ManageUsers() {
  return (
    <>
      <Head>
        <title>Manage users</title>
        <meta name="description" content="Manage users" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManageUsersPageView />
    </>
  );
}
