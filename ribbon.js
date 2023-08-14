function ribbon() {
	const canvas = document.querySelector(".ribbon-section>canvas");
	const context = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener("resize", function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		render();
	});

	function files(index) {
		var data = `ribbon-media/000.jpg
        ribbon-media/001.jpg
        ribbon-media/002.jpg
        ribbon-media/003.jpg
        ribbon-media/004.jpg
        ribbon-media/005.jpg
        ribbon-media/006.jpg
        ribbon-media/007.jpg
        ribbon-media/008.jpg
        ribbon-media/009.jpg
        ribbon-media/010.jpg
        ribbon-media/011.jpg
        ribbon-media/012.jpg
        ribbon-media/013.jpg
        ribbon-media/014.jpg
        ribbon-media/015.jpg
        ribbon-media/016.jpg
        ribbon-media/017.jpg
        ribbon-media/018.jpg
        ribbon-media/019.jpg
        ribbon-media/020.jpg
        ribbon-media/021.jpg
        ribbon-media/022.jpg
        ribbon-media/023.jpg
        ribbon-media/024.jpg
        ribbon-media/025.jpg
        ribbon-media/026.jpg
        ribbon-media/027.jpg
        ribbon-media/028.jpg
        ribbon-media/029.jpg
        ribbon-media/030.jpg
        ribbon-media/031.jpg
        ribbon-media/032.jpg
        ribbon-media/033.jpg
        ribbon-media/034.jpg
        ribbon-media/035.jpg
        ribbon-media/036.jpg
        ribbon-media/037.jpg
        ribbon-media/038.jpg
        ribbon-media/039.jpg
        ribbon-media/040.jpg
        ribbon-media/041.jpg
        ribbon-media/042.jpg
        ribbon-media/043.jpg
        ribbon-media/044.jpg
        ribbon-media/045.jpg
        ribbon-media/046.jpg
        ribbon-media/047.jpg
        ribbon-media/048.jpg
        ribbon-media/049.jpg
        ribbon-media/050.jpg
        ribbon-media/051.jpg
        ribbon-media/052.jpg
        ribbon-media/053.jpg
        ribbon-media/054.jpg
        ribbon-media/055.jpg
        ribbon-media/056.jpg
        ribbon-media/057.jpg
        ribbon-media/058.jpg
        ribbon-media/059.jpg
        ribbon-media/060.jpg
        ribbon-media/061.jpg
        ribbon-media/062.jpg
        ribbon-media/063.jpg
        ribbon-media/064.jpg
        ribbon-media/065.jpg
        ribbon-media/066.jpg
        ribbon-media/067.jpg
        ribbon-media/068.jpg
        ribbon-media/069.jpg
        ribbon-media/070.jpg
        ribbon-media/071.jpg
        ribbon-media/072.jpg
        ribbon-media/073.jpg
        ribbon-media/074.jpg
        ribbon-media/075.jpg
        ribbon-media/076.jpg
        ribbon-media/077.jpg
        ribbon-media/078.jpg
        ribbon-media/079.jpg
        ribbon-media/080.jpg
        ribbon-media/081.jpg
        ribbon-media/082.jpg
        ribbon-media/083.jpg
        ribbon-media/084.jpg
        ribbon-media/085.jpg
        ribbon-media/086.jpg
        ribbon-media/087.jpg
        ribbon-media/088.jpg
        ribbon-media/089.jpg
        ribbon-media/090.jpg
        ribbon-media/091.jpg
        ribbon-media/092.jpg
        ribbon-media/093.jpg
        ribbon-media/094.jpg
        ribbon-media/095.jpg
        ribbon-media/096.jpg
        ribbon-media/097.jpg
        ribbon-media/098.jpg
        ribbon-media/099.jpg
        ribbon-media/100.jpg
        ribbon-media/101.jpg
        ribbon-media/102.jpg
        ribbon-media/103.jpg
        ribbon-media/104.jpg
        ribbon-media/105.jpg
        ribbon-media/106.jpg
        ribbon-media/107.jpg
        ribbon-media/108.jpg
        ribbon-media/109.jpg
        ribbon-media/110.jpg
        ribbon-media/111.jpg
        ribbon-media/112.jpg
        ribbon-media/113.jpg
        ribbon-media/114.jpg
        ribbon-media/115.jpg
        ribbon-media/116.jpg
        ribbon-media/117.jpg
        ribbon-media/118.jpg
        ribbon-media/119.jpg
        ribbon-media/120.jpg
        ribbon-media/121.jpg
        ribbon-media/122.jpg
        ribbon-media/123.jpg
        ribbon-media/124.jpg
        ribbon-media/125.jpg
        ribbon-media/126.jpg
        ribbon-media/127.jpg
        ribbon-media/128.jpg
        ribbon-media/129.jpg
        ribbon-media/130.jpg
        ribbon-media/131.jpg
        ribbon-media/132.jpg
        ribbon-media/133.jpg
        ribbon-media/134.jpg
        ribbon-media/135.jpg
        ribbon-media/136.jpg
        ribbon-media/137.jpg
        ribbon-media/138.jpg
        ribbon-media/139.jpg
        ribbon-media/140.jpg
        ribbon-media/141.jpg
        ribbon-media/142.jpg
        ribbon-media/143.jpg
        ribbon-media/144.jpg
        ribbon-media/145.jpg
        ribbon-media/146.jpg
        ribbon-media/147.jpg
        ribbon-media/148.jpg
        ribbon-media/149.jpg
        ribbon-media/150.jpg
        ribbon-media/151.jpg
        ribbon-media/152.jpg
        ribbon-media/153.jpg
        ribbon-media/154.jpg
        ribbon-media/155.jpg
        ribbon-media/156.jpg
        ribbon-media/157.jpg
        ribbon-media/158.jpg
        ribbon-media/159.jpg
        ribbon-media/160.jpg
        ribbon-media/161.jpg
        ribbon-media/162.jpg
        ribbon-media/163.jpg
        ribbon-media/164.jpg
        ribbon-media/165.jpg
        ribbon-media/166.jpg
        ribbon-media/167.jpg
        ribbon-media/168.jpg
        ribbon-media/169.jpg
        ribbon-media/170.jpg
        ribbon-media/171.jpg
        ribbon-media/172.jpg
        ribbon-media/173.jpg
        ribbon-media/174.jpg
        ribbon-media/175.jpg
        ribbon-media/176.jpg
        ribbon-media/177.jpg
        ribbon-media/178.jpg
        ribbon-media/179.jpg
        ribbon-media/180.jpg
        ribbon-media/181.jpg
        ribbon-media/182.jpg
        ribbon-media/183.jpg
        ribbon-media/184.jpg
        ribbon-media/185.jpg
        ribbon-media/186.jpg
        ribbon-media/187.jpg
        ribbon-media/188.jpg
        ribbon-media/189.jpg
        ribbon-media/190.jpg
        ribbon-media/191.jpg
        ribbon-media/192.jpg
        ribbon-media/193.jpg
        ribbon-media/194.jpg
        ribbon-media/195.jpg
        ribbon-media/196.jpg
        ribbon-media/197.jpg
        ribbon-media/198.jpg
        ribbon-media/199.jpg
        ribbon-media/200.jpg
        ribbon-media/201.jpg
        ribbon-media/202.jpg
        ribbon-media/203.jpg
        ribbon-media/204.jpg
        ribbon-media/205.jpg
        ribbon-media/206.jpg
        ribbon-media/207.jpg
        ribbon-media/208.jpg
        ribbon-media/209.jpg
        ribbon-media/210.jpg
        ribbon-media/211.jpg
        ribbon-media/212.jpg
        ribbon-media/213.jpg
        ribbon-media/214.jpg
        ribbon-media/215.jpg
        ribbon-media/216.jpg
        ribbon-media/217.jpg
        ribbon-media/218.jpg
        ribbon-media/219.jpg
        ribbon-media/220.jpg
        ribbon-media/221.jpg
        ribbon-media/222.jpg
        ribbon-media/223.jpg
        ribbon-media/224.jpg
        ribbon-media/225.jpg
        ribbon-media/226.jpg
        ribbon-media/227.jpg
        ribbon-media/228.jpg
        ribbon-media/229.jpg
        ribbon-media/230.jpg
        ribbon-media/231.jpg
        ribbon-media/232.jpg
        ribbon-media/233.jpg
        ribbon-media/234.jpg
        ribbon-media/235.jpg
        ribbon-media/236.jpg
        ribbon-media/237.jpg
        ribbon-media/238.jpg
        ribbon-media/239.jpg
        ribbon-media/240.jpg
        ribbon-media/241.jpg
        ribbon-media/242.jpg
        ribbon-media/243.jpg
        ribbon-media/244.jpg
        ribbon-media/245.jpg
        ribbon-media/246.jpg
        ribbon-media/247.jpg
        ribbon-media/248.jpg
        ribbon-media/249.jpg
        ribbon-media/250.jpg
        ribbon-media/251.jpg
        ribbon-media/252.jpg
        ribbon-media/253.jpg
        ribbon-media/254.jpg
        ribbon-media/255.jpg
        ribbon-media/256.jpg
        ribbon-media/257.jpg
        ribbon-media/258.jpg
        ribbon-media/259.jpg
        ribbon-media/260.jpg
        ribbon-media/261.jpg
        ribbon-media/262.jpg
        ribbon-media/263.jpg
        ribbon-media/264.jpg
        ribbon-media/265.jpg
        ribbon-media/266.jpg
        ribbon-media/267.jpg
        ribbon-media/268.jpg
        ribbon-media/269.jpg
        ribbon-media/270.jpg
        ribbon-media/271.jpg
        ribbon-media/272.jpg
        ribbon-media/273.jpg
        ribbon-media/274.jpg
        ribbon-media/275.jpg
        ribbon-media/276.jpg
        ribbon-media/277.jpg
        ribbon-media/278.jpg
        ribbon-media/279.jpg
        ribbon-media/280.jpg
        ribbon-media/281.jpg
        ribbon-media/282.jpg
        ribbon-media/283.jpg
        ribbon-media/284.jpg
        ribbon-media/285.jpg
        ribbon-media/286.jpg
        ribbon-media/287.jpg
        ribbon-media/288.jpg
        ribbon-media/289.jpg
        ribbon-media/290.jpg
        ribbon-media/291.jpg
        ribbon-media/292.jpg
        ribbon-media/293.jpg
        ribbon-media/294.jpg
        ribbon-media/295.jpg
        ribbon-media/296.jpg
        ribbon-media/297.jpg
        ribbon-media/298.jpg
        ribbon-media/299.jpg
        ribbon-media/300.jpg`;

		return data.split("\n")[index];
	}

	const frameCount = 301;

	const images = [];
	const imageSeq = {
		frame: 0,
	};

	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = files(i);
		images.push(img);
	}

	gsap.to(imageSeq, {
		frame: frameCount - 1,
		snap: "frame",
		ease: "none",
		scrollTrigger: {
			scrub: 1.8,
			pin: true,
			trigger: ".ribbon-section",
		},
		onUpdate: render,
	});

	images[0].onload = render;

	function render() {
		scaleImage(images[imageSeq.frame], context);
	}

	function scaleImage(img, ctx) {
		var canvas = ctx.canvas;
		var hRatio = canvas.width / img.width;
		var vRatio = canvas.height / img.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}

	gsap.to(".ribbon", {
		// scale: 0.9,
		scrollTrigger: {
			scrub: 0.1,
			trigger: ".ribbon-section",
			start: "bottom 100%",
			// markers:true,
		},
	});
	// ScrollTrigger.create({
	// 	trigger: "#home",
	// 	pin: true,
	// 	start: "bottom 100%",
	// });
}

ribbon();
