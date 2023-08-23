import { Chat } from './Chat';
import type { ChatType, FeedAttach, FeedUser } from '../../types';
export declare class FeedChat extends Chat {
    /**
     * 피드타입
     */
    feedType: number;
    constructor(chat: ChatType);
    /**
     * 피드에 담긴 내용을 가져옵니다
     */
    get message(): string | FeedAttach;
    isFeed(): this is FeedChat;
}
export declare class InviteFeed extends FeedChat {
    constructor(props: ChatType);
    /**
     * 초대당한 사람들을 가져옵니다
     */
    get invitedUsers(): FeedUser[];
    /**
     * 초대한 사람을 가져옵니다
     */
    get inviteUser(): FeedUser;
    /**
     * 오픈챗 여부(레거시)
     * @deprecated
     */
    isOpenChat(): this is OpenChatJoinedFeed;
}
export declare class OpenChatJoinedFeed extends FeedChat {
    constructor(props: ChatType);
    /**
     * 참가한 사람을 가져옵니다
     */
    get joinUsers(): FeedUser[];
    /**
     * 오픈챗 여부(레거시)
     * @deprecated
     */
    isOpenChat(): this is OpenChatJoinedFeed;
}
export declare abstract class KickedFeed extends FeedChat {
    /**
     * 오픈챗 여부
     */
    isOpenChat(): this is OpenChatKickedFeed;
}
export declare class LeaveFeed extends KickedFeed {
    constructor(props: ChatType);
    /**
     * 나간 사람을 가져옵니다
     */
    get leaveUser(): FeedUser;
    /**
     * 조용히 나가기 여부
     */
    isHideExit(): boolean;
    /**
     * 강퇴당한 여부(팀채팅)
     */
    isKicked(): boolean | undefined;
}
export declare class OpenChatKickedFeed extends KickedFeed {
    constructor(props: ChatType);
    /**
     * 강퇴당한 사람을 얻어옵니다
     */
    get kickedUser(): FeedUser;
    /**
     * 강퇴한 사람의 유저정보를 가져옵니다
     */
    get kickedBy(): import("..").User;
    isOpenChat(): this is OpenChatKickedFeed;
}
export declare class MemberTypeChangedFeed extends FeedChat {
    constructor(props: ChatType);
    /**
     * 새 부방장 임명 여부
     */
    isPromote(): this is PromoteFeed;
    /**
     * 새 부방장 자른 여부
     */
    isDemote(): this is DemoteFeed;
    /**
     * 방장을 넘겼는지 여부
     */
    isHandover(): this is HandOverFeed;
}
export declare class PromoteFeed extends MemberTypeChangedFeed {
    constructor(props: ChatType);
    /**
     * 새 부방장이 된 사람을 가져옵니다
     */
    get promoteUser(): FeedUser;
    isPromote(): this is PromoteFeed;
}
export declare class DemoteFeed extends MemberTypeChangedFeed {
    constructor(props: ChatType);
    /**
     * 부방장 잘린 사람을 가져옵니다
     */
    get demoteUser(): FeedUser;
    isDemote(): this is DemoteFeed;
}
export declare class HandOverFeed extends MemberTypeChangedFeed {
    constructor(props: ChatType);
    /**
     * 이전 방장을 가져옵니다
     */
    get prevHost(): FeedUser;
    /**
     * 새 방장을 가져옵니다
     */
    get newHost(): FeedUser;
    isHandover(): this is HandOverFeed;
}
export declare class DeleteFeed extends FeedChat {
    protected _originChat: Chat;
    constructor(props: ChatType);
    /**
     * 지운 챗 원본을 가져옵니다
     */
    get deletedChat(): Chat;
}
