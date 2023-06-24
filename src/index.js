function toVal(mix) {
  if (!mix) return false;
  let str = "";
  str += mix;
  return str;
}

/**
 * @function clss
 * @param {...(string|boolean)} expressions - Either class names or expressions that evaluate to class names conditionally
 * @yields {string} - Returns the computed class string
 */
export function clss(...expressions) {
  let i = 0,
    tmp,
    x,
    str = "";
  while (i < expressions.length) {
    if ((tmp = expressions[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
