var count = 0;
document.getElementById("myButton").onclick = function () {
	count++;
	if (count % 2 == 0) {
		document.getElementById("demo").innerHTML="";
	} else {
		var img = document.createElement("img");
        img.src = "https://sun9-85.userapi.com/impg/DQR_B_AR0L2I7LlHjfkkQ6by-j-l7Qg_ujGFYg/dD-nFWj5spw.jpg?size=604x322&quality=96&sign=4867ed15517b3918614c1856b1d72166&type=album"
        document.getElementById("demo").appendChild(img);
	}
}