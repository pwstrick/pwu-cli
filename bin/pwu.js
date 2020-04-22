#!/usr/bin/env node
const fs = require('fs');
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
	if(fs.existsSync(destination)) {
      console.log(chalk.red('脚手架已存在'));
	  return;
	}
	download('github:pwstrick/pwu', destination, (err) => {
      spinner.stop();
	  //console.log(err);					
	  console.log(chalk.green('脚手架下载成功'));
	});
  });

program.parse(process.argv)


