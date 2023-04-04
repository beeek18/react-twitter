import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import useUser from "@/hooks/useUser";

interface AvaratProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avarat: React.FC<AvaratProps> = ({ userId, isLarge, hasBorder }) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (event: any) => {
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
  ${hasBorder ? "border-4 border-black" : ""}
  ${isLarge ? "w-32 h-32" : "w-12 h-12"}
  rounded-full
  hover:opacity-90
  transition
  cursor-pointer
  relative
  `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/img/noAvatar.png"}
      />
    </div>
  );
};

export default Avarat;
