function minWindow(s, t) { 
    if (t.length > s.length) return "";
    
    let need = new Map();
    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let window = new Map();
    let left = 0;
    let formed = 0;
    let minSt = 0;
    let minLen = Infinity;
    let required = need.size;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        window.set(char, (window.get(char) || 0) + 1);

        if (need.has(char) && window.get(char) === need.get(char)) formed++;

        while (formed === required) { 
            let currentLen = right - left + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
                minSt = left;
            }
            let leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);
            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) formed--;
            left++;
        }
    }
    return minLen === Infinity ? "" : s.slice(minSt, minSt + minLen);
}