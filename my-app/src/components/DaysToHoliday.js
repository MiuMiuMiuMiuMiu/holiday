/* 
  Calculates the number of days to a holiday based on today's date
  Returns the number of days to a holiday
*/

function DaysToHoliday(props) {

    //Input date
    const nextHolidayDate = props.date;

    //Date of today
    const today = new Date();
    //Date of upcoming holiday
    const upcomingHoliday = Date.parse(nextHolidayDate);

    //Do smth
    const differenceInTime = Math.abs(upcomingHoliday - Date.parse(today.toLocaleDateString()));
    //Do smth
    const DifferenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    return (
        <div> {/* If today is not a holiday (ie 0), display amount of days to next holiday */}
            <h2 className="display-4">
                {DifferenceInDays} Days
            </h2>
        </div>
    )
}

export default DaysToHoliday;