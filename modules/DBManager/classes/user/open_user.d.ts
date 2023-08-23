import { User } from './user';
import type { OpenUserInfoType } from '../../types';
import { BoardVField, UserCommonType, UserVField } from '../../types';
export declare class OpenUser extends User {
    constructor(obj: OpenUserInfoType);
    get raw(): UserCommonType<UserVField, BoardVField>;
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
