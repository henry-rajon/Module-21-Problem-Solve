const lyrics = "Tumi bondhu kala paki. Ami jeno ki. Bosonto kale tumay dekte pari ni. Sada sada kala kala.";

// ----------------------
// .split

// const part = lyrics.split(" ");
// console.log(part);

// const sentence = lyrics.split(".");
// console.log(sentence);

// const character = lyrics.split("");
// console.log(character);


// ---------------------
// .slice

// const partial = lyrics.slice(5, 8);
// console.log(partial);


// ------------------
// .substring

// const partial1 = lyrics.substring(5, 8);
// console.log(partial1);


// ----------------
// .trim

// const userName = " balckPink ";
// const doesExistTrim = userName.trim();
// console.log(doesExistTrim);


// ------------------
const oldSong = [
    'Tumi bondhu kala paki',
    'Ami jeno ki',
    'Bosonto kale tumay dekte pari ni',
    'Sada sada kala kala'
]

const newSong = oldSong.join(". ");
// const newSong = oldSong.join("!");
console.log(newSong);

