export const ConvertTime = (time: number) => {
	if (time < 10) {
		return `0${time}`;
	} else {
		return `${time}`;
	}
};

export const сoncatTimeToNumber = (
	values: string,
	pos: number[],
	isNumber?: boolean
) => {
	const finalString = pos.reduce((sum, el) => {
		return sum + values[el];
	}, "");
	if (isNumber) return +finalString;
	return finalString;
};
