! function(t, e) {
	var n = e.documentElement,
		r = t.devicePixelRatio || 1;

	function o() {
		var t = n.clientWidth / 40;
		n.clientWidth < 2560 && (t = n.clientWidth / 40), n.clientWidth < 1600 && (t = n
				.clientWidth / 30), n.clientWidth < 1200 && (t = n.clientWidth / 25), n
			.clientWidth < 1024 && (t = n.clientWidth / 21), n.clientWidth < 768 && (t = n
				.clientWidth / 10), n.style.fontSize = t + "px"
	}
	if (function t() {
			e.body ? e.body.style.fontSize = 12 * r + "px" : e.addEventListener(
				"DOMContentLoaded", t)
		}(), o(), t.addEventListener("resize", o), t.addEventListener("pageshow", (function(t) {
			t.persisted && o()
		})), r >= 2) {
		var i = e.createElement("body"),
			s = e.createElement("div");
		s.style.border = ".5px solid transparent", i.appendChild(s), n.appendChild(i), 1 === s
			.offsetHeight && n.classList.add("hairlines"), n.removeChild(i)
	}
}(window, document);
window.onscroll = function(){
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		$(".html_header").addClass('bg_type');
	} else {
		$(".html_header").removeClass('bg_type');
	}
};