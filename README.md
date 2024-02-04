카카오톡 디비 봇 모듈 v2
======================

# 주의 실험적 기능이 많으니 갑자기 사라질 수도 있습니다.



#### 컴퓨터에서 작업하는걸 추천합니다.

> 놀랄 만큼 쉽고 믿기 힘들 만큼 간단합니다
> 
> 사용법은 DB.js에 보시면 잘 설명되어 있어요
>
> 

> ### 메소드는 여기서 확인할 수 있어요
> 
>https://nyangbotlab.github.io/dbdoc/v2/

__라이센스 요약__
1. 상업적 이용 금지
2. 이 라이센스 그대로 배포

# 초기설정 

#### 콘솔에 npm install을 친다.(타입 자동완성 때문에)
```shell
npm install
```

#### 소스가 다 완성이 되면 build 명령어를 사용한다
```shell
#api2로 빌드
npm run build-api2

#api2레거시로 빌드
npm run build-legacy

#custom으로 빌드(리스너 직접 달아야 합니다)
npm run build-custom
```



### 리스너는 아래와 같이 달면 됩니다
****
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


마지막으로 dist/DB.js를 쓰시면 됩니다

또한 모듈은 modules/DBManager를 통채로
메신저봇 모듈 파일로 옮기면 됩니다.


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
DBListener.on("invite", (chat, channel) => {
    channel.send(chat.inviteUser.nickName+"님이"+ chat.invitedUsers.map((e)=>e.nickName).join(",")+"님을 초대했습니다")
})
```

****
## leave : (chat : LeaveFeed, channel : Channel) => void
누군가 단체방(오픈챗 포함)을 나갈 때 반응합니다
팀챗에서 강퇴당해도 leave로 전달해줍니다
```javascript
DBListener.on("leave", (chat, channel) => {
    if(chat.isKicked()){
        channel.send(chat.leaveUser.nickName + "님이 강퇴당했어요");
    }
    else{
        channel.send(chat.leaveUser.nickName + "님 잘가요");
    }
});
```

****
## kick : (chat : LeaveFeed|OpenChatKickedFeed, channel : Channel) => void
누군가 오픈채팅방에서 강퇴당하면 반응합니다
```javascript
DBListener.on("kick", (chat, channel) => {
    channel.send(chat.kickedBy.name + "님이 " + chat.kickedUser.nickName + "님을 강퇴했습니다")
})
```

****
## delete : (chat : DeletedFeed, channel : Channel) => void
누군가 메시지를 지우면 반응합니다
```javascript
DBListener.on("delete", (chat, channel) => {
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
## member_type_change : (chat : MemberTypeChangedFeed, channel : Channel) => void
방장 부방장이 바뀌면 반응해요 

is메소드로 타입을 구분할 수 있어요
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


***
## open_profile_change : (beforeUser : ChangeUserType, afterUser : ChangeUserType, channel : Channel) => void

누군가 오픈 프로필을 변경하면 반응합니다

```javascript
DBListener.on("open_profile_change", (beforeUser, afterUser, channel) => {
   
})
```

****

# 고오오오급 
## ADB로 컴파일 하기
> 메신저봇 전용이에요
> 
> 채자봇은 할 줄 몰라서 보류
>

#### 1. 먼저 안드로이드 디버깅을 활성화한다.
#### 2. 콘솔에 npm run compile (봇 저장소 폴더 이름) (봇 이름) 명령어를 사용한다
```shell
#예시
npm run compile katalkbot DB
# 봇저장소가 katalkbot 봇이름은 DB
```

# 패치노트

## 2.4.2
1. 기타 버그 수정

## 2.4.1
1. 복호화 함수가 잘못되어 있던 거 수정 ~~누군가 잡혀가서 누락됨~~

## 2.4.0
1. 새 암호화 방식 대응
2. channel.getChatCountGroupByUser 메소드 추가
3. DB 인스턴스에 getChannelById추가
4. open_profile_change에서 잘못된 타입을 주는 현상 수정


## 2.3.0
1. Chat, Channel 객체에서 toJSON 키 값 수정 
2. FeedChat에 타입 가드용 메소드 추가(isInviteFeed isLeaveFeed 등등)
3. User 객체에 customName 속성 추가 (친구 이름 직접 설정한 내용)
4. Channel 객체에 customName 속성 추가(방 이름 직접 지정한 내용)

## 2.2.0
1. 닉변 감지 알고리즘 변경
2. 1:1오픈채팅에서 이름을 잘못 가져오는 현상 수정
3. 타입 체크 강화

## 2.1.2
1. return true 가 두개 연속으로 있는 현상 수정 :<
2. channel.name이 MultiChat에서 undefined 주는 현상 수정


## 2.1.1
1. 컴파일 할 때 undefined 검사 추가


## 2.1.0
1. 구조 변경(리펙토링 편하게) 및 DB static에 자주 쓰이는 함수 추가
2. open_profile_change 추가
3. getInstance 인자 변경

## 1.6.1
1. wakeLock 버그 수정


## 1.6.0
1. deprecated 된 것들 추가
2. typedoc 추가

## 1.5.1
1. ChatManager가 init 안되는 현상 수정 (𝐂𝐇𝐎𝐂𝐎𝐂𝐇𝐈𝐏 님 제보)


## 1.5
1. channel.read 메소드가 api2에서 오류일으키는 버그 수정
2. DB.getInstance에서 userId부분을 null 또는 ""를 붙이면 알아서 유저 아이디를 불러 올 수 있도록 수정

## 1.4.2
1. getPrevChat getNextChat 속도 개선(이제 1000을 부르든 4을 부르든 속도 비슷해요
2. 제네릭 사용하도록 변경(내부 구조만 변경) 

## 1.4.1
1. 팀 채팅방에서 host를 구하는 기능 추가 (일반 방이면 null)
2. 방을 개설 할 때 방 이름을 정하지 않을 방을 호출 할 때 오류 뱉는 현상 수정

## 1.4.0 
1. 팀 채팅방에서 강퇴당하는 것도 leave로 처리하도록 변경
2. chat.readMembers, chat.unreadMembers 추가(갱신은 직접 채팅방 들어가야함)
3. 그 외 내부적인 구조 변경

## 1.3.0
1. 채널 관련 메소드 추가

# 제작자 및 도움 주신 분
### https://github.com/saroro1 (사로로 본인)
### https://github.com/app6460 (앱)
### https://github.com/naijun0403 (~~토끼귀~~ archethic )
### https://github.com/vientorepublic (도연씌 )

### 그리고 이걸 사용해주는 모든 여러분들....

# 오픈소스 라이선스
<details>
<summary>lossless-json</summary>

```
The MIT License (MIT)

Copyright (c) 2016-2023 Jos de Jong

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

<details>
<summary>sql-bricks</summary>

```
Copyright (c) 2013 Cornerstone Systems NW

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>

<details>
<summary>eventemitter3</summary>

```
The MIT License (MIT)

Copyright (c) 2014 Arnout Kazemier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

</details>