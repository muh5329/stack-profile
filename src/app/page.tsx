import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from 'next/image'
import { Mail } from "lucide-react"
import { Twitter } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import { GithubIcon } from "lucide-react"
import { InstagramIcon } from "lucide-react"
import { HomeIcon } from "lucide-react"
import { Button } from "~/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { MultiCarousel } from "~/components/multi-carousel";

export function VerticalLine({ height = "h-full", color = "bg-black", width = "w-px" }) {
  return (
    <div className={`${height} ${color} ${width}`} />
  );
}

export  function HorizontalLine({ width = "w-full", color = "bg-black", height = "h-px" }) {
  return (
    <div className={`${width} ${color} ${height}`} />
  );
}

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col justify-top bg-gradient-to-b  text-black">

        {/* Header */}
        <div className="grid row-5 grid-flow-col  pt-10 ">
            <div className=" flex  pl-20 ">
                <Image
                  src="/header/computer.jpg"
                  width={30}
                  height={5}
                  alt="Picture of computer"
                />
                <div className=" pl-4"> Personanal Profile </div>
            </div>
            <div className="flex flex-row justify-center"> 
              
              <div className="flex "> About me</div>
              <div className="flex pl-5 "> Skills</div>
              <div className="flex pl-5 "> Projects</div>
              <div className="flex pl-5 "> Socials</div>
            </div>
            

            <div className="flex flex-row justify-end pr-10"> 
            <Button>
              Resume <Mail /> 
            </Button>
           </div>
        </div>

        {/* About Me */}
       <div className="grid grid-flow-col pt-20 pr-5" >
            <div className="flex flex-col pl-20 ">
                <div className="text-5xl">
                  <span className="block">Hi I'am   <strong>Muneeb Haq</strong></span>
                  <span className="block">a <strong className="font-bold">Full Stack </strong>  
                              <span style={{
                          fontWeight: 800, // Extra bold
                          color: 'white',  // Text color
                          textShadow: '-1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black'
                      }}>
                          Developer
                      </span>
                  </span>
                  <span className="block">based in the <strong className="uppercase">UNITED STATES</strong></span>
              </div>
              <div className="flex flex-col w-[500] ">


                  <p className="text-lg mt-4">
                      A passionate <strong className="font-bold">Full Stack Developer</strong> with extensive experience in Kubernetes, 
                      Apache Flink, and cloud architectures. 
                  </p>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger> ...</AccordionTrigger>
                      <AccordionContent>
                            <p className="text-lg mt-4">I began my programming journey in game development, diving into 
                            frontend and middleware programming before transitioning to full-stack development.I’m capable of building 
                            scalable applications, designing complex architectures using AWS/Terraform, and orchestrating them with ease.
                        </p>
                        <p className="text-lg mt-4">
                            In addition to my professional work, I am deeply passionate about game development on the side and 
                            constantly explore new technologies through side projects. I believe in the power of learning, 
                            and am always keen to improve my skills to build robust, reliable, and innovative solutions.
                        </p>

                        <p className="text-lg mt-4">
                            My expertise extends across designing full-stack systems, and I have the capability to architect complex 
                            solutions, integrating cutting-edge technologies and tools to create seamless user experiences and efficient 
                            back-end operations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  

                 

              </div>
              

            </div>

            <div className="">
                <Image
                  src="/profile_pic/profile.jpg"
                  width={300}
                  height={200}
                  alt="Picture of me"
                />
            </div>

       </div>

       {/* Socials */}
       <div  className=" flex flex-row pl-20  pt-2">

          <Button variant="outline" size="icon">
              <Twitter />
          </Button>

          <Button variant="outline" size="icon" className=" ml-5">
              <LinkedinIcon />
          </Button>

          <Button variant="outline" size="icon" className=" ml-5">
              <GithubIcon />
          </Button>

          <Button variant="outline" size="icon" className=" ml-5">
              <InstagramIcon />
          </Button>

          <Button variant="outline" size="icon" className=" ml-5">
              <Mail />
          </Button>

          <Button variant="outline" size="icon" className=" ml-5">
              <HomeIcon />
          </Button>

          <div className="pt-5 ml-5 w-1/2">
            <HorizontalLine width="w-full" color="bg-black" height="h-1"/>
            <div>
               {/* Spacing */}
               </div>
          </div>

       </div >

       {/* Skills  */}
       <div className=" flex flex-col pl-20 justify-center  content-center pt-10">
          <p className="text-4xl mt-4 mb-2 text-center">
            My <strong className="font-bold">Skills</strong>
          </p>
          <MultiCarousel />

       </div>


       {/* My Experience  */}
       <div className=" flex flex-col pl-20 justify-center bg-black content-center pt-20">
          <p className="text-4xl  text-white mt-4 mb-10 text-center">
              My <strong className="font-bold">Experience</strong>
          </p>

          <div className="flex  border border-x-stone-400 rounded-lg  m-10" >
                {/* Company icon */}
                <div className="pl-5 pt-5 flex flex-row w-full">  
                  <Image
                    src="/header/computer.jpg"
                    width={20}
                    height={20}
                    alt="Picture of computer"
                  />

                  <p className="text-md pl-10 text-white mt-4 mb-5 text-center">
                       <strong className="font-bold">Engineer III at Comcast</strong>
                  </p>

                  <div className=" flex justify-end">
                      <p className="text-md pl-10 text-white mt-4 mb-5 text-center">
                          <strong className="font-bold">Engineer III at Comcast</strong>
                      </p>

                  </div>

                </div>
                


          </div>

       </div>


      </main>
    </HydrateClient>
  );
}
