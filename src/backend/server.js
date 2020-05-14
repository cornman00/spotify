const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const app = express();
const port = 4000 || process.env.PORT;
require("dotenv").config();

app.use(express.json());
app.use(cors());

// credentials
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "http://localhost:8888/callback",
});

spotifyApi
  .clientCredentialsGrant()
  .then(function (data) {
    // Set the access token on the API object so that it's used in all future requests
    spotifyApi.setAccessToken(data.body["access_token"]);

    return spotifyApi.getArtists([
      "0du5cEVh5yTK9QJze8zA0C",
      "0oSGxfWSnnOXhD2fKuz2Gy",
      "3zmfs9cQwzJl575W1ZYXeT",
      "3WrFJ7ztbogyGnTHbHJFl2",
      "00FQb4jTyendYWaN8pK0wa",
    ]);
  })
  .then(
    function (data) {
      console.log("Albums information", data.body);
      app.get("/api", (req, res) => {
        res.json(data.body.artists);
      });
    },
    function (err) {
      console.error(err);
    }
  );

app.listen(port, () => console.log(`It's running on port ${port}`));
