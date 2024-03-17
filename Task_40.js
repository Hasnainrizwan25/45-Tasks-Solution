// //Answer No 40
function make_album(artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks
    };
}
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3", 12); // Example with tracks
console.log(album1);
console.log(album2);
console.log(album3);
