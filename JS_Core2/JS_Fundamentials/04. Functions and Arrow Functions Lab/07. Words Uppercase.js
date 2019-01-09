function wordsUppercase(str) {
    console.log(str.split(/\W+/).filter(w => w !== '')
        .map(w => w.toUpperCase()).join(', '));

}

wordsUppercase('koza kon bob qde li')