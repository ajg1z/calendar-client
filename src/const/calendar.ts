export const WeekDays = [
    'Mon',
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    'Sunday'
]

export const Months = [
    { label: 'January', value: 0 },
    { label: 'February', value: 1 },
    { label: 'March', value: 2 },
    { label: 'April', value: 3 },
    { label: 'May', value: 4 },
    { label: 'June', value: 5 },
    { label: 'July', value: 6 },
    { label: 'August', value: 7 },
    { label: 'September', value: 8 },
    { label: 'October', value: 9 },
    { label: 'November', value: 10 },
    { label: 'December', value: 11 },
]

export const Years = () => {
    const begin = 1970;
    const currentYear = new Date().getFullYear();
    const arrYears = [];
    let i = begin;
    while (i <= currentYear) {
        arrYears.push({ label: i.toString(), value: i });
        i++;
    }
    return arrYears;
}