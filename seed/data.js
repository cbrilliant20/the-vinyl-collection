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
      tracks:
        "1. What's Going On, 2. What's Happening Brother, 3. Flyin' High (In The Friendly Sky), 4. Save The Children, 5. God Is Love, 6. Mercy Mercy Me (The Ecology), 7. Right On, Wholy Holy, Inner City Blues (Make Me Wanna Holler)",
      genre: "R&B/Soul",
      year: "1971",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-001-Marvin-Gaye-WHATS-GOING-ON.jpg?w=1000",
    },
    {
      artist: "The Beatles",
      album: "Abbey Road",
      tracks:
        "1. Come Together, 2. Something, 3. Maxwell's Silver Hammer, 4. Oh! Darling, Octopus's Garden, 5. I Want You (She's So Heavy), 6. Here Comes The Sun, 7. Because, 8. You Never Give Me Your Money, 9. Sun King, 10. Mean Mr Mustard, 11. Polythene Pam, 12. She Came In Through The Bathroom Window, 13. Golden Slumbers, 14. Carry That Weight, 15. The End, 16. Her Majesty",
      genre: "Rock",
      year: "1969",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000",
    },
    {
      artist: "Nirvana",
      album: "Nevermind",
      tracks:
        "1. Smells Like Teen Spirit, 2. In Bloom - Nevermind Version, 3. Come As You Are, 4. Breed, 5. Lithium, 6. Polly, 7. Territorial Pissings, 8. Drain You, 9. Lounge Act, 10. Stay Away, 11. On A Plain, 12. Something In The Way, 13. Endless, 14. Nameless",
      genre: "Alternative Rock",
      year: "1991",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg?w=1000",
    },
    {
      artist: "Fleetwood Mac",
      album: "Rumours",
      tracks:
        "1.Second Hand News, 2. Dreams, 3. Never Going Back Again, 4. Don't Stop, 5. Go Your Own Way, 6. Songbird, 7. The Chain, 8. You Make Loving Fun, 9. I Don't Want to Know, 10. Oh Daddy, 11. Gold Dust Woman, 12. Silver Springs",
      genre: "Rock",
      year: "1977",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-007-Fleetwood-Mac-RUMOURS.jpg?w=1000",
    },
    {
      artist: "Pink Floyd",
      album: "The Dark Side of the Moon",
      tracks:
        "1. Speak to Me, 2. Breathe (In the Air), 3. On the Run, 4. Time, 5. The Great Gig in the Sky, 6. Money, 7. Us and Them, 8. Any Colour You Like, 9. Brain Damage, 10. Eclipse",
      genre: "Rock",
      year: "1973",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-055-Pink-Floyd-Dark-Side-of-the-Moon.jpg?w=1000",
    },
    {
      artist: "Bob Marley",
      album: "Legend",
      tracks:
        "1. Is This Love, 2. No Woman, No Cry, 3. Could You Be Loved, 4. Three Little Birds, 5. Buffalo Soldier, 6. Get Up, 7. Stand Up, 8. Stir It Up, 9. Easy Skanking, 10. One Love / People Get Ready - Medley, I Shot The Sheriff, 11. Waiting In Vain, 12. Redemption Song, 13. Satisfy My Soul, 14. Exodus, 15. Jamming, 16. Punky Reggae Party",
      genre: "Reggae",
      year: "1984",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-048-Bob-Marley-and-the-Wailers-Legend.jpg?w=1000",
    },
    {
      artist: "Nas",
      album: "Illmatic",
      tracks:
        "1. The Genesis, 2. N.Y. State of Mind, 3. Life’s a Bitch, 4. The World Is Yours, 5. Halftime, 6. Memory Lane (Sittin’ in da Park), 7. One Love, 8. One Time 4 Your Mind, 9. Represent, 10. It Ain’t Hard to Tell",
      genre: "Rap",
      year: "1994",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-044-Nas-Illmatic.jpg?w=1000",
    },
    {
      artist: "The Notorious B.I.G.",
      album: "Ready to Die",
      tracks:
        "1. Intro,  2. Things Done Changed, 3. Gimme the Loot, 4. Machine Gun Funk, 5. Warning, 6. Ready to Die, 7. One More Chance, 8. F*ck Me (interlude), 9. The What, 10. Juicy, 11. Everyday Struggle, 12. Me & My B*tch, 13. Big Poppa, 14. Respect,  15. Friend of Mine,  16. Unbelievable, 17. Suicidal Thoughts, 18. Who Shot Ya,  19. Just Playing (Dreams)",
      genre: "Rap",
      year: "1994",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-022-notorious-BIG-ready-to-die.jpg?w=1000",
    },
    {
      artist: "Michael Jackson",
      album: "Thriller",
      tracks:
        "1. Wanna Be Startin' Somethin', 2. Baby Be Mine, 3. Girl Is Mine, 4. Thriller, 5. Beat It, 6. Billie Jean,  7. Human Nature,  8. P.Y.T. (Pretty Young Thing), 9. Lady in My Life",
      genre: "Pop",
      year: "1982",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-012-MichaelJacksonThriller.jpg?w=1000",
    },
    {
      artist: "Prince",
      album: "Purple Rain",
      tracks:
        "1. Let's Go Crazy, 2. Take Me With U, 3. The Beautiful Ones, 4. Computer Blue, 5. Darling Nikki, 6. When Doves Cry, 7. I Would Die 4 U, 8. Baby I'm a Star, 9. Purple Rain",
      genre: "Pop",
      year: "1984",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-008-Prince-PURPLE-RAIN.jpg?w=1000",
    },
    {
      artist: "Kanye West",
      album: "My Beautiful Dark Twisted Fantasy",
      tracks:
        "1. Dark Fantasy, 2. Gorgeous, 3. Power, 4. All of the Lights (interlude), 5. All of the Lights, 6. Monster, 7. So Appalled, 8. Devil in a New Dress, 9. Runaway, 10. Hell of a Life, 11. Blame Game, 12. Lost in the World, 13. Who Will Survive in America",
      genre: "Hip-Hop/Rap",
      year: "2010",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-017-Kanye-My-Beautiful-Dark-Twisted-Fantasy.jpg?w=1000",
    },
    {
      artist: "Led Zeppelin",
      album: "Led Zeppelin IV",
      tracks:
        "1. Black Dog, 2. Rock and Roll, 3. Battle of Evermore, 4. Stairway to Heaven, 5. Misty Mountain Hop, 6. Four Sticks, 7. Going to California, 8. When the Levee Breaks",
      genre: "Rock",
      year: "1971",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-058-Led-Zeppelin-IV.jpg?w=1000",
    },
    {
      artist: "OutKast",
      album: "Stankonia",
      tracks:
        "1. Intro, 2. Gasoline Dreams, 3. I’m Cool, 4. So Fresh, So Clean, 5. Ms. Jackson, 6. Snappin’ & Trappin’, 7. D.F. 8. Spaghetti Junction, 9. Kim & Cookie, 10. I’ll Call Before I Come, 11. B.O.B. 12. Xplosion, 13. Good Hair, 14. We Luv Deez Hoez, 15. Humble Mumble, 16. Drinkin’ Again, 17. ?, 18. Red Velvet, 19. Cruisin’ in the ATL, 20. Gangsta Shit, 21. Toilet Tisha, 22. Slum Beautiful, 23. Pre‐Nump, 24. Stankonia (Stanklove)",
      genre: "Hip-Hop/Rap",
      year: "2000",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-064-outkast-stankonia.jpg?w=1000",
    },
    {
      artist: "The Clash",
      album: "London Calling",
      tracks:
        "1. London Calling, 2. Brand New Cadillac, 3. Jimmy Jazz, 4. Hateful, 5. Rudie Can’t Fail, 6. Spanish Bombs, 7. The Right Profile, 8. Lost in the Supermarket, 9. Clampdown, 10. The Guns of Brixton, 11. Wrong ’Em Boyo, 12. Death or Glory, 13. Koka Kola, 14. The Card Cheat, 15. Lover’s Rock, 16. Four Horsemen, 17. I’m Not Down, 18. Revolution Rock, 19. Train in Vain",
      genre: "Rock",
      year: "1979",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/016-Clash-LONDON-CALLING.jpg?w=1000",
    },
    {
      artist: "Lauryn Hill",
      album: "The Miseducation of Lauryn Hill",
      tracks:
        "Disc 1 Side 1: 1. Intro, 2. Lost Ones, 3. Ex-Factor, 4. To Zion, 5. Doo Wop (That Thing), Disc 1 Side 2: 1. Superstar, 2. Final Hour, 3. When It Hurts so Bad, 4. I Used to Love Him, Disc 2 Side 1: 1. Forgive Them Father, 2. Every Ghetto, Every City, 3. Nothing Even Matters, Disc 2 Side 2: 1. Everything Is Everything, 2. The Miseducation of Lauryn Hill, 3. Can't Take My Eyes Off of You, 4. Tell Him",
      genre: "R&B/Soul",
      year: "1998",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-010-Lauryn-Hill-MISEDUCATION.jpg?w=1000",
    },
    {
      artist: "Alicia Keys",
      album: "Songs in a Minor",
      tracks:
        "1. Piano & I, 2. Girlfriend, 3. How Come You Don't Call Me, 4. Fallin', 5. Troubles, 6. Rock wit U, 7. A Woman's Worth, 8. Jane Doe, 9. Goodbye, 10. The Life, 11. Mr. Man, 12. Never Felt This Way, 13. Butterflyz, 14. Why Do I Feel So Sad, 15. Caged Bird, 16. Lovin U",
      genre: "R&B/Soul",
      year: "2001",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136263-31a12bb03d4d946da06fd2647e23603e1437ec48.jpg?w=450",
    },
    {
      artist: "Radiohead",
      album: "Pablo Honey",
      tracks:
        "	1. You, 2. Creep, 3. How Do You? 4. Stop Whispering, 5. Thinking About You, 6. Anyone Can Play Guitar, 7. Ripcord, 8. Vegetable, 9. Prove Yourself, 10. I Can't, 11. Lurgee, 12. Blow Out",
      genre: "Alternative Rock",
      year: "1993",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5929a3b313d1975652138b45/1:1/w_320/060b305f.jpg",
    },
    {
      artist: "Gnarls Barkley",
      album: "St. Elsewhere",
      tracks:
        "1. Go-Go Gadget Gospel, 2. Crazy, 3. St. Elsewhere, 4. Goen Daddy Gone, 5. Smiley Faces, 6. The Boogie Monster, 7. Feng Shui, 8. Just A Thought, 9. Transformer, 10. Who Cares, 11. On Line, 12. Necromancing, 13. Storm Coming, 14. The Last Time",
      genre: "Pop",
      year: "2006",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136255-2709f136dcb8cbaf7b3a9a06fd0d45a5fb9eaa1e.jpg?w=450",
    },
    {
      artist: "Coldplay",
      album: "Viva La Vida",
      tracks:
        "1. Life In Technicolor, 2. Cemeteries Of London, 3. Lost!, 4. 42, 5. Lovers In Japan, 6. Yes, 7. Viva La Vida, 8. Violet Hill, 9. Strawberry Swing, 10. Death And All His Friends, 11. Component 2, 12. Life In Technicolor ii, 13. Postcards From Far Away, 14. Glass Of Water, 15. Rainy Day, 16. Prospekt's March/Poppyfields, 17. Lost, 18. Lovers In Japan, 19. Now My Feet Won't Touch The Ground",
      genre: "Rock",
      year: "2008",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136253-4a2f86f42149482f991499ab8bb1a08598c5f0a5.jpg?w=480",
    },
    {
      artist: "Eminem",
      album: "The Marshall Mathers LP",
      tracks:
        "1. Public Service Announcement 2000, 2. Kill You, 3. Stan, 4. Paul, 5. Who Knew, 6. Steve Berman, 7. The Way I Am, 8. The Real Slim Shady, 9. Remember Me?, 10. I'm Back, 11. Marshall Mathers, 12. Ken Kaniff, 13. Drug Ballad, 14. Amityville, 15. B**** Please II, 16. Kim, 17. Under the Influence, 18. Criminal",
      genre: "Rap",
      year: "2000",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/18276/homepage_large.b7b06250.jpg",
    },
    {
      artist: "Bjork",
      album: "Post",
      tracks:
        "1. Army of Me, 2. Hyperballad, 3. The Modern Things, 4. It's Oh So Quiet, 5. Enjoy, 6. You've Been Flirting Again, 7. Isobel, 8. Possibly Maybe, 9. I Miss You, 10. Cover Me, 11. Headphones",
      genre: "Pop",
      year: "1995",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5e5819bc0db1200009923a5f/1:1/w_320/Post_Bjork.jpg",
    },
    {
      artist: "Vampire Weekend",
      album: "Vampire Weekend",
      tracks:
        "1. Mansard Roof, 2. Oxford Comma, 3. A‐Punk, 4. Cape Cod Kwassa Kwassa, 5. M79, 6. Campus, 7. Bryn One, 8. I Stand Corrected, 9. Walcott, 10. The Kids Don’t Stand a Chance",
      genre: "Alternative Rock",
      year: "2008",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136224-cf0ac3ce5f72cca77dc8e52af198d51e7ddfdb63.jpg?w=500",
    },
    {
      artist: "M.I.A",
      album: "Arular",
      tracks:
        "1. Banana Skit, 2. Pull Up the People, 3. Bucky Done Gun, 4. Fire Fire, 5. Freedom Skit, 6. Amazon, 7. Bingo, 8. Hombre, 9. One for the Head Skit, 10. 10 Dollar, 11. Sunshowers, 12. Galang",
      genre: "Electronic",
      year: "2005",
      price: "60",
      imgURL:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136220-e217e447eebe935e26f7ce9c13f3ca875da99dec.jpg?w=500",
    },
    {
      artist: "Fugees",
      album: "The Score",
      tracks:
        "1. Red Intro, 2. How Many Mics, 3. Ready or Not, 4. Zealots, 5. The Beast, 6. Fu-Gee-La, 7. Family Business, 8. Killing Me Softly With His Song, 9. The Score, 10. The Mask, 11. Cowboys, 12. No Woman, No Cry, 13. Manifest/Outro",
      genre: "Hip-Hop/Rap",
      year: "1996",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/609d453a397206388541712e/1:1/w_320/Fugees:%20The%20Score.jpeg",
    },
    {
      artist: "Jay-Z",
      album: "The Black Album",
      tracks:
        "1. Interlude Track, 2. December 4th, 3. What More Can I Say Track, 4. Encore, 5. Change Clothes, 6. Dirt Off Your Shoulder, 7. Threat, 8. Moment of Clarity, 9. 99 Problems, 10. Interlude,  11. Justify My Thug, 12. Lucifer, 13. Allure, 14. My 1st Song",
      genre: "Rap",
      year: "2003",
      price: "60",
      imgURL:
        "https://cdn3.pitchfork.com/albums/4171/homepage_large.556c8ce3.jpg",
    },
    {
      artist: "Justin Timberlake",
      album: "FutureSex/LoveSounds",
      tracks:
        "1. Futuresex/Lovesound, 2. Sexyback, 3. Sexy Ladies - Let Me Talk To You, 4. My Love, 5. Lovestoned - I Think She Knows, 6. What Goes Around... Comes Around, 7. Chop Me Up, 8. Damn Girl, 9. Summer Love - Set The Mood, 10. Until The End Of Time, 11. Losing My Way, 12. (Another Song) All Over Again, 13. Pose",
      genre: "Pop",
      year: "2006",
      price: "60",
      imgURL:
        "https://cdn2.pitchfork.com/albums/9237/homepage_large.5decb38a.jpg",
    },
    {
      artist: "Daft Punk",
      album: "Disovery",
      tracks:
        "1. One More Time, 2. Aerodynamic, 3. Digital Love, 4. Harder, Better, Faster, Stronger, 5. Crescendolls, 6. Nightvision, 7. Superheroes, 8. High Life, 9. Something About Us, 10. Voyager, 11. Veridis Quo, 12. Short Circuit, 13. Face to Face, 14. Too Long",
      genre: "Electronic",
      year: "2001",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/2117/homepage_large.d23a880a.jpg",
    },
    {
      artist: "Red Hot Chili Peppers",
      album: "Californication",
      tracks:
        "1. Around the World, 2. Parallel Universe, 3. Scar Tissue, 4. Otherside, 5. Get on Top, 6. Californication, 7. Easily, 8. Porcelain,  9. Emit Remmus, 10. I Like Dirt, 11. This Velvet Glove, 12. Savior, 13. Purple Stain, 14. Right on Time, 15. Road Trippin",
      genre: "Alternative Rock",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5929a2269d034d5c69bf2b20/1:1/w_320/9b8b0313.gif",
    },
    {
      artist: "Blink-182",
      album: "Enema of the State",
      tracks:
        "1. Dumpweed, 2. Don’t Leave Me, 3. Aliens Exist, 4. Going Away to College, 5. What’s My Age Again? 6. Dysentery Gary, 7. Adam’s Song, 8. All the Small Things, 9. The Party Song, 10. Mutt, 11. Wendy Clear, 12. Anthem",
      genre: "Rock",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5dd2d8bd4aba6d0009f18d9b/1:1/w_320/enemaof.jpg",
    },
    {
      artist: "M83",
      album: "Saturdays = Youth",
      tracks:
        "1. You Appearing, 2. Kim & Jessie, 3. Skin of the Night, 4. Graveyard Girl, 5. Couleurs, 6. Up! 7. We Own the Sky, 8. Highway of Endless Dreams, 9. Too Late, 10. Dark Moves of Love, 11. Midnight Souls Still Remain",
      genre: "Electronic",
      year: "2008",
      price: "60",
      imgURL:
        "https://cdn.pitchfork.com/albums/11175/homepage_large.a84088b5.jpg",
    },
    {
      artist: "Katy Perry",
      album: "Teenage Dream",
      tracks:
        "1. Teenage Dream, 2. Last Friday Night (T.G.I.F.), 3. California Gurls, 4. Firework, 5. Peacock, 6. Circle The Drain, 7. The One That Got Away, 8. E.T, 9. Who Am I Living For? 10. Pearl, 11. Hummingbird Heartbeat, 12. Not Like The Movies",
      genre: "Pop",
      year: "2010",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/602edc568b8835d37316a4ef/1:1/w_320/Katy%20Perry%20-%20Teenage%20Dream.jpg",
    },
    {
      artist: "Usher",
      album: "Confessions",
      tracks:
        "1. Intro, 2. Yeah! 3. Throwback, 4. Confessions, 5. Confessions Part II, 6. Burn, 7. Caught Up, 8. Superstar, 9. Superstar - Confessions, 10. Truth Hurts, 11. Simple Things, 12. Bad Girl, 13. That's What It's Made for, 14. Can U Handle It?, 15. Do It To Me, 16. Take Your Hand, 17. Follow Me, 18. My Boo Duet With Alicia Keys, 19. Red Light, 20. Seduction, 21. Confessions Part II",
      genre: "R&B/Soul",
      year: "2004",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5fb5501635fb80fc5c920dd1/1:1/w_320/confessions_usher.jpg",
    },
    {
      artist: "Sade",
      album: "Diamond Life",
      tracks:
        "1. Smooth Operator, 2. Your Love Is King, 3. Hang on to Your Love, 4. Frankie's First Affair, 5. When Am I Going to Make a Living, 6. Cherry Pie, 7. Sally, 8. I Will Be Your Friend, 9. Why Can't We Live Together",
      genre: "Pop",
      year: "1999",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/5f7b60c15bf2768247125008/1:1/w_320/diamond%20life_sade.jpg",
    },
    {
      artist: "Odesza",
      album: "A Moment Apart",
      tracks:
        "1. Intro, 2. A Moment Apart, 3. Higher Ground, 4. Boy, 5. Line Of Sight, 6. Late Night 7. Across The Room  8. Meridian 9. Everything At Your Feet, 10. Just A Memory, 11. Divide, 12. Thin Floors And Tall Ceilings, 13. La Ciudad,  14. Falls, 15. Show Me, 16. Corners Of The Earth",
      genre: "Electronic",
      year: "2017",
      price: "60",
      imgURL:
        "https://media.pitchfork.com/photos/59aee66e1e3a0135b6a447ed/1:1/w_320/amomentapart.jpg",
    },
    {
      artist: "Beres Hammond",
      album: "One Love, One Life",
      tracks:
        "1. No Candle Light, 2. Can't Waste No Time, 3. In My Arms, 4. Crazy Dream, 5. Lonely Fellow, 6. My LIfe, 7. Keep Me Warm, 8. More Time, 9. Shouldn't Be, 10. The Song, 11. Still Searching, 12. Don't You Feel Like Dancing, 13. One Love, One Life, 14. Can't Make Blood Outta Stone, 15. You Stand Alone, 16. Not Made Of Steel, 17. Family, 18. The Truth Will Live On, 19. Prime Time, 20. I Humble Myself",
      genre: "Reggae",
      year: "2012",
      price: "60",
      imgURL:
        "https://secureservercdn.net/45.40.148.117/fbc.19f.myftpupload.com/wp-content/uploads/2013/01/054645196420-e1365518915733.jpg",
    },
    {
      artist: "Ziggy Marley",
      album: "Dragonfly",
      tracks:
        "	1. Dragonfly, 2. True To Myself, 3. I Get Out, 4. Looking, 5. Shalom Salaam, 6. In The Name Of God, 7. Rainbow In The Sky, 8. Melancholy Mood, 9. Good Old Days, 10. Never Deny You, 11. DYKL (Don't You Kill Love)",
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
