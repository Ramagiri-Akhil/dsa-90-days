function ransomNote(ransomNote, magazine) {
    let magazineWindow = new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        magazineWindow[magazine.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineWindow[ransomNote.charCodeAt(i) - 97] === 0) {
            return false;
        }
        magazineWindow[ransomNote.charCodeAt(i) - 97]--;
    }
    return true;
}