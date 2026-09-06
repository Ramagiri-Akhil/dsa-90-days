function wordLadder(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    let words = new Set(wordList);

    let queue = [[beginWord, 1]];

    words.delete(beginWord);

    let index = 0;

    while (index < queue.length) {

        let [word, steps] = queue[index++];

        for (let i = 0; i < word.length; i++) {

            for (let charCode = 97; charCode <= 122; charCode++) {

                let char = String.fromCharCode(charCode);

                if (char === word[i]) {
                    continue;
                }

                let newWord =
                    word.slice(0, i) +
                    char +
                    word.slice(i + 1);

                if (newWord === endWord) {
                    return steps + 1;
                }

                if (words.has(newWord)) {

                    words.delete(newWord);

                    queue.push([
                        newWord,
                        steps + 1
                    ]);
                }
            }
        }
    }
    return 0;
};