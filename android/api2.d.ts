declare const importPackage: (...pkgs: (android | androidx | java | javax)[]) => any;
declare const importClass: (...pkgs: (android | androidx | java | javax)[]) => any;

declare namespace FileStream {
	export function read(path: string): string;
	export function write(path: string, data: string): void;
}

declare namespace App {
    export function getContext(): android.content.Context;
    export function runOnUiThread(task: Function, onComplete: Function): void;
}

declare class Bot {
    setCommandPrefix(prefix: string): void;
    send(room: string, message: string, packageName?: string = null): boolean;
    canReply(room: string, packageName?: string = null): boolean;
    getName(): string;
    setPower(power: boolean): void;
    getPower(): boolean;
    compile(): void;
    unload(): void;
    on(eventName: string, listener: Function): void;
    addListener(eventName: string, listener: Function): void;
    off(eventName: string, listener?: Function): void;
    removeListener(eventName: string, listener?: Function): void;
    removeAllListeners(eventName: string): void;
    prependListener(eventName: string, listener: Function): void;
    listeners(eventName: string): Function[];
    markAsRead(room?: string, packageName?: string): boolean;
}

declare namespace BotManager {
    export function getCurrentBot(): Bot;
    export function getBot(botName: string): Bot;
    export function getRooms(packageName?: string): string[];
    export function getBotList(): string[];
    export function getPower(botName: string): boolean;
    export function setPower(botName: string, power: boolean): void;
    export function compile(botName: string, throwOnError?: boolean = false): boolean;
    export function compileAll(): void;
    export function prepare(scriptName: string, throwOnError?: boolean = false): 0 | 1 | 2;
    export function prepare(throwOnError?: boolean = false): number;
    export function isCompiled(scriptName: string): boolean;
    export function unload(): void;

}

declare namespace Log {
	export function d(data: string, showToast: boolean = false): void;
	export function debug(data: string, showToast: boolean = false): void;
	export function e(data: string, showToast: boolean = false): void;
	export function error(data: string, showToast: boolean = false): void;
	export function i(data: string, showToast: boolean = false): void;
	export function info(data: string, showToast: boolean = false): void;
	export function clear(): void;
}


declare namespace Device {
    export function getBuild(): android.os.Build;
    export function getAndroidVersionCode(): number;
    export function getAndroidVersionName(): string;
    export function getPhoneBrand(): string;
    export function getPhoneModel(): string;
    export function isCharging(): boolean;
    export function getPlugType(): 'ac' | 'usb' | 'wireless' | 'unknown';
    export function getBatteryLevel(): number;
    export function getBatteryHealth(): number;
	export function acquireWakeLock(param1: number, param2: string);
}




namespace Event {
    export namespace Activity {
        export const BACK_PRESSED = 'activityBackPressed';
        export const CREATE = 'activityCreate';
        export const DESTROY = 'activityDestroy';
        export const PAUSE = 'activityPause';
        export const RESTART = 'activityRestart';
        export const RESUME = 'activityResume';
        export const START = 'activityStart';
        export const STOP = 'activityStop';
    }
    export const COMMAND = 'command';
    export const MESSAGE = 'message';
    export const NOTIFICATION_POSTED = 'notificationPosted';
    export const START_COMPILE = 'startCompile';
    export const TICK = 'tick';
}


declare const require = (module: string) => any;
declare const global = ()=> any;
