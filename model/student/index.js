const connection = require('../connection');
const util = require('../../util');

/**
 * @author kristian ruben sianturi
 * manage data in tbl_student
 */
const selectField = `ts.student_id, ts.NIS, ts.name, ts.gender, ts.religion, ts.born_place, ts.born_date, ts.address, ts.address, ts.phone_number, ts.father_name, ts.mother_name`;

function createStudent({nis, name, gender, religion, born_place, born_date, father_name, mother_name, address, phone_number, class_id}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, NIS yang dimasukan sudah terdaftar sebelumnya"
    }
    connection.poolSelect(`SELECT * FROM tbl_student WHERE NIS = ?`, [nis], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan dalam server"
            }
            callback(result);
        }else{
            if(res.res.length > 0){
                callback(result);
            }else{
                let val = [nis, name, gender, religion, born_place, born_date, father_name, mother_name, address, phone_number, class_id, util.getDateNow()];
                connection.poolManipulate(`INSERT INTO tbl_student(NIS, name, gender, religion, born_place, born_date, father_name, mother_name, address, phone_number, class_id, datecreated) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`, val, (res)=>{
                    if(res.err){
                        result = {
                            status: -1,
                            err: "Terjadi kesalahan dalam server"
                        }
                        callback(result);
                    }else{
                        if(res.res.affectedRows > 0){
                            result = {
                                status: 1,
                                err: null,
                                userid: res.res.insertId
                            }
                            callback(result);
                        }else{
                            result = {
                                status: 0,
                                err: "Terjadi kesalahan, Data tidak berhasil di simpan"
                            }
                            callback(result);
                        }
                    }
                });
            }
        }
    });
}

function updateClass({id, class_id}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal memperbaharui"
    }
    connection.poolManipulate(`UPDATE tbl_student SET class_id = ? WHERE student_id = ?`, [class_id, id], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan dalam server"
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

function updateStudent({id, nis, name, gender, religion, born_place, born_date, father_name, mother_name, address, phone_number, classid}, callback){
    let val = [nis, name, gender, religion, born_place, born_date, father_name, mother_name, address, phone_number, classid, id];
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal memperbaharui"
    }
    connection.poolManipulate(`UPDATE tbl_student SET NIS = ?, name = ?, gender = ?, religion = ?, born_place = ?, born_date = ?, father_name = ?, mother_name = ?, address = ?, phone_number = ?, class_id = ? WHERE student_id = ?`, val, (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan dalam server"
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

function deleteStudent({id}, callback){
    console.log(id);
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal menghapus"
    }
    connection.poolManipulate(`DELETE FROM tbl_student WHERE student_id = ?`, [id], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan dalam server"
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

function listClassStudent({classid, search, orderby, order, index, len}, callback){
    if(search.trim().length > 0){
        let src = `%${search}%`;
        connection.poolSelect(`SELECT ${selectField}, SUBSTRING(ts.born_date, 1, 10) as dateborn, tu.picture FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.user_id WHERE class_id = ? name LIKE ? OR religion LIKE ? OR born_place LIKE ? OR father_name LIKE ? OR mother_name LIKE ? OR address LIKE ? OR phone_number LIKE ? ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [classid, src,src,src,src,src,src,src], callback);
    }else{
        connection.poolSelect(`SELECT ${selectField}, SUBSTRING(ts.born_date, 1, 10) as dateborn, tu.picture FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.user_id WHERE class_id = ? ORDER BY ${orderby} ${order} LIMIT  ${index},${len}`, [classid], callback);
    }
}

function listStudent({search, orderby, order, index, len}, callback){
    if(search.trim().length > 0){
        let src = `%${search}%`;
        connection.poolSelect(`SELECT ${selectField}, SUBSTRING(ts.born_date, 1, 10) as dateborn, tu.picture, tc.class_name, tc.class_id, tc.department_id FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.owner_id INNER JOIN tbl_class as tc ON ts.class_id = tc.class_id WHERE name LIKE ? OR religion LIKE ? OR born_place LIKE ? OR father_name LIKE ? OR mother_name LIKE ? OR address LIKE ? OR phone_number LIKE ? AND tu.level = 1 ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [src,src,src,src,src,src,src], callback);
    }else{
        connection.poolSelect(`SELECT ${selectField}, SUBSTRING(ts.born_date, 1, 10) as dateborn, tu.picture, tc.class_name, tc.class_id, tc.department_id FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.owner_id INNER JOIN tbl_class as tc ON ts.class_id = tc.class_id WHERE tu.level = 1 ORDER BY ${orderby} ${order} LIMIT  ${index},${len}`, [], callback);
    }
}

function getAllRows(search, callback){
    if(search.trim().length > 0){
        let src = `%${search.trim()}%`;
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.owner_id INNER JOIN tbl_class as tc ON ts.class_id = tc.class_id WHERE name LIKE ? OR religion LIKE ? OR born_place LIKE ? OR father_name LIKE ? OR mother_name LIKE ? OR address LIKE ? OR phone_number LIKE ? AND tu.level = 1`, [src, src, src, src, src], callback);
    }else{
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_student as ts INNER JOIN tbl_user as tu ON ts.student_id = tu.owner_id INNER JOIN tbl_class as tc ON ts.class_id = tc.class_id WHERE tu.level = 1`, [], callback);
    }
}

function getAllRowsClass(classid, search, callback){
    if(search.trim().length > 0){
        let src = `%${search.trim()}%`;
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_student WHERE class_id = ? AND (NIS LIKE ? OR name LIKE ? OR born_place LIKE ? OR address LIKE ? OR phone_number LIKE ?)`, [classid,src, src, src, src, src], callback);
    }else{
        connection.poolSelect(`SELECT count(*) as countall FROM tbl_student WHERE class_id = ?`, [classid], callback);
    }
}

function getStudent({id}, callback){
    connection.poolSelect(`SELECT * FROM tbl_student WHERE student_id = ?`, [id], callback);
}

module.exports = {
    createStudent,
    updateClass,
    updateStudent,
    deleteStudent,
    listStudent,
    getStudent,
    getAllRows,
    getAllRowsClass,
    listClassStudent
};