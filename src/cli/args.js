export const parseArgs = () => {
	// Write your code here 
	const args = process.argv.slice(2);
	let argsAll = '';
	args.forEach((val, index) => {
		(index % 2 === 0) ? argsAll += val.slice(2) + " is " : argsAll += val + ", "
	});
	argsAll = argsAll.slice(0,-2)
	console.log(argsAll);
};