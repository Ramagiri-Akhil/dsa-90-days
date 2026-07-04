function AllAnagrams(s, p) {
    let result = [];
    let pCount = new Array(26).fill(0);
    let sCount = new Array(26).fill(0);
    for(let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i) - 97]++;
    }
    if(isEqual(pCount, sCount)) {
        result.push(0);
    }
    for(let i = p.length; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 97]++;
        sCount[s.charCodeAt(i - p.length) - 97]--;  
        if(isEqual(pCount, sCount)) {
            result.push(i - p.length + 1);
        }
    }
    return result;
}
function isEqual(arr1, arr2) {
    for(let i = 0; i < 26; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }   
    return true;
}
