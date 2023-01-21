var main=document.querySelector("main");
main.innerHTML+=`
	<header id="header">
		<div class="bg-image">
			<div>
				<div class="container">
					<div class="row d-flex align-items-center" id="h_row">
						
					</div><!--end-row-->
				</div><!--end-container-->
			</div>
		</div>
	</header>
`;
var HEADER=(logo,contact)=>{
	for(var i=0;i<2;i++){
		if(i==0){
			h_row.innerHTML+=`
				<div class="col-md-4">
					<div id="D_logo">
						
					</div>
				</div><!--end-column-->
			`;
			D_logo.innerHTML+=logo.tag;
			LOGO.setAttribute("style","width:150px;height:60px;text-align:center;");
		}
		else{
			h_row.innerHTML+=`
				<div class="col-md-8">
					<div>
						<ul id="contact_ul" class="nav"></ul>
					</div>
				</div><!--end-column-->
			`;
		}
		
	}
	var CONTACT=()=>{
			for(var i in contact){
				contact_ul.innerHTML+=`
					<li class="nav-item px-3"><a href="#" class="text-white text-decoration-none fw-bold">${contact[i].icon} ${contact[i].content}</a></li>
				`;
			}
		}
		CONTACT();
}
HEADER({
	tag:"<image src='image/logo.png' alt='logo' id='LOGO'>",
	src:""
},[{
	icon:"<i class='fa-brands fa-whatsapp'></i>",
	content:"9669826000"
},{
	icon:"<i class='fa-solid fa-phone'></i>",
	content:"07752357487",
},{
	icon:"<i class='fa-solid fa-envelope'></i>",
	content:"maajagdambahotel2021@gmail.com",
}]);

var NaV="<nav id='nav'></nav>";
header.insertAdjacentHTML("afterend",NaV);

nav.innerHTML+=`
	<div class="container">
		<div>
			<ul id="nav_ul" class="nav p-3"></ul>
		</div>
	</div><!--end-container-->
`;

var navigation=(navbar)=>{
	for(var i in navbar){
		nav_ul.innerHTML+=`
			<li class="nav-item"><a href="${navbar[i].link}" class="nav-link text-secondary">${navbar[i].tab}</a></li>
		`;
	}
}
navigation([{
	tab:"Home",
	link:"index.html"
},{
	tab:"Our Rooms",
	link:"Our Rooms.html"
},{
	tab:"Our Halls",
	link:"Our Halls.html"
},{
	tab:"Restaurant",
	link:"Restaurant.html"
},{
	tab:"Our Gallery",
	link:"Our Gallery.html"
},{
	tab:"Book Now",
	link:"Book Now.html"
}]);

var Sec="<section id='sec'></section>";

nav.insertAdjacentHTML("afterend",Sec);

sec.innerHTML+=`
	<div class="bg-image2 d-flex align-items-center" id="bg2">
		<div class="container">
			<div class="row px-5">
				<div class="col-md-6">
					<div class="">
						<h4 class="text-white display-4">HOTEL MAA <br>JAGDAMBA PALACE</h4>
						<a href="#" class="text-decoration-none text-white bg-dark p-2">BOOK NOW</a>
					</div>
				</div><!--end-column-->
				<div class="col-md-6"></div><!--end-column-->
			</div><!--end-row-->
		</div><!--end-container-->
	</div>
`;

var Article="<article id='article'></article>";

sec.insertAdjacentHTML("afterend",Article);

article.innerHTML+=`
	<div class="container">
		<h2 class="pt-4 text-center" id="welcomeBrief">Welcome To Hotel Maa Jagdamba Palace</h2>
		<div class="row px-5" id="Article1Row">
			
		</div><!--end--row-->
	</div><!--end-container-->
`;

