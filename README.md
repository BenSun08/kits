# kits(in Javascript)
> some useful functions packaged in an object called kits
## Catalogue
* ### Properties
* ### Methods
> ```js
> kits.zeroPatch()
> //patch a zero brfore a number which is less than ten
> ```
> ```js
> kits.getFormatTime()
> //get the current formatted time
> ```
> ```js
> kits.getRandInt(n, m)
> //get a random integer range from n to m(both inclusive)
> ```
> ```js
> kits.getID(n, m)
> /* get a random ID based on the concatenation of the Date.getTime() and the random integer range from
> 100000 to 999999 */
> ```
> ```js
> kits.getRandHexColor()
> //get a random color in Hexadecimal form(#000000-#ffffff)
> ```
> ```js
> kits.getRandRGBColor()
> //get a random color in RGB form(rgb(0,0,0)-rgb(255,255,255))
> ```
* #### Methods used for localStorage
> ```js
> kits.getLocalDataArray(key)
> //get an array of data conserved in the localStorage with the key
> ```
> ```js
> kits.saveLocalDataArray(key, arr)
> //save an array of data into the localStorage with the key
> ```
> ```js
> kits.appendDataIntoArray(key, data)
> //append the data to the array with corresponding key in the localStorage
> ```
> ```js
> kits.prependDataIntoArray(key, data)
> //prepend the data to the array with corresponding key in the localStorage
> ```
> ```js
> kits.deleteLocalDataArray(key, id)
> //delete the data in the array with the corresponding key in the localStorage according to the ID
> ```
> ```js
> kits.modifyLocalDataArray(key, id, data)
> //modify the data in the array with the corresponding key in the localStorage according to the id
> ```
