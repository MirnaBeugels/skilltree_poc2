import { useMemo } from "react";
import styles from "./page.module.css";

// Het aantal leeruitkomsten (kaarten) dat we willen weergeven
var outcomes = 7;

export default function Home() {
  // Een array om alle kaarten in op te slaan
  const cards = [];
  for (let i = 1; i <= outcomes; i++) {
    // Voeg elke kaart toe aan de array. Elke kaart krijgt:
    // - Een unieke key voor React
    // - Een algemene 'card' klasse voor de basisstijl
    // - Een unieke klasse (bijv. card01, card02) voor de zijn eigen plek in het grid
    cards.push(
      <div key={i} className={`${styles.card} ${styles[`card${String(i).padStart(2, '0')}`]}`}>
        <div className={styles.outcomeName}>Leeruitkomst</div>
        <div className={styles.skillsContainer}>
          <div className={styles.hexagon}>Skill01</div>
          <div className={styles.hexagon}>Skill02</div>
          <div className={styles.hexagon}>Skill03</div>
          <div className={styles.hexagon}>Skill04</div>
        </div>
        <div className={styles.outcomeGrade}>Oriënterend</div>
      </div>
    );
  }

  // Dynamisch de grid-template-areas genereren op basis van het aantal uitkomsten
  const gridTemplateAreas = useMemo(() => {
    let areas = ''; // String om de grid areas op te slaan
    const rows = Math.ceil(outcomes / 2); // Bepaal het aantal rijen, 2 kaarten per rij
    let cardIndex = 1; // Huidige kaart index om bij te houden welke kaart geplaatst moet worden
    let oddRowEmptyIndex = 2; // De index van de lege cel in oneven rijen (de derde cel)
    let evenRowEmptyIndex = 0; // De index van de lege cel in even rijen (de eerste cel)

    for (let row = 0; row < rows; row++) {
      let rowAreas = ''; // String om de grid areas van de huidige rij op te slaan
      for (let col = 0; col < 3; col++) {
        // Controleer of de huidige cel leeg moet zijn
        if ((row % 2 === 0 && col === oddRowEmptyIndex) || (row % 2 !== 0 && col === evenRowEmptyIndex)) {
          rowAreas += ' .'; // Voeg een lege cel toe
        } else if (cardIndex <= outcomes) {
          // Voeg een kaart toe als er nog kaarten zijn om toe te voegen
          rowAreas += ` card${String(cardIndex).padStart(2, '0')}`;
          cardIndex++; // Verhoog de kaart index
        } else {
          rowAreas += ' .'; // Voeg een lege cel toe als er geen kaarten meer zijn
        }
        if (col < 2) {
          rowAreas += ' '; // Voeg een spatie toe tussen de cellen, behalve na de laatste cel
        }
      }
      areas += `"${rowAreas.trim()}" `; // Voeg de huidige rij toe aan de grid areas
    }
    return areas.trim(); // Retourneer de volledige grid areas string
  }, [outcomes]);

  return (
    <main
      className={styles.cardsContainer}
      // Stel de grid-template-areas in via inline-styling
      style={{ gridTemplateAreas: gridTemplateAreas }}
    >
      {cards}
    </main>
  );
}
