/**
 * Created by yuanchao on 2017/3/5.
 */
function Queue(){
    var leftIn = document.getElementById("leftIn");
    var rightIn = document.getElementById("rightIn");
    var leftOut = document.getElementById("leftOut");
    var rightOut = document.getElementById("rightOut");
    var content = document.getElementById("content");
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
    var list = document.getElementsByClassName("queue")[0];
   list.onclick = function(evt){
        evt = evt|| window.event;
        var target = evt.Target || evt.srcElement;
        var tagName = target.tagName;
        if(tagName=="LI"){
            list.removeChild(target);
        }
    }
}
function leftInFunc(){
    var content = document.getElementById("content").value;
    var check =/^[-+]?\d*$/;
    if(content == ""){
        alert("������һ��ֵ��");
    }else if(check.test(content)){
        var li = document.createElement("li");
        var text = document.createTextNode(content);
        li.appendChild(text);
        var list = document.getElementsByClassName("queue")[0];
        var first =  getNextElement(list.firstChild);
        if(first != null){
            list.insertBefore(li,first);
        }
        else{
            list.appendChild(li);
        }
    }else {
        alert("ֻ��������ֵ")
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

    var content = document.getElementById("content").value;
    var check =/^[-+]?\d*$/;
    if(content == ""){
        alert("������һ��ֵ!S");
    }else if(check.test(content)){
        var li = document.createElement("li");
        var text = document.createTextNode(content);
        li.appendChild(text);

        document.getElementsByClassName("queue")[0].appendChild(li);
    }else{
        alert("ֻ��������ֵ");
    }
}

function leftOutFunc(){
    var list = document.getElementsByClassName("queue")[0];
    var first =  getNextElement(list.firstChild);
    if(first != null){
        list.removeChild(first);
    }
    else{
        alert("�Ѿ�û��������");
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
        alert("�Ѿ�û��������");
    }
}
window.onload = Queue;