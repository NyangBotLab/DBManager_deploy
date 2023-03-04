//여기에 봇 저장소 주소

const fs = require('fs');
const {execSync} = require("child_process");
const BOTPATH = process.argv[2] ?? ""
const botName = process.argv[3] ?? ""

if (BOTPATH === "" || botName === "") {
    console.error("봇 이름이나 봇 경로가 잘못되었어요\nnpm build compile (봇저장 폴더이름) (봇이름)으로 해주세요")
    return;
}
console.log(`/sdcard/${BOTPATH}/Bots/${botName}/${botName}으로 봇 컴파일`)
execSync(`adb push ./modules /sdcard/${BOTPATH}/Bots/${botName}/`);
execSync(`adb push ./dist/DB.js /sdcard/${BOTPATH}/Bots/${botName}/${botName}.js`);
execSync(`adb shell am broadcast -a com.xfl.msgbot.broadcast.compile -p com.xfl.msgbot --es name ${botName}`);

console.log("빌드 성공")
