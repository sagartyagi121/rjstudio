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
    }

}

module.exports = new CoachModel;