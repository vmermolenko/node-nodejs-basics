import * as fs from 'fs';

export const create = async () => {
	// Write your code here 
	console.log('create');
	const path = 'src/fs/files/fresh.txt';
	if (fs.existsSync(path)) {
		// path exists
		//console.error("FS operation failed");
		const error = new Error('FS operation failed')			
			// Printing error message
			//console.log(error.message);
			// Printing error stack
			//console.log(error.stack);
			// Printing the error in console
			console.log(error);
	} else {
		console.log("DOES NOT exist:", path);
		fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
			if (err) throw err;
				console.log('File is created successfully.');
		});
	}
};