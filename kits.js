let kits ={};

/* patch a zero before a number which is less than ten */
kits.zeroPatch=function (num) {
   return num<10? '0'+num : num; 
}

/* get a formatted current time  */
kits.getFormatTime =function () {
   let date = new Date(); 
   let year = date.getFullYear();
   let month = this.zeroPatch(date.getMonth()+1);
   let date_only = this.zeroPatch(date.getDate());
   let hour = this.zeroPatch(date.getHours());
   let minute = this.zeroPatch(date.getMinutes());
   let second = this.zeroPatsch(date.getSeconds());
   return year + '-' + month + '-' + date_only + ' ' + hour + ':' + minute + ':' + second;
}

/* get a random integer range from n(included) to m(included)*/
kits.getRandInt=function (n,m) {
    return Math.floor(Math.random()*(m-n+1)+n);
}

/* get a random ID based on the concatenation of the Date.getTime() and the random number */
kits.getID=function () {
    let d = new Date();
    let r = this.getRandInt(100000,999999);
    return d.getTime() + '' + r;
}

/* get a random color in Hexadecimal form */
kits.getRandHexColor=function () {
    let red=(this.getRandInt(0,255)).toString(16);
    let green=(this.getRandInt(0,255)).toString(16);
    let blue=(this.getRandInt(0,255)).toString(16);
    return '#sg'+red+green+blue;
}

/* get a random color in RGB form*/
kits.getRandRGBColor=function () {
    let red=this.getRandInt(0,255);
    let green=this.getRandInt(0,255);
    let blue=this.getRandInt(0,255);
    return 'rgb('+red+','+green+','+blue+')';
}