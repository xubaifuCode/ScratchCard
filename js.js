var flag = false;

function init() {
	var result = new Array("THANKS", "SUPER GOLD", "GIRL FRIEND", "BOY FRIEND", "IPHONE -1");
	var mask = document.getElementById("mask");
	var res = document.getElementById("result");

	mask.style.left = res.offsetLeft + "px";
	mask.style.top = res.offsetTop + "px";
	mask.width = res.offsetWidth;
	mask.height = res.offsetHeight;
	res.innerHTML = result[Math.round(Math.random() * (result.length - 1))];

	var ctx=mask.getContext('2d');
	ctx.fillStyle = "gray";
	ctx.fillRect(0,0,res.offsetWidth,res.offsetHeight);

	mask.addEventListener("mousemove", mouseMove);
	mask.addEventListener("mousedown", mouseDown);
	mask.addEventListener("mouseup", mouseUp);

	function mouseDown() {
		flag = true;
	}

	function mouseUp() {
		flag = false;
	}

	function mouseMove(e) {
		if (flag) {
			ctx.clearRect(e.clientX - res.offsetLeft, e.clientY - res.offsetTop, 10, 10);
		}
	}
}
