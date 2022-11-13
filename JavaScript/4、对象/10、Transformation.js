

//时间转时间戳
function formate_string_data(string_date)  {
    //string_date 格式 2018-07-25 22:35:24
    var date = new Date(string_date.replace(/-/g, '/'));
    //获取1970年到string_date的毫秒数
    var time = date.getTime();
    //注意要除于1000才是秒数
    var timestamp = time / 1000;
    //返回时间戳
    return timestamp;
}


// 时间戳转为时间
function timeStampToTime(formate_time) {

    //时间戳转时间 ：将毫秒级别的time传给Date() 构造函数
    var date = new Date(); 
        date.setTime(formate_time);  //于时间戳的单位是秒所以要乘与1000毫秒
        
        // * 1000

    return  setDateFormate(date);
}
 

/**
 * 获取指定格式的时间
 * @param date 日期的对象
 * @returns {string} 返回的是字符串的日期时间
 */
function setDateFormate(date) {
    
    //获取年
    var year = date.getFullYear();
    //获取月
    var month = date.getMonth() + 1;
    //获取日
    var day = date.getDate();
    //获取小时
    var hour = date.getHours();
    //获取分钟
    var minute = date.getMinutes();
    //获取秒
    var second = date.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return year + "年" + month + "月" + day + "日 " + hour + ":" + minute + ":" + second;

}











