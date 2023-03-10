import type { RoomCommon } from "../../types";
import type { User } from "../UserManger";
export declare class Room {
    protected _roomInfo: RoomCommon;
    constructor(obj: RoomCommon);
    get roomMembers(): User[];
    isOpenRoom(): this is OpenRoom;
    get raw(): RoomCommon;
    toJSON(): RoomCommon;
}
export declare class OpenRoom extends Room {
    constructor(obj: RoomCommon);
    isOpenRoom(): this is OpenRoom;
}
