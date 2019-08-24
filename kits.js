let kits = {};

/* patch a zero before a number which is less than ten */
kits.zeroPatch = function(num) {
  return num < 10 ? "0" + num : num;
};

/* get a formatted current time  */
kits.getFormatTime = function() {
  let date = new Date();
  let year = date.getFullYear();
  let month = this.zeroPatch(date.getMonth() + 1);
  let date_only = this.zeroPatch(date.getDate());
  let hour = this.zeroPatch(date.getHours());
  let minute = this.zeroPatch(date.getMinutes());
  let second = this.zeroPatch(date.getSeconds());
  return `${year}-${month}-${date_only} ${hour}:${minute}:${second}`;
};

/* get a random integer range from n(included) to m(included)*/
kits.getRandInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

/* get a random ID based on the concatenation of the Date.getTime() and the random number */
kits.getID = function() {
  let d = new Date();
  let r = this.getRandInt(100000, 999999);
  return d.getTime() + "" + r;
};

/* get a random color in Hexadecimal form */
kits.getRandHexColor = function() {
  let red = this.getRandInt(0, 255).toString(16);
  let green = this.getRandInt(0, 255).toString(16);
  let blue = this.getRandInt(0, 255).toString(16);
  return `#${red}${green}${blue}`;
};

/* get a random color in RGB form*/
kits.getRandRGBColor = function() {
  let red = this.getRandInt(0, 255);
  let green = this.getRandInt(0, 255);
  let blue = this.getRandInt(0, 255);
  return `rgb(${red},${green},${blue})`;
};

/* get an array of data conserved in the localStorage with the key */
kits.getLocalDataArray = function(key) {
  let arr = JSON.parse(localStorage.getItem(key));
  return arr || [];
};

/* save an array of data into the localStorage with the key */
kits.saveLocalDataArray = function(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
};

/* append the data to the array with corresponding key in the localStorage */
kits.appendDataIntoArray =function (key,data) {
    let arr = this.getLocalDataArray(key);
    arr.push(data);
    this.saveLocalDataArray(key,arr);
}

/* prepend the data to the array with corresponding key in the localStorage */
kits.prependDataIntoArray =function (key,data) {
    let arr = this.getLocalDataArray(key);
    arr.unshift(data);
    this.saveLocalDataArray(key,arr);
}

/* delete the data in the array with the corresponding key in the localStorage according to the ID */
kits.deleteLocalDataArray = function(key, id) {
  let arr = this.getLocalDataArray(key);
  arr.forEach((element, index) => {
    if (element.id == id) {
      arr.splice(index, 1);
    }
  });
  this.saveLocalDataArray(key, arr);
};

/* modify the data in the array with the corresponding key in the localStorage according to the id */
kits.modifyLocalDataArray = function(key,id,data) {
    let arr=this.getLocalDataArray(key);
    arr.forEach((element,index)=>{
        if(element.id == id){
            arr.splice(index,1,data);
        }
    })
    this.saveLocalDataArray(key,arr);
};
