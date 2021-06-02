import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "mali",
    email: "mali@super.gmail.com",
    password_digest: await bcrypt.hash("password1", 11),
  });
  await user1.save();
  const user2 = new User({
    username: "nadia",
    email: "nadia@super.gmail.com",
    password_digest: await bcrypt.hash("password2", 11),
  });
  await user2.save();
  const user3 = new User({
    username: "nick",
    email: "nick@super.gmail.com",
    password_digest: await bcrypt.hash("password3", 11),
  });
  await user3.save();
  const user4 = new User({
    username: "cam",
    email: "cam@super.gmail.com",
    password_digest: await bcrypt.hash("password4", 11),
  });
  await user4.save();

  const products = [
    {
      artist: "Marvin Gaye",
      album: "What's Going On",
      genre: "R&B/Soul",
      year: "1971",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000",
    },
    {
      artist: "The Beatles",
      album: "Abbey Road",
      genre: "Rock",
      year: "1969",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000",
    },
    {
      artist: "Nirvana",
      album: "Nevermind",
      genre: "Alternative Rock",
      year: "1991",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg?w=1000",
    },
    {
      artist: "Fleetwood Mac",
      album: "Rumours",
      genre: "Rock",
      year: "1977",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-007-Fleetwood-Mac-RUMOURS.jpg?w=1000",
    },
    {
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      genre: "Rock",
      year: "1973",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-055-Pink-Floyd-Dark-Side-of-the-Moon.jpg?w=1000",
    },
    {
      artist: "Bob Marley",
      album: "Legend",
      genre: "Reggae",
      year: "1984",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-048-Bob-Marley-and-the-Wailers-Legend.jpg?w=1000",
    },
    {
      artist: "Nas",
      album: "Illmatic",
      genre: "Rap",
      year: "1994",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-044-Nas-Illmatic.jpg?w=1000",
    },
    {
      artist: "The Notorious B.I.G.",
      album: "Ready to Die",
      genre: "Rap",
      year: "1994",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-022-notorious-BIG-ready-to-die.jpg?w=1000",
    },
    {
      artist: "Michael Jackson",
      album: "Thriller",
      genre: "Pop",
      year: "1982",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-012-MichaelJacksonThriller.jpg?w=1000",
    },
    {
      artist: "Prince",
      album: "Purple Rain",
      genre: "Pop",
      year: "1984",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-008-Prince-PURPLE-RAIN.jpg?w=1000",
    },
    {
      artist: "Kanye West",
      album: "My Beautiful Dark Twisted Fantasy",
      genre: "Hip-Hop/Rap",
      year: "2010",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-017-Kanye-My-Beautiful-Dark-Twisted-Fantasy.jpg?w=1000",
    },
    {
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      genre: "Rock",
      year: "1971",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-058-Led-Zeppelin-IV.jpg?w=1000",
    },
    {
      artist: "OutKast",
      album: "Stankonia",
      genre: "Hip-Hop/Rap",
      year: "2000",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-064-outkast-stankonia.jpg?w=1000",
    },
    {
      artist: "The Clash",
      album: "London Calling",
      genre: "Rock",
      year: "1979",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/016-Clash-LONDON-CALLING.jpg?w=1000",
    },
    {
      artist: "Lauryn Hill",
      album: "The Miseducation of Lauryn Hill",
      genre: "R&B/Soul",
      year: "1998",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-010-Lauryn-Hill-MISEDUCATION.jpg?w=1000",
    },
    {
    artist: "Alicia Keys",
    album: "Songs in a Minor",
    genre: "R&B/Soul",
    year: "2001",
    price: "60",
    imgURL:
      "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136263-31a12bb03d4d946da06fd2647e23603e1437ec48.jpg?w=450",
    },
    {
      artist: "Radiohead",
      album: "Pablo Honey",
      genre: "Alternative Rock",
      year: "1993",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5929a3b313d1975652138b45/1:1/w_320/060b305f.jpg",
    },
    {
      artist: "Gnarls Barkley",
      album: "St. Elsewhere",
      genre: "Pop",
      year: "2006",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136255-2709f136dcb8cbaf7b3a9a06fd0d45a5fb9eaa1e.jpg?w=450",
    },
    {
      artist: "Coldplay",
      album: "Viva La Vida",
      genre: "Rock",
      year: "2008",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136253-4a2f86f42149482f991499ab8bb1a08598c5f0a5.jpg?w=480",
    },
    {
      artist: "Eminem",
      album: "The Marshall Mathers LP",
      genre: "Rap",
      year: "2000",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/18276/homepage_large.b7b06250.jpg",
    },
    {
      artist: "Bjork",
      album: "Post",
      genre: "Pop",
      year: "1995",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5e5819bc0db1200009923a5f/1:1/w_320/Post_Bjork.jpg",
    },
    {
      artist: "Vampire Weekend",
      album: "Vampire Weekend",
      genre: "Alternative Rock",
      year: "2008",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136224-cf0ac3ce5f72cca77dc8e52af198d51e7ddfdb63.jpg?w=500",
    },
    {
      artist: "M.I.A",
      album: "Arular",
      genre: "Electronic",
      year: "2005",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136220-e217e447eebe935e26f7ce9c13f3ca875da99dec.jpg?w=500",
    },
    {
      artist: "Fugees",
      album: "The Score",
      genre: "Hip-Hop/Rap",
      year: "1996",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/609d453a397206388541712e/1:1/w_320/Fugees:%20The%20Score.jpeg",
    },
    {
      artist: "Jay-Z",
      album: "The Black Album",
      genre: "Rap",
      year: "2003",
      price: "60",
      imgURL:
        "https://cdn3.pitchfork.com/albums/4171/homepage_large.556c8ce3.jpg",
    },
    {
      artist: "Justin Timberlake",
      album: "FutureSex/LoveSounds",
      genre: "Pop",
      year: "2006",
      price: "60",
      imgURL:
        "https://cdn2.pitchfork.com/albums/9237/homepage_large.5decb38a.jpg",
    },
    {
      artist: "Daft Punk",
      album: "Disovery",
      genre: "Electronic",
      year: "2001",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/2117/homepage_large.d23a880a.jpg",
    },
    {
      artist: "Red Hot Chili Peppers",
      album: "Californication",
      genre: "Alternative Rock",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5929a2269d034d5c69bf2b20/1:1/w_320/9b8b0313.gif",
    },
    {
      artist: "Blink-182",
      album: "Enema of the State",
      genre: "Rock",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5dd2d8bd4aba6d0009f18d9b/1:1/w_320/enemaof.jpg",
    },
    {
      artist: "M83",
      album: "Saturdays = Youth",
      genre: "Electronic",
      year: "2008",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/11175/homepage_large.a84088b5.jpg",
    },
    {
      artist: "Katy Perry",
      album: "Teenage Dream",
      genre: "Pop",
      year: "2010",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/602edc568b8835d37316a4ef/1:1/w_320/Katy%20Perry%20-%20Teenage%20Dream.jpg",
    },
    {
      artist: "Usher",
      album: "Confessions",
      genre: "R&B/Soul",
      year: "2004",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5fb5501635fb80fc5c920dd1/1:1/w_320/confessions_usher.jpg",
    },
    {
      artist: "Sade",
      album: "Diamond Life",
      genre: "Pop",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5f7b60c15bf2768247125008/1:1/w_320/diamond%20life_sade.jpg",
    },
    {
      artist: "Odesza",
      album: "A Moment Apart",
      genre: "Electronic",
      year: "2017",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/59aee66e1e3a0135b6a447ed/1:1/w_320/amomentapart.jpg",
    },
    {
      artist: "Beres Hammond",
      album: "One Love, One Life",
      genre: "Reggae",
      year: "2012",
      price: "60",
      imgURL:
        "https://secureservercdn.net/45.40.148.117/fbc.19f.myftpupload.com/wp-content/uploads/2013/01/054645196420-e1365518915733.jpg",
    },
    {
      artist: "Ziggy Marley",
      album: "Dragonfly",
      genre: "Reggae",
      year: "2003",
      price: "60",
      imgURL:
        "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/d9/82/94/d9829483-77c7-bea4-7b27-9ec10d0ae9a1/dj.reosdrxa.jpg/500x500bb.webp",
    },

  ];

  await Product.insertMany(products);
  console.log("Created users & products!");

  db.close();
};

insertData();
