export const formatName = (name: string) => {
	return name.toUpperCase()
}

export const formatNumber = (numberData: string) => {
	let numbers = numberData
	for (let i = 4; i <= numbers.length; i += 5) {
		numbers = numbers.slice(0, i) + ' ' + numbers.slice(i)
	}

	return numbers
}
