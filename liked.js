  let songs = [
            "songs/song1.mp3",
            "songs/song1.mp3",
            "songs/song2.mp3",
            "songs/song2.mp3",
            "songs/song3.mp3",
            "songs/song3.mp3",
            "songs/song4.mp3",
            "songs/song4.mp3",
            "songs/song5.mp3",
            "songs/song5.mp3",
            "songs/song6.mp3",
            "songs/song6.mp3",
            "songs/song7.mp3",
            "songs/song7.mp3",
            "songs/song8.mp3",
            "songs/song8.mp3",
            "songs/song9.mp3",
            "songs/song9.mp3",
            "songs/song10.mp3",
            "songs/song10.mp3",
            "songs/song11.mp3",
            "songs/song11.mp3",
            "songs/song12.mp3",
            "songs/song12.mp3",
            "songs/song13.mp3",
            "songs/song13.mp3",
            "songs/song14.mp3",
            "songs/song14.mp3",

        ];

        // 🔹 ONE audio
        let player = new Audio();
        let currentIndex = 0;

        // 🔹 All song rows
        let songRows = document.querySelectorAll(".controls");

        // 🔹 Play function
        function playSong(index){
            console.log(index)
            currentIndex = index;
            player.src = songs[index];
            player.play()
            // update all buttons text
            document.querySelectorAll(".play").forEach(btn => btn.innerText = "▶");
            songRows[index].querySelector(".play").innerText = "⏸";


        }

        // 🔹 Loop each song row
        songRows.forEach(function(row, index){
            
            let playBtn = row.querySelector(".play");
            let nextBtn = row.querySelector(".next");
            let prevBtn = row.querySelector(".prev");
            // ▶️ PLAY / PAUSE
            playBtn.addEventListener("click", function(){

                if(currentIndex === index && player.src){
                    // console.log(index,currentIndex,player.src)

                    if(player.paused){
                    player.play().catch(()=>{});
                    playBtn.innerText = "⏸";
                    }else{
                        player.pause()
                        playBtn.innerText = "▶"
                    }
                }else{
                    playSong(index);
                }

            });

            // ⏭️ NEXT
            nextBtn.addEventListener("click", function(){

            let nextIndex = currentIndex +2;

                if(nextIndex >= songs.length){
                    nextIndex = 0;
                }

                playSong(nextIndex);

            });

            // ⏮️ PREVIOUS
            prevBtn.addEventListener("click", function(){

            let  prevIndex = currentIndex - 2;

                if(prevIndex < 0){
                    prevIndex = songs.length - 1;
                }

                playSong(prevIndex);

            });

        });
