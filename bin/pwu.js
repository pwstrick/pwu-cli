#!/usr/bin/env node
const ora = require('ora');
const chalk = require('chalk');
const program = require('commander');
const download = require('download-git-repo');

program
    .version('1.0.0', '-v, --version', '版本');

program
  .command('init [destination]')
  .description('clone a repository into a newly created directory')
  .action(destination => {
    const spinner = ora('开始下载脚手架');
    spinner.start();
	destination = destination || process.cwd();
	//console.log(destination);
	download('github:pwstrick/pwu', destination, (msg) => {
      spinner.stop();
	  console.log(msg);
	  console.log(chalk.green('脚手架下载成功'));
	});
  });

program.parse(process.argv)
//const param = process.argv[3] || "init";
// function init() {
  // const spinner = ora('开始下载脚手架');
  // spinner.start();
  // setTimeout(() => {
    // spinner.stop();
    // console.log(chalk.green('脚手架下载成功'));
  // }, 3000);

// }

