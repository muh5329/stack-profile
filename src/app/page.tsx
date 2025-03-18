import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from 'next/image'

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col justify-top bg-gradient-to-b from-[#e1e1e1] to-[#c9c9cf] text-black">
        <div className="grid row-5 grid-flow-col  pt-5 ">
            <div className=" flex  pl-5">
                <Image
                  src="/header/computer.jpg"
                  width={50}
                  height={50}
                  alt="Picture of computer"
                />
            </div>
            <div className="flex flex-row justify-center"> About me </div>
            <div className="flex flex-row justify-center"> Skills </div>
            <div className="flex flex-row justify-center"> Projects</div>
            <div className="flex flex-row justify-center"> Socials</div>

            <div className="flex flex-row justify-end pr-10"> Resume </div>
        </div>

        <div className="flex text-large">
          Hi i am
        </div>
      </main>
    </HydrateClient>
  );
}