var welcome=(article1)=>{
	for(var i=0;i<5;i++){
		Article1Row.innerHTML+=`
			<div class="col-md-2">
				<div class="text-center shadow p-2 mt-3" id='art1Cols'>
					<image src="${article1[i].path}" height="81" width="81">
					<h5><a href="#" class="text-decoration-none text-black">${article1[i].heading}</a></h5>
				</div>
			</div><!--end-column-->
		`;
	}
}
welcome([{
	path:"image/jp.png",
	heading:"Marriage Party"
},{
	path:"image/jp2.png",
	heading:"Birthday Party"
},{
	path:"image/jp3.png",
	heading:"Kitty Party"
},{
	path:"image/jp4.png",
	heading:"Restaurent"
},{
	path:"image/jp5.png",
	heading:"Conference Hall"
}]);


var media=()=>{
	var a=matchMedia("(max-width:768px)");
	if(a.matches){
		welcomeBrief.classList.remove("pt-4");
	}
	else{
		welcomeBrief.classList.add("pt-4");
	}
}
onload=media;
onresize=media;

var Article2="<article id='article2'></article>";
article.insertAdjacentHTML("afterend",Article2);

article2.innerHTML+=`
	<div class="container mt-5">
		<div class="row px-5">
			<div class="col-md-6">
				<div>
					<!-- Carousel -->
					<div id="demo" class="carousel slide" data-bs-ride="carousel">

						<!-- Indicators/dots -->
						<div class="carousel-indicators" id="indicators">
							<button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
						</div>

						<!-- The slideshow/carousel -->
						<div class="carousel-inner" id="slideshow">
							<div class="carousel-item active">
								<img src="image/jh.jpg" alt="banner" class="d-block w-100" height="350" width="555">
							</div>
						</div>

						<!-- Left and right controls/icons -->
						<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
							<span class="carousel-control-prev-icon"></span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
							<span class="carousel-control-next-icon"></span>
						</button>
					</div>
				</div>
			</div><!--end-column-->
			<div class="col-md-6">
				<div>
					<h2 class="fs-1">About Us</h2>
					<p class="fs-5 pt-2">
						Hotel Maa Jagdamba Palace in Bilaspur-chhattisgarh. The hotel is strategically located in Mangla Road, Beside Holy Cross School, Bilaspur. Many have also reviewed the hotel to be among the sought after Hotels in Bilaspur-chhattisgarh. payment methods to ease out the payment process like,Net Banking & Cash.
					</p>
				</div>
			</div><!--end-column-->
		</div><!--end-row-->
	</div><!--end-container-->
`;

var ABOUT=(slider)=>{
	for(var i=1;i<9;i++){
		slideshow.innerHTML+=`
			<div class="carousel-item">
				<img src="${slider[i].path}" alt="banner" class="d-block w-100" height="350" width="555">
			</div>
		`;
		indicators.innerHTML+=`
			<button type="button" data-bs-target="#demo" data-bs-slide-to="${slider[i].indicator}" class="active"></button>
		`;
	}
}
ABOUT([{
	path:"image/jh.jpg",
	indicator:"0"
},{
	path:"image/jh2.jpg",
	indicator:"1"
},{
	path:"image/jh3.jpg",
	indicator:"2"
},{
	path:"image/jh4.jpg",
	indicator:"3"
},{
	path:"image/jh5.jpg",
	indicator:"4"
},{
	path:"image/jh6.jpg",
	indicator:"5"
},{
	path:"image/jh7.jpg",
	indicator:"6"
},{
	path:"image/jh8.jpg",
	indicator:"7"
},{
	path:"image/jh9.jpg",
	indicator:"8"
},]);

var Article3="<article id='article3'></article>";
article2.insertAdjacentHTML("afterend",Article3);

article3.innerHTML+=`
	<div class="container">
		<div class="row p-5" id="facility">
		
		</div><!--end-row-->
	</div><!--end-container-->
`;

