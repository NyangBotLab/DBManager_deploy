import type { ChannelCommon, ChannelCountInfo, OpenLinkType } from '../../types';
import type { User } from '../user';
import type { Chat } from '../chat';
import type { OpenChannel, OpenDirectChannel, OpenMultiChannel } from './open-channel';
import type { DirectChannel, MultiChannel } from './normal-channel';
import type { CountOption } from '../../types';
export declare class Channel {
    protected _raw: ChannelCommon;
    protected _id: string;
    protected _host: User | null;
    protected _name: string;
    protected _customName: string | null;
    protected _members: User[];
    protected _lastChat: Chat;
    constructor(obj: ChannelCommon);
    /**
     * 현재 방의 인원을 가져옵니다
     * @return User[]
     */
    get members(): User[];
    get customName(): string | null;
    /**
     * 체널아이디로 채널을 가져옵니다
     * @return Channel|null
     */
    get(i: string | number): Channel | null;
    /**
     * 체널아이디로 채널을 가져옵니다
     * @return Channel|null
     */
    static get(i: string | number): Channel | null;
    /**
     * 방 데이터를 생으로 가져옵니다
     * @return ChannelCommon
     */
    get raw(): ChannelCommon;
    toJSON(): {
        channel: ChannelCommon;
        openLink: null | OpenLinkType;
    };
    /**
     * 방의 마지막 대화를 가져옵니다.
     * @return Chat
     */
    get lastChat(): Chat;
    set name(name: string);
    /**
     * 방의 이름을 가져옵니다
     * @return string
     */
    get name(): string;
    /**
     * 방에다가 메시지를 전송합니다.
     * @return Promise<boolean>
     */
    send(message: string): Promise<boolean>;
    /**
     * 읽기 처리를 합니다
     * @return boolean
     */
    read(): boolean;
    /**
     * 채널 아이디를 가져옵니다
     * @return string
     */
    get id(): string;
    /**
     * 방의 방장을 가져옵니다
     * @return User|null
     */
    get host(): User | null;
    /**
     * 유저별 채팅 수를 구합니다.
     */
    getChatCountGroupByUser(options: CountOption): ChannelCountInfo[];
    /**
     * 대화 내역을 가져옵니다.
     * @return Chat[]
     */
    getRecentChat(count?: number): Chat[];
    /**
     * 여러명이 있는 방인 여부
     * @return boolean
     */
    isGroupChannel(): boolean;
    /**
     * 오픈챗방 여부
     * @return boolean
     */
    isOpenChannel(): this is OpenChannel;
    isMultiChannel(): this is MultiChannel;
    isDirectChannel(): this is DirectChannel;
    isOpenMultiChannel(): this is OpenMultiChannel;
    isOpenDirectChannel(): this is OpenDirectChannel;
}
