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
export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full "
    >
      <CarouselContent className="-mt-1 flex w-[93%] bg-black h-[1600] ">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1  md:basis-1/3 ">
            <div className="p-1">
              <Card className=" bg-black border-black">
                <CardContent className="grid grid-flow-col ">



                    {index % 2 === 0 ? (
                        <div className="p-10">
                            <Image
                                src="/profile_pic/akira_profile.jpg"
                                width={300}
                                height={200}
                                alt="Picture of me"
                            />  
                        </div>
                    ) : null}

                    <div className="flex flex-col ml-5">
                        <p className="text-3xl  text-white mt-10   ">
                             <strong className="font-bold">{index < 9 ? `0${index + 1}` : index + 1}</strong>
                        </p>

                        <p className="text-xl  text-white mt-3  mb-4 ">
                             <strong className="font-bold">Crypto Screener Application</strong>
                        </p>

                        <div className="  text-stone-700 w-[90%]">
                        <p>
                            Hey there! My name is Muneeb Haq, and I have been programming professionally since August of 2015. I got my start in the world of computer science at a very young age. It began with me tinkering around with Warcraft III custom maps, which eventually turned into an effort to learn how to make my own video games. This led me to computer science, and it has been a deeply gratifying journey ever since.
                        </p>
                        <br />
                        
                         <Button className=" p-0 bg-black">
                            <SquareArrowOutUpRight /> 
                        </Button>
                        </div>

                    </div>

                    {index % 2 !== 0 ? (
                        <div className="p-10">
                            <Image
                                src="/profile_pic/akira_profile.jpg"
                                width={300}
                                height={200}
                                alt="Picture of me"
                            />  
                        </div>
                    ) : null}

                    
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
