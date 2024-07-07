const  groupAnagrams = (input) => {
    const anagrams = {};
    for (const i of input) {
        const sortedString = i.split('').sort().join('');
        if (!anagrams[sortedString]) {
            anagrams[sortedString] = [];
        }
        anagrams[sortedString].push(i);
    }
    return Object.values(anagrams);
}

// usage
const sample = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(sample);
console.log(output);
