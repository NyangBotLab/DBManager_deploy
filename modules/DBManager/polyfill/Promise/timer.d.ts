declare function setTimeout_support(callback: any, timeout: any, ...args: any[]): number;
declare function clearTimeout_support(id: any): undefined;
export { setTimeout_support as setTimeout, clearTimeout_support as clearTimeout };
