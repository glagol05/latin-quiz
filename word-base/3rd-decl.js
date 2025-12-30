import { getStem } from "../utils/stem.js";

export const thirdDeclensionNouns = [
  // MASCULINE - non i-stem
  { nom: "rex", gen: "regis", gender: "m", iStem: false },
  { nom: "pater", gen: "patris", gender: "m", iStem: false },
  { nom: "dux", gen: "ducis", gender: "m", iStem: false },
  { nom: "imperator", gen: "imperatoris", gender: "m", iStem: false },
  { nom: "senator", gen: "senatoris", gender: "m", iStem: false },
  { nom: "miles", gen: "militis", gender: "m", iStem: false },
  { nom: "leo", gen: "leonis", gender: "m", iStem: false },
  { nom: "frater", gen: "fratris", gender: "m", iStem: false },
  { nom: "honor", gen: "honoris", gender: "m", iStem: false },
  { nom: "venter", gen: "ventris", gender: "m", iStem: false },

  // MASCULINE - i-stem
  { nom: "civis", gen: "civis", gender: "m", iStem: true },
  { nom: "hostis", gen: "hostis", gender: "m", iStem: true },
  { nom: "ignis", gen: "ignis", gender: "m", iStem: true },
  { nom: "panis", gen: "panis", gender: "m", iStem: true },
  { nom: "canis", gen: "canis", gender: "m", iStem: true },

  // FEMININE - non i-stem
  { nom: "mater", gen: "matris", gender: "f", iStem: false },
  { nom: "senex", gen: "senis", gender: "f", iStem: false },
  { nom: "civitas", gen: "civitatis", gender: "f", iStem: false },
  { nom: "arbor", gen: "arboris", gender: "f", iStem: false },
  { nom: "legio", gen: "legionis", gender: "f", iStem: false },
  { nom: "tempestas", gen: "tempestatis", gender: "f", iStem: false },
  { nom: "soror", gen: "sororis", gender: "f", iStem: false },
  { nom: "mater", gen: "matris", gender: "f", iStem: false },

  // FEMININE - i-stem
  { nom: "urbs", gen: "urbis", gender: "f", iStem: true },
  { nom: "navis", gen: "navis", gender: "f", iStem: true },
  { nom: "feles", gen: "felis", gender: "f", iStem: true },
  { nom: "avis", gen: "avis", gender: "f", iStem: true },
  { nom: "pars", gen: "partis", gender: "f", iStem: true },
  { nom: "nox", gen: "noctis", gender: "f", iStem: true },
  { nom: "pax", gen: "pacis", gender: "f", iStem: true },
  { nom: "vox", gen: "vocis", gender: "f", iStem: true },
  { nom: "clades", gen: "cladis", gender: "f", iStem: true },
  { nom: "ars", gen: "artis", gender: "f", iStem: true },
  { nom: "auris", gen: "auris", gender: "f", iStem: true },
  { nom: "frons", gen: "frontis", gender: "f", iStem: true },
  { nom: "mors", gen: "mortis", gender: "f", iStem: true },
  { nom: "virtus", gen: "virtutis", gender: "f", iStem: true },
  { nom: "lex", gen: "legis", gender: "f", iStem: false },
  { nom: "arx", gen: "arcis", gender: "f", iStem: true },
  { nom: "nubes", gen: "nubis", gender: "f", iStem: true },
  { nom: "hostis", gen: "hostis", gender: "f", iStem: true },

  // NEUTER - non i-stem
  { nom: "nomen", gen: "nominis", gender: "n", iStem: false },
  { nom: "corpus", gen: "corporis", gender: "n", iStem: false },
  { nom: "flumen", gen: "fluminis", gender: "n", iStem: false },
  { nom: "caput", gen: "capitis", gender: "n", iStem: false },
  { nom: "tempus", gen: "temporis", gender: "n", iStem: false },
  { nom: "opus", gen: "operis", gender: "n", iStem: false },
  { nom: "litus", gen: "litoris", gender: "n", iStem: false },
  { nom: "pectus", gen: "pectoris", gender: "n", iStem: false },
  { nom: "vulnus", gen: "vulneris", gender: "n", iStem: false },
  { nom: "cor", gen: "cordis", gender: "n", iStem: false },

  // NEUTER - i-stem
  { nom: "animal", gen: "animalis", gender: "n", iStem: true },
  { nom: "mare", gen: "maris", gender: "n", iStem: true },

  // MASC i-stem: 5 more
  { nom: "homo", gen: "hominis", gender: "m", iStem: false },
  { nom: "senex", gen: "senis", gender: "m", iStem: false },
  { nom: "finis", gen: "finis", gender: "m", iStem: true },
  { nom: "hostis", gen: "hostis", gender: "m", iStem: true },
  { nom: "ignis", gen: "ignis", gender: "m", iStem: true },

  // FEM i-stem: 5 more
  { nom: "pars", gen: "partis", gender: "f", iStem: true },
  { nom: "nox", gen: "noctis", gender: "f", iStem: true },
  { nom: "pax", gen: "pacis", gender: "f", iStem: true },
  { nom: "vox", gen: "vocis", gender: "f", iStem: true },
  { nom: "clades", gen: "cladis", gender: "f", iStem: true },

  // NEUTER non-i-stem: 5 more
  { nom: "corpus", gen: "corporis", gender: "n", iStem: false },
  { nom: "flumen", gen: "fluminis", gender: "n", iStem: false },
  { nom: "caput", gen: "capitis", gender: "n", iStem: false },
  { nom: "tempus", gen: "temporis", gender: "n", iStem: false },
  { nom: "opus", gen: "operis", gender: "n", iStem: false },
].map(lemma => {
    const lemmaNom = lemma.nom;
    const lemmaGen = lemma.gen;
    let stem = getStem(lemma.gen, 2);
    if((lemma.gender == "m" || lemma.gender == "f") && lemma.iStem == false) {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "es" },
                gen: { sg: lemmaGen, pl: stem + "um" },
                dat: { sg: stem + "ī", pl: stem + "ibus" },
                acc: { sg: stem + "em", pl: stem + "es" },
                abl: { sg: stem + "e", pl: stem + "ibus" }
            }
        }
    } else if(lemma.gender == "n" && lemma.iStem == false) {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "a" },
                gen: { sg: lemmaGen, pl: stem + "um" },
                dat: { sg: stem + "ī", pl: stem + "ibus" },
                acc: { sg: lemmaNom, pl: stem + "a" },
                abl: { sg: stem + "e", pl: stem + "ibus" }
            }
        }
    } else if((lemma.gender == "m" || lemma.gender == "f") && lemma.iStem == true) {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "es" },
                gen: { sg: lemmaGen, pl: stem + "ium" },
                dat: { sg: stem + "ī", pl: stem + "ibus" },
                acc: { sg: stem + "em", pl: stem + "es" },
                abl: { sg: stem + "e", pl: stem + "ibus" }
            }
        }
    } else if(lemma.gender == "n" && lemma.iStem == true) {
        return {
            forms: {
                nom: { sg: lemmaNom, pl: stem + "ia" },
                gen: { sg: lemmaGen, pl: stem + "ium" },
                dat: { sg: stem + "ī", pl: stem + "ibus"},
                acc: { sg: stem + "e", pl: stem + "ia" },
                abl: { sg: stem + "ī", pl: stem + "ibus" }
            }
        }
    }
})