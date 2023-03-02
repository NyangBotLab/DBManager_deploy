declare const importPackage: (...pkgs: (android | androidx | java | javax)[]) => any;
declare const importClass: (...pkgs: (android | androidx | java | javax)[]) => any;

declare namespace FileStream {
    export function read(path: string): string;

    export function write(path: string, data: string): void;
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


declare namespace Api {
    export function reload(): boolean;
    export function reload(scriptName: string, throwOnError: boolean = false): boolean;

    export function compile(): boolean;
    export function compile(scriptName: string, throwOnError: boolean = false): boolean;

    export function prepare(scriptName: string): number;

    export function unload(scriptName: string): boolean;

    export function off(): boolean;
    export function off(scriptName: string): boolean;

    export function on(): boolean;
    export function on(scriptName: string): boolean;

    export function isOn(scriptName: string): boolean;

    export function isCompiled(scriptName: string): boolean;

    export function isCompiling(scriptName: string): boolean;

    export function getScriptNames(): string[];

    export function replyRoom(room: string, message: string, hideToast: boolean = false): boolean;

    export function canReply(room: string): boolean;

    export function showToast(content: string, length: number): void;

    export function makeNoti(title: string, content: string, id: number): string[];

    export function papagoTranslate(sourceLanguage: string, targetLanguage: string, content: string, errorToString: boolean = false): string;

    export function gc(): void;

    export function UIThread(func: Function, onComplete: Function): void;

    export function getActiveThreadsCount(scriptName: string): number;

    export function interruptThreads(scriptName: string): void;

    export function isTerminated(scriptName: string): boolean;

    export function markAsRead(room?: string, packageName?: string): boolean;

    export function getContext(): android.content.Context;
}

declare namespace Device {
    export function acquireWakeLock(param1: number, param2: string);
}

declare const require = (module: string) => any;
declare const global = () => any;
