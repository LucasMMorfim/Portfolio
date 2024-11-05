import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Olá, eu sou<br /> <span className="text-red-500">Lucas Morfim</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Sou um desenvolvedor web júnior com experiência em criação de interfaces funcionais e responsivas. Apaixonado por transformar ideias em soluções digitais.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-red-500 text-base hover:bg-red-500 hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
