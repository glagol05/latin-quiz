export function getStem(lemma, lettersToRemove) {
    let stem;
    if(lettersToRemove == 1) {
        stem = lemma.slice(0, -1);
    } else if (lettersToRemove == 2) {
        stem = lemma.slice(0, -2);
    } else if (lettersToRemove == 3) {
        stem = lemma.slice(0, -3);
    }

    return stem;
}