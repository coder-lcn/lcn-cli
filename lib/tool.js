#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
exports.default = ([cli, params]) => (0, child_process_1.spawn)(cli, params, { stdio: "inherit" });
