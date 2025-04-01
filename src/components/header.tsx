import Link from 'next/link';
import { DropDownMenuHome } from './menu-dropdown';

const CustomHeader = () => {
  return (
    <nav className="flex items-center justify-between bg-white text-black p-5">
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-5">
        <Link href="#about" className="cursor-pointer select-none text-lg font-semibold hover:underline">About Me</Link>
        <Link href="#skills" className="cursor-pointer select-none text-lg font-semibold hover:underline">Skills</Link>
        <Link href="#projects" className="cursor-pointer select-none text-lg font-semibold hover:underline">Projects</Link>
        <Link href="#contact" className="cursor-pointer select-none text-lg font-semibold hover:underline">Socials</Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden block">
        <DropDownMenuHome />
      </div>
    </nav>
  );
};

export default CustomHeader;
