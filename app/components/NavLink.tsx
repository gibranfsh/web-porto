import Link from "next/link";

const NavLink = ({
  href,
  title,
  isActive,
}: {
  href: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href}>
      <h1
        className={`block py-2 pl-3 pr-4 text-[#ADB7BE] lg:text-md rounded md:p-0 hover:text-white ${
          isActive ? "underline" : ""
        }`}
      >
        {title}
      </h1>
    </Link>
  );
};

export default NavLink;
