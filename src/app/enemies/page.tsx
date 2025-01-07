import card from "../page.module.scss";

const EnemiesPage = () => {
  return (
    <main>
      <section id={card.cardContainer}>
        <div id={card.card}>
          <div id={card.headline}>Alien Scum</div>
          <div id={card.imagecon}></div>
          <div id={card.content}>Ninja Killer don't touch him</div>
        </div>
      </section>
    </main>
  );
};
export default EnemiesPage;
