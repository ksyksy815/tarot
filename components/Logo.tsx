import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={"/icons/logo.svg"}
        alt={"AICana logo"}
        width={162}
        height={48}
      />
    </Link>
  );
};

export default Logo;
