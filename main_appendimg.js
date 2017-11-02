// change images 
	var google=document.getElementById("google");
	var ios=document.getElementById("ios");
	var change_img=document.getElementById("change_img")

	google.addEventListener("click",google_click);

	function google_click(){
		document.getElementById("change_img").src="galaxy-s7-edge_gallery_left_gold_s3.png";
		ios.addEventListener("mouseover",ios_try);
	}

	function ios_try(){
		document.getElementById("change_img").src="iPhone-5S-white.png";
	}


//  icons

	var sosial_icons=document.getElementById("sosial_icons");
	var icon_f=document.createElement("div");
	var icon_t=document.createElement("div");
	var icon_p=document.createElement("div");
	var icon_i=document.createElement("div");

	sosial_icons.appendChild(icon_f);
	sosial_icons.appendChild(icon_t);
	sosial_icons.appendChild(icon_p);
	sosial_icons.appendChild(icon_i);



	icon_f.classList.add("view1");
	icon_t.classList.add("view2");
	icon_p.classList.add("view3");
	icon_i.classList.add("view4");


// icons event

	icon_f.addEventListener("mouseover",facebook);
	icon_t.addEventListener("mouseover",twitter);
	icon_p.addEventListener("mouseover",printa);
	icon_i.addEventListener("mouseover",instagram);

	function facebook(){
			icon_f.innerText="Bunu facebook-da paylaş"
			icon_f.addEventListener("mouseout",fb_out);
			icon_f.appendChild(fb_img);
			fb_img.src="fb_icon.png";
		
	}
	function twitter(){
			icon_t.innerText="Bunu twitterde-da paylaş"
			icon_t.addEventListener("mouseout",tw_out);
			icon_t.appendChild(tw_img);
	        tw_img.src="tw_icon.png";
		

	}

	function printa(){
			icon_p.innerText="Bunu google-da paylaş"
			icon_p.addEventListener("mouseout",pt_out);
			var pre_img= document.createElement("img");
			icon_p.appendChild(pre_img);
			pre_img.src="pre_icon.png";
		
	}

	function instagram(){
			icon_i.innerText="Bunu instagram-da paylaş"
			icon_i.addEventListener("mouseout",in_out);
			var insta_img= document.createElement("img");
			icon_i.appendChild(insta_img);
			insta_img.src="insta_icon.png";
	
	}

	function fb_out(){
			icon_f.innerText='';
			icon_f.appendChild(fb_img);
			fb_img.src="fb_icon.png";
	
	}
	function tw_out(){
			icon_t.innerText="";
			icon_t.appendChild(tw_img);
	        tw_img.src="tw_icon.png";

	}
	function pt_out(){
			icon_p.innerText="";
			var pre_img= document.createElement("img");
			icon_p.appendChild(pre_img);
			pre_img.src="pre_icon.png";

	}
	function in_out(){
			icon_i.innerText="";
			var insta_img= document.createElement("img");
			icon_i.appendChild(insta_img);
			insta_img.src="insta_icon.png";

	}

	//  icon img

	var fb_img= document.createElement("img");
	icon_f.appendChild(fb_img);
	fb_img.src="fb_icon.png";


	var tw_img= document.createElement("img");
	icon_t.appendChild(tw_img);
	tw_img.src="tw_icon.png";


	var pre_img= document.createElement("img");
	icon_p.appendChild(pre_img);
	pre_img.src="pre_icon.png";


	var insta_img= document.createElement("img");
	icon_i.appendChild(insta_img);
	insta_img.src="insta_icon.png";