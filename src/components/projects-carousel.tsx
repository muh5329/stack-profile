import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Image from 'next/image'
import { Button } from "./ui/button"
import {SquareArrowOutUpRight} from "lucide-react"
import { Description } from "@radix-ui/react-toast"
import { HorizontalLine } from "./line"

const model = [
  {
    image: "/projects/dcp.jpg",
    title: "DigitalPaperControlPlane",
    description:"Sony Digital Paper control plane . Turns a Sony Digital Paper device into a passive art display/ information display device.",
    link: "https://github.com/muh5329/DigitalPaperControlPlane"
  },{
    image: "/projects/fuzzy_plan.jpg",
    title: "FuzzyPlanets",
    description:"The Website/Engine will include a centered Text Prompt, with a default planet at the center. At the left hand side will be displayed the currently typed out chosen characteristics that can be selected and deleted. The center of the screen is the chosen planet. The text prompts will transform and modify the planet  such as \"rocky\" as the user adds to the prompts. ",
    link: "https://github.com/muh5329/FuzzyPlanets"
  },{
    image: "/projects/m_factory.jpg",
    title: "Monkey Factory",
    description:"A portfolio website that acts as a resume and a showcase of all the fun projects that i have been working on.",
    link: "https://github.com/muh5329/Monkey-Factory"
  },{
    image: "/projects/wave_fnc.jpg",
    title: "Wave Collapse Algorithm Editor",
    description:"An attempt at a Wave Collapse Function + editor for manual edge to edge connection mapping.\nWhat is a Wave Collapse Function ?\nInspired by mxgmx original wave function collapse algorithm for bitmap random generation, where given a sample image , a randomly generated image that loosely resembles the source image is generated",
    link: "https://github.com/muh5329/WaveCollapseEditor"
  },{
    image: "/projects/space_prf.jpg",
    title: "SpacePortfolio",
    description:"A fun Space themed Portfolio site",
    link: "https://github.com/muh5329/SpacePortfolio"
  },
  {
    image: "/projects/web_serv.jpg",
    title: "DebianWebServer",
    description:"Debian web server utilities and program",
    link: "https://github.com/muh5329/DebianWebServer/tree/main"
  }
]

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1 flex w-[93%] bg-black h-[1600px] ">
        {model.map((item, index) => (
          <CarouselItem key={index} className="pt-1 basis-1/3  md:basis-1/3 ">
            <div className="sm:p-1">
              <Card className=" bg-black border-black">
                <CardContent className="grid sm:grid-flow-col ">



                    {index % 2 === 0 ? (
                      <div className=" pt-5 sm:p-10 flex sm:justify-end">
                        <div className="w-[343px] h-[397px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-lg relative">
                            <Image
                                src={item.image}
                                layout="fill"
                                objectFit="cover"
                                alt="Picture"
                            />
                        </div>
                    </div>
                    
                    ) : null}

                    <div className="flex flex-col ml-5">
                        <p className="text-3xl  text-white mt-5 sm:mt-10   ">
                             <strong className="font-bold">{index < 9 ? `0${index + 1}` : index + 1}</strong>
                        </p>

                        <p className="text-xl  text-white mt-3  mb-4 ">
                             <strong className="font-bold">{item.title}</strong>
                        </p>

                        <div className="  text-stone-700 ">
                          <p>
                              {item.description}
                          </p>
                          <br />
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button className=" p-0 bg-black">
                                <SquareArrowOutUpRight /> 
                            </Button>
                          </a>
                        
                        </div>

                    </div>

                    {index % 2 !== 0 ? (
                        <div className="pt-5 sm:p-10  flex sm:justify-start">
                            <div className="w-[343px] h-[397px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-lg relative">
                                <Image
                                    src={item.image}
                                    layout="fill"
                                    objectFit="cover"
                                    alt="Picture"
                                />
                            </div>
                        </div>
                   
                    ) : null}
                  <div  className="block pt-3 sm:hidden sm:pt-3">
                    <HorizontalLine width="w-full" color="bg-stone-950" height="h-1" />
                  </div>
                  
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
