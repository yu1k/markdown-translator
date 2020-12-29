"use strict";

const program = require("commander");
const fs = require("fs");
const marked = require("marked");

program.parse(process.argv);

// コマンドラインから引数を受け取る
const filePath = program.args[0];
const newFilePath = program.args[1];

fs.readFile(filePath, {
    encoding: "utf8"
}, (err, file) => {
    if(err){
        console.error(err.message);
        process.exit(1);
        return;
    }
    // MarkdownファイルをHTML文字列に変換する
    const html = marked(file);

    // 変換された HTML文字列 を newFilePath ファイルに出力
    try{
        fs.writeFileSync(newFilePath, html);
        console.log(filePath + "から" + newFilePath + "に変換完了");
    }catch(e){
        console.error(e);
    }
});
