#!/usr/bin/env node
const ora = require('ora');
const chalk = require('chalk');
const program = require('commander');

program
    .version('1.0.0', '-v, --version', '版本')
    .parse(process.argv);

//const param = process.argv[3] || "init";

const spinner = ora('开始下载');
spinner.start();
setTimeout(() => {
    spinner.stop();
    console.log(chalk.green('模板下载成功'));
}, 3000);
