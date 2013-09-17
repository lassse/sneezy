function init() {
	document.ontouchmove = function(e){
		e.preventDefault()
	}
}

$(window).on("load",init);