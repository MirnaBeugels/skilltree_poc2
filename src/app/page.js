'use client'

import { useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronDown, faChevronUp, faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.css";

// Een object met de leeruitkomsten, beoordelingen, vaardigheden en definities
// Deze moet nog vervangen worden door data die opgeslagen wordt in een database, omdat het te complex is voor 1 object.
const studentData = {
  outcomes: {
    outcome01: {
      name: "Leeruitkomst 1", 
      grade: "Oriënterend",
      gradeDefinition: "Orienterend betekent",
      definition: "Leeruitkomst definitie hier",
      skills: {
        Skill01: {
          skill: "Programmeren",
          definition: "Definitie gegeven",
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
              explanation: "uitleg wat je kunt doen voor deze activiteit",
              sources: {
                source01: "url to source",
                source02: "url to source",
                source03: "url to source"
              }
            },
            activity03: {
              name: "naam van activiteit",
              explanation: "uitleg wat je kunt doen voor deze activiteit",
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
      } 
    },
    outcome02: {
      name: "Leeruitkomst 2",
      grade: "Beginnend",
      gradeDefinition: "Beginnend betekent Lorem ipsum dolor sit amet",
      definition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum est eu finibus molestie.", // Definitie van de leeruitkomst
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
    outcome03: {
      name: "Leeruitkomst 3",
      grade: "Gevorderd",
      gradeDefinition: "Gevorderd betekent Lorem ipsum dolor sit amet",
      definition: "Leeruitkomst definitie hier", // Definitie van de leeruitkomst
      skills: {
        Skill01: {
          skill: "Programmeren",
          definition: "Definitie gegeven",
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
        Skill02: {
          skill: "Tweede Skill",
          definition: "Definitie van de tweede skill",
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
    outcome04: {
      name: "Leeruitkomst 4",
      grade: "Gevorderd",
      gradeDefinition: "Gevorderd betekent Lorem ipsum dolor sit amet",
      definition: "Leeruitkomst definitie hier", // Definitie van de leeruitkomst
      skills: {
        Skill01: {
          skill: "Programmeren",
          definition: "Definitie gegeven",
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
        Skill06: {
          skill: "Zesde Skill",
          definition: "Definitie van de zesde skill",
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
    outcome05: {
      name: "Leeruitkomst 5",
      grade: "Beginnend",
      gradeDefinition: "Beginnend betekent Lorem ipsum dolor sit amet",
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
    outcome06: {
      name: "Leeruitkomst 6",
      grade: "Geoefend",
      gradeDefinition: "Geoefend betekent Lorem ipsum dolor sit amet",
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
    outcome07: {
      name: "Leeruitkomst 7",
      grade: "Oriënterend",
      gradeDefinition: "Orienterend betekent Lorem ipsum dolor sit amet",
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
};

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
function getHexagonSVG(claimed, color, skillName, getTextColor) {
  
  // Alle skills moeten dikgedrukt zijn
  const fontWeight = "400";
  
  // Wanneer de skill behaald is laten we de gevulde hexagon zien met donkere tekst
  if (claimed) {
    return (
      `<svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.458 1.155 1.162 27.306V79.61l45.296 26.151 45.295-26.151V27.306L46.458 1.155Zm46.295 25.574L46.458 0 .162 26.729v53.457l46.296 26.729 46.295-26.729V26.73Z" fill="${color}"/>
        <path d="m46.573 6 41.136 23.75v47.5L46.573 101 5.436 77.25v-47.5L46.573 6Z" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" fill="${getTextColor}" font-size="18" dy=".3em" style="font-weight: ${fontWeight}; text-transform: capitalize;">${skillName}</text>
      </svg>`
    );
  
    // Zo niet dan laten we de lege hexagon zien en heeft de tekst dezelfde kleur als die van de hexagon omlijning
  } else {
    return (
      `<svg width="93" height="107" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M46.296 1.155 1 27.306V79.61l45.296 26.151L91.59 79.609V27.306L46.296 1.155ZM92.59 26.729 46.296 0 0 26.729v53.457l46.296 26.729L92.59 80.186V26.73Z" fill="${color}"/>
        <text x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="18" font-weight="bold" dy=".3em" style="font-weight: ${fontWeight}; text-transform: capitalize;">${skillName}</text>
      </svg>`
    );
  }
}

export default function Home() {

  // States voor de controle over de hexagonkleuren, tekstkleur en het modal venster voor de skills
  const [colorMap, setColorMap] = useState({});
  const [textColor, setTextColor] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showSkill, setshowSkill] = useState(false);
  const [openActivity, setOpenActivity] = useState(null);
  
  // Functie voor het wijzigen van de state waarmee een aangeklikte skill opgeslagen en het modal venster geopend wordt
  const skillToggle = (skill) => {
    setSelectedSkill(skill);
    setshowSkill((showSkill) => !showSkill);
  };

  // Functie voor het wijzigen van de state waarmee de activity accordion geopend en gesloten wordt
  const activityToggle = (activityKey) => {
    setOpenActivity(openActivity === activityKey ? null : activityKey);
  };

  // Om ervoor te zorgen dat de kleuren niet bij iedere re-render wanneer bijvoorbeeld leeruitkomsten of skills bekeken worden opnieuw geladen worden maken we gebruik van useEffect met een dependency array en local storage
  useEffect(() => {
    // Controleer of de kleuren al in de localstorage staan
    const storedColors = JSON.parse(localStorage.getItem('colorMap'));
    if (storedColors) {
      setColorMap(storedColors);
      setTextColor("#140C2C");
    } else {
      // Initialiseer de colormap en sla op in de local storage
      // We doen dit ook voor de gevulde hexagons tekstkleur zodat deze tegelijk geladen wordt
      const newColorMap = {};
      setTextColor("#140C2C");
      Object.values(studentData.outcomes).forEach((outcome, i) => {
        Object.entries(outcome.skills).forEach(([skillKey, skill], j) => {
          newColorMap[`${i}-${skillKey}`] = getRandomColor();
        });
      });
      setColorMap(newColorMap);
      setTextColor("#140C2C");
      localStorage.setItem('colorMap', JSON.stringify(newColorMap));
    }

  }, []);

  // Wanneer het modal venster zichtbaar is (showSkill = true) dan verandert overflow: auto naar overflow:hidden in de body tag om deze inactief en onscrolbaar te maken
  // Om de layoutshift te voorkomen wanneer de scrollbar zichtbaar was en ineens niet meer voegen we rechts een padding toe wanneer de modal zichtbaar is
  useEffect(() => {
    const body = document.body;
    const scrollbarWidth = window.innerWidth - body.clientWidth;
  
    if (showSkill) {
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    }
  
    // Cleanup function to reset the body styles when the component is unmounted
    return () => {
      body.style.overflow = 'auto';
      body.style.paddingRight = '0px';
    };
  }, [showSkill]);

  // Haal alle leeruitkomsten op uit de studentData
  const outcomes = Object.values(studentData.outcomes);

 // Maak een array voor de kaarten door de leeruitkomsten te mappen
 const cards = outcomes.map((outcome, i) => {

  // Maak een array van hexagons voor iedere leeruitkomst, roep de skillToggle functie aan wanneer er op een hexagon geklikt wordt
  const hexagons = Object.entries(outcome.skills).map(([skillKey, skill], j) => {
    const color = colorMap[`${i}-${skillKey}`];
    const getTextColor = textColor;
    return (
      <div key={j} className={styles[`skill0${j + 1}`]} onClick={() => skillToggle(skill)} dangerouslySetInnerHTML={{ __html: getHexagonSVG(skill.claimed, color, skillKey, getTextColor)}}></div>
    );
  });

    // Maak een kaartje voor elke leeruitkomst met daarop de naam, vaardigheden en de beoordeling
    return (
      <div key={i} className={`${styles.card} ${styles[`card${String(i + 1).padStart(2, '0')}`]}`}>
        <div className={styles.popoverWrapper}>
          <h2 className={styles.outcomeName}>{outcome.name}</h2>
          <div className={styles.popoverBelow}>
            <div className={styles.popoverArrowUp}></div>
            <div className={styles.popoverContent}>
              {outcome.definition}
            </div>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          {hexagons}
        </div>
        <div className={styles.popoverWrapper}>
          <div className={styles.popoverAbove}>
            <div className={styles.popoverContent}>
              {outcome.gradeDefinition}
            </div>
            <div className={styles.popoverArrowDown}></div>
          </div>
          <h2 className={styles.outcomeGrade}>{outcome.grade}</h2>
        </div>
      </div>
    );
  });

  // Genereer de grid-template areas op basis van het aantal leeruitkomsten
  const gridTemplateAreas = useMemo(() => {
    
    // Een string om de grid area's in op te slaan
    let areas = ''; 
    
    // Bepaal hoeveel rijen er moeten zijn op basis van het aantal leeruitkomsten
    // In het design zitten 2 kaarten plus 1 lege plaats in een rij, dus deel het aantal leeruitkomsten door 2
    const rows = Math.ceil(outcomes.length / 2);
    
    // De index van de huidige kaart, om bij te houden welke kaart we aan het plaatsen zijn
    let cardIndex = 1;

    // De lege vakken in het design verspringen, in een oneven rij is de 3e grid-cel leeg
    let oddRowEmptyIndex = 2;

    // In een even rij is de eerste grid-cel leeg
    let evenRowEmptyIndex = 0;

    // Loop door elke rij
    for (let row = 0; row < rows; row++) {
      
      // Een string om de grid area's van de huidige rij in op te slaan
      let rowAreas = '';

      // Loop door elke kolom binnen de huidige rij
      for (let col = 0; col < 3; col++) {

        // Bepaal of de huidige grid-cel een afbeelding ipv een kaart moet bevatten
        // Zo ja, dan moeten we een div met afbeelding aan de kaarten array toevoegen
        if ((row % 2 === 0 && col === oddRowEmptyIndex) || (row % 2 !== 0 && col === evenRowEmptyIndex)) {
          
          // Voeg 1 van de afbeeldingen uit de image array toe
          const imageIndex = (row + col) % images.length;

          // Geef de afbeelding op basis van de huidige grid-cel index de juiste css class
          // Dit is voor de overflow links en rechts buiten de cardsContainer
          const imageClass = col === 0 ? styles.imageLeft : styles.imageRight;
          
          // Voeg de <div> met afbeelding er toe aan de cards array 
          cards.push(
            <div key={`img${row}${col}`} className={`${styles.imageCell} ${imageClass}`}>
              <img src={images[imageIndex]} alt={`Afbeelding ${imageIndex + 1}`} />
            </div>
          );

          // Voeg de grid area toe aan de rowAreas string
          rowAreas += ` img${row}${col}`;

        // Wanneer de huidige grid-cell geen afbeelding moet bevatten en als er nog kaarten zijn
        } else if (cardIndex <= outcomes.length) {
          
          // Voeg dan een kaart toe aan de rowAreas string
          rowAreas += ` card${String(cardIndex).padStart(2, '0')}`;

          // Verhoog de kaart index
          cardIndex++;

          // Als er geen kaarten meer zijn
        } else {

          // Voeg dan een lege grid-cel toe aan de rowAreas string
          rowAreas += ' .';
        }

        // Voeg een spatie toe tussen de grid-cellen, behalve na de derde cel (laatste cel in een rij)
        if (col < 2) {
          rowAreas += ' ';
        }
      }

      // Voeg de huidige rij toe aan de grid-areas string
      areas += `"${rowAreas.trim()}" `;
    }

    // Retrourneer de volledige grid areas sting
    return areas.trim();
  }, [outcomes]);

  // Retourneer de kaarten container met de kaartjes en gridtemplate
  return (
    <>
    {/* Laat de container met kaartjes in het gridtemplate zien */}
    <main className={styles.cardsContainer} style={{ gridTemplateAreas: gridTemplateAreas }}>
      {cards}
    </main>

    {/* Wanneer showSkill true is (er is een skill aangeklikt) openen we het modal venster met daarin de gegevens van de aangeklikte skill */}
    { showSkill && 
        <div className={styles.expandSkillContainer}>
        <div className={styles.expandSkill}>

          <div className={styles.skillContent}>
            <div className={styles.skillHeader}>
              <h2>{selectedSkill.skill}</h2>
              <p>{selectedSkill.definition}</p>
            </div>
            <div className={styles.skillBody}>
              <h3>Activities</h3>
              <ul className={styles.accordion}>
                {/* Map alle activities van de skill in een eigen list item */}
                {Object.entries(selectedSkill.activities).map(([activityKey, activity]) => (
                  <li key={activityKey} className={styles.accordionItem}>
                    {/* Wanneer je op de header div klikt wordt de status van openActivity aangepast naar true/false */}
                    <div className={styles.accordionHeader} onClick={() => activityToggle(activityKey)}>
                      <h4>{activity.name}</h4>
                      {/* Wanneer openActivity true is: Chevron omlaag */}
                      {openActivity !== activityKey && (
                        <div><FontAwesomeIcon icon={faChevronDown} size="lg" /></div>
                      )}
                      {/* Wanneer openActivity false is: Chevron omhoog */}
                      {openActivity === activityKey && (
                        <div><FontAwesomeIcon icon={faChevronUp} size="lg" /></div>
                      )}
                      </div>
                    {/* Wanneer openActivity true is wordt de content van de activity weergegeven, anders niet */}
                    {openActivity === activityKey && (
                      <div className={styles.accordionContent}>
                        <p>{activity.explanation}</p>
                          <ul>
                            {Object.entries(activity.sources).map(([sourceKey, source]) => (
                              <li key={sourceKey}><a href={source} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} className="icon" /> {source}</a></li>
                            ))}
                          </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.skillClose}>
            {/* Roep de skillToggle functie aan om de modal te sluiten */}
            <FontAwesomeIcon icon={faXmark} onClick={skillToggle} className={styles.flipIcon} size="2xl" />
          </div>
        </div>
      </div> }

    </>
  );
}
