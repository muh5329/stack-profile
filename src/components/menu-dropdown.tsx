"use client"
import {
  Github,
  Keyboard,
  Mail,
  User,
  AlignJustify,
  FileType2
} from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export function DropDownMenuHome() {
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 200); // Small delay to allow dropdown to close properly
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className=" border-black ">
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => scrollToSection('about')}>
            <User />
            <span>About Me</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('skills')}>
            <Keyboard />
            <span>Skills</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('projects')}>
            <Github />
            <span>Project</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('contact')}>
            <Mail />
            <span>Socials</span>
          </DropdownMenuItem>
          <DropdownMenuItem
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/docs/Resume.pdf'; 
                link.download = 'Muneeb_haq_Resume.pdf'; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileType2 />
              <span>Resume</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
