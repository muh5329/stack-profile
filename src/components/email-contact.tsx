"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProfileForm } from "./contact-form";
import { TextareaForm } from "./text-area-form";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { GithubIcon, HomeIcon, LinkedinIcon, Mail, Twitter } from "lucide-react";

function TextAreaWrapped({ setTextAreaValue }:any) {
  function handleSubmit(data:any) {
    setTextAreaValue(data.text);
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }

  return <TextareaForm onSubmit={handleSubmit} />;
}

const nameSchema = z.object({
  name: z.string().min(2, { message: "Username must be at least 2 characters." }),
});

const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email format." }),
});

const websiteSchema = z.object({
  website: z.string().optional(),
});

const EmailSocials = () => {
  const nameForm = useForm({ resolver: zodResolver(nameSchema), defaultValues: { name: "" } });
  const emailForm = useForm({ resolver: zodResolver(emailSchema), defaultValues: { email: "" } });
  const websiteForm = useForm({ resolver: zodResolver(websiteSchema), defaultValues: { website: "" } });
  const textAreaForm = useForm({ defaultValues: { text: "" } });

  function handleFinalSubmit() {
    const name = nameForm.getValues().name;
    const email = emailForm.getValues().email;
    const website = websiteForm.getValues().website;
    const message = textAreaForm.getValues().text;

    const mailtoLink = `mailto:recipient@example.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AWebsite:%20${website}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  }

  return (
    <>
      <div><ProfileForm placeholder="Your Name" form={nameForm} submit={() => {}} /></div>
      <div className="pt-5"><ProfileForm placeholder="Email" form={emailForm} submit={() => {}} /></div>
      <div className="pt-5"><ProfileForm placeholder="Your Website (If any)" form={websiteForm} submit={() => {}} /></div>
      <div className="pt-5"><TextAreaWrapped setTextAreaValue={(value:any) => textAreaForm.setValue("text", value)} /></div>
      <div className="pt-5">
        <div className=" flex flex-row  ">
                <Button onClick={handleFinalSubmit}>
                Get In Touch
                </Button> 
            <a href="https://x.com/Muneeb22125325" target="_blank" rel="noopener noreferrer">
                <Button className="ml-5 border-black " variant="outline" size="icon">
                    <Twitter />
                </Button>
            </a>          
            <a href="https://www.linkedin.com/in/muneeb-haq-87b96098/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className=" border-black ml-5">
                    <LinkedinIcon />
                </Button>
            </a>
            <a href="https://github.com/muh5329/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-black ml-5">
                    <GithubIcon />
                </Button>
            </a>
            <a href="mailto:muh5329@gmail.com" >
                <Button variant="outline" size="icon" className="border-black ml-5">
                    <Mail />
                </Button>
            </a>
            <a href="https://monkeyfactory.org/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="border-black ml-5">
                    <HomeIcon />
                </Button>
            </a>
        </div>
      </div>
    </>
  );
};

export default EmailSocials;
