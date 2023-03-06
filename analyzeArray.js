export function analyzeArray(arr) {
  if (!arr) return null;
  if (arr.length === 0) return null;
  const object = {};
  let mini = Number.MAX_SAFE_INTEGER;
  let maxi = Number.MIN_SAFE_INTEGER;
  let length = arr.length;
  let total = 0;
  arr.forEach((curr) => {
    mini = Math.min(mini, curr);
    maxi = Math.max(maxi, curr);
    total += curr;
  });
  object.average = total / length;
  object.min = mini;
  object.max = maxi;
  object.length = length;
  return object;
}
