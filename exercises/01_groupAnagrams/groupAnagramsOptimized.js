function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const key = count.join('_');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
        console.log(map);
    }
    return Array.from(map.values());
}
groupAnagrams(["","sol", "los","lso", "slo","ate","tea","tea","","a","a","ca","ca","ca"]);
