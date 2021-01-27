/**
 * @author: Pablo Acereda
 */
$(document).ready(function() {
    // --- PROMISES ---
    
    /**
     * GET request to obtain video playlist.
     *
     * @return {object}: List of video.
     *     [
     *         {
     *             id: number,
     *             title: string,
     *             thumbnail: string (url)
     *         },
     *         { ... }, ...
     *     ]
     */
    const getVideos = new Promise( (resolve, reject) => {
        $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/playlist', (data) => resolve(data))
        .fail( err => reject(new Error('Call failed for GET Videos with status ${err.status}')) );
    }); 

    getVideos
    .then(response => {
        let data = response;
        for (var pos=0;pos<data.length;pos++) {
            createPlaylistCard(data[pos], pos);
        }
    })
    .catch( err => console.error('Call failed ==> ${err}') );

    /**
     * GET request to obtain information from a specific video ID.
     *
     * @param {number} video: Video Id.
     *
     * @return {object}: Video information.
     *     {
     *         id: number,
     *         title: string,
     *         description, string,
     *         views: number,
     *         vimeoId: number,
     *         isLiked: boolean,
     *         isSaved: boolean
     *     }
     */
    const getVideoDetails = function (videoId) { 
        return new Promise( (resolve, reject) => {
            $.get(
                'http://5d76bf96515d1a0014085cf9.mockapi.io/video/' + videoId, 
                (data) => resolve(data))
            .fail( err => reject(new Error('Call failed for GET Videos with status ${err.status}')) );
        });
    }

    // --- FUNCTIONS ---

    /**
     * Create playlist element given the basic information of a video.
     *
     * @param {object} obj: Basic information from video.
     *     {
     *         id: number,
     *         title: string,
     *         thumbnail: string (url)
     *     }
     *
     */
    function createPlaylistCard(obj) {
        // <div id="card3" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
        //     <h3 class="video-card-title">The Heart of Soba</h3>
        // </div>        
        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.className = 'playlist-card';

        var thumbnail = document.createElement('img');
        thumbnail.src = obj.thumbnail;
        thumbnail.className = 'thumbnail';

        var title = document.createElement('h3');
        title.className = 'video-card-title';
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        $('#playlist-wrapper').append(mainDiv);
    }

    /**
     * Load video information into the main div.
     *
     * @param {object} element: Video information.
     *     {
     *         id: number,
     *         title: string,
     *         description, string,
     *         views: number,
     *         vimeoId: number,
     *         isLiked: boolean,
     *         isSaved: boolean
     *     }
     */
    function updateVideoCard(element) {
        // Update title
        $('#video-title').html(element.title);
        // Update description
        $('#video-description').html(element.description);
        // Update views
        $('#views-count').html(changeNumMagnitude(element.views));
        // Change Vimeo's ID
        $('#video-player').attr('src', 'https://player.vimeo.com/video/' + element.vimeoId);
        // Liked and saved
        if (element.isLiked == 'true') $('#heart').removeClass('far').addClass('fas');
        else                           $('#heart').addClass('far').removeClass('fas');
        if (element.isSaved == 'true') $('#bookmark').removeClass('far').addClass('fas'); 
        else                           $('#bookmark').addClass('far').removeClass('fas');
    }

    /**
     * Shorten a number by changing its magnitude: thousands (k) or millions 
     * (M).
     *
     * @param {number} num: Number to be fixed.
     *
     * @return {string}: Shortened number.
     */
    function changeNumMagnitude(num) {
        let millions = num / 1000000;
        if (millions >= 1) return  millions.toFixed(2) + 'M';
        let thousands = num / 1000;
        if (thousands => 1) return thousands.toFixed(2) + 'k';

        return num;
    }

    // --- EVENTS ---

    /**
     * When a video from the playlist is clicked, the information from that 
     * video is requested via API GET call and the information is loaded into
     * the main reproduction div.
     */
    $(document).on('click', 'div.playlist-card', (e) => {
        let videoId =  e.currentTarget.id.replace('card', '');
        getVideoDetails(videoId)
        .then(response => updateVideoCard(response) )
        .catch( err => console.error('Call failed ==> ${err}') );
    });

    /**
     * Toggle heart icon padding.
     */
    $(document).on('click', '#heart', () => {
        $('#heart').toggleClass('far').toggleClass('fas');
    });

    /**
     * Toggle bookmark icon padding.
     */
    $(document).on('click', '#bookmark', () => {
        $('#bookmark').toggleClass('far').toggleClass('fas');
    });

});
