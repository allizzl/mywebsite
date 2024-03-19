console.log("Hello World!");

// CONSTRUCT REQUEST
const apiKey = "e9cbee3fba623ee28d3bb33db4e04bfc";
const username = "allizzl";
const limit = 10; // Number of recent tracks to fetch

const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=${limit}`;

const trackList = document.getElementById("trackList");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if (data.recenttracks) {
      const tracks = data.recenttracks.track;
      tracks.forEach((track) => {
        const trackItem = document.createElement("li");
        trackItem.classList.add("track");

        const artist = track.artist["#text"];
        const song = track.name;
        const album = track.album["#text"];
        const image = track.image[2]["#text"]; // Using the medium size image

        const trackInfo = document.createElement("div");
        trackInfo.classList.add("track-info");
        trackInfo.innerHTML = `
          <h3>${song}</h3>
          <p>${artist} - ${album}</p>
        `;

        const imageElement = document.createElement("img");
        imageElement.src = image;
        imageElement.alt = `${song} by ${artist}`;

        trackItem.appendChild(imageElement);
        trackItem.appendChild(trackInfo);
        trackList.appendChild(trackItem);
      });
    } else {
      console.error("No recent tracks found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// // spotify API
// if (typeof SpotifyCurrentlyPlaying === "function") {
//   console.log("SCP function is loaded!");
// } else {
//   console.log("SCP function is not loaded.");
// }
// SpotifyCurrentlyPlaying({
//   selector: "#spotify-widget",
//   username: "allizzl",
//   api_key: "e9cbee3fba623ee28d3bb33db4e04bfc",
//   width: "100%",
//   height: "370",
// });

// SpotifyCurrentlyPlaying.init({
//   selector: "#spotify-widget",
//   username: "allizzl",
//   api_key: "e9cbee3fba623ee28d3bb33db4e04bfc",
//   width: "100%",
//   height: "370",
// });

// // Initialize the SpotifyCurrentlyPlaying object with the settings
// SpotifyCurrentlyPlaying.init(settings);
