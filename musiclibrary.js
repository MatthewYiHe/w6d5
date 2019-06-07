const Track = function(title, rating, length){
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const Playlist = function(name){
  this.name = name;
  this.tracks = [];
}

const Library = function(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Playlist.prototype.addToPlaylist = function(track){
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function(){
  let totalRating = 0;
  this.tracks.forEach(track=>{
    totalRating += track.rating;
  })
  return totalRating/this.tracks.length;
}

Library.prototype.addToLibrary = function(playlist){
  this.playlists.push(playlist);
}

Playlist.prototype.totalDuration = function(){
  let totalDuration = 0;
  this.tracks.forEach(track=>{
    totalDuration += track.length;
  })
  return totalDuration;
}

const codeMonkey = new Track("Code Monkey", 4, 180);
const modelViewController = new Track("Model View Controller", 5, 200);
const p1 = new Playlist('P1');
const l1 = new Library('l1', 'Matt');
p1.addToPlaylist(codeMonkey);
p1.addToPlaylist(modelViewController);
l1.addToLibrary(p1);

console.log(p1.tracks[0].rating)
console.log(p1.overallRating())
console.log(p1.totalDuration())
console.log('Library:', l1)


