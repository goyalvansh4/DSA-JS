var subsets = function(nums) {
  let output = [];
  function helper(i, subset) {
      if (i === nums.length) {
          output.push([...subset]);  // Make a copy of subset to store in output
          return;
      }
      // Recurse without including nums[i]
      helper(i + 1, subset);
      // Include nums[i] in the subset
      subset.push(nums[i]);
      helper(i + 1, subset);
      // Backtrack to remove nums[i] and try the next possibility in the recursion
      subset.pop();
  }
  // Start the recursion with the initial index and empty subset
  helper(0, []);
  return output;
};
