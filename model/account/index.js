const connection = require('../connection');
const util = require('../../util');

/**
 * @author kristian ruben sianturi
 * manage data in tbl_user
 */

function createAccount({idowner, level, username, password, picture}, callback){
    let datenow = util.getDateNow();
    let hashpass = util.passEncrypt(password);
    let result = {
        status: 0,
        err: "Username yang dimasukan sudah terdaftar"
    }
    connection.poolSelect(`SELECT user_id FROM tbl_user WHERE username = ? AND level = ?`, [username, level], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada server"
            }
            console.log(result);
            callback(result);
        }else{
            if(res.res.length > 0){
                callback(result);
                console.log(result);
            }else{
                connection.poolManipulate('INSERT INTO tbl_user(owner_id, level, username, password, picture, datecreated) VALUES(?, ?, ?, ?, ?, ?)', [idowner, level, username, hashpass, picture, datenow], (res)=> {
                    
                    if(res.err){
                        result = {
                            status: -1,
                            err: "Terjadi kesalahan pada server"
                        }
                        callback(result);
                        console.log(result);
                    }else{
                        if(res.res.affectedRows > 0){
                            result = {
                                status: 1,
                                err: null
                            }
                            callback(result);
                            console.log(result);
                        }else{
                            result = {
                                status: 0,
                                err: "Terjadi kesalahan, data tidak berhasil disimpan"
                            }
                            callback(result);
                            console.log(result);
                        }
                    }
                });
            }
        }
    });
}

function Auth(username, password, callback){
    let result = {
        status: 0,
        err: "akun tidak dapat di temukan"
    }
    connection.poolSelect('SELECT * FROM tbl_user WHERE username = ?', [username], (res)=>{
        console.log(res.err);
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada server"
            }
            callback(result);
        }else{
            if(res.res.length > 0){
                let hashpass = res.res[0].password;
                util.passValidate(hashpass, password, (stat)=>{
                    if(stat){
                        result = {
                            status: 1,
                            err: null,
                            data: {
                                id: res.res[0].user_id,
                                ownid: res.res[0].owner_id,
                                level: res.res[0].level
                            }
                        }
                        callback(result);
                    }else{
                        result = {
                            status: 0,
                            err: "username dan password tidak cocok "
                        }
                        callback(result);
                    }
                });
            }else{
                callback(result);
            }
        }
    });
}

function update({id, username}, callback){
    let result = {
        status: 0,
        err: "Username yang dimasukan sudah terdaftar"
    }
    connection.poolSelect(`SELECT user_id FROM tbl_user WHERE username = ?`, [username], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada server"
            }
            callback(result);
        }else{
            if(res.res.length > 0){
                callback(result);
            }else{
                connection.poolManipulate(`UPDATE tbl_user SET username = ? WHERE user_id = ?`, [username, id], (res)=> {
                    if(res.err){
                        result = {
                            status: -1,
                            err: "Terjadi kesalahan pada server"
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
                            result = {
                                status: 0,
                                err: "Terjadi kesalahan, data tidak berhasil di perbaharui"
                            }
                            callback(result);
                        }
                    }
                });
            }
        }
    });
}

function updatePicture({id, level, picture}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal perbaharui photo"
    }
    connection.poolManipulate(`UPDATE tbl_user SET picture = ? WHERE user_id = ? OR owner_id = ? AND level = ?`, [picture, id, id, level], (res)=> {
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada server"
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

function deleteAccount({id, level}, callback){
    let result = {
        status: 0,
        err: "Terjadi kesalahan, gagal menghapus"
    }
    connection.poolManipulate(`DELETE FROM tbl_user WHERE user_id IN(?) OR owner_id IN(?) AND level = ?`, [id, id, level], (res)=>{
        if(res.err){
            result = {
                status: -1,
                err: "Terjadi kesalahan pada server"
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

function listAccountTeacher({search, orderby, order, index, len}, callback){
    if(search.trim().length > 0){
        let src = `%${search}%`;
        connection.poolSelect(`SELECT u.user_id, u.username, tt.name FROM tbl_user as u INNER JOIN tbl_teacher as tt ON u.owner_id = tt.teacher_id WHERE u.username = ? OR tt.name = ? ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [src, src], callback);
    }else{
        connection.poolSelect(`SELECT u.user_id, u.username, tt.name FROM tbl_user as u INNER JOIN tbl_teacher as tt ON u.owner_id = tt.teacher_id ORDER BY ${orderby} ${order} LIMIT ?,?`, [index, len], callback);
    }
}

function listAccountStudent({search, orderby, order, index, len}, callback){
    if(search.trim().length > 0){
        let src = `%${search}%`;
        connection.poolSelect(`SELECT u.user_id, u.username, u.picture, ts.name FROM tbl_user as u INNER JOIN tbl_student as ts ON u.owner_id = ts.student_id WHERE u.username = ? OR tt.name = ? ORDER BY ${orderby} ${order} LIMIT ${index},${len}`, [src, src], callback);
    }else{
        connection.poolSelect(`SELECT u.user_id, u.username, u.picture, ts.name FROM tbl_user as u INNER JOIN tbl_student as ts ON u.owner_id = ts.student_id ORDER BY ${orderby} ${order} LIMIT ?,?`, [index, len], callback);
    }
}

function getAccountTeacher({id}, callback){
    connection.poolSelect(`SELECT u.user_id, tt.teacher_id, u.username, u.picture, tt.name, tt.relationship, tt.phone_number, tt.address, tt.born_date, tt.religion FROM tbl_user as u INNER JOIN tbl_teacher as tt ON u.owner_id = tt.teacher_id WHERE u.user_id = ?`, [id], callback);
}

function getAccountStudent({id}, callback){
    connection.poolSelect(`SELECT u.user_id, u.username, u.picture, tt.name FROM tbl_user as u INNER JOIN tbl_student as ts ON u.owner_id = ts.student_id WHERE u.user_id = ?`, [id], callback);
}

module.exports = {
    createAccount,
    Auth,
    update,
    updatePicture,
    deleteAccount,
    listAccountTeacher,
    listAccountStudent,
    getAccountStudent,
    getAccountTeacher
};