var Facility=(Fcontent)=>{
	for(var i=0;i<8;i++){
		facility.innerHTML+=`
			<div class="col-md-3">
				<div>
					<p class="text-center fs-3 p-4 shadow rounded-3">
						${Fcontent[i].icon}<br>
						${Fcontent[i].content}
					</p>
				</div>
			</div><!--end-column-->
		`;
	}
}
Facility([{
	icon:'<i class="fa-solid fa-wifi"></i>',
	content:"Wifi Internet"
},{
	icon:'<i class="fa-solid fa-utensils"></i>',
	content:"Restaurent"
},{
	icon:'<i class="fa-solid fa-shirt"></i>',
	content:"Laundry"
},{
	icon:'<i class="fa-solid fa-car"></i>',
	content:"Parking"
},{
	icon:'<i class="fa-solid fa-mug-saucer"></i>',
	content:"Room Service"
},{
	icon:'<i class="fa-regular fa-calendar"></i>',
	content:"Telephone Service"
},{
	icon:'<i class="fa-solid fa-car"></i>',
	content:"PickUp & Drop"
},{
	icon:'<i class="fa-solid fa-shield-halved"></i>',
	content:"24 hours Security"
}]);


var Article4="<article id='article4'></article>";
article3.insertAdjacentHTML("afterend",Article4);

article4.innerHTML+=`
	<div class="container">
		<div class="row px-5">
			<div class="col-md-6">
				<div>
					<h3 class="fs-1 fw-lighter border-bottom p-4">Reception</h3>
					<p class="fs-5 small py-2">
						We will delighted to welcome you at reception. Hotel Maa Jagdamba Palace is situated at the prime location of bilaspur, Mangla Road, Beside Holy Cross School, Bilaspur.
					</p>
					
					<ul id="ReceptionUl" class="list-unstyled"></ul>
					
					<p>
						<a href="#" class="border text-decoration-none text-black p-2 border-dark">Call Now</a>
					</p>
				</div>
			</div><!--end-column-->
			<div class="col-md-6">
				<div>
					<img  class="mw-100" src="image/jh10.png" alt="reception">
				</div>
			</div><!--end-column-->
		</div><!--end-row-->
	</div><!--end-container-->
`;

var RecepUl=(LI)=>{
	for(var i in LI){
		ReceptionUl.innerHTML+=`
			<li class="py-2">${LI[i].style}  ${LI[i].content}</li>
		`;
	}
}
RecepUl([{
	style:'<i class="fa-solid fa-check"></i>',
	content:"Wifi Internet"
},{
	style:'<i class="fa-solid fa-check"></i>',
	content:"Luxurious & Convenient Rooms"
},{
	style:'<i class="fa-solid fa-check"></i>',
	content:"Banquet Hall"
},{
	style:'<i class="fa-solid fa-check"></i>',
	content:" PickUp & Drop From Uslapur Railway Station"
}]);


var Article5="<article id='article5'></article>";
article4.insertAdjacentHTML("afterend",Article5);

article5.innerHTML+=`
	<div class="container">
		<h3 class="text-center fs-1 py-4 fw-lighter">Restaurent Food</h3>
		<div class="row px-5" id="Food">
			
		</div><!--end-row-->
	</div><!--end-container-->
`;

var food=(Restaurent)=>{
	for(var i=0;i<3;i++){
		Food.innerHTML+=`
			<div class="col-md-4">
				<div class="${Restaurent[i].path} d-flex align-items-end">
					<h3 class="text-white fs-1 bg-black w-100 text-center p-2 bg-opacity-50">${Restaurent[i].content}</h3>
				</div>
			</div><!--end-column-->
		`;
	}
}
food([{
	path:"bg-image3",
	content:"Indian Food"
},{
	path:"bg-image4",
	content:"Chinese Food"
},{
	path:"bg-image5",
	content:"South Indian"
}]);

var Article6="<article id='article6'></article>";
article5.insertAdjacentHTML("afterend",Article6);

article6.innerHTML+=`
	<div class="container">
		<h3 class="text-center fs-1 py-4 fw-lighter">Our Video</h3>
		<div class="d-flex justify-content-center">
			<video  id="video" controls>
				<source src="video/jagdamba.mp4">
			</video>
		</div>
	</div><!--end-container-->
`;

video.setAttribute("style","width:40%;height:300px;");


var Article7="<article id='article7'></article>";
article6.insertAdjacentHTML("afterend",Article7);

article7.innerHTML+=`
	<div class="container">
		<h3 class="text-center fs-1 py-4 fw-lighter">Luxurious & Convenient</h3>
		<div class="row px-5" id="rooms">
			
		</div><!--end-row-->
		<p class="text-center pt-4">
			<a href="#" class="text-decoration-none text-black p-2 border border-dark">More Rooms</a>
		</p>
	</div><!--end-container-->
`;

