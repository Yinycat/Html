function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    }else{
      window.onload = function(){
        oldonload();
        func();
      }
   }
}

function getDom(id){
	return document.getElementById(id);
}

function showProvince(){
	getDom("intext").onclick = showSelect;
	selectProvince();
	getDom("layer").onclick = hiddenSelect;
}

function selectProvince(){
	var pro = getDom("select").getElementsByTagName("li");
    var links;
    for(var i=0; i<pro.length; i++){
    	links = pro[i].getElementsByTagName("a");
    	for(var j=0; j<links.length; j++){
    		links[j].onclick = function(){
    			getDom("intext").innerHTML = this.innerHTML;
    			hiddenSelect();
    		}
    	}
    }
}

function showSelect(){
	getDom("select").style.display = "block";
	getDom("intext").style.color = "#CCC";
	getDom("layer").style.display = "block";
}

function hiddenSelect(){
	getDom("select").style.display = "none";
	getDom("intext").style.color = "#000";
	getDom("layer").style.display = "none";
}

addLoadEvent(showProvince);