/**
 * Test whether a string contains an integer number
 */
export function isInteger(value: any): boolean;
/**
 * Test whether a string contains a number
 * http://stackoverflow.com/questions/13340717/json-numbers-regular-expression
 */
export function isNumber(value: any): boolean;
/**
 * Test whether a string can be safely represented with a number
 * without information.
 *
 * When approx is true, floating point numbers that lose a few digits but
 * are still approximately equal in value are considered safe too.
 * Integer numbers must still be exactly equal.
 */
export function isSafeNumber(value: any, config: any): boolean;
export function getUnsafeNumberReason(value: any): any;
/**
 * Convert a string into a number when it is safe to do so.
 * Throws an error otherwise, explaining the reason.
 */
export function toSafeNumberOrThrow(value: any, config: any): number;
/**
 * Get the significant digits of a number.
 *
 * For example:
 *   '2.34' returns '234'
 *   '-77' returns '77'
 *   '0.003400' returns '34'
 *   '120.5e+30' returns '1205'
 **/
export function extractSignificantDigits(value: any): any;
export const UnsafeNumberReason: any;
