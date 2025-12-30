import { getStem } from "../utils/stem.js";

export const secondConjugationVerbs = [
  { pres: "habeo", inf: "habere", perf: "habui", sup: "habitus" },
  { pres: "moneo", inf: "monere", perf: "monui", sup: "monitus" },
  { pres: "video", inf: "videre", perf: "vidi", sup: "visus" },
  { pres: "teneo", inf: "tenere", perf: "tenui", sup: "tentus" },
  { pres: "sedeo", inf: "sedere", perf: "sedi", sup: "sessus" },
  { pres: "moveo", inf: "movere", perf: "movi", sup: "motus" },
  { pres: "deleo", inf: "delere", perf: "delevi", sup: "deletus" },
  { pres: "respondeo", inf: "respondere", perf: "responsi", sup: "responsus" },
  { pres: "rideo", inf: "ridere", perf: "risi", sup: "risus" },
  { pres: "timeo", inf: "timere", perf: "timui", sup: "—" },
  { pres: "iubeo", inf: "iubere", perf: "iussi", sup: "iussus" },
  { pres: "pateo", inf: "patere", perf: "patui", sup: "—" },
  { pres: "noceo", inf: "nocere", perf: "nocui", sup: "nocitus" },
  { pres: "praebeo", inf: "praebere", perf: "praebui", sup: "praebitus" },
  { pres: "terreo", inf: "terrere", perf: "terrui", sup: "territus" },
  { pres: "faveo", inf: "favere", perf: "favi", sup: "fautus" },
  { pres: "caveo", inf: "cavere", perf: "cavi", sup: "cautus" },
  { pres: "foveo", inf: "fovere", perf: "fovi", sup: "fotum" },
  { pres: "praesum", inf: "praeesse", perf: "praefui", sup: "—" },
  { pres: "valeo", inf: "valere", perf: "valui", sup: "—" },
  { pres: "careo", inf: "carere", perf: "carui", sup: "caritus" },
  { pres: "gaudeo", inf: "gaudere", perf: "gavisus sum", sup: "gavisus" },
  { pres: "audeo", inf: "audere", perf: "ausus sum", sup: "ausus" },
  { pres: "persuadeo", inf: "persuadere", perf: "persuasi", sup: "persuasus" },
  { pres: "prohibeo", inf: "prohibere", perf: "prohibui", sup: "prohibitus" },
  { pres: "retineo", inf: "retinere", perf: "retinui", sup: "retentus" },
  { pres: "contineo", inf: "continere", perf: "continui", sup: "contentus" },
  { pres: "obtineo", inf: "obtinere", perf: "obtinui", sup: "obtentus" },
  { pres: "adhibeo", inf: "adhibere", perf: "adhibui", sup: "adhibitus" },
  { pres: "absenteo", inf: "absentere", perf: "absentui", sup: "absentus" },
  { pres: "asseco", inf: "assecere", perf: "assecui", sup: "assecutus" },
  { pres: "defendo", inf: "defendere", perf: "defendi", sup: "defensus" },
  { pres: "permoveo", inf: "permovere", perf: "permovi", sup: "permotus" },
  { pres: "compleo", inf: "complere", perf: "complevi", sup: "completus" },
  { pres: "renideo", inf: "renidere", perf: "renidui", sup: "reniditus" },
  { pres: "subrideo", inf: "subridere", perf: "subrisi", sup: "subrisus" },
  { pres: "suppleo", inf: "supplere", perf: "supplevi", sup: "suppletus" },
  { pres: "toneo", inf: "tonere", perf: "tonui", sup: "tonitus" },
  { pres: "usqueo", inf: "usquere", perf: "usquevi", sup: "usquetus" },
  { pres: "videor", inf: "videri", perf: "visus sum", sup: "visus" },
  { pres: "pareo", inf: "parere", perf: "parui", sup: "paritus" },
  { pres: "saepeo", inf: "sapeere", perf: "saepui", sup: "saeptus" },
  { pres: "albeo", inf: "albere", perf: "albui", sup: "albitus" },
  { pres: "barbeo", inf: "barbere", perf: "barbui", sup: "barbitus" },
  { pres: "calceo", inf: "calcere", perf: "calcui", sup: "calcitus" },
  { pres: "doleo", inf: "dolere", perf: "dolui", sup: "dolitus" },
  { pres: "floreo", inf: "florere", perf: "florui", sup: "floritus" },
  { pres: "geleo", inf: "gelere", perf: "gelui", sup: "gelitus" },
  { pres: "glisceo", inf: "gliscere", perf: "gliscui", sup: "gliscitus" },
  { pres: "lenteo", inf: "lentere", perf: "lentui", sup: "lentus" },
  { pres: "niveo", inf: "nivere", perf: "nivui", sup: "nivitus" },
  { pres: "probeo", inf: "probere", perf: "probui", sup: "probitus" },
  { pres: "rubeo", inf: "rubere", perf: "rubui", sup: "rubitūs" },
  { pres: "splendeo", inf: "splendere", perf: "splendui", sup: "splenditus" },
  { pres: "studeo", inf: "studere", perf: "studui", sup: "studitus" },
  { pres: "torpeo", inf: "torpere", perf: "torpui", sup: "torpitus" },
  { pres: "uteo", inf: "utere", perf: "utui", sup: "uitus" }
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
            present: { firstPerSg: infStem + "o", secondPerSg: infStem + "s", thirdPerSg: infStem + "t", firstPerPl: infStem + "mus", secondPerPl: infStem + "tis", thirdPerPl: infStem + "nt"},
            imperfect: { firstPerSg: infStem + "bam", secondPerSg: infStem + "bas", thirdPerSg: infStem + "bat", firstPerPl: infStem + "bamus", secondPerPl: infStem + "batis", thirdPerPl: infStem + "bant"},
            future: { firstPerSg: infStem + "bo", secondPerSg: infStem + "bis", thirdPerSg: infStem + "bit", firstPerPl: infStem + "bimus", secondPerPl: infStem + "bitis", thirdPerPl: infStem + "bunt"},
            perfect: { firstPerSg: perfStem + "i", secondPerSg: perfStem + "isti", thirdPerSg: perfStem + "it", firstPerPl: perfStem + "imus", secondPerPl: perfStem + "istis", thirdPerPl: perfStem + "erunt"},
            pluperfect: { firstPerSg: perfStem + "eram", secondPerSg: perfStem + "eras", thirdPerSg: perfStem + "erat", firstPerPl: perfStem + "eramus", secondPerPl: perfStem + "eratis", thirdPerPl: perfStem + "erant"},
            futurePerfect: { firstPerSg: perfStem + "ero", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"}
        },
        PassiveIndicative: {
            present: { firstPerSg: infStem + "or", secondPerSg: infStem + "eris", thirdPerSg: infStem + "etur", firstPerPl: infStem + "mur", secondPerPl: infStem + "mini", thirdPerPl: infStem + "ntur"},
            imperfect: { firstPerSg: infStem + "bar", secondPerSg: infStem + "baris", thirdPerSg: infStem + "batur", firstPerPl: infStem + "bamur", secondPerPl: infStem + "bamini", thirdPerPl: infStem + "bantur"},
            future: { firstPerSg: infStem + "bor", secondPerSg: infStem + "beris", thirdPerSg: infStem + "bitur", firstPerPl: infStem + "bimur", secondPerPl: infStem + "bimini", thirdPerPl: infStem + "buntur"},
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
                pluperfect: { firstPerSg: infStem + "ssim", secondPerSg: infStem + "ssis", thirdPerSg: infStem + "ssit", firstPerPl: infStem + "ssimus", secondPerPl: infStem + "ssitis", thirdPerPl: infStem + "ssint"}
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

/*{ firstPerSg: , secondPerSg: , thirdPerSg: , firstPerPl: , secondPerPl: , thirdPerPl: }*/
/*              present: 
                imperfect: 
                future: 
                perfect: 
                pluperfect: 
                futurePerfect:  */