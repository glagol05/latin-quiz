import { getStem } from "../utils/stem.js";

export const thirdConjugationVerbs = [
  { pres: "ago", inf: "agere", perf: "egi", sup: "actus" },
  { pres: "dico", inf: "dicere", perf: "dixi", sup: "dictus" },
  { pres: "mitto", inf: "mittere", perf: "misi", sup: "missus" },
  { pres: "pono", inf: "ponere", perf: "posui", sup: "positus" },
  { pres: "regō", inf: "regere", perf: "rexi", sup: "rectus" },
  { pres: "capio", inf: "capere", perf: "cepi", sup: "captus" },
  { pres: "facio", inf: "facere", perf: "feci", sup: "factus" },
  { pres: "curro", inf: "currere", perf: "cucurrī", sup: "cursus" },
  { pres: "lego", inf: "legere", perf: "legi", sup: "lectus" },
  { pres: "scribo", inf: "scribere", perf: "scripsi", sup: "scriptus" },
  { pres: "traho", inf: "trahere", perf: "traxi", sup: "tractus" },
  { pres: "pello", inf: "pellere", perf: "pepuli", sup: "pulsus" },
  { pres: "tango", inf: "tangere", perf: "tetigi", sup: "tactus" },
  { pres: "vinco", inf: "vincere", perf: "vici", sup: "victus" },
  { pres: "dēfendo", inf: "dēfendere", perf: "dēfendi", sup: "dēfensus" },
  { pres: "coquo", inf: "coquere", perf: "coxi", sup: "coctus" },
  { pres: "claudo", inf: "claudere", perf: "clausi", sup: "clausus" },
  { pres: "cēdo", inf: "cēdere", perf: "cessi", sup: "cessus" },
  { pres: "rēpō", inf: "rēpōnere", perf: "rēpōsui", sup: "rēpositus" },
  { pres: "capiō", inf: "capiere", perf: "cēpi", sup: "captus" },
  { pres: "cōnstituō", inf: "cōnstituere", perf: "cōnstitui", sup: "cōnstitutus" },
  { pres: "dēmō", inf: "dēmere", perf: "dēmpsi", sup: "dēmptus" },
  { pres: "currō", inf: "currere", perf: "cucurrī", sup: "cursus" },
  { pres: "gerō", inf: "gerere", perf: "gessī", sup: "gestus" },
  { pres: "cōgō", inf: "cōgere", perf: "coēgi", sup: "coāctus" },
  { pres: "rumpō", inf: "rumpere", perf: "rūpī", sup: "ruptus" },
  { pres: "crēdo", inf: "crēdere", perf: "crēdidī", sup: "crēditus" },
  { pres: "quaerō", inf: "quaerere", perf: "quaesīvī", sup: "quaesītus" },
  { pres: "petō", inf: "petere", perf: "petīvī", sup: "petītus" },
  { pres: "tollō", inf: "tollere", perf: "sustulī", sup: "sublātus" },
  { pres: "vīvō", inf: "vīvere", perf: "vīxī", sup: "vītus" },
  { pres: "cadō", inf: "cadere", perf: "cecīdī", sup: "cāsus" },
  { pres: "flectō", inf: "flectere", perf: "flēxī", sup: "flexus" },
  { pres: "vertere", inf: "vertere", perf: "vertī", sup: "versus" },
  { pres: "sūmō", inf: "sūmere", perf: "sūmpsī", sup: "sūmptus" },
  { pres: "gero", inf: "gerere", perf: "gessī", sup: "gestus" },
  { pres: "cēnseō", inf: "cēnsēre", perf: "cēnsuī", sup: "cēnsus" },
  { pres: "mordēo", inf: "mordēre", perf: "momordī", sup: "morsus" },
  { pres: "percutiō", inf: "percutere", perf: "percussī", sup: "percussus" },
  { pres: "condūcō", inf: "condūcere", perf: "condūxī", sup: "condūctus" },
  { pres: "abscondō", inf: "abscondere", perf: "abscondī", sup: "absconditus" },
  { pres: "dīvidō", inf: "dīvidere", perf: "dīvīsī", sup: "dīvīsus" },
  { pres: "dēlēctō", inf: "dēlēctere", perf: "dēlēxī", sup: "dēlēctus" },
  { pres: "asciō", inf: "ascīre", perf: "ascīvī", sup: "ascītus" },
  { pres: "vīvō", inf: "vīvere", perf: "vīxī", sup: "victus" },
  { pres: "fugō", inf: "fugere", perf: "fūgī", sup: "fugitus" },
  { pres: "terrō", inf: "terrere", perf: "terrūī", sup: "territus" },
  { pres: "rumpō", inf: "rumpere", perf: "rūpī", sup: "ruptus" },
  { pres: "sciō", inf: "scīre", perf: "scīvī", sup: "scītus" },
  { pres: "spondeō", inf: "spondēre", perf: "spopondī", sup: "sponsus" },
  { pres: "stringō", inf: "stringere", perf: "strinxī", sup: "strictus" },
  { pres: "stinguō", inf: "stinguere", perf: "stīnxī", sup: "stinctus" },
  { pres: "dēficiō", inf: "dēficere", perf: "dēfēcī", sup: "dēfectus" },
  { pres: "iaciō", inf: "iacere", perf: "iēcī", sup: "iactus" },
  { pres: "pergo", inf: "pergere", perf: "perrēxī", sup: "perrectus" },
  { pres: "ostendō", inf: "ostendere", perf: "ostendī", sup: "ostentus" },
  { pres: "temptō", inf: "temptāre", perf: "temptāvī", sup: "temptātus" },
  { pres: "vigō", inf: "vigere", perf: "vīguī", sup: "vigitus" },
  { pres: "rēferō", inf: "rēferre", perf: "rettulī", sup: "relātus" },
  { pres: "afficiō", inf: "afficere", perf: "affēcī", sup: "affectus" },
  { pres: "excipiō", inf: "excipere", perf: "excēpī", sup: "exceptus" },
  { pres: "incipiō", inf: "incipere", perf: "incēpī", sup: "inceptus" },
  { pres: "recipiō", inf: "recipere", perf: "recēpī", sup: "receptus" },
  { pres: "faciō", inf: "facere", perf: "fēcī", sup: "factus" },
  { pres: "coniciō", inf: "conicere", perf: "coniēcī", sup: "coniectus" },
  { pres: "diligo", inf: "diligere", perf: "dīlēxī", sup: "dīlēctus" },
  { pres: "leniō", inf: "lenīre", perf: "lenīvī", sup: "lenītus" },
  { pres: "adiciō", inf: "adicere", perf: "adiēcī", sup: "adiectus" },
  { pres: "corripiō", inf: "corripere", perf: "corrēpī", sup: "correptus" },
  { pres: "dēiciō", inf: "dēicere", perf: "dēiēcī", sup: "dēiectus" },
  { pres: "fīō", inf: "fierī", perf: "factus sum", sup: "factus" },
  { pres: "sequor", inf: "sequī", perf: "secūtus sum", sup: "secūtus" }
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
            present: { firstPerSg: lemmaPres, secondPerSg: specialStem + "is", thirdPerSg: specialStem + "it", firstPerPl: specialStem + "imus", secondPerPl: specialStem + "itis", thirdPerPl: specialStem + "unt"},
            imperfect: { firstPerSg: infStem + "bam", secondPerSg: infStem + "bas", thirdPerSg: infStem + "bat", firstPerPl: infStem + "bamus", secondPerPl: infStem + "batis", thirdPerPl: infStem + "bant"},
            future: { firstPerSg: specialStem + "am", secondPerSg: infStem + "s", thirdPerSg: infStem + "t", firstPerPl: infStem + "mus", secondPerPl: infStem + "tis", thirdPerPl: infStem + "nt"},
            perfect: { firstPerSg: perfStem + "i", secondPerSg: perfStem + "isti", thirdPerSg: perfStem + "it", firstPerPl: perfStem + "imus", secondPerPl: perfStem + "istis", thirdPerPl: perfStem + "erunt"},
            pluperfect: { firstPerSg: perfStem + "eram", secondPerSg: perfStem + "eras", thirdPerSg: perfStem + "erat", firstPerPl: perfStem + "eramus", secondPerPl: perfStem + "eratis", thirdPerPl: perfStem + "erant"},
            futurePerfect: { firstPerSg: perfStem + "ero", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "eris", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"}
        },
        PassiveIndicative: {
            present: { firstPerSg: specialStem + "or", secondPerSg: infStem + "eris", thirdPerSg: specialStem + "itur", firstPerPl: specialStem + "imur", secondPerPl: specialStem + "imini", thirdPerPl: specialStem + "untur"},
            imperfect: { firstPerSg: infStem + "bar", secondPerSg: infStem + "baris", thirdPerSg: infStem + "batur", firstPerPl: infStem + "bamur", secondPerPl: infStem + "bamini", thirdPerPl: infStem + "bantur"},
            future: { firstPerSg: specialStem + "ar", secondPerSg: infStem + "ris", thirdPerSg: infStem + "tur", firstPerPl: infStem + "mur", secondPerPl: infStem + "mini", thirdPerPl: infStem + "ntur"},
            perfect: { firstPerSg: lemmaSup + " sum", secondPerSg: lemmaSup + " es", thirdPerSg: lemmaSup + " est", firstPerPl: lemmaSup + " sumus", secondPerPl: lemmaSup + " estis", thirdPerPl: lemmaSup + " sunt"},
            pluperfect: { firstPerSg: lemmaSup + " eram", secondPerSg: lemmaSup + " eras", thirdPerSg: lemmaSup + " erat", firstPerPl: lemmaSup + " eramus", secondPerPl: lemmaSup + " eratis", thirdPerPl: lemmaSup + " erant"},
            futurePerfect: { firstPerSg: lemmaSup + " ero", secondPerSg: lemmaSup + " eris", thirdPerSg: lemmaSup + " erit", firstPerPl: lemmaSup + " erimus", secondPerPl: lemmaSup + " eritis", thirdPerPl: lemmaSup + " erunt"}
        },
        Infinitive: {
            infinitive: { inf: lemmaInf }
        },
        ActiveSubjunctive: {
                present: { firstPerSg: specialStem + "am", secondPerSg: specialStem + "as", thirdPerSg: specialStem + "at", firstPerPl: specialStem + "amus", secondPerPl: specialStem + "atis", thirdPerPl: specialStem + "ant"},
                imperfect: { firstPerSg: infStem + "rem", secondPerSg: infStem + "res", thirdPerSg: infStem + "ret", firstPerPl: infStem + "remus", secondPerPl: infStem + "retis", thirdPerPl: infStem + "rent"},
                perfect: { firstPerSg: perfStem + "erim", secondPerSg: perfStem + "eris", thirdPerSg: perfStem + "erit", firstPerPl: perfStem + "erimus", secondPerPl: perfStem + "eritis", thirdPerPl: perfStem + "erint"},
                pluperfect: { firstPerSg: perfStem + "issem", secondPerSg: perfStem + "isses", thirdPerSg: perfStem + "isset", firstPerPl: perfStem + "issemus", secondPerPl: perfStem + "iessetis", thirdPerPl: perfStem + "issent"}
        },
        PassiveSubjunctive: {
                present: { firstPerSg: specialStem + "ar", secondPerSg: specialStem + "aris", thirdPerSg: specialStem + "atur", firstPerPl: specialStem + "amur", secondPerPl: specialStem + "amini", thirdPerPl: specialStem + "antur"},
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