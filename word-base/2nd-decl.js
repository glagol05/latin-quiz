import { getStem } from "../utils/stem.js";

export const secondDeclensionNouns = [
  // masculine -us
  { nom: "servus", gen: "servī", gender: "m", stemChange: false },
  { nom: "amicus", gen: "amicī", gender: "m", stemChange: false },
  { nom: "dominus", gen: "dominī", gender: "m", stemChange: false },
  { nom: "filius", gen: "filiī", gender: "m", stemChange: false },
  { nom: "equus", gen: "equī", gender: "m", stemChange: false },
  { nom: "lupus", gen: "lupī", gender: "m", stemChange: false },
  { nom: "annus", gen: "annī", gender: "m", stemChange: false },
  { nom: "numerus", gen: "numerī", gender: "m", stemChange: false },
  { nom: "populus", gen: "populī", gender: "m", stemChange: false },
  { nom: "modus", gen: "modī", gender: "m", stemChange: false },
  { nom: "hortus", gen: "hortī", gender: "m", stemChange: false },
  { nom: "focus", gen: "focī", gender: "m", stemChange: false },
  { nom: "oculus", gen: "oculī", gender: "m", stemChange: false },
  { nom: "animus", gen: "animī", gender: "m", stemChange: false },
  { nom: "campus", gen: "campī", gender: "m", stemChange: false },
  { nom: "discipulus", gen: "discipulī", gender: "m", stemChange: false },
  { nom: "gladius", gen: "gladiī", gender: "m", stemChange: false },
  { nom: "locus", gen: "locī", gender: "m", stemChange: false },
  { nom: "medicus", gen: "medicī", gender: "m", stemChange: false },
  { nom: "murus", gen: "murī", gender: "m", stemChange: false },
  { nom: "nervus", gen: "nervī", gender: "m", stemChange: false },
  { nom: "ramus", gen: "ramī", gender: "m", stemChange: false },
  { nom: "sonus", gen: "sonī", gender: "m", stemChange: false },
  { nom: "ventus", gen: "ventī", gender: "m", stemChange: false },
  { nom: "vicinus", gen: "vicinī", gender: "m", stemChange: false },

  // masculine -er
  { nom: "puer", gen: "puerī", gender: "m", stemChange: false },

  { nom: "magister", gen: "magistrī", gender: "m", stemChange: true },
  { nom: "liber", gen: "librī", gender: "m", stemChange: true },
  { nom: "socer", gen: "socrī", gender: "m", stemChange: true },
  { nom: "gener", gen: "generī", gender: "m", stemChange: true },
  { nom: "cancer", gen: "cancrī", gender: "m", stemChange: true },
  { nom: "minister", gen: "ministrī", gender: "m", stemChange: true },

  // masculine -ir
  { nom: "vir", gen: "virī", gender: "m", stemChange: false },

  // neuter -um
  { nom: "bellum", gen: "bellī", gender: "n", stemChange: false },
  { nom: "donum", gen: "donī", gender: "n", stemChange: false },
  { nom: "verbum", gen: "verbī", gender: "n", stemChange: false },
  { nom: "oppidum", gen: "oppidī", gender: "n", stemChange: false },
  { nom: "templum", gen: "templī", gender: "n", stemChange: false },
  { nom: "forum", gen: "forī", gender: "n", stemChange: false },
  { nom: "regnum", gen: "regnī", gender: "n", stemChange: false },
  { nom: "periculum", gen: "periculī", gender: "n", stemChange: false },
  { nom: "caelum", gen: "caelī", gender: "n", stemChange: false },
  { nom: "vinum", gen: "vinī", gender: "n", stemChange: false },
  { nom: "aurum", gen: "aurī", gender: "n", stemChange: false },
  { nom: "datum", gen: "datī", gender: "n", stemChange: false },
  { nom: "factum", gen: "factī", gender: "n", stemChange: false },
  { nom: "imperium", gen: "imperiī", gender: "n", stemChange: false },
  { nom: "instrumentum", gen: "instrumentī", gender: "n", stemChange: false },
  { nom: "museum", gen: "museī", gender: "n", stemChange: false },
  { nom: "officium", gen: "officiī", gender: "n", stemChange: false },
  { nom: "praemium", gen: "praemiī", gender: "n", stemChange: false },
  { nom: "proelium", gen: "proeliī", gender: "n", stemChange: false },
  { nom: "saxum", gen: "saxī", gender: "n", stemChange: false },
  { nom: "signum", gen: "signī", gender: "n", stemChange: false },
  { nom: "spectaculum", gen: "spectaculī", gender: "n", stemChange: false },
  { nom: "studium", gen: "studiī", gender: "n", stemChange: false },
  { nom: "supplicium", gen: "suppliciī", gender: "n", stemChange: false },
  { nom: "testimonium", gen: "testimoniī", gender: "n", stemChange: false },
  { nom: "vinculum", gen: "vinculī", gender: "n", stemChange: false },
  { nom: "consilium", gen: "consiliī", gender: "n", stemChange: false },
  { nom: "gaudium", gen: "gaudiī", gender: "n", stemChange: false },
  { nom: "odium", gen: "odiī", gender: "n", stemChange: false }
].map(lemma => {
        const lemmaNom = lemma.nom;
        const lemmaGen = lemma.gen;
        let stem = getStem(lemma.gen, 1);
    if(lemma.gender == "m") {
        return {
            forms: {
            nom: { sg: lemmaNom, pl: stem + "ī" },
            gen: { sg: lemmaGen, pl: stem + "orum" },
            dat: { sg: stem + "o", pl: stem + "is" },
            acc: { sg: stem + "um", pl: stem + "os" },
            abl: { sg: stem + "o", pl: stem + "is" }
            }
        }
    } else if(lemma.gender == "n") {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "a" },
                gen: { sg: lemmaGen, pl: stem + "orum" },
                dat: { sg: stem + "o", pl: stem + "is" },
                acc: { sg: stem + "um", pl: stem + "a" },
                abl: { sg: stem + "o" , pl: stem + "is" }
            }
        }
    }
})