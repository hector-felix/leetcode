var average = function(salary) {
	let sum = 0;
	salary.sort(function(a, b){return a - b});
	for(let i = 1; i < salary.length-1; i++){
		sum += salary[i];
	}
	return sum/(salary.length-2);
};
