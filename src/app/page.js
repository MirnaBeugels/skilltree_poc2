import { useMemo } from "react";
import styles from "./page.module.css";

// Een object met de leeruitkomsten, beoordelingen, vaardigheden en definities
// Deze moet nog vervangen worden door data die opgeslagen wordt in een database, omdat het te complex is voor 1 object.
const studentData = {
  student: {
    naam: "Jan Jansen",
    studentnummer: "12345678",
  },
  outcomes: {
    outcome01: {
      name: "The name of this outcome",
      grade: 8, // Beoordeling per leeruitkomst
      definition: "Leeruitkomst definitie hier", // Definitie van de leeruitkomst
      skills: {
        Skill01: {
          skill: "Programmeren",
          definition: "Definitie gegeven",
          claimed: true,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill02: {
          skill: "Tweede Skill",
          definition: "Definitie van de tweede skill",
          claimed: false,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill03: {
          skill: "Derde Skill",
          definition: "Definitie van de derde skill",
          claimed: true,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill04: {
          skill: "Vierde Skill",
          definition: "Definitie van de vierde skill",
          claimed: false,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill05: {
          skill: "Vijfde Skill",
          definition: "Definitie van de vijfde skill",
          claimed: true,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill06: {
          skill: "Zesde Skill",
          definition: "Definitie van de zesde skill",
          claimed: false,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
        Skill07: {
          skill: "Zevende Skill",
          definition: "Definitie van de zevende skill",
          claimed: true,
          activities: {
            activity01: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity02: {
              name: "naam van activiteit",
              explanation: "",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            }
          }
        }, 
      } 
    },
  }
}

console.log(studentData);

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

// Een array met de 4 verschillende kleuren die de hexagons kunnen hebben
const colors = ["#B758F1", "#1D6AFF", "#1FAAFF", "#1DD6FF"];

// Een functie om een random kleur te kiezen uit de 4 beschikbare kleuren in colors
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Een functie om te bepalen hoe de hexagon eruit ziet > kleur, gevuld/niet gevuld, kleur vd tekst & font-weight zodat het beter leesbaar is
function getHexagonSVG(claimed, color, skillName) {

  // Wanneer een skill niet behaald is en de lege hexagon weergegeven wordt moet de tekst dezelfde kleur als de hexagon hebben
  const textColor = claimed ? "#140C2C" : color;
  
  // Alle skills moeten dikgedrukt zijn
  const fontWeight = claimed ? "400" : "400";
  
  // Wanneer de skill behaald is laten we de gevulde hexagon zien met donkere tekst
  if (claimed) {
    return (
      `<svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.458 1.155 1.162 27.306V79.61l45.296 26.151 45.295-26.151V27.306L46.458 1.155Zm46.295 25.574L46.458 0 .162 26.729v53.457l46.296 26.729 46.295-26.729V26.73Z" fill="${color}"/>
        <path d="m46.573 6 41.136 23.75v47.5L46.573 101 5.436 77.25v-47.5L46.573 6Z" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" fill="#140C2C" font-size="18" dy=".3em" style="font-weight: ${fontWeight}; text-transform=: capitalize;">${skillName}</text>
      </svg>`
    );
  
    // Zo niet dan laten we de lege hexagon zien en heeft de tekst dezelfde kleur als die van de hexagon omlijning
  } else {
    return (
      `<svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="18" font-weight="bold" dy=".3em" style="font-weight: ${fontWeight}; text-transform=: capitalize;">${skillName}</text>
      </svg>`
    );
  }
}

export default function Home() {

  // Een array om alle kaarten in op te slaan
  const cards = [];

  // Een loop die voor iedere leeruitkomst een kaart maakt met 7 hexagons
  for (let i = 1; i <= outcomes; i++) {

    // Een array om alle hexagons (skills) in op te slaan
    const hexagons = [];
    const skillKeys = Object.keys(studentData.outcomes.outcome01.skills);

    // Een loop die voor iedere hexagon (skill) een random kleur kiest en bepaalt of de lege of gevulde hexagon weergegeven wordy afhankelijk van of de skill behaald is
    for (let j = 0; j < 7; j++) {
      const skillKey = skillKeys[j % skillKeys.length]; // Get the skill key like "skill01"
      const skill = studentData.outcomes.outcome01.skills[skillKey];
      const color = getRandomColor();
      hexagons.push(
        <div key={j} className={styles[`skill0${j + 1}`]} dangerouslySetInnerHTML={{ __html: getHexagonSVG(skill.claimed, color, skillKey) }}></div>
      );
    }

    // Voeg elke kaart toe aan de array. Elke kaart krijgt:
    // - Een unieke key voor React
    // - Een algemene 'card' klasse voor de basisstijl
    // - Een unieke klasse (bijv. card01, card02) voor de zijn eigen plek in het grid
    cards.push(
      <div key={i} className={`${styles.card} ${styles[`card${String(i).padStart(2, '0')}`]}`}>
        <div className={styles.outcomeName}>Leeruitkomst</div>
        <div className={styles.skillsContainer}>
          {hexagons}
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
