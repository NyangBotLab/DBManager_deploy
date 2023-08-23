import { NUMSTRING } from '../chat';
export interface MentionAttach {
    /**
     * 유저 아이디
     */
    user_id: NUMSTRING;
    /**
     * 위치
     */
    at: number[];
    /**
     * 길이
     */
    len: string;
}
export interface MentionListAttach {
    mentions: MentionAttach[];
}
