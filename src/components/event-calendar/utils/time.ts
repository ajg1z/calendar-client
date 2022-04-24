export const ConvertTime = (time: number) => {
    if (time < 10) {
        return `0${time}`
    } else {
        return `${time}`;
    }
}