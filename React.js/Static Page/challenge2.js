const name = ["alice", "bob", "charlie", "danielle"];
const capitalize = name.map(function(item) {
    let firstLetter = item.charAt(0).toUpperCase();
    let str = firstLetter + item.slice(1);
    return str;
})
console.log(capitalize)

