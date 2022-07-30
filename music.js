let musics = [
  {
    id: 1,
    name: "Kyun Mai Jaagoon",
    artist: "Shafqat Amanat Ali",
    audioSrc:
      "audios/_Kyun Main Jaagoon_ Full Song Patiala House _ Akshay Kumar.mp3",
    imageSrc: "images/kyun mai jagoon.jpg",
  },
  {
    id: 2,
    name: "Bad Liar",
    artist: "Imagine Dragons",
    audioSrc: "audios/Imagine Dragons - Bad Liar (Official Music Video).mp3",
    imageSrc: "images/bad liar.jpg",
  },
  {
    id: 3,
    name: "Mai Jahan Rahoon",
    artist: "Rahat Fateh Ali Khan",
    audioSrc:
      "audios/Main Jahaan Rahoon (Full Audio Song) - Namastey London - Akshay Kumar - Rahat Fateh Ali Khan.mp3",
    imageSrc: "images/mai jahan rahoon.jpg",
  },
  {
    id: 4,
    name: "Sugar",
    artist: "Maroon 5",
    audioSrc: "audios/Maroon 5 - Sugar (Official Music Video).mp3",
    imageSrc: "images/sugar.jpg",
  },
  {
    id: 5,
    name: "Namo Namo",
    artist: "Amit Trivedi",
    audioSrc:
      "audios/Namo Namo - Lyrical _ Kedarnath _ Sushant Rajput _ Sara Ali Khan _ Amit Trivedi _ Amitabh B.mp3",
    imageSrc: "images/namo namo.webp",
  },
];

for (let i = 0; i < musics.length; i++) {
  let tile = document.createElement("div");
  tile.classList.add("tile");

  let thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");

  let img = document.createElement("img");
  img.src = musics[i].imageSrc;

  thumbnail.append(img);
  tile.append(thumbnail);

  let description = document.createElement("div");
  description.classList.add("description");

  let h2 = document.createElement("h2");
  h2.append(musics[i].name);
  description.append(h2);

  let h3 = document.createElement("h3");
  h3.append(musics[i].artist);
  description.append(h3);

  tile.append(description);

  tile.addEventListener("click", function () {
    playMusic(musics[i]);
  });

  document.querySelector(".music-list").append(tile);
}

function playMusic(music) {
  document.querySelector(".player").style.marginLeft = "0";
  document.querySelector(".main-thumbnail-img").src = music.imageSrc;
  document.querySelector(".song-name").innerText = music.name;
  document.querySelector(".song-artist").innerText = music.artist;
  document.querySelector(".audio").src = music.audioSrc;
  document.querySelector(".audio").play();
}

function closePlayer() {
  document.querySelector(".player").style.marginLeft = "100%";
  // document.querySelector(".audio").pause();
}
