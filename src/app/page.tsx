import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from 'next/image'
import { Download } from "lucide-react"
import { Twitter } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import { GithubIcon } from "lucide-react"
import { InstagramIcon } from "lucide-react"
import { HomeIcon } from "lucide-react"
import { Mail } from "lucide-react"
import { Button } from "~/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { MultiCarousel } from "~/components/multi-carousel";
import { ProjectsCarousel } from "~/components/projects-carousel";
import { Card, CardContent } from "~/components/ui/card";
import { ProfileForm } from "~/components/contact-form";
import { Textarea } from "~/components/ui/textarea";
import { TextareaForm } from "~/components/text-area-form";
import { Header } from "@radix-ui/react-accordion";
import CustomHeader from "~/components/header";
import EmailContact from "~/components/email-contact";
import EmailSocials from "~/components/email-contact";

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
            <div className="flex items-center pl-10 sm:pl-20 ">
            <Image
              src="/profile_pic/top.jpg"
              width={30}
              height={5}
              alt="Picture of computer"
            />
            <div className="pl-4 font-bold text-black pt-1">Muneeb's Profile</div>
          </div>

            <CustomHeader/>
            

            <div className="hidden md:flex flex-row justify-end pr-10"> 
              <a href="/docs/resume.pdf" download="Muneeb_haq_Resume.pdf">
                <Button>
                  Resume <Download /> 
                </Button>
              </a>
            
           </div>
        </div>

        {/* Hello Me */}
       <div className="grid sm:grid-flow-col pt-10 sm:pt-20 pr-5" >
            <div className="flex flex-col pl-20 w-[90%]  ">
                <div className="text-3xl sm:text-5xl">
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
              <div className="flex flex-col sm:w-[500] md:w-[600] lg:w-[700] xl:w-[1000] ">

                  {/* BLURB */}
                  <p className="text-lg mt-4">
                      A passionate <strong className="font-bold">Full Stack Developer</strong> with extensive experience in Kubernetes, 
                      Apache Flink, and cloud architectures. I began my programming journey in game development, diving into 
                      frontend and middleware programming before transitioning to full-stack development. 
                  </p>
                  <Accordion type="single" collapsible>
                    <AccordionItem className=" border-white " value="item-1">
                      <AccordionTrigger className=""> ...</AccordionTrigger>
                      <AccordionContent>
                            <p className="text-lg mt-4">I’m capable of building 
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

            <div className="flex justify-center sm:justify-end sm:mr-40">
                <Image
                  src="/profile_pic/ghibli_profile.png"
                  width={300}
                  height={200}
                  alt="Picture of me"
                />
            </div>

       </div>

       {/* Socials */}
       <div  className=" flex flex-row pl-10 pt-5 sm:pl-20  sm:pt-2">
          <a href="https://x.com/Muneeb22125325" target="_blank" rel="noopener noreferrer">
            <Button className=" border-black " variant="outline" size="icon">
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
          
          <a href="https://github.com/muh5329/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="border-black ml-5">
                <InstagramIcon />
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
          

          <div className="pt-5 ml-5 w-[80%] hidden sm:block">
            <HorizontalLine width="w-full" color="bg-black" height="h-1"/>
            <div>
               {/* Spacing */}
               </div>
          </div>

       </div >

       {/* Skills  */}
       <div id="skills" className=" flex flex-col pl-10 sm:pl-20 justify-center  content-center pt-10 mb-5 w-[90%]">
          <p className="text-4xl mt-4 mb-2 text-center">
            My <strong className="font-bold">Skills</strong>
          </p>
          <MultiCarousel />

       </div>


       {/* My Experience  */}
       <div className=" flex flex-col  justify-center bg-black content-center pt-10 sm:pt-20 pb-10">
          <p className="text-4xl  text-white  mb-10 text-center">
              My <strong className="font-bold">Experience</strong>
          </p>
          {/* Comcast III */}
          <div className="border border-x-stone-400 rounded-lg  mb-5 ml-5 mr-5 sm:mb-10 sm:ml-10 sm:mr-10  ">
              <div className="grid grid-flow-col row-6  " >
                    {/* Company icon */}
                    <div className="pl-3 pt-5 flex flex-col sm:flex-row col-span-1  ">  
                      <div className="mt-5  ml-4">
                          <Image
                          src="/companies/comcast_logo.jpg"
                          width={20}
                          height={20}
                          alt="Picture of computer"
                        />
                      </div>

                      <div className="flex items-center  w-[34%] ">
                        <p className="text-lg pl-5 text-white mt-4 sm:mb-5 sm:text-center ">
                            <strong className="font-bold">Engineer II-III at Comcast</strong>
                        </p>
                      </div>

                    
                      

                      <div className="flex flex-row sm:justify-end col-span-2 w-[60%] ">
                        <p className="text-xs pl-5 sm:pl-10 text-stone-400 mt-4 mb-5 text-right">
                          <strong className="font-bold">Aug 2021 - Now</strong>
                        </p>
                      </div>

                    </div>
                  
              </div>

              <div className="pl-8 sm:mt-4 mb-1 p-4 sm:pl-10">
                <p className="text-sm  text-stone-400 ">  
                    At Comcast, I worked as a Backend Engineer III and previously as an Engineer II, focusing on big data, stream processing, and data analytics. 
                    As a Backend Engineer III (Aug 2021 - Mar 2024), I played a key role in the Data Integration Engine, leveraging Apache Flink to analyze millions of real-time records and detect internet outages. This system enabled proactive and reactive solutions, ensuring customers received assistance before needing to reach out. 
                  </p>

                  <Accordion   type="single" collapsible>
                    <AccordionItem className="border-black" value="item-1">
                      <AccordionTrigger className="text-black"> ...</AccordionTrigger>
                      <AccordionContent>
                          <p className="text-sm  text-stone-400  ">
                          Additionally, I developed the Menshen API using Spring Boot, which provided a recommendation layer and customer state records to downstream consumers. By integrating Redis, I collected real-time metrics such as packet loss and latency, offering a snapshot of a user's network state.  
                            <br /><br />  
                            Previously, as an Engineer II, I worked on Timeline, an Angular-based application that visualized customers' internet support history in an interactive UI, aiding in diagnostics. I also contributed to Elements UI, a React application designed for non-technical partners to ingest diverse data into our timeline system. Furthermore, I developed machine learning models in Databricks (Python) to generate customer solution recommendations. These models were processed by Apache Flink and delivered to end users, enhancing the support experience.  
                            <br /><br />  
                            Throughout my tenure, I worked on cutting-edge data processing, API development, and machine learning solutions to improve Comcast's customer experience and operational efficiency.  
                          </p>
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
              </div>

          </div>

          {/* IBC  */}
          <div className="border border-x-stone-400 rounded-lg  bg-zinc-700 mb-5 ml-5 mr-5 sm:mb-10 sm:ml-10 sm:mr-10 ">
              <div className="grid grid-flow-col row-6  " >
                    {/* Company icon */}
                    <div className="pl-3 pt-5 flex flex-col sm:flex-row col-span-1  ">  
                      <div className="mt-5  ml-4">
                          <Image
                            src="/companies/independence_blue_cross_logo.jpg"
                            width={20}
                            height={20}
                            alt="Picture of computer"
                          />
                      </div>

                      <div className="flex items-center  w-[34%] ">
                        <p className="text-lg pl-5 text-white mt-4 sm:mb-5 sm:text-center ">
                            <strong className="font-bold"> Engineer I -II Independence Blue Cross </strong>
                        </p>
                      </div>

                    
                      

                      <div className="flex flex-row sm:justify-end col-span-2 w-[60%] ">
                        <p className="text-xs pl-5 sm:pl-10 text-stone-400 mt-4 mb-5 text-right">
                          <strong className="font-bold">Sep 2015 – Aug 2021</strong>
                        </p>
                      </div>

                    </div>
                  
              </div>

              <div className="pl-8 sm:mt-4 mb-1 p-4 sm:pl-10">
                <p className="text-sm  text-stone-400 ">
                  During my six years at Independence Blue Cross (Sep 2015 – Aug 2021), I worked as a Mobile App & Web Developer, progressing from Developer I to II. As part of an agile team, I developed native mobile and desktop web applications that served thousands of health insurance customers. One of my key contributions was building the Provider Finder Tool, which allowed consumers to search for hospitals and doctors and save their preferred providers for future reference.
                </p>
                
                <Accordion   type="single" collapsible>
                    <AccordionItem className="border-zinc-700" value="item-1">
                      <AccordionTrigger  className="text-zinc-700"> ...</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-stone-400"> I also played a crucial role in developing the Softphone application using Angular and Spring Boot, which was used by hundreds of call center representatives to assist customers with their health insurance needs.  Additionally, I created various middleware Java services to interact with databases and external RESTful services, making it easier for developers to access member data and meet business requirements. Another major project I worked on was developing SPA applications, such as Softphone and PCP, which helped onboard millions of users in selecting their Primary Care Physician while enhancing tools for customer support agents. Throughout my time at Independence Blue Cross, I focused on building efficient, user-friendly applications that improved both customer experience and internal support operations.
                          <br /><br />
                          At Independence Blue Cross (Sep 2015 – Aug 2021), I worked as a Mobile App & Web Developer, progressing from Developer I to II. I contributed to agile teams, developing native mobile and desktop web applications for thousands of health insurance customers. My key projects included:
                          <br /><br />
                          <strong>Provider Finder Tool</strong> – Enabled consumers to search for hospitals and doctors, allowing them to save preferred providers.
                          <br />
                          <strong>Softphone Application</strong> – Built using Angular and Spring Boot, this app supported hundreds of call center representatives in assisting customers.
                          <br />
                          <strong>Middleware Services</strong> – Developed Java-based middleware to interact with databases and external RESTful services, facilitating streamlined member data access for business needs.
                          <br />
                          <strong>SPA Applications (Softphone & PCP)</strong> – Helped onboard millions of users in selecting their Primary Care Physician while enhancing customer support tools.
                          <br /><br />
                          My work played a crucial role in improving the digital experience for both customers and internal support teams.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
                
              </div>


          </div>
          
       </div>

       {/* About Me */}
       <div  id="about" className=" pl-5 pr-5 flex flex-col sm:pl-20 justify-center bg-white content-center sm:pt-10 pb-10 ">
          <p className="text-4xl  text-black mt-4 mb-10 text-center">
              About <strong className="font-bold">Me</strong>
          </p>

          <div className="flex flex-col  sm:flex-row">

            <div className=" rounded-lg mx-auto sm:w-[30%] md:mx-0 md:ml-0">
              <Image
                  src="/profile_pic/akira_profile.jpg"
                  width={500}
                  height={400}
                  alt="Picture of me"
                />           
            </div>
          <div className=" pt-10 sm:pt-0 text-md  md:pl-10 text-stone-700 sm:w-[50%]">
              <p>
                Hey there! My name is Muneeb Haq, and I have been programming professionally since August of 2015. I got my start in the world of computer science at a very young age. It began with me tinkering around with Warcraft III custom maps, which eventually turned into an effort to learn how to make my own video games. This led me to computer science, and it has been a deeply gratifying journey ever since.
              </p>
              <br />
              <p className="text-md  text-stone-700">
                While my origins were rooted in a desire to get into game development, my true passion for creation and learning has allowed me to experience many different facets of this field. I started my career as a UI developer making healthcare websites used by millions. Over time, I transitioned into a variety of different roles, ranging from middleware service development and DevOps infrastructure to big data real-time analytics and processing.
              </p>
              <Accordion   type="single" collapsible>
                    <AccordionItem className="border-white" value="item-1">
                      <AccordionTrigger  className=" "> ...</AccordionTrigger>
                      <AccordionContent>
                          
                          <p className="text-md  text-stone-700">
                            I still hold that original flame deep in my heart for game development and 3D graphics programming, albeit not in a professional capacity. Many of my side projects and passions revolve around creating games and 3D experiences in WebGL, for example. However, I try not to limit myself to just 3D applications and always seek to explore new languages and paradigms.
                          </p>  
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
          </div>

       </div>

         {/* My Projects  */}
        <div id="projects" className=" p-0 flex flex-col sm:pl-20 justify-center bg-black content-center pt-10">
          <p className="text-4xl  text-white mt-4 sm:mb-10 text-center">
              My <strong className="font-bold">Projects</strong>
          </p>

          <div className="flex w-full">
            <ProjectsCarousel/>
          </div>

        </div>

       {/* My Testimonials  */}
       <div className="sm:pl-20 justify-center bg-white content-center pt-10 mb-20">
            <p className="text-4xl  text-black mt-4 mb-20 text-center">
                My <strong className="font-bold">Testimonials</strong>
            </p>

        <div className=" grid sm:grid-flow-col justify-center items-center  gap-10">


        <div className="flex w-full justify-center content-center drop-shadow-lg">
              <Card className=" bg-white border-white ">
                  <CardContent className="grid grid-flow-col  ">
                        <div className="p-10 max-w-80 content-center justify-center">
                            <Image
                              src="/testimonials/TestimonialsC.png"
                              width={120}
                              height={120}
                              alt="Picture of computer"
                              className="mx-auto"
                            />
                            <div className="">
                                <p className="text-md  text-gray-600 pt-7 text-center">
                                  A great joy to work with. Can always count on to review my PRS!
                                </p> 

                            </div>
                            <div className="pt-6 flex justify-center">
                                  <HorizontalLine width="w-1/2" color="bg-white" height="h-0.5" />
                            </div>

                            <div className="">
                                <p className="text-2xl  text-gray-600 pt-7 text-center">
                                  <strong> Emma Patel </strong>
                                </p> 

                                <div className="">

                                <p className="text-xl  text-slate-600 pt-7 text-center">
                                  <strong> Engineer</strong>
                                  </p> 
                                </div>
                            </div> 
                        </div>
                  </CardContent>           
              </Card>
          </div>
           
          <div className="flex w-full justify-center content-center drop-shadow-lg">
              <Card className=" bg-black border-black ">
                  <CardContent className="grid grid-flow-col  ">
                        <div className="p-10 max-w-80 content-center justify-center">
                            <Image
                              src="/testimonials/TestimonialsA.png"
                              width={120}
                              height={120}
                              alt="Picture of computer"
                              className="mx-auto"
                            />
                            <div className="">
                                <p className="text-md  text-white pt-7 text-center">
                                  A reliable engineer who can always be counted on in toughest of times and in deepest of crunches.
                                </p> 

                            </div>
                            <div className="pt-6 flex justify-center">
                                  <HorizontalLine width="w-1/2" color="bg-white" height="h-0.5" />
                            </div>

                            <div className="">
                                <p className="text-2xl  text-white pt-7 text-center">
                                  <strong> Nathan Carter</strong>
                                </p> 

                                <div className="">

                                <p className="text-xl  text-white pt-7 text-center">
                                  <strong> Director</strong>
                                  </p> 
                                </div>
                            </div> 
                        </div>
                  </CardContent>           
              </Card>
          </div>

          <div className="flex w-full justify-center content-center drop-shadow-lg">
              <Card className=" bg-white border-white ">
                  <CardContent className="grid grid-flow-col  ">
                        <div className="p-10 max-w-80 content-center justify-center">
                            <Image
                              src="/testimonials/TestimonialsB.png"
                              width={120}
                              height={120}
                              alt="Picture of computer"
                              className="mx-auto"
                            />
                            <div className="">
                                <p className="text-md  text-gray-600 pt-7 text-center">
                                  Delivers designs to exact detail as per Figma sheets, always threw feedback back and forth  with any discrepancies. 
                                </p> 

                            </div>
                            <div className="pt-6 flex justify-center">
                                  <HorizontalLine width="w-1/2" color="bg-black" height="h-0.5" />
                            </div>

                            <div className="">
                                <p className="text-2xl  text-gray-600 pt-7 text-center">
                                  <strong> Sophia Reynolds</strong>
                                </p> 

                                <div className="">

                                <p className="text-xl  text-slate-600 pt-7 text-center">
                                  <strong> UX Designer</strong>
                                  </p> 
                                </div>
                            </div> 
                        </div>
                  </CardContent>           
              </Card>
          </div>
           
        </div>

       </div>

        {/* Contact Me  */}
        <div  id="contact"  className="pl-2 sm:pl-20 flex justify-center content-center  bg-white  pt-10 mb-20">
              <div className=" grid sm:grid-flow-col gap-10 sm:gap-20 w-full justify-center ">
                  <div className="max-w-96">
                    <EmailSocials/>
                  </div>

                  <div className="max-w-7xl">
                      <div className="text-4xl">
                          <span className="block"><strong>Let's </strong><span style={{
                                  fontWeight: 800, // Extra bold
                                  color: 'white',  // Text color
                                  textShadow: '-1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black, 1px 1px 0px black'
                              }}>
                                  talk
                              </span> </span>
                          <span className="block"> <strong className="uppercase">Get in Touch!</strong></span>
                      </div>
                      <div className="flex ">
                        <p className="max-w-xs sm:max-w-7xl text-sm text-gray-500 pt-7 ">
                          I seek to push the limits of creativity and hope to do it in a fun and highly professional way. You won’t regret this working opportunity!
                        </p> 
                      </div>
                      

                      <div className="" >
                        <p className="text-sm  text-slate-500 pt-7 ">
                            <strong className="uppercase">muh5329@gmail.com</strong>
                            <span className="block">
                                <strong className="uppercase">1-800-nott-real</strong> 
                            </span>
                        </p> 
                      </div>

                      
                  </div>

                  

              </div>
    
        </div>
       
       
        {/* Footer */}
        <div className="flex flex-row sm:items-center justify-between bg-black pb-10 pt-10 px-10 sm:px-20">
          {/* Left Section */}
          <div className="flex items-center">
            <Image
              src="/profile_pic/top.jpg"
              width={30}
              height={5}
              alt="Picture of computer"
            />
            <div className="pl-4 font-bold text-white pt-1">Muneeb's Profile</div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col">
              <p className="text-xs  text-white">
                @2025-2025 Muneeb's Profile
              </p>
              <p className="text-xs  text-white">
                Made in Next
              </p>               
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
