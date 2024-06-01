import { useMemo } from "react";
import styles from "./page.module.css";

// Het aantal leeruitkomsten (kaarten) dat we willen weergeven
var outcomes = 7;

// Een array met de 6 illustraties voor in de lege cellen waar geen kaart in zit
const images = [
  "/iterate.svg",
  "/react.svg",
  "/monitor.svg", 
  "/code.svg",
  "/design.svg", 
  "/improve.svg"
];

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
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill01}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill02}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill03}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill04}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill05}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill06}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
          <svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.skill07}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="#000"/>
          </svg>
        </div>
        <div className={styles.outcomeGrade}>Oriënterend</div>
      </div>
    );
  }

  // Dynamisch de grid-template-areas genereren op basis van het aantal uitkomsten
  const gridTemplateAreas = useMemo(() => {
    let areas = ''; // String om de grid areas op te slaan
    const rows = Math.ceil(outcomes / 2); // Bepaal het aantal rijen, er zijn 2 kaarten per rij
    let cardIndex = 1; // Huidige kaart index om bij te houden welke kaart geplaatst moet worden
    let oddRowEmptyIndex = 2; // De index van de lege cel in oneven rijen (de derde cel)
    let evenRowEmptyIndex = 0; // De index van de lege cel in even rijen (de eerste cel)

    for (let row = 0; row < rows; row++) {
      let rowAreas = ''; // String om de grid areas van de huidige rij op te slaan
      for (let col = 0; col < 3; col++) {
        // Controleer of de huidige cel leeg moet zijn
        if ((row % 2 === 0 && col === oddRowEmptyIndex) || (row % 2 !== 0 && col === evenRowEmptyIndex)) {
          // Voeg een afbeelding toe in plaats van een lege cel
          const imageIndex = (row + col) % images.length; // Bepaal welke afbeelding te gebruiken
          const imageClass = col === 0 ? styles.imageLeft : styles.imageRight; // Selecteer de juiste margestijl
          cards.push(
            <div key={`img${row}${col}`} className={`${styles.imageCell} ${imageClass}`}>
              <img src={images[imageIndex]} alt={`Afbeelding ${imageIndex + 1}`} />
            </div>
          );
          rowAreas += ` img${row}${col}`;
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
