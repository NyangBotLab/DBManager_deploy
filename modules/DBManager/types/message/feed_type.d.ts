export interface FeedUser {
    /**
     * 유저 닉네임
     */
    nickName: string;
    /**
     * 유저 고유 번호
     */
    userId: string;
}
export interface FeedAttach {
    /**
     * 피드타입
     */
    feedType: number;
}
export interface InviteFeedType extends FeedAttach {
    feedType: 1;
    /**
     * 초대한 사람
     */
    inviter: FeedUser;
    /**
     * 초대당한 사람들
     */
    members: FeedUser[];
}
export interface LeaveFeedType extends FeedAttach {
    feedType: 2;
    /**
     * 나간 사람
     */
    member: FeedUser;
    /**
     * 조용히 나가기 여부
     */
    hidden: boolean;
    /**
     * 추방당했는지(팀채팅)
     */
    kicked?: boolean;
}
export interface OpenChatJoinFeedType extends FeedAttach {
    feedType: 4;
    /**
     * 들어온 사람
     */
    members: FeedUser[];
}
export interface OpenChatKickedType extends FeedAttach {
    feedType: 6;
    /**
     * 추방당한 사람
     */
    member: FeedUser;
}
export interface HandOverType extends FeedAttach {
    feedType: 15;
    /**
     * 새 방장
     */
    newHost: FeedUser;
    /**
     * 이전 방장
     */
    prevHost: FeedUser;
}
export interface DemoteType extends FeedAttach {
    feedType: 12;
    /**
     * 부방 자격 박탈한 사람
     */
    member: FeedUser;
}
export interface PromoteType extends FeedAttach {
    feedType: 11;
    /**
     * 새 부방
     */
    member: FeedUser;
}
export interface DeleteType extends FeedAttach {
    feedType: 14;
    /**
     * 채팅 로그아이디
     */
    logId: string;
    /**
     * 가려진지
     */
    hidden: true;
    /**
     * 팀챗 방장에게 가려진 여부
     */
    byHost: boolean;
}
