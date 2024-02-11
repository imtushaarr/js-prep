// Date is alway objective

/*Date has been a long-standing pain point in ECMAScript. This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), 
that brings a modern date/time API to the ECMAScript language. For a detailed look at some of the problems with Date, and the motivations for Temporal */

// Create Object for the date and instance
let myDate = new Date()
// console.log(myDate);

// try to conver string myDate
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

// console.log(typeof myDtae)

// let myCreateDate = new Date(2024, 0, 23,6,9)
// let myCreateDate = new Date("2024-01-14")
let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date('2024-12-07T03:24:30.003')
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

// const displayString  = `${newDate.getDay()} and the time is: ${newDate.getDay()}`
// console.log(displayString)

/* Temporal.ZonedDateTime
A Temporal.ZonedDateTime is a timezone-aware, calendar-aware date/time object that represents a real event that has happened 
(or will happen) at a particular exact time from the perspective of a particular region on Earth, e.g. December 7th, 1995 
at 3:24 AM in US Pacific time (in Gregorian calendar). This type is optimized for use cases that require a time zone, 
including DST-safe arithmetic and interoperability with RFC 5545 (iCalendar).*/

//Important
// To achieve internationalization (i18n) in JavaScript
const formattedDate = newDate.toLocaleString('default', {
    timeZone: 'Asia/Kolkata',
    year: 2024,
    month: 12,
    day: 7,
    hour: 3,
    minute: 24,
    second: 30,
    millisecond: 0,
    microsecond: 3,
    nanosecond: 500
})
console.log(formattedDate);

// https://tc39.es/proposal-temporal/docs/index.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date