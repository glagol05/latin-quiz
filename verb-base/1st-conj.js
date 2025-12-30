import { getStem } from "../utils/stem.js"

export const firstConjugationVerbs = [
  { pres: "amo", inf: "amare", perf: "amavi", sup: "amatus" },
  { pres: "laudo", inf: "laudare", perf: "laudavi", sup: "laudatus" },
  { pres: "porto", inf: "portare", perf: "portavi", sup: "portatus" },
  { pres: "narro", inf: "narrare", perf: "narravi", sup: "narratus" },
  { pres: "voco", inf: "vocare", perf: "vocavi", sup: "vocatus" },
  { pres: "paro", inf: "parare", perf: "paravi", sup: "paratus" },
  { pres: "specto", inf: "spectare", perf: "spectavi", sup: "spectatus" },
  { pres: "curo", inf: "curare", perf: "curavi", sup: "curatus" },
  { pres: "muto", inf: "mutare", perf: "mutavi", sup: "mutatus" },
  { pres: "servo", inf: "servare", perf: "servavi", sup: "servatus" },
  { pres: "clamo", inf: "clamare", perf: "clamavi", sup: "clamatus" },
  { pres: "iudico", inf: "iudicare", perf: "iudicavi", sup: "iudicatus" },
  { pres: "laboro", inf: "laborare", perf: "laboravi", sup: "laboratus" },
  { pres: "oro", inf: "orare", perf: "oravi", sup: "oratus" },
  { pres: "puto", inf: "putare", perf: "putavi", sup: "putatus" },
  { pres: "rogo", inf: "rogare", perf: "rogavi", sup: "rogatus" },
  { pres: "spero", inf: "sperare", perf: "speravi", sup: "speratus" },
  { pres: "ambulo", inf: "ambulare", perf: "ambulavi", sup: "ambulatus" },
  { pres: "pugno", inf: "pugnare", perf: "pugnavi", sup: "pugnatus" },
  { pres: "habito", inf: "habitare", perf: "habitavi", sup: "habitatus" },

  { pres: "accuso", inf: "accusare", perf: "accusavi", sup: "accusatus" },
  { pres: "celebro", inf: "celebrare", perf: "celebravi", sup: "celebratus" },
  { pres: "cogito", inf: "cogitare", perf: "cogitavi", sup: "cogitatus" },
  { pres: "conservo", inf: "conservare", perf: "conservavi", sup: "conservatus" },
  { pres: "delecto", inf: "delectare", perf: "delectavi", sup: "delectatus" },
  { pres: "desidero", inf: "desiderare", perf: "desideravi", sup: "desideratus" },
  { pres: "exspecto", inf: "exspectare", perf: "exspectavi", sup: "exspectatus" },
  { pres: "existimo", inf: "existimare", perf: "existimavi", sup: "existimatus" },
  { pres: "explico", inf: "explicare", perf: "explicavi", sup: "explicatus" },
  { pres: "festino", inf: "festinare", perf: "festinavi", sup: "festinatus" },
  { pres: "impero", inf: "imperare", perf: "imperavi", sup: "imperatus" },
  { pres: "monstro", inf: "monstrare", perf: "monstravi", sup: "monstratus" },
  { pres: "navigo", inf: "navigare", perf: "navigavi", sup: "navigatus" },
  { pres: "oppugno", inf: "oppugnare", perf: "oppugnavi", sup: "oppugnatus" },
  { pres: "propero", inf: "properare", perf: "properavi", sup: "properatus" },
  { pres: "repugno", inf: "repugnare", perf: "repugnavi", sup: "repugnatus" },
  { pres: "signo", inf: "signare", perf: "signavi", sup: "signatus" },
  { pres: "supero", inf: "superare", perf: "superavi", sup: "superatus" },
  { pres: "tempto", inf: "temptare", perf: "temptavi", sup: "temptatus" },

  { pres: "vexo", inf: "vexare", perf: "vexavi", sup: "vexatus" },
  { pres: "vigilo", inf: "vigilare", perf: "vigilavi", sup: "vigilatus" },
  { pres: "vitupero", inf: "vituperare", perf: "vituperavi", sup: "vituperatus" },
  { pres: "vito", inf: "vitare", perf: "vitavi", sup: "vitatus" },
  { pres: "aedifico", inf: "aedificare", perf: "aedificavi", sup: "aedificatus" },
  { pres: "comparo", inf: "comparare", perf: "comparavi", sup: "comparatus" },
  { pres: "dono", inf: "donare", perf: "donavi", sup: "donatus" },
  { pres: "erro", inf: "errare", perf: "erravi", sup: "erratus" },
  { pres: "fugo", inf: "fugare", perf: "fugavi", sup: "fugatus" },
  { pres: "honoro", inf: "honorare", perf: "honoravi", sup: "honoratus" },
  { pres: "ioco", inf: "iocare", perf: "iocavi", sup: "iocatus" },
  { pres: "nuntio", inf: "nuntiare", perf: "nuntiavi", sup: "nuntiatus" },
  { pres: "penso", inf: "pensare", perf: "pensavi", sup: "pensatus" },
  { pres: "planto", inf: "plantare", perf: "plantavi", sup: "plantatus" },
  { pres: "reparo", inf: "reparare", perf: "reparavi", sup: "reparatus" },
  { pres: "specto", inf: "spectare", perf: "spectavi", sup: "spectatus" },
  { pres: "tuto", inf: "tutare", perf: "tutavi", sup: "tutatus" },
  { pres: "verno", inf: "vernare", perf: "vernavi", sup: "vernatus" }
].map(lemma => {
    const lemmaPres = lemma.pres;
    const lemmaInf = lemma.inf;
    const lemmaPerf = lemma.perf;
    const lemmaSup = lemma.sup;
    let infStem = getStem(lemmaInf, 2);
    let perfStem = getStem(lemmaPerf, 1);
    let supStem = getStem(lemmaSup, 2);

    let specialStem = getStem(lemmaInf, 3);

    return {
        ActiveIndicative: {
            present: { firstPerSg: lemmaPres, secondPerSg: infStem + "s", thirdPerSg: infStem + "t", firstPerPl: infStem + "mus", secondPerPl: infStem + "tis", thirdPerPl: infStem + "nt"},
            imperfect: { firstPerSg: infStem + "bam", secondPerSg: infStem + "bas", thirdPerSg: infStem + "bat", firstPerPl: infStem + "bamus", secondPerPl: infStem + "batis", thirdPerPl: infStem + "bant" },
            future: { firstPerSg: infStem + "bo" , secondPerSg: infStem + "bis", thirdPerSg: infStem + "bit", firstPerPl: infStem + "bimus", secondPerPl: infStem + "bitis", thirdPerPl: infStem + "bunt"},
            perfect: { firstPerSg: perfStem + "i", secondPerSg: perfStem + "isti", thirdPerSg: perfStem + "it", firstPerPl: perfStem + "imus", secondPerPl: perfStem + "istis", thirdPerPl: perfStem + "erunt"},
            pluperfect: { firstPerSg: perfStem + "eram", secondPerSg: perfStem + "eras", thirdPerSg: perfStem + "erat", firstPerPl: perfStem + "eramus", secondPerPl: perfStem + "eratis", thirdPerPl: perfStem + "erant"},
            futurePerfect: { firstPerSg: perfStem + "ero", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"},
        },
        PassiveIndicative: {
            present: { firstPerSg: specialStem + "or", secondPerSg: infStem + "ris", thirdPerSg: infStem + "tur", firstPerPl: infStem + "mur", secondPerPl: infStem + "mini", thirdPerPl: infStem + "ntur"},
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
            present: { firstPerSg: specialStem + "em", secondPerSg: specialStem + "es", thirdPerSg: specialStem + "et", firstPerPl: specialStem + "emus", secondPerPl: specialStem + "etis", thirdPerPl: specialStem + "ent"},
            imperfect: { firstPerSg: infStem + "res", secondPerSg: infStem + "res", thirdPerSg: infStem + "ret", firstPerPl: infStem + "remus", secondPerPl: infStem + "retis", thirdPerPl: infStem + "rent"},
            perfect: { firstPerSg: perfStem + "erim", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"},
            pluperfect: { firstPerSg: perfStem + "issem", secondPerSg: perfStem + "isses", thirdPerSg: perfStem + "isset", firstPerPl: perfStem + "issemus", secondPerPl: perfStem + "issetis", thirdPerPl: perfStem + "issent"},
        },
        PassiveSubjunctive: {
            present: { firstPerSg: specialStem + "er", secondPerSg: specialStem + "eris", thirdPerSg: specialStem + "etur", firstPerPl: specialStem + "emur", secondPerPl: specialStem + "emini", thirdPerPl: specialStem + "entur"},
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

/*{ firstPerSg: , secondPerSg: , thirdPerSg: , firstPerPl: , secondPerPl: , thirdPerPl: },*/