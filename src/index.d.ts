/**
 * @function clss
 * @param {...(string|boolean)} expressions - Either class names or expressions that evaluate to class names conditionally
 * @yields {string} - Returns the computed class string
 */
export function clss(...expressions: (string | boolean)[]): string;
