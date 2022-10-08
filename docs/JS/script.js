//スクロールを検出 
window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    window_height = document.getElementById('body1').clientHeight;
    pixel_per_height = window_height / 100

    thresh = pixel_per_height * 32

    console.log("PAGE Y:" + last_known_scroll_position)
    console.log("thresh:" + thresh)


    
    if (last_known_scroll_position >= thresh) {
        document.getElementById('home_logo_img').style.position = 'relative';
        document.getElementById('home_logo_img').style.top = '105vw';
        // document.getElementById('home_logo_img').style.position = 'relative';
    }
    else {
        document.getElementById('home_logo_img').style.position = 'fixed';
        document.getElementById('home_logo_img').style.top = '10vw';
        document.getElementById('home_logo_img').style.left = '7vw';
    }

    // if (!ticking) {
    //   window.requestAnimationFrame(function() {
    //     doSomething(last_known_scroll_position);
    //     ticking = false;
    //   });
  
    //   ticking = true;
    // }
  });