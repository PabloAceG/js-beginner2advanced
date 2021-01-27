window.onload = () => {
    // Smart Watch Image
    const imgSw = $('#img-sw');

    // Buttons
    const btnBlack  = $('#btn-black');
    const btnBlue   = $('#btn-blue');
    const btnPink   = $('#btn-pink');
    const btnPurple = $('#btn-purple');
    const btnRed    = $('#btn-red');
    const btnTime   = $('#btn-time');
    const btnHeartR = $('#btn-hr');
    const btnBuy    = $('#btn-buy');
    
    // Timer, update value every second
    const timer = $('#time');
    let screenTime = 0;
    setInterval( () => {
        screenTime += 1;
        timer.text(secondsToHMS());
    }, 1000);
    // Heart rate
    const heartRate = $('#heart-rate');
    heartRate.css('display', 'none');
    let makeBigger = true;
    setInterval( () => {
        if (makeBigger) {
            heartRate.width('25%');
            heartRate.height('30%');
            makeBigger = false;
        } else {
            heartRate.width('20%');
            heartRate.height('25%');
            makeBigger = true;
        }
    }, 1000);
    heartRate.css('width');


    // Color selectors
    btnBlack.on('click', () => {
        imgSw.attr('src', '../assets/sw-black.png');
        imgSw.attr('alt', 'Black Starp');
    });

    btnBlue.on('click', () => {
        imgSw.attr('src', '../assets/sw-blue.png');
        imgSw.attr('alt', 'Blue Starp');
    });

    btnPink.on('click', () => {
        imgSw.attr('src', '../assets/sw-pink.png');
        imgSw.attr('alt', 'Pink Starp');
    });

    btnPurple.on('click', () => {
        imgSw.attr('src', '../assets/sw-purple.png');
        imgSw.attr('alt', 'Purple Starp');
    });

    btnRed.on('click', () => {
        imgSw.attr('src', '../assets/sw-red.png');
        imgSw.attr('alt', 'Red Starp');
    });


    // Feature button
    btnTime.on('click', () => {
        timer.show(); 
        heartRate.hide();
    });

    btnHeartR.on('click', () => {
        timer.hide();
        heartRate.show();
    });

    // Buy button
    btnBuy.on('click', () => {
        alert('Congratulations, this Smart Watch is yours!');
    });


    // Complementary functions
    const secondsToHMS = () => {
        let measuredTime = new Date(null);
        measuredTime.setSeconds(screenTime);
        return measuredTime.toISOString().substr(11,8);
    };
}

