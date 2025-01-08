import cardstyle from "./page.module.scss";

export default function Home() {
  return (
    // <div>
    //   <Link
    //     href={{
    //       pathname: "/moreinfo",
    //       query: { id: 1 },
    //     }}
    //   >
    //     More info
    //   </Link>
    // </div>
    <main>
      <section id={cardstyle.cardContainer}>
        <div id={cardstyle.card}></div>
      </section>
    </main>
  );
}
