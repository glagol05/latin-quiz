import { getStem } from "../utils/stem.js";

export const fourthDeclensionNouns = [
  // MASCULINE
  { nom: "manus", gen: "manūs", gender: "m" },
  { nom: "domus", gen: "domūs", gender: "m" },
  { nom: "portus", gen: "portūs", gender: "m" },
  { nom: "fructus", gen: "fructūs", gender: "m" },
  { nom: "senatus", gen: "senatūs", gender: "m" },
  { nom: "exercitus", gen: "exercitūs", gender: "m" },
  { nom: "impetus", gen: "impetūs", gender: "m" },
  { nom: "acus", gen: "acūs", gender: "m" },
  { nom: "adventus", gen: "adventūs", gender: "m" },
  { nom: "consensus", gen: "consensūs", gender: "m" },
  
  // FEMININE
  { nom: "cornu", gen: "cornūs", gender: "f" }, // rare feminine
  { nom: "domus", gen: "domūs", gender: "f" },  // can be m/f in usage
  { nom: "manus", gen: "manūs", gender: "f" },  // sometimes treated as f
  
  // NEUTER
  { nom: "cornu", gen: "cornūs", gender: "n" },
  { nom: "genu", gen: "genūs", gender: "n" }
].map(lemma => {
    const lemmaNom = lemma.nom;
    const lemmaGen = lemma.gen;
    let stem = getStem(lemma.gen, 2);
    if(lemma.gender == "m" || lemma.gender == "f") {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "ūs" },
                gen: { sg: lemmaGen, pl: stem + "uum" },
                dat: { sg: stem + "uī", pl: stem + "ibus" },
                acc: { sg: stem + "um", pl: stem + "ūs" },
                abl: { sg: stem + "ū", pl: stem + "ibus" }
            }
        }
    } else if(lemma.gender == "n") {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "ua" },
                gen: { sg: lemmaGen, pl: stem + "uum" },
                dat: { sg: stem + "ū", pl: stem + "ibus" },
                acc: { sg: stem + "ū", pl: stem + "ua" },
                abl: { sg: stem + "ū", pl: stem + "ibus" }
            }
        }
    }
})