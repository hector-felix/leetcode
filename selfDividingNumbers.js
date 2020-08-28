var selfDividingNumbers = function(left, right) {
    let result = [];
    for(let i = left; i <= right; i++) {
        let num = i;
				let selfDiv = true;
        while(num > 0) {
					let digit = num%10;
					num = parseInt(num/10);
					if(i % digit !== 0) {
						selfDiv = false;
					}
				}
				if(selfDiv)
      		result.push(i);
    }
		return result;
};

console.log(selfDividingNumbers(1,1000));
