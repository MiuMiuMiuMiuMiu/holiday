/* 
  Calculates the number of days to a holiday based on today's date
  Returns the number of days to a holiday
*/

function DaysToHoliday(props) {
    //Input date
    const nextHolidayDate = props.date;

    //Date of today
    const today = new Date();
    //Date of upcoming holiday in milliseconds
    const upcomingHoliday = Date.parse(nextHolidayDate);

    //Subtract milliseconds of upcoming holiday with today
    const differenceInTime = Math.abs(upcomingHoliday - Date.parse(today.toLocaleDateString()));
    //Difference in days by dividing both dates by no. of milliseconds in a day
    const DifferenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    return (
        <div>
            <h2 className="display-4">
                {DifferenceInDays} Days
            </h2>
        </div>
    )
}

export default DaysToHoliday;