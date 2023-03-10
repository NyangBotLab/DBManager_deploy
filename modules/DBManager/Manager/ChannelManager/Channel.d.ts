export declare class Channel {
    protected _id: string;
    protected _name: string;
    protected _replyAction: any;
    protected _readAction: any;
    constructor(id: string, name: string, replayAct: any, readAct: any);
    /**
     * 방 고유 아이디
     */
    get id(): string;
    get raw(): {
        id: string;
        name: string;
    };
    get members(): import("..").User[] | null;
    /**
     * 방 이름
     */
    get name(): string;
    /**
     * 채팅방에 메시지를 발송합니다
     * @param message 발송하려는 메시지
     * @return {boolean}
     */
    send(message: string): boolean;
    /**
     * 채팅방을 읽기처리 합니다
     * @return {boolean}
     */
    read(): boolean;
    toJSON(): {
        name: string;
        id: string;
    };
    protected _isAPI2(): boolean;
    protected _getContext(): android.content.Context;
}
