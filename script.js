let followMouse = document.querySelector(".mouse-circle");
let navbar = document.querySelectorAll(".mouse-circle-expand");

function circleMouseFollower() {
	window.addEventListener("mousemove", function (dets) {
		// console.log(dets.clientX, dets.clientY);
		// circle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
		gsap.to(followMouse, {
			x: dets.clientX,
			y: dets.clientY,
			duration: 0.2,
			ease: Expo,
		});
	});
}

function mouseCircleExpand() {
	navbar.forEach((item) => {
		item.addEventListener("mousemove", (dets) => {
			gsap.to(followMouse, {
				opacity: 0.3,
				scale: 2,
			});
		});

		item.addEventListener("mouseleave", function (dets) {
			gsap.to(followMouse, {
				opacity: 1,
				scale: 1,
			});
		});
	});
}

circleMouseFollower();
mouseCircleExpand();

// --------section-2-------about-----



