// TODO: Arrows don't work
$(document).ready( () => {
    // Show selected item
    function showSkinCard() {
        $('#select-skin-card').css ('display', 'block');
        $('#select-eyes-card').css ('display', 'none');
        $('#select-mouth-card').css('display', 'none');
    }


    function showEyesCard() {
        $('#select-skin-card').css ('display', 'none');
        $('#select-eyes-card').css ('display', 'block');
        $('#select-mouth-card').css('display', 'none');
    }

    function showMouthCard() {
        $('#select-skin-card').css ('display', 'none');
        $('#select-eyes-card').css ('display', 'none');
        $('#select-mouth-card').css('display', 'block');
    } 

    // Show selected item
    $('#show-skin-card').click( () => {
        showSkinCard();
    });

    $('#show-eyes-card').click( () => {
        showEyesCard();
    });

    $('#show-mouth-card').click( () => {
        showMouthCard();
    });

    // Skins
    $('#green-skin').click( () => {
        $('#skin').attr('src', './assets/skin/green.png');
        showEyesCard();
    });

    $('#red-skin').click( () => {
        $('#skin').attr('src', './assets/skin/red.png');
        showEyesCard();
    });

    $('#yellow-skin').click( () => {
        $('#skin').attr('src', './assets/skin/yellow.png');
        showEyesCard();
    });

    // Eyes
    $('#eye-closed').click( () => { 
        $('#eyes').attr('src', './assets/eyes/closed.png');
        showMouthCard();
    });

    $('#eye-laughing').click( () => { 
        $('#eyes').attr('src', './assets/eyes/laughing.png');
        showMouthCard();
    });

    $('#eye-long').click( () => { 
        $('#eyes').attr('src', './assets/eyes/long.png');
        showMouthCard();
    });

    $('#eye-normal').click( () => { 
        $('#eyes').attr('src', './assets/eyes/normal.png');
        showMouthCard();
    });

    $('#eye-rolling').click( () => { 
        $('#eyes').attr('src', './assets/eyes/rolling.png');
        showMouthCard();
    });

    $('#eye-winking').click( () => { 
        $('#eyes').attr('src', './assets/eyes/winking.png');
        showMouthCard();
    });

    // Mouths
    $('#mouth-open').click( () => {
        $('#mouth').attr('src', './assets/mouth/open.png');
    });

    $('#mouth-sad').click( () => {
        $('#mouth').attr('src', './assets/mouth/sad.png');
    });

    $('#mouth-smiling').click( () => {
        $('#mouth').attr('src', './assets/mouth/smiling.png');
    });

    $('#mouth-straight').click( () => {
        $('#mouth').attr('src', './assets/mouth/straight.png');
    });

    $('#mouth-teeth').click( () => {
        $('#mouth').attr('src', './assets/mouth/teeth.png');
    });

});

