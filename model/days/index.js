const connection = require('../connection');
const util = require('../../util');

function createDays({day_name}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, hari tidak tersimpan"
    }
    connection.poolManipulate(`INSERT INTO tbl_day(day_name) VALUES(?)`, [day_name], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi Kesalahan pada server"
            }
            callback(result);
        }else{
            if(res.res.affectedRows > 0){
                result = {
                    status: 1,
                    err: null
                }
                callback(result);
            }else{
                callback(result);
            }
        }
    });
}

function updateDays({days_id, day_name}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, hari tidak tersimpan"
    }
    connection.poolManipulate(`UPDATE tbl_day SET day_name = ? WHERE day_id = ?`, [day_name, days_id], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi Kesalahan pada server"
            }
            callback(result);
        }else{
            if(res.res.affectedRows > 0){
                result = {
                    status: 1,
                    err: null
                }
                callback(result);
            }else{
                callback(result);
            }
        }
    });
}

function deleteDays({id}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal menghapus hari"
    }
    connection.poolManipulate(`DELETE FROM tbl_day WHERE day_id IN(?)`, [id], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada sistem"
            }
            callback(result);
        }else{
            if(res.res.affectedRows > 0){
                result = {
                    status: 1,
                    err: null
                }
                callback(result);
            }else{
                callback(result);
            }
        }
    });
}

function getAllList(callback){
    connection.poolSelect(`SELECT * FROM tbl_day ORDER BY day_id ASC`, [], callback);
}

function listLightDay({search}, callback){
    let src = `%${search.trim()}%`;
    connection.poolSelect(`SELECT day_id, day_name FROM tbl_day WHERE day_name COLLATE utf8_general_ci LIKE ? ORDER BY day_id ASC`,[src], callback);
}

function dayList({search, orderby, order, index, len}, callback){
    if(search.trim().length > 0){
        let src = `%${search.trim()}%`;
        connection.poolSelect(`SELECT * FROM tbl_day WHERE day_name COLLATE utf8_general_ci LIKE ? ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [src], callback);
    }else{
        connection.poolSelect(`SELECT * FROM tbl_day ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [], callback);
    }
}

function getAllRows(search, callback){
    if(search.trim().length > 0){
        let src = `%${search.trim()}%`;
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_day WHERE day_name COLLATE utf8_general_ci LIKE ? `, [src], callback);
    }else{
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_day`, [], callback);
    }
}
module.exports = {
    createDays,
    updateDays,
    deleteDays,
    dayList,
    getAllRows,
    listLightDay,
    getAllList
}