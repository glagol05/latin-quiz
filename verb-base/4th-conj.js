import { getStem } from "../utils/stem.js";

export const fourthConjugationVerbs = [
  { pres: "audio", inf: "audire", perf: "audivi", sup: "auditus" },
  { pres: "venio", inf: "venire", perf: "veni", sup: "ventus" },
  { pres: "sentio", inf: "sentire", perf: "sensi", sup: "sensus" },
  { pres: "reperio", inf: "reperire", perf: "reperi", sup: "repertus" },
  { pres: "scio", inf: "scire", perf: "scivi", sup: "scitus" },
  { pres: "finio", inf: "finire", perf: "finivi", sup: "finitus" },
  { pres: "aperio", inf: "aperire", perf: "aperui", sup: "apertus" },
  { pres: "dormio", inf: "dormire", perf: "dormivi", sup: "dormitus" },
  { pres: "experior", inf: "experiri", perf: "expertus sum", sup: "expertus" },
  { pres: "advenio", inf: "advenire", perf: "adveni", sup: "adventus" },
  { pres: "invenio", inf: "invenire", perf: "inveni", sup: "inventus" },
  { pres: "obliviscor", inf: "oblivisci", perf: "oblitus sum", sup: "oblitus" },
  { pres: "orior", inf: "oriri", perf: "ortus sum", sup: "ortus" },
  { pres: "partior", inf: "partiri", perf: "partitus sum", sup: "partitus" },
  { pres: "servio", inf: "servire", perf: "servivi", sup: "servitus" },
  { pres: "sentio", inf: "sentire", perf: "sensi", sup: "sensus" },
  { pres: "tollio", inf: "tollire", perf: "tollivi", sup: "tollitus" },
  { pres: "venio", inf: "venire", perf: "veni", sup: "ventus" },
  { pres: "aperio", inf: "aperire", perf: "aperui", sup: "apertus" },
  { pres: "convenio", inf: "convenire", perf: "conveni", sup: "conventus" },
  { pres: "expedio", inf: "expedire", perf: "expedivi", sup: "expeditus" },
  { pres: "impedio", inf: "impedire", perf: "impedivi", sup: "impeditus" },
  { pres: "nascor", inf: "nasci", perf: "natus sum", sup: "natus" },
  { pres: "patior", inf: "pati", perf: "passus sum", sup: "passus" },
  { pres: "regredior", inf: "regredi", perf: "regressus sum", sup: "regressus" },
  { pres: "experior", inf: "experiri", perf: "expertus sum", sup: "expertus" },
  { pres: "aperio", inf: "aperire", perf: "aperui", sup: "apertus" },
  { pres: "servio", inf: "servire", perf: "servivi", sup: "servitus" },
  { pres: "scio", inf: "scire", perf: "scivi", sup: "scitus" },
  { pres: "finitio", inf: "finitire", perf: "finitivi", sup: "finitus" },
  { pres: "advenio", inf: "advenire", perf: "adveni", sup: "adventus" },
  { pres: "invenio", inf: "invenire", perf: "inveni", sup: "inventus" },
  { pres: "dormio", inf: "dormire", perf: "dormivi", sup: "dormitus" },
  { pres: "orior", inf: "oriri", perf: "ortus sum", sup: "ortus" },
  { pres: "partior", inf: "partiri", perf: "partitus sum", sup: "partitus" },
  { pres: "obliviscor", inf: "oblivisci", perf: "oblitus sum", sup: "oblitus" }, //huh
  { pres: "expedio", inf: "expedire", perf: "expedivi", sup: "expeditus" },
  { pres: "impedio", inf: "impedire", perf: "impedivi", sup: "impeditus" },
  { pres: "regredior", inf: "regredi", perf: "regressus sum", sup: "regressus" }, // huh
  { pres: "convenio", inf: "convenire", perf: "conveni", sup: "conventus" },
  { pres: "servio", inf: "servire", perf: "servivi", sup: "servitus" },
  { pres: "advenio", inf: "advenire", perf: "adveni", sup: "adventus" },
  { pres: "invenio", inf: "invenire", perf: "inveni", sup: "inventus" }
].map(lemma => {
    const lemmaPres = lemma.pres;
    const lemmaInf = lemma.inf;
    const lemmaPerf = lemma.perf;
    const lemmaSup = lemma.sup;
    let infStem = getStem(lemmaInf, 2);
    let perfStem = getStem(lemmaPerf, 1);
    let supStem = getStem(lemmaSup, 2);

    let specialStem = getStem(lemmaInf, 3);
    return{
        ActiveIndicative: {
            present: { firstPerSg: lemmaPres, secondPerSg: infStem + "s", thirdPerSg: infStem + "t", firstPerPl: infStem + "mus", secondPerPl: infStem + "tis", thirdPerPl: infStem + "unt"},
            imperfect: { firstPerSg: infStem + "ebam", secondPerSg: infStem + "ebas", thirdPerSg: infStem + "ebat", firstPerPl: infStem + "ebamus", secondPerPl: infStem + "ebatis", thirdPerPl: infStem + "ebant"},
            future: { firstPerSg: infStem + "am", secondPerSg: infStem + "es", thirdPerSg: infStem + "et", firstPerPl: infStem + "emus", secondPerPl: infStem + "etis", thirdPerPl: infStem + "ent"},
            perfect: { firstPerSg: perfStem + "i", secondPerSg: perfStem + "isti", thirdPerSg: perfStem + "it", firstPerPl: perfStem + "imus", secondPerPl: perfStem + "istis", thirdPerPl: perfStem + "erunt"},
            pluperfect: { firstPerSg: perfStem + "eram", secondPerSg: perfStem + "eras", thirdPerSg: perfStem + "erat", firstPerPl: perfStem + "eramus", secondPerPl: perfStem + "eratis", thirdPerPl: perfStem + "erant"},
            futurePerfect: { firstPerSg: perfStem + "ero", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"}
        },
        PassiveIndicative: {
            present: { firstPerSg: infStem + "or", secondPerSg: infStem + "ris", thirdPerSg: infStem + "tur", firstPerPl: infStem + "mur", secondPerPl: infStem + "mini", thirdPerPl: infStem + "untur"},
            imperfect: { firstPerSg: infStem + "ebar", secondPerSg: infStem + "ebaris", thirdPerSg: infStem + "ebatur", firstPerPl: infStem + "ebamur", secondPerPl: infStem + "ebamini", thirdPerPl: infStem + "ebantur"},
            future: { firstPerSg: infStem + "ar", secondPerSg: infStem + "eris", thirdPerSg: infStem + "etur", firstPerPl: infStem + "emur", secondPerPl: infStem + "emini", thirdPerPl: infStem + "entur"},
            perfect: { firstPerSg: lemmaSup + " sum", secondPerSg: lemmaSup + " es", thirdPerSg: lemmaSup + " est", firstPerPl: lemmaSup + " sumus", secondPerPl: lemmaSup + " estis", thirdPerPl: lemmaSup + " sunt"},
            pluperfect: { firstPerSg: lemmaSup + " eram", secondPerSg: lemmaSup + " eras", thirdPerSg: lemmaSup + " erat", firstPerPl: lemmaSup + " eramus", secondPerPl: lemmaSup + " eratis", thirdPerPl: lemmaSup + " erant"},
            futurePerfect: { firstPerSg: lemmaSup + " ero", secondPerSg: lemmaSup + " eris", thirdPerSg: lemmaSup + " erit", firstPerPl: lemmaSup + " erimus", secondPerPl: lemmaSup + " eritis", thirdPerPl: lemmaSup + " erunt"}
        },
        Infinitive: {
            infinitive: { inf: lemmaInf }
        },
        ActiveSubjunctive: {
                present: { firstPerSg: infStem + "am", secondPerSg: infStem + "as", thirdPerSg: infStem + "at", firstPerPl: infStem + "amus", secondPerPl: infStem + "atis", thirdPerPl: infStem + "ant"},
                imperfect: { firstPerSg: infStem + "rem", secondPerSg: infStem + "res", thirdPerSg: infStem + "ret", firstPerPl: infStem + "remus", secondPerPl: infStem + "retis", thirdPerPl: infStem + "rent"},
                perfect: { firstPerSg: perfStem + "erim", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"},
                pluperfect: { firstPerSg: perfStem + "issem", secondPerSg: perfStem + "isses", thirdPerSg: perfStem + "isset", firstPerPl: perfStem + "issemus", secondPerPl: perfStem + "issetis", thirdPerPl: perfStem + "issent"}
        },
        PassiveSubjunctive: {
                present: { firstPerSg: infStem + "ar", secondPerSg: infStem + "aris", thirdPerSg: infStem + "atur", firstPerPl: infStem + "amur", secondPerPl: infStem + "amini", thirdPerPl: infStem + "antur"},
                imperfect: { firstPerSg: infStem + "rer", secondPerSg: infStem + "reris", thirdPerSg: infStem + "retur", firstPerPl: infStem + "remur", secondPerPl: infStem + "remini", thirdPerPl: infStem + "rentur"},
                perfect: { firstPerSg: lemmaSup + " sim", secondPerSg: lemmaSup + " sis", thirdPerSg: lemmaSup + " sit", firstPerPl: lemmaSup + " simus", secondPerPl: lemmaSup + " sitis", thirdPerPl: lemmaSup + " sint"},
                pluperfect: { firstPerSg: lemmaSup + " essem", secondPerSg: lemmaSup + " esses", thirdPerSg: lemmaSup + " esset", firstPerPl: lemmaSup + " essemus", secondPerPl: lemmaSup + " essetis", thirdPerPl: lemmaSup + " essent"},
        },
        PrincipleParts: {
            Present: lemmaPres,
            Infinitive: lemmaInf,
            Perfect: lemmaPerf,
            Supine: lemmaSup
        }
    }
})
