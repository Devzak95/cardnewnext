"use client";

import Image from "next/image";
import card from "../page.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useSearchParams } from "next/navigation";
import { EnemiesArray } from "@/types/type";

const EnemiesPage = () => {
  const data: EnemiesArray = [
    {
      name: "Alien Scum",
      img: "/assets/black-alien-scum.png",
      text: "Ninja Killer dont touch him",
    },

    {
      name: "Death Smokie",
      img: "/assets/death-smokie.png",
      text: "Black Scum is a Ninja Killer",
    },

    {
      name: "Ping Pang",
      img: "/assets/angry-ping.png",
      text: "Just som penguin Shit",
    },
  ];

  const searchParams = useSearchParams();
  const query = searchParams.get("id");

  const dataID = query as string;
  const id = parseInt(dataID);
  // console.log(id);
  //! man kan også gøre på den her måde
  /*
  const searchParams = useSearchParams();
  const query = searchParams.get("id");
  const id = Number(query)
  */

  const refObj = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(refObj.current, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        gsap.to(refObj.current, {
          duration: 0.05,
          alpha: 1,
          scaleX: 1,
        });
      },
    });
  }, [id]);

  return (
    <main>
      <section ref={refObj} id={card.cardContainer}>
        <div id={card.card}>
          <div id={card.headline}>{data[id].name}</div>
          <div id={card.imagecon}>
            {/* på Image tag kan man pu fill for at billedet fylder den container den ligger i */}
            <Image src={data[id].img} alt="picture" width={250} height={250} />
          </div>
          <div id={card.content}>{data[id].text}</div>
        </div>
      </section>
    </main>
  );
};
export default EnemiesPage;
