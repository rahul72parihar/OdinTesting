export function cypher(str) {
  const size = str.length;
  let ans = "";
  for (let i = 0; i < size; i++) {
    ans += getChar(str[i]);
  }
  return ans;
}
function getChar(char) {
  if (char.toLowerCase() === char.toUpperCase()) return char;
  const base = char == char.toLowerCase() ? "a" : "A";

  return String.fromCharCode(
    base.charCodeAt(0) + ((char.charCodeAt(0) - base.charCodeAt(0) + 5) % 26)
  );
}
