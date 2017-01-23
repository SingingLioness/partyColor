function partyTime(){
	//Initialising variables
	var colorList=["red","blue","indigo","violet","yellow","green","white","black"];
	
	var width=500;
	var height=500;
	var top=20;
	var left=20;

	//Finding the body element
	var theBody=document.getElementById("myBody");

	

	//Creating the DOM structure
	while(width>100){
		var myDiv=document.createElement("div");
		//Generating random colors
		var randomColor=Math.random(colorList)*8;
		randomColor=Math.floor(randomColor);

		myDiv.style.top=top+"px";
		myDiv.style.left=left+"px";
		myDiv.style.width=width+"px";
		myDiv.style.height=height+"px";
		myDiv.style.background=colorList[randomColor];

		//Appending the div element to the body
		
		theBody.appendChild(myDiv);
		top+=10;
		left+=10;
		width-=20;
		height-=20;
	}	



}