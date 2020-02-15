function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if(!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPassible = true;
    noteArr.forEach(word => {
        if(magazineObj[word]) {
            magazineObj[word]--;
            if(magazineObj[word] < 0) noteIsPassible = false;
        }
        else noteIsPassible = false;
    });

    // console.log(noteIsPassible);
    return noteIsPassible;
}

// harmlessRansomNote('this is all the magazine text in the magazine', 'this is all the magazine text in the magazine sfsdf');