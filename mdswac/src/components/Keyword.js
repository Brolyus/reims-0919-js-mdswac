import React from 'react'

function Keyword (){
		return (
			<div></div>
		)
}

/*const Keyword = (str) => {
	let countWord = []
	str.split(" ").forEach(word => {
		if (countWord.filter(test => test[0] === word).length === 0) {
			const result = [word, 1]
			countWord = [...countWord, result]
		} else {
			countWord.forEach(test => {
				if (test[0] === word) {
					test[1] += 1
				}
			})
		}
	})
  
    //console.log(countWord)
  
	final = countWord
		.sort((number1, number2) => {
				if (number1[1] === number2[1])
					return number1[0] > number2[0] ? 1 : -1;
				else
					return number1[1] - number2[1];  
				})
		.map((number) => number[0])
	final.reverse()
	return final[0]
	)
}
	
console.log(keyword('le doublon est un doublon'))*/

export default Keyword