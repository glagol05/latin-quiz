import { getStem } from "../utils/stem.js";

export const fifthDeclensionNouns = [
  { nom: "res", gen: "reī", gender: "f" },
  { nom: "spes", gen: "speī", gender: "f" },
  { nom: "fides", gen: "fideī", gender: "f" },
  { nom: "acies", gen: "aciēī", gender: "f" },
  { nom: "facies", gen: "faciēī", gender: "f" },
  { nom: "series", gen: "seriēī", gender: "f" },
  { nom: "species", gen: "speciēī", gender: "f" },
  { nom: "dies", gen: "diēī", gender: "m" },
  { nom: "meridies", gen: "meridiēī", gender: "m" },
  { nom: "effigies", gen: "effigiēī", gender: "f" },
  { nom: "acies", gen: "aciēī", gender: "f" },
  { nom: "fames", gen: "famēī", gender: "f" },
].map(lemma => {
    const lemmaNom = lemma.nom;
    const lemmaGen = lemma.gen;
    let stem = getStem(lemma.gen, 2);
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "es" },
                gen: { sg: lemmaGen, pl: stem + "erum" },
                dat: { sg: stem + "ēī", pl: stem + "ebus" },
                acc: { sg: stem + "em", pl: stem + "es" },
                abl: { sg: stem + "e", pl: stem + "ebus" }
            }
        }
    }
)