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
  title: "About me",
  description: 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!",
 
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lucas Morfim",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 (048) 99634-8279",
    },
    {
      fieldName: "Age",
      fieldValue: "22",
    },
    {
      fieldName: "Email",
      fieldValue: "lucas.morfim@hotmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },
    {
      fieldName: "Languages",
      fieldValue: "Portuguese, English",
    },
  ]

};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
  items: [
    {
      company: 'Company A',
      position: 'Senior Developer',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
    {
      company: 'Company A',
      position: 'Senior Developer',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
  ]
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
  items: [
    {
      institution: 'Institution A',
      degree: 'degree A',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
    {
      institution: 'Institution B',
      degree: 'degree B',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
    {
      institution: 'Institution C',
      degree: 'degree C',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
    {
      institution: 'Institution C',
      degree: 'degree C',
      duration: '2021 - Present',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
    },
  ]
};

const skills = {
  title: 'My skills',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Odio temporibus recusandae laboriosam voluptate et! Eius, tempora quidem!',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
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
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
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
                            <ScrollArea className="h-10 text-sm scroll-red-500">
                              <p>{item.description}</p>
                            </ScrollArea>
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
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center lg:items-start gap-1"
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
                          <ScrollArea className="h-10 text-sm scroll-red-500">
                            <p>{item.description}</p>
                          </ScrollArea>
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
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
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