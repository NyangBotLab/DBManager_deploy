const DB = require('./modules/DBManager').DBManager;

var DBListener = DB.getInstance("YOUR_PACKAGE_NAME", 'YOUR_USER_ID', false /*get RootPermission*/);
const ALLSEE = "\u200b".repeat(500);
/**
 * 메시지를 수신 할 때
 */
DBListener.on("message", (chat, channel) => {
    /**
     * 한번도 수신되지 않은 채널이면 null
     */
    if (channel === null) {
        return;
    }
    /**
     * 채팅 유저정보
     */
    let user = chat.user;

    /**
     * /ㅎㅇ라고 말하면 보낸사람 + 님 안녕하세요
     */
    if (chat.text === "/ㅎㅇ") {
        channel.send(chat.user + "님 안녕하세요")
    }

    /**
     * 답장의 원본 원본 꼬리물기로 얻기
     */
    if (chat.isReply() && chat.text === "/원본답장") {
        let tempChat = chat.source;
        while (tempChat.isReply()) {
            tempChat = tempChat.source;
        }
        channel.send(tempChat.user.name + "님이 보낸 원본입니다 " + chat.text)
    }
    else if(chat.isVideo()){

    }
    else if(chat.isAudio()){
        
    }
});

/**
 * 오픈채팅에 들어왔을 때 반응
 */
DBListener.on("join", (chat, channel) => {
    channel.send(chat.joinUsers[0].nickName + "님 안녕하세요")
});
/**
 * 단체톡방에 초대했을 때 반응
 */
DBListener.on("invite", (chat, channel) => {
    channel.send(chat.inviteUser.nickName + "님이" + chat.invitedUsers.map((e) => e.nickName).join(",") + "님을 초대했습니다")
});

/**
 * 톡방에서 나갈 때
 */

DBListener.on("leave", (chat, channel) => {
    channel.send(chat.leaveUser.nickName + "님 잘가요");
});
/**
 * 톡방에서 강퇴 당할 때
 */

DBListener.on("kick", (chat, channel) => {
    channel.send(chat.kickedBy.name + "님이 " + chat.kickedUser.nickName + "님을 강퇴했습니다")
})
/**
 * 누군가 메시지를 지웠을 때
 */
DBListener.on("delete", (chat, channel) => {
    channel.send(chat.deletedChat.text + "메시지가 지워졌어요");
});
/**
 * 방장이나 부방장이 메시지를 가렸을 때
 */
DBListener.on("hide", (chat, channel) => {
    channel.send(chat.user.name + "님이 " + "메시지를 가렸어요");
});

/**
 * 권한이 바뀔 때
 */
DBListener.on("member_type_change", (chat, channel) => {
    if (chat.isDemote()) {
        channel.send(chat.demoteUser.nickName + "님이 부방장에서 내려왔어요")
    } else if (chat.isPromote()) {
        channel.send(chat.promoteUser.nickName + "님이 부방장이 되었어요")
    } else if (chat.isHandover()) {
        channel.send(chat.newHost.nickName + "님이 새 방장이 되었어요");
    }
});
DBListener.start();
