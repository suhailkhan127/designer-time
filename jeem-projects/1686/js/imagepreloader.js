function preloadImages(imgs){
	
	var picArr = [];
	
		for (i = 0; i<imgs.length; i++){
			
				picArr[i]= new Image(100,100); 
				picArr[i].src=imgs[i]; 

			
			}
	
	}
	
preloadImages([
		'images/slider_button_act.png',
		
		
		'images/big_img1.html',
		'images/big_img2.html',
		'images/big_img3.html',
		'images/big_img4.html',
		'images/big_img5.html'
		
		]);