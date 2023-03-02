//app6460 님 존겨유 ㅠㅠㅠㅠ
const BOTPATH = "katalkbot" //여기에 봇 저장소 주소



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
const botName = process.argv[3] ?? ""
if (botName === "") {
    console.error(`봇이름이 비어있습니다..... npm run build (봇이름)으로 해주세요\n`)
    return;
}
console.log(`${botName} 컴파일\n`)
console.log(`모드 ${mode}
`)


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

fs.writeFileSync(`./dist/${botName}.js`, replace(botFile));

execSync(`adb push ./modules /sdcard/${BOTPATH}/Bots/${botName}/`);
execSync(`adb push ./dist/DB.js /sdcard/${BOTPATH}/Bots/${botName}/${botName}.js`);
console.log("\n파일 전송 끝\n컴파일 시작\n")

execSync(`adb shell am broadcast -a com.xfl.msgbot.broadcast.compile -p com.xfl.msgbot --es name ${botName}`);

console.log('빌드 완료');

/**
 *
 * @param {string} fileData
 */
function replace(fileData) {
    return fileData
        .replace(/require\(['"]\.\/modules\/(.*)['"]\)/g, 'require(\'$1\')');
}
