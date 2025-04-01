"use client"
import {
  Github,
  Keyboard,
  Mail,
  User,
  AlignJustify
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
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
