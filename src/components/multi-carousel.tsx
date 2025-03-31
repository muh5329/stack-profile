import * as React from "react"

import { Card, CardContent } from "~/components/ui/card"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"

const model = [
    {
        icon: "/skills/icons8-angular-bold/icons8-angular-48.png",
        text: "Angular",
    },
    {
        icon: "/skills/icons8-nodejs-windows-10/icons8-nodejs-96.png",
        text: "Node.js"
    },
    {
        icon: "/skills/icons8-apache-kafka-gradient/icons8-apache-kafka-96.png",
        text: "Kafka"
    },
    {
        icon: "/skills/icons8-nut-ios-17-outlined/icons8-nut-100.png",
        text: "Flink"
    },
    {
        icon: "/skills/icons8-aws-material-outlined/icons8-aws-48.png",
        text: "AWS"
    },
    {
        icon: "/skills/icons8-php-ios-17-outlined/icons8-php-100.png",
        text: "PHP"
    },
    {
        icon: "/skills/icons8-c-plus-plus-ios-17-outlined/icons8-c-plus-plus-50.png",
        text: "C++"
    },
    {
        icon: "/skills/icons8-placeholder-thumbnail-xml-ios-17-outlined/icons8-placeholder-thumbnail-xml-50.png",
        text: "XML"
    },
    {
        icon: "/skills/icons8-c-programming-color/icons8-c-programming-96.png",
        text: "C "
    },
    {
        icon: "/skills/icons8-py-ios-17-filled/icons8-py-50.png",
        text: "Python"
    },
    // {
    //     icon: "/skills/icons8-c-sharp-logo-ios-17-outlined/icons8-c-sharp-logo-50.png",
    //     text: "C#"
    // },
    {
        icon: "/skills/icons8-python-ios-17-outlined/icons8-python-50.png",
        text: "Python"
    },
    {
        icon: "/skills/icons8-css3-ios-17-outlined/icons8-css3-50.png",
        text: "CSS3"
    },
    {
        icon: "/skills/icons8-raspberry-pi-ios-17-outlined/icons8-raspberry-pi-50.png",
        text: "Rs-Pi"
    },
    {
        icon: "/skills/icons8-database-export-ios-17-outlined/icons8-database-export-50.png",
        text: "Database "
    },
    {
        icon: "/skills/icons8-react-bold/icons8-react-48.png",
        text: "React"
    },
    // {
    //     icon: "/skills/icons8-flutter-ios-17-filled/icons8-flutter-50.png",
    //     text: "Flutter"
    // },
    // {
    //     icon: "/skills/icons8-ruby-programming-language-papercut/icons8-ruby-programming-language-60.png",
    //     text: "Ruby"
    // },
    {
        icon: "/skills/icons8-golang-ios-17-outlined/icons8-golang-50.png",
        text: "Go"
    },
    {
        icon: "/skills/icons8-rust-programming-language-color/icons8-rust-programming-language-48.png",
        text: "Rust"
    },
    {
        icon: "/skills/icons8-graphql-ios-17-filled/icons8-graphql-50.png",
        text: "GraphQL"
    },
    {
        icon: "/skills/icons8-sass-ios-17-filled/icons8-sass-50.png",
        text: "Sass"
    },
    // {
    //     icon: "/skills/icons8-haskell-ios-17-outlined/icons8-haskell-50.png",
    //     text: "Haskell"
    // },
    {
        icon: "/skills/icons8-sql-ios-17-outlined/icons8-sql-50.png",
        text: "SQL"
    },
    {
        icon: "/skills/icons8-sqlite-ios-17-outlined/icons8-sqlite-50.png",
        text: "SQLite"
    },
    {
        icon: "/skills/icons8-java-file-ios-17-filled/icons8-java-file-50.png",
        text: "Java"
    },
    {
        icon: "/skills/icons8-java-ios-17-outlined/icons8-java-50.png",
        text: "Java"
    },
    {
        icon: "/skills/icons8-javascript-logo-ios-17-outlined/icons8-javascript-logo-50.png",
        text: "JavaScript"
    },
    {
        icon: "/skills/icons8-js-ios-17-outlined/icons8-js-50.png",
        text: "JS"
    },
    // {
    //     icon: "/skills/icons8-kotlin-ios-17-outlined/icons8-kotlin-50.png",
    //     text: "Kotlin"
    // },
    {
        icon: "/skills/icons8-kubernetes-ios-17-outlined/icons8-kubernetes-50.png",
        text: "Kubernetes"
    },
    // {
    //     icon: "/skills/icons8-lua-language-ios-17-filled/icons8-lua-language-50.png",
    //     text: "Lua"
    // },
    {
        icon: "/skills/icons8-swift-ios-17-filled/icons8-swift-50.png",
        text: "Swift"
    },
    {
        icon: "/skills/icons8-terraform-ios-17-filled/icons8-terraform-50.png",
        text: "Terraform"
    },
    {
        icon: "/skills/icons8-tomcat-color/icons8-tomcat-48.png",
        text: "Tomcat"
    },
    {
        icon: "/skills/icons8-typescript-ios-17-filled/icons8-typescript-50.png",
        text: "TypeScript"
    },
    {
        icon: "/skills/icons8-visual-studio-code-2019-color/icons8-visual-studio-code-2019-48.png",
        text: "VSCode"
    }
];





export function MultiCarousel() {
  return (
    <Carousel className="w-full  ">
      <CarouselContent className="-ml-1 max-w-6xl">
      {model.map((item, index) => {
        // Skip every other item, increment by 2
        if (index % 2 === 0) {
            // Access the next item in the array
            const nextItem = model[index + 1];

            return (
            <CarouselItem key={index} className="pl-1 md:basis-1/5 basis-1/5 p-7">
                <div className="p-1">
                {/* First card (current item) */}
                <Card className="mt-5 p-2 rounded-none border-zinc-950">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col items-center">
                        <Image
                        src={item.icon}
                        width={50}
                        height={5}
                        alt="Picture of computer"
                        />
                        <div className="pt-5">
                        <span className="text-md font-semibold">{item.text}</span>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Second card, referencing the next item */}
                {nextItem && (
                    <Card className="mt-5 p-2 rounded-none border-zinc-950">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div className="flex flex-col items-center">
                        <Image
                            src={nextItem.icon} // Next item's icon
                            width={50}
                            height={5}
                            alt="Picture of computer"
                        />
                        <div className="pt-5">
                            <span className="text-md font-semibold">{nextItem.text}</span>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                )}
                </div>
            </CarouselItem>
            );
        }
        return null; // Skip the current item if it's not being rendered
        })}
      </CarouselContent>
      
    </Carousel>
  )
}
