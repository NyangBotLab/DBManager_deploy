//app6460 님 존겨유 ㅠㅠㅠㅠ

const fs = require('fs');
const {execSync} = require("child_process");

const api2_prefix = `const bot = BotManager.getCurrentBot()
`;

const api2_suffix = `
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
`
const api_suffix = `
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
`


const mode = process.argv[2] ?? ""
if (mode === "") process.exit(1);
console.log(`모드 ${mode}`)


let botFile = (mode === "api2" ? api2_prefix : "") + fs.readFileSync(`DB.js`, 'utf-8');
if(mode === "api2"){
    botFile += api2_suffix
}
else if(mode === "legacy"){
    botFile += api_suffix
}
if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

fs.writeFileSync(`./dist/DB.js`, replace(botFile));



console.log('컴파일 완료');

/**
 *
 * @param {string} fileData
 */
function replace(fileData) {
    return fileData
        .replace(/require\(['"]\.\/modules\/(.*)['"]\)/g, 'require(\'$1\')');
}
