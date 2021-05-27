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
      genre: "R&B",
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
      genre: "Rock",
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
      genre: "Rap",
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
      genre: "Rap",
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
      genre: "R&B",
      year: "1998",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-010-Lauryn-Hill-MISEDUCATION.jpg?w=1000",
    },
  ];

  await Product.insertMany(products);
  console.log("Created users & products!");

  db.close();
};

insertData();
