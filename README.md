카카오톡 디비 봇 모듈
======================

> 놀랄 만큼 쉽고 믿기 힘들 만큼 간단합니다
> 
> 사용법은 DB.js에 보시면 잘 설명되어 있어요


<img src="https://licensebuttons.net/l/by-nc/2.0/kr/88x31.png">

# 초기설정 

#### 1. 먼저 콘솔에 npm install을 친다.(타입 자동완성 때문에)
```shell
npm install
```
#### 2. adb 유무에 따라 달라진다

```javascript
//adb 없을시
const DB = require('Manager').DBManager;
var DBListener = DB.getInstance("YOUR_PACKAGE_NAME", 'YOUR_USER_ID', false /*루트여부*/);
```


```javascript
//adb 있으면
// 여기있는 DB.js 쓰시면 됩니다
const DB = require('./modules/Manager').DBManager;
var DBListener = DB.getInstance("YOUR_PACKAGE_NAME", 'YOUR_USER_ID', false /*루트여부*/);
```

****
# 리스너들
## message : (chat : Chat, channel : Channel) => void

메시지가 왔을 때 반응을 합니다

```javascript
DBListener.on("message", (chat, channel) => {
    if(chat.text ==="hello"){
        channel.send("greeting")
    }
})
```
****
## join : (chat : OpenChatJoinFeed, channel : Channel) => void
누군가 오픈챗에 들어오면 반응합니다
```javascript
DBListener.on("join", (chat, channel) => {
    channel.send(chat.joinUsers[0].nickName+"님 안녕하세요")
})
```

****
## invite : (chat : InviteFeed, channel : Channel) => void
누군가 단체방에서 초대하면 반응합니다
```javascript
DBListener.on("join", (chat, channel) => {
    channel.send(chat.inviteUser.nickName+"님이"+ chat.invitedUsers.map((e)=>e.nickName).join(",")+"님을 초대했습니다")
})
```

****
## leave : (chat : LeaveFeed, channel : Channel) => void
누군가 단체방(오픈챗 포함)을 나갈 때 반응합니다
```javascript
DBListener.on("leave", (chat, channel) => {
    channel.send(chat.leaveUser.nickName + "님 잘가요");
});
```

****
## kick : (chat : LeaveFeed|OpenChatKickedFeed, channel : Channel) => void
누군가 강퇴당하면 반응합니다
```javascript
DBListener.on("kick", (chat, channel) => {
    channel.send(chat.kickedBy.name + "님이 " + chat.kickedUser.nickName + "님을 강퇴했습니다")
})
```

****
## delete : (chat : DeletedFeed, channel : Channel) => void
누군가 메시지를 지우면 반응합니다
```javascript
DBListener.on("kick", (chat, channel) => {
    channel.send(chat.deletedChat.text+ "메시지가 지워졌어요");
})
```

****
## hide : (chat : Chat, channel : Channel) => void
누군가 메시지를 가리면 반응합니다

아직 구현 안된게 몇개 있어요.....
```javascript
DBListener.on("hide", (chat, channel) => {
    
})
```
****
## member_type_change : (chat : Chat, channel : Channel) => void
방장 부방장이 바뀌면 반응해요 

chat에다가 is메소드로 구분할 수 있어요
```javascript
DBListener.on("member_type_change", (chat, channel) => {
    if(chat.isDemote()){
        channel.send(chat.demoteUser.nickName+"님이 부방장에서 내려왔어요")
    }
    else if(chat.isPromote()){
        channel.send(chat.promoteUser.nickName+"님이 부방장이 되었어요")
    }
    else if(chat.isHandover()){
        channel.send(chat.newHost.nickName+"님이 새 방장이 되었어요");
    }
})
```

****

## ADB로 컴파일 하기
> 메신저봇 전용이에요
> 
> 채자봇은 할 줄 몰라서 보류
>

### 1. 폰이랑 컴터랑 연결 한 뒤 디버깅 모드를 킨다.
### 2. DB.js를 작성한다.
### 3. build.js에서 봇 폴더를 설정한다
```javascript
const BOTPATH = "봇 저장소" //여기에 봇 저장소 주소
const fs = require('fs');
const {execSync} = require("child_process");
```
### 4. 작성하고 나서 쓰는 api 버전에 따라 달라집니다


```shell
#레거시 전용 
npm run build-legacy 

#api2 전용 
npm run build-api2 

#custom (리스너가 하나도 제공 안함) 
npm run build-custom
```

## 주의 custom을 쓰면 알아서 채널 세션을 추가해야 합니다.

아래는 그 예시

### API 2
```javascript
/**
* 알림바 함수
*/
function onNotification(sbn, rm) {
    DBListener.addChannel(sbn);
}

/**
 * 알림바 왔을 떄 채널리스트 추가하기
 */
bot.addListener(Event.NOTIFICATION_POSTED, onNotification);

/**
 * 컴파일 시 자동 종료
 */
bot.addListener(Event.START_COMPILE, () => {
    DBListener.stop();
});

```

### API 레거시

```javascript
/**
 * 알림바 왔을 떄 채널리스트 추가하기
 */
function onNotificationPosted(sbn) {
    DBListener.addChannel(sbn);
}

/**
 * 컴파일시 자동 종료
 */
function onStartCompile() {
    DBListener.stop();
}
```


# 제작자 및 도움 주신 분
### https://github.com/saroro1 (사로로 본인)
### https://github.com/app6460 (앱)
### https://github.com/naijun0403 (~~토끼귀~~ archethic )
### https://github.com/vientorepublic (도연씌 )

### 그리고 이걸 사용해주는 모든 여러분들....
