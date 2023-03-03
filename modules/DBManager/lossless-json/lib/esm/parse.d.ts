/**
 * The LosslessJSON.parse() method parses a string as JSON, optionally transforming
 * the value produced by parsing.
 *
 * The parser is based on the parser of Tan Li Hou shared in
 * https://lihautan.com/json-parser-with-javascript/
 *
 * @param text
 * The string to parse as JSON. See the JSON object for a description of JSON syntax.
 *
 * @param [reviver]
 * If a function, prescribes how the value originally produced by parsing is
 * transformed, before being returned.
 *
 * @param [parseNumber=parseLosslessNumber]
 * Pass a custom number parser. Input is a string, and the output can be unknown
 * numeric value: number, bigint, LosslessNumber, or a custom BigNumber library.
 *
 * @returns Returns the Object corresponding to the given JSON text.
 *
 * @throws Throws a SyntaxError exception if the string to parse is not valid JSON.
 */
export function parse(text: any, reviver?: any, ...args: any[]): any;
export function isValidStringCharacter(code: any): boolean;
export const codeUppercaseA: number;
export const codeLowercaseA: number;
export const codeUppercaseE: number;
export const codeLowercaseE: number;
export const codeUppercaseF: number;
export const codeLowercaseF: number;
