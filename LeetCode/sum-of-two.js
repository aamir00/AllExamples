var twoSum = function(nums, target) {
	var result = [];
	for (var i = 0; i < nums.length; i++) {
		for (var j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
				return result;
			}
		}
	}
};

// one pass solution

var nums = [ 3, 2, 4 ];
var target = 6;

res = twoSum(nums, target);
console.log(res);
