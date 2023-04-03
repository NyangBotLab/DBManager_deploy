import type { OpenUserInfoType, UserCommonInterface } from "../../../types";
export declare class User {
    protected _data: UserCommonInterface;
    constructor(obj: UserCommonInterface);
    /**
     * 유저 고유 번호
     */
    get id(): string;
    /**
     * 유저 이름
     */
    get name(): string;
    /**
     * 유저 멤버타입(오픈톡)
     */
    get memberType(): number;
    /**
     * 전체 정보를 가져옵니다
     */
    get raw(): UserCommonInterface;
    /**
     * 오픈채팅 유저 여부
     */
    isOpenUser(): this is OpenUser;
    /**
     * 현재 프로필 이미지를 가져옵니다 총 3종류
     */
    get profileImage(): {
        profile_url: string;
        full_profile_url: string;
        origin_profile_url: string;
    };
    toJSON(): UserCommonInterface;
}
export declare class OpenUser extends User {
    constructor(obj: OpenUserInfoType);
    get raw(): OpenUserInfoType;
    get memberType(): number;
    /**
     * 방장인지 확인합니다
     */
    isHost(): boolean;
    /**
     * 관리자(부방, 방장)인지 확인합니다
     */
    isManager(): boolean;
    isOpenUser(): this is OpenUser;
}
