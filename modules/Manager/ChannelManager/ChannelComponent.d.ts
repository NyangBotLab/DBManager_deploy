export declare class ChannelComponent {
    /**
     * 방 고유 아이디
     */
    protected _id: string;
    /**
     * 방 이름
     */
    protected _name: string;
    private _replyAction;
    private _readAction;
    constructor(
    /**
     * 방 고유 아이디
     */
    _id: string, 
    /**
     * 방 이름
     */
    _name: string, _replyAction: any, _readAction: any);
    /**
     * 방 고유 아이디
     */
    get id(): string;
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
    private _isAPI2;
    private _getContext;
}
