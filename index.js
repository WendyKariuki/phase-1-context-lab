/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
const createEmployeeRecord = function (employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

const createEmployeeRecords = function (employees) {
    return employees.map(employee => createEmployeeRecord(employee));
};

const createTimeInEvent = function (dateTime) {
    const [date, hour] = dateTime.split(' ');

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

const createTimeOutEvent = function (dateTime) {
    const [date, hour] = dateTime.split(' ');

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return this;
};

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;

    return (timeOut - timeIn) / 100;
};

const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};

const allwagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};

const findEmployeeByFirstName = function (employees, firstName) {
    return employees.find(employee => employee.firstName === firstName);
};

const calculatePayroll = function (employees) {
    return employees.reduce((totalPay, employee) => totalPay + allWagesFor.call(employee), 0);
};


