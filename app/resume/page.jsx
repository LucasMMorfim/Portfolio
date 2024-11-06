"use client";

import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
 } from "react-icons/fa";

 import { 
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript
 } from "react-icons/si";

 import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs';
 import { ScrollArea, } from '@/components/ui/scroll-area';
 import { motion } from 'framer-motion';

 import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from '@/components/ui/tooltip';


 const about = {
  title: "Sobre mim",
  
 
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Lucas Morfim",
    },
    {
      fieldName: "Telefone",
      fieldValue: "+55 (048) 99634-8279",
    },
    {
      fieldName: "Idade",
      fieldValue: "22",
    },
    {
      fieldName: "Email",
      fieldValue: "lucas.morfim@hotmail.com",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Portugues, Inglês",
    },
  ]

};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Minhas experiências',
  description: 'Tenho experiência no mercado de trabalho desde os 20 anos, passando por diversas funções, entre as quais se destacam:',
  items: [
    {
      company: 'Mais Terapias/BeMulti',
      position: 'Suporte de TI',
      duration: '2022 - Atual',
      description: 'No Mais Terapias foi realmente onde começei meu primeiro serviço como dev, onde eu realmente coloquei a mão na massa e tive muito aprendizado, lá eu trabalhava com Front-End e Back-End usando Node, Next, Tailwind, Typescript e muito mais.',
    },
    {
      company: 'Softplan',
      position: 'Suporte de TI',
      duration: '2022 - 2023',
      description: 'Além de realizar atendimento ao cliente, também trabalhava com o uso de banco de dados e auxiliava os usuários na utilização do sistema.',
    },
    {
      company: 'ADM Sistemas',
      position: 'Suporte de TI',
      duration: '2022 - 2023',
      description: 'Meu segundo emprego aprendi diversas coisas, como por exemplo usar o banco de dados SQL e estudei bastante sobre desenvolvimento.',
    },
    {
      company: 'Cris Morfim Laçarotes',
      position: 'Web Design',
      duration: '2020 - 2022',
      description: 'Meu primeiro contato com o mercado de trabalho foi na loja da minha mãe, onde eu produzia conteúdo para as redes sociais e também realizava atendimento ao público.',
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Minha formação',
  description: 'Desde sempre, sou movido por uma intensa paixão pelo conhecimento. Tive a oportunidade de participar de projetos desafiadores, onde apliquei meus conhecimentos em situações práticas e desenvolvi habilidades na área de desenvolvimento. Estou sempre em busca de novas oportunidades para expandir meu aprendizado, especialmente nessa área a qual me fascina.',
  items: [
    {
      institution: 'Cursos e conhecimentos',
      degree: 'Cursos particulates',
      duration: '2024 - atual',
      description: 'Eu não paro! Procuro sempre fazer novos cursos para melhorar meu conhecimento, tais como na udemy, Alura, DIO e até mesmo no youtube, sempre fazendo aulas de particulares de Inglês pois considero muito importante na carrera que sigo.',
    },
    {
      institution: 'Faculdade Estacio de Sá',
      degree: 'Pós Graduação',
      duration: '2023 - 2024',
      description: 'Minha pós foi em desenvolvimento Full Stack, onde aprendi muito mais sobre banco de dados, api, comunicações e varias linguagem, foi onde meu conhecimento chegou a outro patamar',
    },
    {
      institution: 'Faculdade Estacio de Sá',
      degree: 'Graduação em ADS',
      duration: '2021 - 2023',
      description: 'Minha primeira faculdade, no curso de Analise e desenvolvimento de sistemas aprendi muitas coisas e foi onde começei a me interessar cada vez mais na área',
    },
    {
      institution: 'Microcamp',
      degree: 'Inglês',
      duration: '2019 - 2020',
      description: 'Logo após o curso de informática já começei o de inglês, ja tinha um certo conhecimento na lingua, porem queria aperfeiçoar ainda mais',
    },
    {
      institution: 'Microcamp',
      degree: 'Informática avançada',
      duration: '2018 - 2019',
      description: 'Foi onde começei a me interessar pelo mundo digital e começei meus primeiros contatos com a programação e informatica no geral.',
    },
    {
      institution: 'Colégio Elisa Andreoli',
      degree: 'Fundamental e médio',
      duration: '2008-2019',
      description: 'Foi minha primeira e única escola que frequentei',
    },
  ]
};

const skills = {
  title: 'Minhas Skills',
  description: 'Essas são as tecnologias nas quais tenho investido meu tempo e esforço para me aprimorar nos últimos anos, buscando constantemente atualizar minhas habilidades e conhecimentos.',
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },    {
      icon: <SiTypescript />,
      name: 'Javascript',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-96 py-3 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                        >
                          <span className="text-red-500">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-8 text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <div>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-92 py-3 px-10 rounded-xl flex flex-col lg:items-start gap-1"
                      >
                        <span className="text-red-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-8 text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                        <div>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </ScrollArea>
            </div>
            </TabsContent>
            
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pb-12">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-red-500 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                <p>
                  - Olá, sou Lucas, tenho 22 anos, sou de Biguaçu, Santa Catarina. Como uma pessoa com deficiência (PCD), minha jornada no mundo da tecnologia tem sido incrível, e estou sempre em busca de aprendizado e crescimento.`
                </p><br/>
                <p>
                  - Estou aprimorando minhas habilidades em tecnologias como Node.js, React, Next.js, Tailwind CSS, REST APIs e gerenciamento de bancos de dados. Usando-as para criar soluções inovadoras e fáceis de usar.
                </p><br/>
                <p>
                  - Possuo inglês avançado, o que me permite participar ativamente de reuniões e me envolver em um ambiente internacional.
                </p><br/>
                <p>
                  - Estou buscando oportunidades desafiadoras para aplicar e expandir meu conhecimento, contribuindo significativamente para projetos que impactam positivamente a sociedade. Se você está procurando um desenvolvedor apaixonado e dedicado, estou pronto para fazer a diferença!
                </p><br/>
                <p>
                  - Sempre aberto a novas oportunidades e colaborações. Vamos construir algo incrível juntos!
                </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 pb-12">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume;