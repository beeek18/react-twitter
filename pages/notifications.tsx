import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import Header from "@/components/Header";
import NotificationFeed from "@/components/NotificationFeed";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirec: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const notifications = () => {
  return (
    <>
      <Header label="Notifications" showBackArrow />
      <NotificationFeed />
    </>
  );
};

export default notifications;
