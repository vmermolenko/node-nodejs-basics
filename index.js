import { create } from './src/fs/create.js'
import { copy } from './src/fs/copy.js'
import { rename } from './src/fs/rename.js'
import { remove } from './src/fs/delete.js'
import { list } from './src/fs/list.js'
import { read } from './src/fs/read.js'

import { parseEnv } from './src/cli/env.js'
import { parseArgs } from './src/cli/args.js'

import { calculateHash } from './src/hash/calcHash.js'

import { read as readStream } from './src/streams/read.js'
import { write as writeStream } from './src/streams/write.js'
import { transform as transformStream } from './src/streams/transform.js'

import { compress } from './src/zip/compress.js'
import { decompress } from './src/zip/decompress.js'

import { performCalculations } from './src/wt/main.js'


const args = process.argv.slice(2);

switch(args[0]) {
  case 'create':
    await create();
    break;
  case 'copy':
    await copy();
    break;
	case 'rename':
			await rename();
			break;
	case 'delete':
		await remove();
		break;
	case 'list':
		await list();
		break;
	case 'read':
		await read();
		break;
	case 'env':
		parseEnv();
		break;
	case 'args':
		parseArgs();
		break;
	case 'hash':
		await calculateHash();
		break;
	case 'readstream':
		await readStream();
		break;
	case 'writestream':
		await writeStream();
		break;
	case 'transformstream':
		await transformStream();
		break;
	case 'compress':
		await compress();
		break;
	case 'decompress':
		await decompress();
		break;
	case 'worker':
		await performCalculations();
		break;
  default:
		console.log(args[0]);
    break;
}

//File system (src/fs)
//1 create
//await create()

//2 copy
//await copy()
//console.log(copy)

//3 rename
//await rename()

//4 delete
//await remove()

//5 list
//await list()

//6 read
//await read()

//Command line interface(src/cli)
//7 parseEnv
//await parseEnv()

//8 parseArgs
//await parseArgs()

//9 hash
//await calculateHash()

//Streams
//10 readStream
//await readStream()

//11 Streams writeStream
//await writeStream()

//12 Streams transformStream
//await transformStream()

//Zlib (src/zip)
//13 compress
//await compress()

//14 decompress
//await decompress()


//15 Worker
//await performCalculations()