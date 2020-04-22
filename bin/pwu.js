#!/usr/bin/env node
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');
const program = require('commander');
const download = require('download-git-repo');

program
    .version('1.0.0', '-v, --version', '版本');

program
  .command('create <name>')
  .description('create a repository')
  .action(name => {
    const spinner = ora('开始下载脚手架');
    spinner.start();
	const destination = path.join(process.cwd(), name);
	//console.log(destination);
	download('github:pwstrick/pwu', destination, (msg) => {
      spinner.stop();
	  console.log(msg);
	  console.log(chalk.green('脚手架下载成功'));
	});
  });

program.parse(process.argv)


