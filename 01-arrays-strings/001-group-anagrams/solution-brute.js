/**
 * @param {string[]} strs
 * @param {string[][]} output
 */
function agroupAnagrams (strs) {
    const output = new Map();
    for (let str of strs) {
      let firmaUnica;
      if (str === '') {
        firmaUnica = '_';
      } else {
        firmaUnica = str.split('').sort().join('');
      }
      if (!output.has(firmaUnica)) {
        output.set(firmaUnica, []);
      }
      output.get(firmaUnica).push(str);
      console.log(output);
    }
    return Array.from(output.values());
}

agroupAnagrams(["","sol", "los","lso", "slo","ate","tea","tea","","a","a","ca","ca","ca"]);
