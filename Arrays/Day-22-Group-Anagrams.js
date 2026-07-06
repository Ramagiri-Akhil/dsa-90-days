// First method to group anagrams is to use a hash map (or dictionary) to store the sorted version of each word as the key and the list of anagrams as the value. 
function groupAnagrams(strs) {
    const map = new Map();
    for(let i = 0; i < strs.length; i++) {
        let word = strs[i];
        let key = word.split('').sort().join('');
        if(!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
}

// Second method to group anagrams is to use a fixed size array to count the frequency of each character in the word. The frequency array can then be converted to a string and used as the key in the hash map.
function groupAnagramsUsingCount(strs) {
    const map = new Map();
    for(let word of strs) {
        const count = new Array(26).fill(0);
        for(let char of word) {
            count[char.charCodeAt(0) - 97]++;
        }
        const key = count.join('#');
        if(!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }
    return Array.from(map.values());
}