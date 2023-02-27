#!/usr/bin/env node

import { basename } from 'path'
import  main from '../main.mjs'

main(basename(process.cwd()))
