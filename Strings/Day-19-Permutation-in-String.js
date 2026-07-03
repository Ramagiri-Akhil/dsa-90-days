function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    const s1count = new Array(26).fill(0);
    const s2count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1count[s1.charCodeAt(i) - 97]++;
        s2count[s2.charCodeAt(i) - 97]++;
    }
    if(isEqual(s1count, s2count)) return true;
    for (let i = s1.length; i < s2.length; i++) {
        s2count[s2.charCodeAt(i - s1.length) - 97]--;
        s2count[s2.charCodeAt(i) - 97]++;
        if (isEqual(s1count, s2count)) return true;
    }
    return false;
}
function isEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }   
}