// //Answer No 40

function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    return {
        artist,
        title,
        tracks
    };
}

const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2");
const album3 = make_album("Artist3", "Album3", 12); // Example with tracks

console.log(album1);
console.log(album2);
console.log(album3);
