import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { IconType } from "react-icons";

import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
}) => {
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, onClick, href, currentUser, auth, loginModal]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="icons lg:hidden w-14 h-14 flex justify-center ">
        <Icon size={28} color="white" />
      </div>
      <div className="icons lg:flex hidden gap-4">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
