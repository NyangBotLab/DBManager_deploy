import type { UserCommonType, UserInfoType } from '../../types';
import type { OpenUser } from './open_user';
import type { UserSelf } from './user_self';
export declare class User {
    protected _raw: UserInfoType;
    constructor(obj: UserCommonType);
    isMine(): this is UserSelf;
    /**
     * 유저 고유 번호
     */
    get id(): string;
    /**
     * 유저 이름
     */
    get name(): string;
    /**
     * 자기가 직접 설정한 이름을 가져옵니다.(실제 프로필 전용)
     */
    get customName(): string | null;
    /**
     * 유저 멤버타입(오픈톡)
     */
    get memberType(): number;
    /**
     * 전체 정보를 가져옵니다
     */
    get raw(): UserInfoType;
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
    toJSON(): UserInfoType;
}
