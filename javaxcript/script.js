let name = "Modinat";
let course = "html, css, javascript";

console.log(name);
console.log(course);


if((course.length%2) ===0){
	const evenNumber = [];
	for (let i=1; i<=200; i++) {
		if( i%2 ===0 ) {
			evenNumber.push(i);
		}
	}
	console.log(evenNumber);
} else {
	const oddNumber = [];
	for (let i=1; i<200; i++) {
		if( i%2 !==0) {
			oddNumber.push(i);
		}
	}
	console.log(oddNumber);
}