import { create } from './src/fs/create.js'
import { copy } from './src/fs/copy.js'
import { rename } from './src/fs/rename.js'
import { remove } from './src/fs/delete.js'
import { list } from './src/fs/list.js'
import { read } from './src/fs/read.js'

import { parseEnv } from './src/cli/env.js'
import { parseArgs } from './src/cli/args.js'

//File system (src/fs)
//1 task
//await create()
//console.log(create)

//2 task
//await copy()
//console.log(copy)

//3 task
//await rename()
//console.log(rename)

//4 delete
//await remove()
//console.log(delete)

//5 list
//await list()
//console.log(list)

//6 read
//await read()
//console.log(read)

//Command line interface(src/cli)
//7 parseEnv
//await parseEnv()
//console.log(parseEnv)

//8 parseArgs
//await parseArgs()
//console.log(parseArgs)