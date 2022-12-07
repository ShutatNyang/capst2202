var mysql = require('mysql');

const dbconn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'rootroot',
    database : 'capst2202',
    port : 3306
});
/**
 * @param stringsql mysql query you use
 * @param callback next work flow if you need
 * 
 */
 const instantquery = async (stringsql,callback)=> dbconn.query(stringsql,async (err,data)=>{
    try{
    if(!err){
            if(callback){
              await callback(data)
            }
        }
    }
    catch
        {
            console.log(err);
        }
})


module.exports = instantquery;