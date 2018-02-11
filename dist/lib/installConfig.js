"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const shell = require('shelljs');
const chalk = require('chalk');
const pm_tool_1 = require("../utils/pm_tool");
const config_1 = require("../config");
const installConfig = (sharedEslintConfig) => __awaiter(this, void 0, void 0, function* () {
    console.log(chalk.green('正在安装 eslint 配置集'));
    let dep = sharedEslintConfig || config_1.DeafultSharedEslintConfig;
    if (dep.indexOf('@') == -1 || dep.lastIndexOf('@') == 0) {
        dep = dep + '@latest';
    }
    const pmToolName = yield pm_tool_1.default(dep);
    if (pmToolName === 'yarn') {
        shell.exec(`yarn add ${dep} --dev`, { silent: false });
    }
    else {
        shell.exec(`${pmToolName} install ${dep} --save-dev`, { silent: false });
    }
    console.log(chalk.green('eslint 配置集安装完成'));
});
exports.default = installConfig;
