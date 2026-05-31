// BEGIN (write your solution here)
export function getWeekends(format = 'long') {
    switch (format) {
        case 'long':
            return ['saturday','sunday'];
        case 'short':
            return ['sat','sun'];
        default:
            return[];
    }
}


// END

