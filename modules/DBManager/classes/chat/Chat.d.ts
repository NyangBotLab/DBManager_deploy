import type { User } from '../user';
import type { Channel } from '../channel';
import type { ChatType } from '../../types';
import type { EmoticonChat } from './EmoticonChat';
import type { FeedChat } from './FeedChat';
import type { MultiPhotoChat } from './MultiPhotoChat';
import type { NormalChat } from './NormalChat';
import type { OldEmoticonChat } from './OldEmoticonChat';
import type { PhotoChat } from './PhotoChat';
import type { ReplyChat } from './ReplyChat';
import type { FileChat } from './FileChat';
import type { VideoChat } from './VideoChat';
import type { AudioChat } from './AudioChat';
import type { MapChat } from './MapChat';
import type { ProfileChat } from './ProfileChat';
export declare class Chat {
    private _mentions;
    protected _channel: Channel | null;
    protected _user: User;
    protected _raw: ChatType;
    protected _isHidden: boolean;
    protected _type: number;
    constructor(chatData: ChatType);
    /**
     * 원본타입을 가져옵니다 (삭제된거 상관 없이)
     */
    get originType(): number;
    set channel(channel: Channel | null);
    get channel(): Channel | null;
    set user(user: User);
    /**
     * 유저 정보
     */
    get user(): User;
    get unreadMembers(): User[];
    get readMembers(): User[];
    /**
     * 현재 채팅내용
     */
    get text(): string;
    /**
     * 채팅 고유 아이디
     */
    get id(): string;
    /**
     * 전체 내용을 가져옵니다
     */
    get raw(): ChatType<number, any>;
    /**
     * 외치기 기능을 사용했는지 확인합니다.
     */
    hasShout(): boolean;
    toJSON(): {
        chat: ChatType<number, any>;
        user: User;
        channel: Channel | null;
    };
    /**
     * 보낸 시각을 가져옵니다
     */
    get sendTime(): Date;
    /**
     * Attachment를 가져옵니다
     */
    get attachment(): any;
    /**
     * 이모티콘 여부
     */
    isEmoticon(): this is EmoticonChat;
    /**
     * 삭제 여부
     */
    isDeleted(): boolean;
    /**
     * 피드챗 여부
     */
    isFeed(): this is FeedChat;
    /**
     * 사진 여러개 여부
     */
    isMultiPhoto(): this is MultiPhotoChat;
    /**
     * 일반챗 여부
     */
    isNormal(): this is NormalChat;
    /**
     * 구버전 이모티콘(레거시) 여부
     */
    isOldEmoticon(): this is OldEmoticonChat;
    /**
     * 사진 여부
     */
    isPhoto(): this is PhotoChat;
    /**
     * 답장 여부
     */
    isReply(): this is ReplyChat;
    /**
     * 오디오 여부
     */
    isFile(): this is FileChat;
    /**
     * 비디오 여부
     */
    isVideo(): this is VideoChat;
    /**
     * 오디오 여부
     */
    isAudio(): this is AudioChat;
    /**
     * 맵 여부
     */
    isMap(): this is MapChat;
    isProfile(): this is ProfileChat;
    /**
     * 이전 챗 내용
     */
    getPrevChat(count?: number): Chat | null;
    /**
     * 다음 챗 내용
     */
    getNextChat(count?: number): Chat | null;
    get mentions(): User[];
}
