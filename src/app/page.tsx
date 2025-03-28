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
          {/* Comcast III */}
          <div className="border border-x-stone-400 rounded-lg  m-10 ">
              <div className="grid grid-flow-col row-6  " >
                    {/* Company icon */}
                    <div className="pl-3 pt-5 flex flex-row col-span-1  ">  
                      <div className="mt-5  ml-4">
                          <Image
                          src="/companies/comcast_logo.jpg"
                          width={20}
                          height={20}
                          alt="Picture of computer"
                        />
                      </div>

                      <div className="flex items-center  w-[34%] ">
                        <p className="text-lg pl-5 text-white mt-4 mb-5 text-center ">
                            <strong className="font-bold">Engineer II-III at Comcast</strong>
                        </p>
                      </div>

                    
                      

                      <div className="flex flex-row justify-end col-span-2 w-[60%] ">
                        <p className="text-xs pl-10 text-stone-400 mt-4 mb-5 text-right">
                          <strong className="font-bold">Aug 2021 - Now</strong>
                        </p>
                      </div>

                    </div>
                  
              </div>

              <div className="">
                <p className="text-xs pl-10 text-stone-400 mt-4 mb-5 p-4">  
                    At Comcast, I worked as a Backend Engineer III and previously as an Engineer II, focusing on big data, stream processing, and data analytics.  
                    <br /><br />  
                    As a Backend Engineer III (Aug 2021 - Mar 2024), I played a key role in the Data Integration Engine, leveraging Apache Flink to analyze millions of real-time records and detect internet outages. This system enabled proactive and reactive solutions, ensuring customers received assistance before needing to reach out. Additionally, I developed the Menshen API using Spring Boot, which provided a recommendation layer and customer state records to downstream consumers. By integrating Redis, I collected real-time metrics such as packet loss and latency, offering a snapshot of a user's network state.  
                    <br /><br />  
                    Previously, as an Engineer II, I worked on Timeline, an Angular-based application that visualized customers' internet support history in an interactive UI, aiding in diagnostics. I also contributed to Elements UI, a React application designed for non-technical partners to ingest diverse data into our timeline system. Furthermore, I developed machine learning models in Databricks (Python) to generate customer solution recommendations. These models were processed by Apache Flink and delivered to end users, enhancing the support experience.  
                    <br /><br />  
                    Throughout my tenure, I worked on cutting-edge data processing, API development, and machine learning solutions to improve Comcast's customer experience and operational efficiency.  
                  </p>
                
              </div>

          </div>

          {/* IBC  */}
          <div className="border border-x-stone-400 rounded-lg  bg-zinc-700 m-10 ">
              <div className="grid grid-flow-col row-6  " >
                    {/* Company icon */}
                    <div className="pl-3 pt-5 flex flex-row col-span-1  ">  
                      <div className="mt-5  ml-4">
                          <Image
                          src="/companies/independence_blue_cross_logo.jpg"
                          width={20}
                          height={20}
                          alt="Picture of computer"
                        />
                      </div>

                      <div className="flex items-center  w-[34%] ">
                        <p className="text-lg pl-5 text-white mt-4 mb-5 text-center ">
                            <strong className="font-bold"> Engineer I -II Independence Blue Cross </strong>
                        </p>
                      </div>

                    
                      

                      <div className="flex flex-row justify-end col-span-2 w-[60%] ">
                        <p className="text-xs pl-10 text-stone-400 mt-4 mb-5 text-right">
                          <strong className="font-bold">Sep 2015 – Aug 2021</strong>
                        </p>
                      </div>

                    </div>
                  
              </div>

              <div className="">
                <p className="text-xs pl-10 text-stone-400 mt-4 mb-5 p-4">
                  During my six years at Independence Blue Cross (Sep 2015 – Aug 2021), I worked as a Mobile App & Web Developer, progressing from Developer I to II. As part of an agile team, I developed native mobile and desktop web applications that served thousands of health insurance customers. One of my key contributions was building the Provider Finder Tool, which allowed consumers to search for hospitals and doctors and save their preferred providers for future reference. I also played a crucial role in developing the Softphone application using Angular and Spring Boot, which was used by hundreds of call center representatives to assist customers with their health insurance needs. Additionally, I created various middleware Java services to interact with databases and external RESTful services, making it easier for developers to access member data and meet business requirements. Another major project I worked on was developing SPA applications, such as Softphone and PCP, which helped onboard millions of users in selecting their Primary Care Physician while enhancing tools for customer support agents. Throughout my time at Independence Blue Cross, I focused on building efficient, user-friendly applications that improved both customer experience and internal support operations.
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
              </div>


          </div>
          
       </div>

       {/* About Me */}
       <div className=" flex flex-col pl-20 justify-center bg-white content-center pt-20">
          <p className="text-4xl  text-black mt-4 mb-10 text-center">
              About <strong className="font-bold">Me</strong>
          </p>

          <div className="flex">

            <div className=" border border-x-stone-400 rounded-lg  m-10 w-[30%]">
              <Image
                  src="/profile_pic/akira_profile.jpg"
                  width={500}
                  height={400}
                  alt="Picture of me"
                />           
            </div>
            <div className=" border border-x-stone-400 rounded-lg  w-[50%]">
                        
            </div>
          </div>
         



       </div>

       


      </main>
    </HydrateClient>
  );
}
