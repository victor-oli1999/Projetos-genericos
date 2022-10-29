const nums = [1, 2, 3, 4, 5];
console.log(nums)
var squared = [];
/*for (let i = 0; i < nums.length; i++) {
    squared.push(nums[i] * nums[i]);
}*/
// with Map
var squared = nums.map(function(item) {
    return item * item
})

console.log(squared)


