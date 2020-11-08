import React  from "react";

const getPercent = decimal => {
  return decimal * 100 + '%'
}

const calcGoalProgress=(total,goal)=>{
  console.log(total/goal);
  return getPercent(total/goal)
}

const SkiDayCounter =({total,powder,backcountry,goal}) =>{
 return (
      <section>
          <div>
            <p>Total Days:{total}</p>
          </div>
          <div>
            <p>Total Powder:{powder}</p>
          </div>
          <div>
            <p>Total Backcountry:{backcountry}</p>
          </div>
          <div>
            <p>Goal Progress:{calcGoalProgress(total,goal)}</p>
          </div>
    </section>
 )
}

export default SkiDayCounter