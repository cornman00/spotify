const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV !== "production") require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token.
function newToken() {
  spotifyApi.clientCredentialsGrant().then(
    function (data) {
      console.log("The access token expires in " + data.body["expires_in"]);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Something went wrong when retrieving an access token", err);
    }
  );
}

newToken();

tokenRefreshInterval = setInterval(newToken, 1000 * 60 * 60);

app.post("/search_result", (req, res) => {
  spotifyApi
    .searchArtists(req.body.keyword)
    .then(function (data) {
      let search_res = data.body.artists.items;
      res.json(search_res);
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

app.get("/albums/:id", (req, res) => {
  console.log(req.params.id);
  spotifyApi
    .getArtistAlbums(req.params.id, { limit: 40 })
    .then(function (data) {
      res.json(data.body.items);
      res.end();
    });
});

app.get("/albums/tracks/:albumID", (req, res) => {
  console.log(req.params.albumID);
  spotifyApi
    .getAlbumTracks(req.params.albumID, { limit: 20 })
    .then(function (data) {
      console.log(data.body);
      res.json(data.body.items);
      res.end();
    });
});

app.listen(port, () => console.log(`It's running on port ${port}`));
