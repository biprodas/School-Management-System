import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="h-10 px-4 flex justify-between items-center">
        <small>
          Copyright © {year} <strong>School ERP</strong>. All rights reserved.
        </small>
        <small>
          Developed with{" "}
          <FaHeart size={12} className="inline-block text-red-500" /> by{" "}
          <Link href="" className="hover:underline hover:text-blue-700">
            biprodas.ry
          </Link>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
