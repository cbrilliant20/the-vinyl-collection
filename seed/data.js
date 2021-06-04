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
        "What's Going On, What's Happening Borther, Flyin' High (In The Friendly Sky), Save The Children, God Is Love, Mercy Mercy Me (The Ecology), Right On, Wholy Holy, Inner City Blues (Make Me Wanna Holler)",
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
        "Come Together, Something, Maxwell's Silver Hammer, Oh! Darling, Octopus's Garden, I Want You (She's So Heavy), Here Comes The Sun, Because, You Never Give Me Your Money, Sun King, Mean Mr Mustard, Polythene Pam, She Came In Through The Bathroom Window, Golden Slumbers, Carry That Weight, The End, Her Majesty",
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
        "Smells Like Teen Spirit, In Bloom - Nevermind Version, Come As You Are, Breed, Lithium, Polly, Territorial Pissings, Drain You, Lounge Act, Stay Away, On A Plain, Something In The Way, Endless, Nameless",
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
        "Second Hand News, Dreams, Never Going Back Again, Don't Stop, Go Your Own Way, Songbird, The Chain, You Make Loving Fun, I Don't Want to Know, Oh Daddy, Gold Dust Woman, Silver Springs",
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
        "Speak to Me, Breathe (In the Air), On the Run, Time, The Great Gig in the Sky, Money, Us and Them, Any Colour You Like, Brain Damage, Eclipse",
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
        "Is This Love, No Woman, No Cry, Could You Be Loved, Three Little Birds, Buffalo Soldier, Get Up, Stand Up, Stir It Up, Easy Skanking, One Love / People Get Ready - Medley, I Shot The Sheriff, Waiting In Vain, Redemption Song, Satisfy My Soul, Exodus, Jamming, Punky Reggae Party",
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
        "1. The Genesis(1:45) 2. N.Y. State of Mind(4:54) 3. Life’s a Bitch(3:30) 4. The World Is Yours(4:50) 5. Halftime(4:20) 6. Memory Lane (Sittin’ in da Park)(4:80) 7. One Love(5:25) 8. One Time 4 Your Mind(3:18) 9. Represent(4:12) 10. It Ain’t Hard to Tell(3:22)",
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
        "1.Intro (3:23) 2.Things Done Changed (3:58) 3.Gimme the Loot (4:45) 4.Machine Gun Funk (4:15) 5.Warning (3:40) 6.Ready to Die (4:24) 7.One More Chance (4:43) 8.F*ck Me (interlude) (1:31) 9.The What (3:57) 10.Juicy (5:20) 11.Everyday Struggle (5:19) 12.Me & My B*tch (4:00) 13.Big Poppa (4:12) 14.Respect (5:21) 15.Friend of Mine (3:28) 16.Unbelievable (3:43) 17.Suicidal Thoughts (2:50) 18.Who Shot Ya (5:19) 19.Just Playing (Dreams) (2:43)",
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
        "1. Wanna Be Startin' Somethin' [Album Version] 2. Baby Be Mine [Album Version] 3. Girl Is Mine [Album Version], The - (featuring Paul McCartney) 4. Thriller [Album Version] 5. Beat It [Single Version] 6. Billie Jean [Single Version] 7. Human Nature [Album Version] 8. P.Y.T. (Pretty Young Thing) [Album Version] 9. Lady in My Life, The",
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
        "Track: 1: Let's Go Crazy (4:38) Track: 2: Take Me With U (3:53) Track: 3: The Beautiful Ones (5:13) Track: 4: Computer Blue (3:59) Track: 5: Darling Nikki (4:14) Track: 6: When Doves Cry (5:53) Track: 7: I Would Die 4 U (2:49) Track: 8: Baby Iâ€™m a Star (4:23) Track: 9: Purple Rain (8:45)",
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
        "• Track Number 1, Track Name: Dark Fantasy, Track Length: 4:40, • Track Number 2, Track Name: Gorgeous, Track Length: 5:57, • Track Number 3, Track Name: Power, Track Length: 4:52, • Track Number 4, Track Name: All of the Lights (interlude), Track Length: 1:20, • Track Number 5, Track Name: All of the Lights, Track Length: 4:59, • Track Number 6, Track Name: Monster, Track Length: 6:18, • Track Number 7, Track Name: So Appalled, Track Length: 6:38, • Track Number 8, Track Name: Devil in a New Dress, Track Length: 5:52, • Track Number 9, Track Name: Runaway, Track Length: 9:80, • Track Number 10, Track Name: Hell of a Life, Track Length: 5:27, • Track Number 11, Track Name: Blame Game, Track Length: 7:49, • Track Number 12, Track Name: Lost in the World, Track Length: 4:16, • Track Number 13, Track Name: Who Will Survive in America, Track Length: 1:38",
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
        "1. Black Dog 2. Rock and Roll 3. Battle of Evermore, The - (featuring Sandy Denny) 4. Stairway to Heaven 5. Misty Mountain Hop 6. Four Sticks 7. Going to California 8. When the Levee Breaks",
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
        "1. Intro(1:10) 2. Gasoline Dreams(3:35) 3. I’m Cool (interlude)(0:42) 4. So Fresh, So Clean(4:00) 5. Ms. Jackson(4:30) 6. Snappin’ & Trappin’(4:20) 7. D.F. (interlude)(0:27) 8. Spaghetti Junction(3:57) 9. Kim & Cookie (interlude)(1:13) 10. I’ll Call Before I Come(4:18) 11. B.O.B.(5:40) 12. Xplosion(4:90) 13. Good Hair (interlude)(0:15) 14. We Luv Deez Hoez(4:10) 15. Humble Mumble(4:51) 16. Drinkin’ Again (interlude)(0:24) 17. ?(1:29) 18. Red Velvet(3:53) 19. Cruisin’ in the ATL (interlude)(0:19) 20. Gangsta Shit(4:41) 21. Toilet Tisha(4:25) 22. Slum Beautiful(4:80) 23. Pre‐Nump (interlude)(0:27) 24. Stankonia (Stanklove)(6:50)",
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
        "1. London Calling(3:23) 2. Brand New Cadillac(2:10) 3. Jimmy Jazz(3:57) 4. Hateful(2:46) 5. Rudie Can’t Fail(3:31) 6. Spanish Bombs(3:21) 7. The Right Profile(3:57) 8. Lost in the Supermarket(3:50) 9. Clampdown(3:52) 10. The Guns of Brixton(3:13) 11. Wrong ’Em Boyo(3:13) 12. Death or Glory(3:57) 13. Koka Kola(1:49) 14. The Card Cheat(3:53) 15. Lover’s Rock(4:50) 16. Four Horsemen(2:57) 17. I’m Not Down(3:70) 18. Revolution Rock(5:37) 19. Train in Vain(3:11)",
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
        "Disc 1 Side 1 1. Intro (Album Version) 2. Lost Ones (Album Version) 3. Ex-Factor 4. To Zion (Album Version) 5. Doo Wop (That Thing) Disc 1 Side 2 1. Superstar (Album Version) 2. Final Hour (Album Version) 3. When It Hurts so Bad 4. I Used to Love Him Disc 2 Side 1 1. Forgive Them Father (Album Version) 2. Every Ghetto, Every City (Album Version) 3. Nothing Even Matters (Album Version) Disc 2 Side 2 1. Everything Is Everything (Album Version) 2. The Miseducation of Lauryn Hill 3. Can't Take My Eyes Off of You 4. Tell Him (Live)",
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
        "1. Piano & I 2. Girlfriend 3. How Come You Don't Call Me 4. Fallin' 5. Troubles 6. Rock wit U 7. Woman's Worth, A 8. Jane Doe 9. Goodbye 10. Life, The 11. Mr. Man 12. Never Felt This Way (Interlude) 13. Butterflyz 14. Why Do I Feel So Sad 15. Caged Bird 16. Lovin U",
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
        "	1. Side 1 2. You 3. Creep 4. How Do You? 5. Stop Whispering 6. Thinking About You 7. Anyone Can Play Guitar Side 2 9. Ripcord 10. Vegetable 11. Prove Yourself 12. I Can't 13. Lurgee 14. Blow Out",
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
        "Go-Go Gadget Gospel, Crazy (Album Version), St. Elsewhere, Goen Daddy Gone, Smiley Faces, The Boogie Monster, Feng Shui, Just A Thought, Transformer, Who Cares, On Line, Necromancing, Storm Coming, The Last Time",
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
        "Life In Technicolor, Cemeteries Of London, Lost!, 42, Lovers In Japan, Yes, Viva La Vida, Violet Hill (Album Version), Strawberry Swing, Death And All His Friends, Component 2, Life In Technicolor ii, Postcards From Far Away, Glass Of Water, Rainy Day, Prospekt's March/Poppyfields, Lost+ (with Jay-Z), Lovers In Japan (Osaka Sun Mix), Now My Feet Won't Touch The Ground",
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
        "1. Public Service Announcement 2000, 2. Kill You, 3. Stan - (featuring Dido), 4. Paul (Skit) - (skit), 5. Who Knew, 6. Steve Berman, 7. Way I Am, The, 8. Real Slim Shady, The, 9. Remember Me? - (featuring RBX/Sticky Fingaz), 10. I'm Back, 11. Marshall Mathers, 12. Ken Kaniff (Skit) - (skit), 13. Drug Ballad, 14. Amityville - (featuring Bizarre), 15. B**** Please II - (featuring Dr. Dre/Snoop Dogg/Xzibit/Nate Dogg, 16. Kim, 17. Under the Influence - (featuring D12), 18. Criminal",
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
        "Army of Me, Hyperballad, The Modern Things, It's Oh So Quiet, Enjoy, You've Been Flirting Again, Isobel, Possibly Maybe, I Miss You, Cover Me, Headphones",
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
        "Mansard Roof Oxford Comma A‐Punk Cape Cod Kwassa Kwassa M79 Campus Bryn One (Blake’s Got a New Face) I Stand Corrected Walcott The Kids Don’t Stand a Chance",
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
        "Banana Skit, Pull Up the People, Bucky Done Gun, Fire Fire, Freedom Skit, Amazon, Bingo, Hombre, One for the Head Skit, 10 Dollar, Sunshowers, Galang",
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
        "Side A. 1. Red Intro 2. How Many Mics 3. Ready or Not 4. Zealots 5. The Beast Side B 1. Fu-Gee-La 2. Family Business 3. Killing Me Softly With His Song Side C. 1. The Score 2. The Mask 3. Cowboys Side D. 1. No Woman, No Cry 2. Manifest/Outro",
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
        "CD 1, Track: 1: Interlude Track: 2: December 4th Track: 3: What More Can I Say Track: 4: Encore Track: 5: Change Clothes Track: 6: Dirt Off Your Shoulder Track: 7: Threat Track: 8: Moment of Clarity CD 2, Track: 1: 99 Problems Track: 2: Interlude Track: 3: Justify My Thug Track: 4: Lucifer Track: 5: Allure Track: 6: My 1st Song",
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
        "Futuresex/Lovesound, Sexyback, Sexy Ladies - Let Me Talk To You (Prelude), My Love, Lovestoned - I Think She Knows (Interlude), What Goes Around... Comes Around (Interlude), Chop Me Up, Damn Girl, Summer Love - Set The Mood (Prelude), Until The End Of Time, Losing My Way, (Another Song) All Over Again, Pose (Bonus Track)",
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
        "One More Time - Romanthony, Aerodynamic - Daft Punk, Digital Love - Daft Punk, Harder, Better, Faster, Stronger - Daft Punk, Crescendolls - Daft Punk, Nightvision - Daft Punk, Superheroes - Daft Punk, High Life - Daft Punk, Something About Us - Daft Punk, Voyager - Daft Punk, Veridis Quo - Daft Punk, Short Circuit - Daft Punk, Face to Face - Todd Edwards, Too Long - Romanthony",
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
        "Track Number 1, Track Name: Around the World, Track Length: 3:56, Track Number 2, Track Name: Parallel Universe, Track Length: 4:28, Track Number 3, Track Name: Scar Tissue, Track Length: 3:35, Track Number 4, Track Name: Otherside, Track Length: 4:13, Track Number 5, Track Name: Get on Top, Track Length: 3:16, Track Number 6, Track Name: Californication, Track Length: 5:19, Track Number 7, Track Name: Easily, Track Length: 3:49, Track Number 8, Track Name: Porcelain, Track Length: 2:41, Track Number 9, Track Name: Emit Remmus, Track Length: 3:58, Track Number 10, Track Name: I Like Dirt, Track Length: 2:35, Track Number 11, Track Name: This Velvet Glove, Track Length: 3:43, Track Number 12, Track Name: Savior, Track Length: 4:50, Track Number 13, Track Name: Purple Stain, Track Length: 4:11, Track Number 14, Track Name: Right on Time, Track Length: 1:50, Track Number 15, Track Name: Road Trippinâ€™, Track Length: 3:25",
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
        "1. Dumpweed(2:23) 2. Don’t Leave Me(2:23) 3. Aliens Exist(3:12) 4. Going Away to College(2:59) 5. What’s My Age Again?(2:28) 6. Dysentery Gary(2:45) 7. Adam’s Song(4:90) 8. All the Small Things(2:48) 9. The Party Song(2:19) 10. Mutt(3:23) 11. Wendy Clear(2:50) 12. Anthem(3:39)",
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
        "1. You Appearing 2. Kim & Jessie 3. Skin of the Night 4. Graveyard Girl 5. Couleurs 6. Up! 7. We Own the Sky 8. Highway of Endless Dreams 9. Too Late 10. Dark Moves of Love 11. Midnight Souls Still Remain",
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
        "Teenage Dream, Last Friday Night (T.G.I.F.), California Gurls (feat. Snoop Dogg), Firework, Peacock, Circle The Drain, The One That Got Away, E.T, Who Am I Living For?, Pearl, Hummingbird Heartbeat, Not Like The Movies",
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
        "Intro, Yeah! Featuring Lil Jon & Ludacris, Throwback Featuring Jadakiss, Confessions, Confessions Part II, Burn, Caught Up, Superstar (Interlude), Superstar, Truth Hurts, Simple Things, Bad Girl, That's What It's Made for, Can U Handle It?, Do It To Me, Take Your Hand, Follow Me, My Boo Duet With Alicia Keys, Red Light, Seduction, Confessions Part II Remix Featuring Shyne, Kanye West & Twista",
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
        "Smooth Operator, Your Love Is King, Hang on to Your Love, Frankie's First Affair, When Am I Going to Make a Living, Cherry Pie, Sally, I Will Be Your Friend, Why Can't We Live Together",
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
        "A 1. Intro 2. A Moment Apart 3. Higher Ground (feat. Naomi Wild) 4. Boy 5. Line Of Sight (feat. WYNNE & Mansionair) B 1. Late Night 2. Across The Room (feat. Leon Bridges) 3. Meridian 4. Everything At Your Feet (feat. The Chamanas) C 1. Just A Memory (feat. Regina Spektor) 2. Divide (feat. Kelsey Bulkin) 3. Thin Floors And Tall Ceilings 4. La Ciudad D 1. Falls (feat. Sasha Sloan) 2. Show Me 3. Corners Of The Earth (feat. RY X)",
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
        "[Disc 1] No Candle Light, Can't Waste No Time, In My Arms, Crazy Dream, Lonely Fellow, My LIfe, Keep Me Warm, More Time, Shouldn't Be, The Song, [Disc 2] : Still Searching, Don't You Feel Like Dancing, One Love, One Life, Can't Make Blood Outta Stone, You Stand Alone, Not Made Of Steel, Family, The Truth Will Live On, Prime Time, I Humble Myself",
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
        "	Dragonfly, True To Myself, I Get Out, Looking, Shalom Salaam, In The Name Of God, Rainbow In The Sky, Melancholy Mood, Good Old Days, Never Deny You, DYKL (Don't You Kill Love) Bonus Track; The Song",
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
