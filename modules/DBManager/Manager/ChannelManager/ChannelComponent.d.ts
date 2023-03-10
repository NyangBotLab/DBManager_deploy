import type { Room, OpenRoom } from "../RoomManger";
export declare class ChannelComponent {
    protected _id: string;
    protected _name: string;
    private _replyAction;
    private _readAction;
    protected _roomInfo: Room | OpenRoom | null;
    constructor(id: string, name: string, replayAct: any, readAct: any);
    /**
     * 방 고유 아이디
     */
    get id(): string;
    isOpenRoom(): boolean;
    get roomInfo(): import("../../types").RoomCommon | null;
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
        room_info: Room | OpenRoom | null;
    };
    private _isAPI2;
    private _getContext;
}
