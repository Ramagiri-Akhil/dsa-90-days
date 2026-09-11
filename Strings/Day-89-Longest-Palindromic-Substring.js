function longestPalindrome(s) {
  if (s.length < 2) {
    return s;
  }

  let start = 0;
  let maxLength = 1;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {

    let oddLength = expand(i, i);

    let evenLength = expand(i, i + 1);

    let currentLength = Math.max(oddLength, evenLength);

    if (currentLength > maxLength) {
      maxLength = currentLength;

      start = i - Math.floor((currentLength - 1) / 2);
    }
  }

  return s.slice(start, start + maxLength);
};
