/**
 * Created by yuanchao on 2017/3/5.
 */
function Queue(){
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var content = document.getElementById("content");
    var insertSort = document.getElementById("insertSort");


    leftIn.onclick=function(){
        leftInFunc();
        content.value = null

    };
    rightIn.onclick=function(){
        rightInFunc();
        content.value = null
    };
    leftOut.onclick=function(){
        leftOutFunc();
    };
    rightOut.onclick=function(){
        rightOutFunc();

    };
    insertSort.onclick = function(){
        var sortArr = sortNumber();
        if(sortArr != null){
            //for(var i=0;i<sortArr.length;i++){
            //    (function(){
            //        console.log(i);
            //        setTimeout(animation(sortArr[i]),1000);
            //    })(i);
            //}
            //animation(sortArr[0]);
            //setInterval(animation,1000);
            animation(sortArr);
        }
    };
    var list = document.getElementsByClassName("queue")[0];
   list.onclick = function(evt){
        evt = evt|| window.event;
        var target = evt.target || evt.srcElement;
        var tagName = target.tagName;
        if(tagName=="LI"){
            list.removeChild(target);
        }
    }
}
//检查输入值是否符合条件
function checkValue(num){
    var check =/^[-+]?\d*$/;
    if(num == ""){
        alert("请输入10-100间的数");
    }else if(check.test(num)){
        var newNum = Number(num);
        if(newNum>=10 && newNum <=100){
            return num;
        }else{
            alert("请输入10-100的数");
        }

    }else{
        alert("请输入10-100的数");
    }
    return null;
}
function queueNumber(){
    var listNum = document.getElementsByTagName("li");
    //console.log(listNum.length);
    if(listNum.length>59){
        alert("超出数量范围，限定60以内！");
        return false;
    }else{
        return true;
    }
}

function leftInFunc(){
    if(queueNumber()){
        var content = checkValue(document.getElementById("content").value);
        if(content!= null){
            var li = document.createElement("li");
            //var text = document.createTextNode(content);
            //li.appendChild(text);
            li.style.height = content+"px";
            var list = document.getElementsByClassName("queue")[0];
            var first =  getNextElement(list.firstChild);
            if(first != null){
                list.insertBefore(li,first);
            }
            else{
                list.appendChild(li);
            }
        }
    }



}
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
function rightInFunc(){
    if(queueNumber()){
        var content = checkValue(document.getElementById("content").value);
        if (content != null) {
            var li = document.createElement("li");
            //var text = document.createTextNode(content);
            //li.appendChild(text);
            li.style.height =content+"px";
            document.getElementsByClassName("queue")[0].appendChild(li);
        }
    }
}

function leftOutFunc(){
    var list = document.getElementsByClassName("queue")[0];
    var first =  getNextElement(list.firstChild);
    if(first != null){
        list.removeChild(first);
    }
    else{
        alert("已经没有了");
    }

}
function getLastElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.previousSibling){
        return getLastElement(node.previousSibling);
    }
    return null;
}
function rightOutFunc(){
    var list = document.getElementsByClassName("queue")[0];
    var last = getLastElement(list.lastChild);
    if(last != null){
        list.removeChild(last);
    }
    else{
        alert("已经没有了");
    }
}
function sortNumber(){
    var numbList = document.getElementsByTagName("li");
    //console.log(numbList[0].style.height);
    if(numbList.length < 2){

        return null;
    }else{
        var arr =[];
        for(var i=0;i<numbList.length;i++){
            arr.push(parseInt(numbList[i].style.height));
        }
        console.log(arr);
        var arrSum=[];
        for(var j=1;j<arr.length;j++){
            var key = arr[j];
            for(var k =j-1;k>=0;k--){
                if(arr[k]> key){
                    arr[k+1] = arr[k];
                    arrSum.push([arr.slice(),j-1,k+1,key]);
                }else{

                    break;
                }

            }
            arr[k+1] = key;
            //if(arr[j]<arr[j-1]){
            //    var key = arr[j];
            //    arr[j]=arr[j-1];
            //    var k = j-2;
            //    while(k>=0 && key<arr[k]){
            //        arr[k+1] =arr[k];
            //        arrSum.push([arr.slice(),j-1,k,key]);
            //        k--;
            //
            //    }
            //    arr[k+1] = key;
            //}
        }
        arrSum.push([arr.slice(),j-1,0,key]);
        //console.log(arr);
        //console.log(arrSum);
        return arrSum;
    }
}
function animation(r){
    var a1 = r.shift()||[];

    if(a1 == []){
        return true;

    }
    console.log(a1);
    var arr = a1[0]; //数组
    var pos = a1[1];//范围
    var index =a1[2];//key所在的值
    var key = a1[3];//key值
    console.log(a1);
    var numList = document.getElementsByTagName("li");
    for(var i=0;i< arr.length;i++){
       if(i<=pos){
           numList[i].style.background ="#ccc";
           numList[i].style.height = arr[i]+"px";
       }
        if(i== index-1){
           numList[i].style.height = key +"px";
           numList[i].style.background="#ffff00";
       }

   }
     setTimeout(
        function(){
            animation(r);
        },1000)
}
window.onload = Queue;