const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class CoachModel {
    tableName = 'coachschedule';

    find = async (params = {}) => {
        let sql = `SELECT distinct name FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    };

    timeslots = async (name) => {
        let checkTimeRangeSQL = `SELECT Available_at, Available_until, TIMESTAMPDIFF(MINUTE, Available_at, Available_until)/30 as slotnumbers, Day_of_Week
                                 FROM ${this.tableName}
                                 WHERE UPPER(NAME) = UPPER('${name}') `;

        let slots = await query(checkTimeRangeSQL);

        for (let index in slots ) {
            let count = 1;
            slots[index].timeslots = [];
            let beginTime = slots[index].Available_at;
            do  {
                 count++;

                 let {begin, end}= makeTime(beginTime);
                 //console.log(begin, 'end')
                 let timeString = `${begin} - ${end}`
                
                 slots[index].timeslots.push(timeString);  
                 beginTime = end; 

             } while (count <= slots[index].slotnumbers);
        }

        return slots;
    }
}

function makeTime(beginTime) {
    let beginAt = 1;
    if ( beginTime.substr(1,1) !== ':'){
      beginAt = 2;   
    }

    let hours = beginTime.substr(0,beginAt);
    let minutes = beginTime.substr(beginAt+1, 2);
    let seconds = beginTime.substr(beginAt+4, 2);
    
    if ( minutes == '00' ){
         minutes = '30';
    } else {
        hours = String(Number(hours) + 1) 
        minutes = '00'
    }    
    
    let endTime = `${hours}:${minutes}:${seconds}`;
    //console.log(endTime, hours, minutes , 'there');
 	return {begin : beginTime, end : endTime};
}

module.exports = new CoachModel;