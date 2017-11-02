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
			var i=document.createElement("i");
			icon_f.appendChild(i);
			i.classList.add("fa");
			i.classList.add("fa-facebook");
	}
	function twitter(){
			icon_t.innerText="Bunu twitterde-da paylaş"
			icon_t.addEventListener("mouseout",tw_out);
			var i_twit=document.createElement("i");
			icon_t.appendChild(i_twit);
			i_twit.classList.add("fa");
			i_twit.classList.add("fa-twitter");

	}

	function printa(){
			icon_p.innerText="Bunu google-da paylaş"
			icon_p.addEventListener("mouseout",pt_out);
			var i_printa=document.createElement("i");
			icon_p.appendChild(i_printa);
			i_printa.classList.add("fa");
			i_printa.classList.add("fa-google");
	}

	function instagram(){
			icon_i.innerText="Bunu instagram-da paylaş"
			icon_i.addEventListener("mouseout",in_out);
			var i_insta=document.createElement("i");
			icon_i.appendChild(i_insta);
			i_insta.classList.add("fa");
			i_insta.classList.add("fa-instagram");
	}

	function fb_out(){
			icon_f.innerText=''
			var i=document.createElement("i");
			icon_f.appendChild(i);
			i.classList.add("fa");
			i.classList.add("fa-facebook");
	}
	function tw_out(){
			icon_t.innerText="";
			var i_twit=document.createElement("i");
			icon_t.appendChild(i_twit);
			i_twit.classList.add("fa");
			i_twit.classList.add("fa-twitter");
	}
	function pt_out(){
			icon_p.innerText="";
			var i_printa=document.createElement("i");
			icon_p.appendChild(i_printa);
			i_printa.classList.add("fa");
			i_printa.classList.add("fa-google");
	}
	function in_out(){
			icon_i.innerText="";
			var i_insta=document.createElement("i");
			icon_i.appendChild(i_insta);
			i_insta.classList.add("fa");
			i_insta.classList.add("fa-instagram");

	}

//  font awesome icons

	var i=document.createElement("i");
	icon_f.appendChild(i);
	i.classList.add("fa");
	i.classList.add("fa-facebook");


	var i_twit=document.createElement("i");
	icon_t.appendChild(i_twit);
	i_twit.classList.add("fa");
	i_twit.classList.add("fa-twitter");


	var i_printa=document.createElement("i");
	icon_p.appendChild(i_printa);
	i_printa.classList.add("fa");
	i_printa.classList.add("fa-google");


	var i_insta=document.createElement("i");
	icon_i.appendChild(i_insta);
	i_insta.classList.add("fa");
	i_insta.classList.add("fa-instagram");
