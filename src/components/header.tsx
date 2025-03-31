import Link from 'next/link';

const CustomHeader = () => {
  return (
    <nav className="flex space-x-5  bg-white text-black">
      <Link href="#about" className="pl-5 cursor-pointer select-none">About Me</Link>
      <Link href="#skills" className="pl-5 cursor-pointer select-none">Skills</Link>
      <Link href="#projects" className="pl-5 cursor-pointer select-none">Projects</Link>
      <Link href="#contact" className="pl-5 cursor-pointer select-none">Socials</Link>
    </nav>
  );
};

export default CustomHeader;