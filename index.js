var array = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var temptArray = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];

/*
1、出现次数最多的字母
2、并给出其出现的总次数以及
3、出现次数最多的这个字母每一个所在的位置，即索引下标。
*/



var letterArray = [];
var indexArray = [];
var doneArray = [];
var countArray = [];
var maxArray = [];

function numberClick() {

// 循环出字符出现的数量、字母 存入数组
    for (var i = 0; i < array.length; i++) {
    	 var obj = {
                inx: 0, //索引
                count: 0, //出现次数
                letter: "" //字母
            };

        for (var j = 0; j < temptArray.length; j++) {
             
             var tempt = j;

            if (array[i] == temptArray[j]) {
            	
            	indexArray.push(tempt);
                obj.inx = j;
                obj.count++;
                obj.letter = array[i];
                letterArray.push(obj);
                temptArray.splice(j, 1,"");
            }
        }
    }

   // 循环更正字母的索引、字母对应的索引
    for(var i = 0; i < letterArray.length; i++){

    	var t = letterArray[i];
        var obj = {
                inx: 0, //索引
                count: 0, //出现次数
                letter: "" //字母
            };
    
    	obj.inx = indexArray[i];
    	obj.count = t.count;
    	obj.letter = t.letter;
    	doneArray.push(obj);
        //存入所有的数量值
    	countArray.push(obj.count);

    }
    
    var max = countArray[0];


// 得到最大值
for(var i = 1; i < countArray.length; i++){
	var t = countArray[i];	
	if(max < t){
		max = t;
	}
}

// 找到最大值对应的对象
for(var i = 0; i < doneArray.length; i++){
	var t = doneArray[i];
	if(max == t.count){
       maxArray.push(t);
	   console.log("最多数量的索引："+t.inx); 
	}
}
  var tm = maxArray[0];
  console.log("最多数量的字母："+tm.letter);
  console.log("最多数量的数量："+tm.count);
}



