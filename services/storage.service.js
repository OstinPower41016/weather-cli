import { join } from 'path'
import { promises } from 'fs'

const filepath = join(process.cwd(),  'weather-data.json')

export const saveKeyValue = async (key, value) => {
  let data;

  if (await isExist(filepath)) {
    const file = await promises.readFile(filepath)
    data = JSON.parse(file)
  }

  console.log(key, value);
  data = {...data, ...{ [key]: value }}
  
  await promises.writeFile(filepath, JSON.stringify(data))
}

const isExist = async (filepath) => {
  try {
    const a = await promises.stat(filepath)
    return true
  } catch (error) {
    return false
  }
}