// date basics

var minute = newDate = new Date()

// Getting parts of a date

var newDate = new Date()

newDate.getMonth() // Months start at 0

newDate.getDate()

var today = (newDate.getMonth() + 1) + "-" + newDate.getDate() + "-" + newDate.getFullYear()


var newDate = new Date() // 24 hour clock

newDate.getHours()
newDate.getMinutes()
newDate.getSeconds()
newDate.getMilliseconds()

var time = newDate.getHours() + ":" + newDate.getMinutis() + "-" + newDate.getSeconds()


// setting new dates

var newDate = new Date()

newDate.setFullYear(2020, 4, 6)
newDate

newDate.setMonth(0)

newDate.setMonth(0, 1)

newDate.setDate(15)

newDate.setHours(10)

// ms since Jan 1, 1970
newDate.setTime()

