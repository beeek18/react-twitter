import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="icons  w-14 h-14 flex justify-center transition"
    >
      <BsTwitter size={20} color="white" />
    </div>
  );
};

export default SidebarLogo;