var Rooms=(card)=>{
	for(var i=0;i<3;i++){
		rooms.innerHTML+=`
			<div class="col-md-4">
				<div>
					<div class="card p-2 shadow-sm">
						<img class="card-img-top" src="${card[i].img}" alt="Card image" height="206" width="340">
						<p class="card-text text-secondary border-bottom pb-4 fs-5">${card[i].txt}</p>
						<div class="card-body">
							<h5 class="card-title">${card[i].title}</h5>
							<p class="card-text">${card[i].txt1}</p>
							<p class="card-text">${card[i].txt2}</p>
							<a href="#" class="text-decoration-none text-secondary border border-dark p-2">Book Now</a>
						</div>
					</div>
				</div>
			</div><!--end-column-->
		`;
	}
}
Rooms([{
	img:"image/room01.jpg",
	txt:"Luxurious Suite Room",
	title:"TARIFF",
	txt1:"Single - 1799/-",
	txt2:"Double - 1999/-"
},{
	img:"image/room02.jpg",
	txt:"AC Deluxe Room",
	title:"TARIFF",
	txt1:"Single - 1299/-",
	txt2:"Double - 1499/-"
},{
	img:"image/room03.jpg",
	txt:"Non AC Deluxe Room",
	title:"TARIFF",
	txt1:"Single - 999/-",
	txt2:"Double - 999/-"
}]);

var Footer="<footer id='footer' class='bg-dark'></footer>";
article7.insertAdjacentHTML("afterend",Footer);

footer.innerHTML+=`
	<div class="container">
		<div class="row p-5" id="bottomRow">
			
		</div><!--end-row-->
	</div><!--end-container-->
`;

var FOOTER=(heading)=>{
	for(var i=0;i<3;i++){
			bottomRow.innerHTML+=`
			<div class="col-md-4">
				<div>
					<h3 class="text-white fs-1 fw-lighter">${heading[i]}</h3>
					<ul class="list-unstyled bottomUl">
						
					</ul>
				</div>
			</div><!--end-column-->
		`;
	}
	var firstUl=document.querySelectorAll(".bottomUl")[0];
		firstUl.setAttribute("id","UL1");
		
		let COL1=(col1)=>{
			
			for(var i in col1.list){
				UL1.innerHTML+=`
					<li class="py-2">
						<a href="#" class="text-decoration-none text-white">${col1.list[i]}</a>
					</li>
				`;
			}
		}
		COL1({
			list:["Home","About","Room","Restaurent","Our Gallery"]
		});
		
	var secondUl=document.querySelectorAll(".bottomUl")[1];
		secondUl.setAttribute("id","UL2");
		
		let COL2=(col2)=>{
			
			for(var i in col2.list){
				UL2.innerHTML+=`
					<li class="py-2">
						<a href="#" class="text-decoration-none text-white">${col2.list[i]}</a>
					</li>
				`;
			}
		}
		COL2({
			list:["Room Service","Restaurent","Parking","Luxurious Rooms","Loundry"]
		});
		
	var thirdUl=document.querySelectorAll(".bottomUl")[2];
		thirdUl.setAttribute("id","UL3");
		
		let COL3=(col3)=>{
			
			for(var i in col3.list){
				UL3.innerHTML+=`
					<li class="py-2">
						<a href="#" class="text-decoration-none text-white">${col3.list[i]}</a>
					</li>
				`;
			}
		}
		COL3({
			list:['<i class="fa-brands fa-whatsapp"></i> 9669826000','<i class="fa-brands fa-whatsapp"></i> 7692080000','<i class="fa-brands fa-whatsapp"></i> 8357080000',' <i class="fa-solid fa-phone"></i> 07752357487','<i class="fa-solid fa-envelope"></i>      maajagdambahotel2021@gmail.com','<i class="fa-solid fa-location-pin"></i>  Mangla Road, Beside Holy Cross School, Bilaspur ( 495001 ).']
		});

		
}
FOOTER(["Our Menu","Our Service","Our Address"]);

