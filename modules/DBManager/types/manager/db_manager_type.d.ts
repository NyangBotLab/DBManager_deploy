import { Channel, Chat, DeleteFeed, InviteFeed, KickedFeed, LeaveFeed, MemberTypeChangedFeed, OpenChatJoinedFeed } from '../../classes';
export interface ChangeUserType {
    name: string;
    user_id: string;
    profile_image: {
        profile_url: string;
        full_profile_url: string;
        origin_profile_url: string;
    };
}
export interface InstanceType {
    /**
     * 유저 키 생략하면 오픈프로필에서 구함
     */
    userID?: string;
    /**
     * 패키지 이름 생략하면 기본값 com.kakao.talk
     */
    packageName?: string;
    /**
     * 루트 여부 생략하면 true
     */
    isRoot?: boolean;
    /**
     * 자기 자신 채팅친거 반응 기본값 false
     */
    reactByMine?: boolean;
}
export type MessageEvents = {
    message: (chat: Chat, channel: Channel) => void;
    delete: (chat: DeleteFeed, channel: Channel) => void;
    hide: (chat: Chat, channel: Channel) => void;
    leave: (chat: LeaveFeed, channel: Channel) => void;
    join: (chat: OpenChatJoinedFeed, channel: Channel) => void;
    invite: (chat: InviteFeed, channel: Channel) => void;
    kick: (chat: KickedFeed, channel: Channel) => void;
    member_type_change: (chat: MemberTypeChangedFeed, channel: Channel) => void;
    open_profile_change: (beforeUser: ChangeUserType, afterUser: ChangeUserType, channel: Channel) => void;
};
