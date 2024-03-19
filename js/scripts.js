console.log("Hello World!");

// spotify API
if (typeof SpotifyCurrentlyPlaying === "function") {
  console.log("SCP function is loaded!");
} else {
  console.log("SCP function is not loaded.");
}
// SpotifyCurrentlyPlaying({
//   selector: "#spotify-widget",
//   username: "allizzl",
//   api_key: "e9cbee3fba623ee28d3bb33db4e04bfc",
//   width: "100%",
//   height: "370",
// });

SpotifyCurrentlyPlaying.init({
  selector: "#spotify-widget",
  username: "allizzl",
  api_key: "e9cbee3fba623ee28d3bb33db4e04bfc",
  width: "100%",
  height: "370",
});

// Initialize the SpotifyCurrentlyPlaying object with the settings
SpotifyCurrentlyPlaying.init(settings);
