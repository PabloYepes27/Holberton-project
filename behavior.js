document.addEventListener("DOMContentLoaded", function(event) {
	const toolbar = document.getElementById("toolmenu").addEventListener('click',function(event) {

    	event.preventDefault();
    	if (toolbar == 'toolmenu') {
    		document.getElementById("ulmenu").classList.toggle("active");
	    }else{
	    	document.getElementById("ulmenu").classList.toggle("active");
	    }
    })
  //first img
    var thumbnailElement1 = document.getElementById("Misolha");
    thumbnailElement1.addEventListener("click", function() {
	  if (thumbnailElement1.className == "small") {
	      thumbnailElement1.className = "";
	    } else { 
	    	thumbnailElement1.className = "small";
	    }
    });
  //second img
    var thumbnailElement2 = document.getElementById("Niagara");
    thumbnailElement2.addEventListener("click", function() {
	  if (thumbnailElement2.className == "small") {
	      thumbnailElement2.className = "";
	    } else { 
	    	thumbnailElement2.className = "small";
	    }
    });
  //third img
    var thumbnailElement3 = document.getElementById("Belmira");
    thumbnailElement3.addEventListener("click", function() {
	  if (thumbnailElement3.className == "small") {
	      thumbnailElement3.className = "";
	    } else { 
	    	thumbnailElement3.className = "small";
	    }
    });
});
