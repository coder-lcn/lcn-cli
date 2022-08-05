#!/usr/bin/env node

import { spawn } from "child_process";

export default ([cli, params]: [cli: string, params: string[]]) =>
  spawn(cli, params, { stdio: "inherit" });
