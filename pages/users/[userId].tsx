import React from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

import UserHero from "@/components/users/UserHero";
import Header from "@/components/Header";
import useUser from "@/hooks/useUser";
import UserBio from "@/components/users/UserBio";
import PostsFeed from "@/components/posts/PostsFeed";

const UserView = () => {
  const route = useRouter();
  const { userId } = route.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostsFeed userId={userId as string} />
    </>
  );
};

export default UserView;
