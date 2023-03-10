import HashMap = java.util.HashMap;
import { Channel } from "./Channel";
export declare namespace ChannelManager {
    function addChannel(sbn: any): void;
    function getChannelList(): HashMap<string, Channel>;
    function hasChannelByID(id: string): boolean;
    function getChannelByID(id: string): Channel | null;
}
