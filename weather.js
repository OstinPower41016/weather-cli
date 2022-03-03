#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import { printHelp, printError, printSuccess } from './services/log.services.js'
import { saveKeyValue } from './services/storage.service.js'

const saveToken = async (token) => {
  try {
    await saveKeyValue('token', token)
    printSuccess('Токен сохранен')
  } catch (err) {
    printError(err.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)

  if ("-h" in args) {
    printHelp()
  } else if ('-s' in args) {
  } else if ('-t' in args) {
    saveToken(args['-t'][0])
  }

}

initCLI()