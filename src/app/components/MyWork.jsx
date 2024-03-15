"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";


import Image from "next/image";

const MyWork = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  return (
    <div id="my-work" className="max-h-screen h-screen">
      <h1 className="flex justify-center macondo-regular text-white text-5xl py-10 lowercase underline">
        My Experience
      </h1>
      <div className="lg:mx-48">
        <Accordion
          selectionMode="multiple"
          variant="light"
          className="p-5"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <AccordionItem
            key="1"
            aria-label="The Feather n' Knife"
            title="The Feather n' Knife"
            subtitle="Graphic Designer (07/2022 - Present)"
          >
            Developed numerous marketing programs (logos, brochures, news paper
            ads, infographics, presentations, & advertisements) and guaranteed
            that they exceeded the expectations of our clients. Managed up to 7
            projects or tasks at a given time while under pressure to meet
            weekly deadlines. Recommended and consulted with clients on the most
            appropriate graphic design options based on their overall marketing
            goals. Designed UI of landing page for real estate client.
            Collabreated with team to increase the engagement & followers on
            social media by 20%. Created buyer persona s& strategies while
            analyzing competitors for different niche brands
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Social Ninja"
            title="Social Ninja"
            subtitle="Graphic Designer (10/2021 - 03/2022)"
          >
            Created designs, concepts, and sample layouts, based on knowledge of
            layout and esthetic design concepts. Developed graphics for product
            illustrations, logos and website assets. Collaborated with Marketing
            and social media teams to design graphics, boosting social
            engagement by 30%
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Webnationz Technologies" subtitle="Graphic Designer (11/2020 - 02/2021)">
            Created designs, concepts, and sample layouts, based on knowledge of
            layout and esthetic design concepts. Collaborated with teams to meet
            timelines and requirements of clients
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default MyWork;
