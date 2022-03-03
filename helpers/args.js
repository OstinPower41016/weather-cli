export const getArgs = (args) => {
  const [executer, file, ...restArgs] = args;
  const result = {}
  let current_tag = null
  restArgs.forEach(arg => {
    console.log(arg)
    if (arg.startsWith('-') && !(arg in result)) {
      result[arg] = []
      current_tag = arg
    } else {
      result[current_tag].push(arg)
    }

  })
  return result
}