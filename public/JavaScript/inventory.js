// this handles the inventory

// initialize some variables
let inventoryItems = [] //Create an empty array that we will use to store all the Inventory objects created.
    ,quantityInStock = 5
    ;

//Below we create the constructor function that will be used to create all Inventory objects.
function Inventory (index, shortName, longName, description, price, image, quantityInStock) {
    this.index = index;
    this.shortName = shortName;
    this.longName = longName;
    this.description = description;
    this.price = price;
    this.image = image;
    this.quantityInStock = quantityInStock;
}

/* 
When the page loads, we check to see whether it is the first time we are loading this page or not. If it is the first time we are loading the page, we initialize the values we want to store in localStorage. If it is not the first time we are loading the page, then we can assume that we already have some information about inventoryItems objects stored in localStorage. We use this information in localStorage to update information about each inventoryItems objects as we update on our HTML page. 
*/
function initializeInventory() {
    let i = 0
        ,shortName
        ,image
        ,price
        ,longName
        ,description
        ;
    // console.log(localStorage.getItem("inventoryInitialized"));
    // console.log("initializeInventory");
    // uncomment the next line if you want to re-initialize
    // localStorage.removeItem("inventoryInitialized");
    
    if (localStorage.getItem("inventoryInitialized") === null) {
        console.log("initialize inventory!!");
        // initialize our inventory items
        localStorage.setItem("inventoryItems", null);
                    
        shortName = "Telecaster";
        image = "Images/JimmyPageTelecaster.jpg";
        price = "$1,399.99";
        longName = "Fender Jimmy Page Telecaster Electric Guitar";

        description = '<p>When the opening riff of "Good Times Bad Times" came through the radio in 1969, everything changed. In that moment Jimmy Page cemented his legacy and altered the course of popular music with a single guitar: his Fender Telecaster. </p><p>The Fender Jimmy Page Telecaster is an homage to that guitar, which began life in its factory White Blonde lacquer finish, then became the "mirror guitar" before taking on its final form – a magical one-of-a-kind instrument, hand-painted by Page himself, that would go on to produce some of the most iconic riffs of the 20th Century.</p><p>When Led Zeppelin was formed in October 1968, the Telecaster became Page’s go-to instrument and he played it on stage and in the studio until 1969. It was also the main guitar used on the legendary Led Zeppelin I album. Page went on tour in 1969, and upon his return, he discovered a friend had kindly stripped the body and painted over the dragon paint job. The paint job compromised the sound and wiring, leaving only the neck pickup working. He salvaged the neck and put it on his brown string bender Tele, and has since re-stripped and restored the body in full.</p><p>"This guitar is so special and has so much history, so I approached Fender to see if they’d be interested in recreating it," Page said. "They really got it 110 percent right, or 150 percent right. It\'s so absolutely as it is, as it should be, and as it was."</p><h6>Features</h6> <ul> <li>Satin lacquer finish over a reproduction of Jimmy Page’s iconic artwork</li><li>Two custom-wound Jimmy Page Telecaster single-coil pickups</li><li>Custom "Thin D"-shaped maple neck; 7.25"-radius slab rosewood fingerboard</li><li>Top-loader bridge with threaded steel saddles</li><li>Includes vintage-style black hardshell case</li></ul>';

        price = "$1,399.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;


        shortName = "Stratocaster";
        image = "Images/PlayerStratocaster.jpg";
        price = "$674.99";
        longName = "Fender Player Stratocaster Maple Fingerboard Electric Guitar";

        description = '<p>Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it\'s a sound that\'s helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. This Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a modern neck profile, medium-jumbo frets and a freshly redesigned 2-point fulcrum vibrato bridge. With a beautiful gloss finish over a solid alder body, a 22-fret pau ferro fingerboard with a contemporary 9.5" radius for easy bending, the Player Series Stratocaster is primed and ready to carry you along your musical voyage.</p><h6>Features</h6> <ul> <li>Gloss-finish solid alder body</li><li>25.5"-scale bolt-on maple neck with 22-fret, 9.5"-radius maple fingerboard</li><li>Three Fender Player Series Stratocaster single-coil pickups, 5-way switch</li><li>2-point fulcrum tremolo bridge with vintage-style bent steel saddles, sealed, die-cast tuners</li></ul>';

        price = "$674.99";

        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;

        shortName = "Stratocaster HSS";
        image = "Images/Limited-Edition-Standard-Stratocaster-HSS-Plus-Top-Maple-Fingerboard-Electric-Guitar.jpg";
        price = "$599.99";
        longName = "Fender Limited Edition Standard Stratocaster HSS Plus Top Maple Fingerboard Electric Guitar Blue Burst";

        description = '<p>When Fender created this limited-edition American Elite Stratocaster, their goal was to make a nearly irresistible instrument.  By taking the classic visual style that\'s kept the Strat at the forefront of electric guitars for over 60 years, and combining it with a modern feature set, they\'ve succeeded beyond their wildest expectations. </p><h6>A thing of beauty</h6> <p>Starting with an almost three-dimensional translucent finish on a gorgeous quilted maple top, it could win on looks alone. The top and the subtle burst finish accentuate the traditional Strat body curves, setting this guitar apart from the crowd. The maple also carries subtle tonal effects, adding an overlay of brightness and sustain to the solid alder body. Some players also feel that maple adds some extra liveliness to the guitar\'s response. While that\'s an individual opinion, you will want to simply pick this guitar up and play, because it just looks so good.</p><p>Playability gains an added boost from the maple on maple neck. While many modern guitars boast a compound-radius fingerboard, the American Elite Strat goes one further with a compound-profile neck for added comfort and ease of playing. Combining a 9.5" radius and a modern-"C" profile at the nut, it smoothly moves to a "D" profile and a 14" radius by the time it reaches the updated, contoured neck heel.</p><h6>Sophisticated design and the latest electronics</h6> <p>Locking short-post tuners ensure proper break angle over the synthetic bone nut, delivering buzz-free playing performance and stable tuning, no matter how hard you work the two-point fulcrum tremolo. So whammy away, as subtly or as overtly as you need, because this guitar has you covered.</p><p>The electronics package is an extra-special feature. With the latest 4th Generation Noiseless pickups in the neck and middle and an open-coil Shawbucker in the bridge, the American Elite Strat can easily go from a subtle, intimate vintage-voiced whisper to a full-throated scream. When you need that extra little bit of totally over-the-top tonal boost, a push-push knob switch moves you into what Fender calls the "Passing Lane," where the bridge pickup bypasses the tone circuit and its full signal is sent directly to the output jack. This provides enhanced overtones, extra output and a new surge of adrenaline.</p><p>The entire package is designed precisely for the modern player who desires tonal versatility and exceptional performance and playability. Every time you plug this guitar in, you\'ll discover something new, and it\'s so comfortable and easy to play, you\'ll just keep picking it up again and again. The American Elite Strat HSS with quilt-maple top includes a premium hardshell case.</p><div> <h6>Features</h6> <ul> <li>Alder body with quilted maple top</li><li>Bolt-on maple neck with maple fingerboard and compound neck profile</li><li>Shawbucker and 4th generation noiseless Strat pickups</li><li>2-Point American Deluxe synchronized tremolo and locking tuners</li></ul> </div>';

        price = "$599.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;

        shortName = "Mirror Telecaster";
        image = "Images/JimmyPageMirrorTelecaster.jpg";
        price = "$2,499.99";

        longName = "Fender Jimmy Page Mirror Telecaster Electric Guitar";

        description = '<p>Fender\'s Jimmy Page Mirror Telecaster is a recreation of a guitar that was at the heart of multiple historic rock-and-roll moments. It has been in the hands of two of the most iconic guitarists in the musical (r)evolution of the 1960s. The original 1959 Telecaster\'s first owner was Jeff Beck, who gifted it to Jimmy Page in 1966, as a thank you for recommending him to the Yardbirds when Page couldn\'t take the gig. Page then briefly joined the band and played the guitar with them (he can be seen with it in the nightclub scene in Michelangelo Antonioni\'s 1966 film Blow Up) and it is one of the primary guitars used in the creation of the first Led Zeppelin album. Now, Fender has created this tribute to the guitar that arguably changed the course of music.</p><h6>Building on a solid platform</h6> <p>This unique guitar starts with a recreation of the \'59 White Blonde, top-loading Telecaster. This was the guitar\'s appearance until early 1967, when Page added eight round mirrors to the body. While Fender didn\'t attach mirrors to the tribute guitar, to avoid them being damaged in shipping and display, eight are included with the guitar for you to attach if you want.</p><h6>Crafting the tone</h6> <p>It\'s then loaded with a pair of Jimmy Page Custom \'59 Tele pickups, wound to deliver the tone that created the incendiary riffage of the first Zeppelin album. The guitar also comes with the top-loading bridge that was standard on 1959, and some 1960, Telecasters. While it can also be strung in the standard string-thru-body manner, the top-loading bridge offers a couple of advantages. Because it reduces total string length, it reduces string tension, which produces a tone that\'s both warmer and "zingier" (for lack of a better term). These tonal qualities are evident in the original\'s appearance in Page\'s much-admired solo on "Stairway to Heaven"</p><h6>Designed with the artist</h6> <p>Page himself was heavily involved in the creation of this tribute to the instrument he refers to as "quite a magical guitar," and his signature appears both on the back of the headstock and the custom neck plate. The complete Jimmy Page Mirror Telecaster package also includes a vintage-style hard case, "stained-glass" strap, classic black coil guitar cable and a custom Certificate of Authenticity. </p><h6>Own the magic</h6> <p>Whether you\'re a rabid fan of Page\'s career and playing, or simply appreciate an extraordinary instrument, the Fender Jimmy Page Mirror Telecaster is a very special Tele, indeed. With great tone, extraordinary playability and a pedigree that includes two of the world\'s greatest rock guitarists, it\'s one that you\'ll be proud to have as part of your collection.</p><h6>Features</h6> <ul> <li>Gloss-finish 2-piece solid ash body</li>25.5"-scale maple neck with 21-fret rosewood fingerboard <li>Dual custom-wound Jimmy Page \'59 Tele pickups, 3-way switch</li><li>Vintage-style "top-loader" bridge with 3 steel barrels, Pure Vintage tuners</li></ul>';

        price = "$2,499.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;              

        shortName = "Stratocaster";
        image = "Images/American-Professional-Stratocaster-Maple-Fingerboard-Electric-Guitar.jpg";
        price = "$1,499.99";
        longName = "Fender American Professional Stratocaster Maple Fingerboard Electric Guitar";

        description = '<p>Often copied, but never surpassed, the Stratocaster is arguably the world&rsquo;s most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn&rsquo;t a re-imagining of the classic design; it&rsquo;s the authentic original model, evolved.<br><br>The choice of musical legends since its release, the Stratocaster feel and sound set the world on fire, powering music movements from electric blues to EDM, and everything in-between. In your hands this Strat is ready to navigate the creative twists and turns of your music, inspiring you to express yourself in new ways through your playing.<br><br>Developed by pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high-end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern &ldquo;Deep C&rdquo;-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords.<br><br>The best of yesterday and today, the American Professional Stratocaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.<br></p><div> <h6>Features</h6> <strong>Body</strong> <ul> <li>Body shape: Double cutaway</li><li>Body type: Solid body</li><li>Body material: Solid wood</li><li>Top wood: Not applicable</li><li>Body wood: Alder, Ash on Sienna Sunburst</li><li>Body finish: Gloss Polyurethane</li><li>Orientation: Right handed</li></ul> <strong>Neck</strong> <ul> <li>Neck shape: Modern Deep C</li><li>Neck wood: Maple</li><li>Joint: Bolt-on</li><li>Scale length: 25.5 in.</li><li>Truss rod: Dual-action</li><li>Neck finish: Satin</li></ul> <strong>Fretboard</strong> <ul> <li>Material: Maple</li><li>Radius: 9.5 in.</li><li>Fret size: Tall narrow</li><li>Number of frets: 22</li><li>Inlays: Dot</li><li>Nut width: 1.687 in. (42.8 mm)</li></ul> <strong>Pickups</strong> <ul> <li>Configuration: SSS</li><li>Neck: V-Mod Single-Coil Strat </li><li>Middle: V-Mod Single-Coil Strat </li><li>Bridge: V-Mod Single-Coil Strat </li><li>Brand: Fender</li><li>Active or passive pickups: Passive</li><li>Series or parallel: Series</li><li>Piezo: No</li><li>Active EQ: No</li><li>Special electronics: None</li></ul> <strong>Controls</strong> <ul> <li>Control layout: Master volume, tone 1, tone 2</li><li>Pickup switch: 5-way</li><li>Coil tap or split: No</li><li>Kill switch: No</li></ul> <strong>Hardware</strong> <ul> <li>Bridge type: Tremolo/Vibrato</li><li>Bridge design: 2-Point Synchronized Tremolo with Bent Steel Saddles and Pop-In Tremolo Arm </li><li>Tailpiece: Not applicable</li><li>Tuning machines: Deluxe staggered</li><li>Color: Nickel/chrome</li></ul> <strong>Other</strong> <ul> <li>Number of strings: 6-string</li><li>Special features: Electronics</li><li>Case: Hardshell case</li><li>Accessories: None</li><li>Country of origin: United States</li></ul> </div>';

        price = "$1,499.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;         

        shortName = "Stratocaster SE";
        image = "Images/Special-Edition-Standard-Stratocaster-Electric-Guitar.jpg";
        price = "$599.99";
        longName = "Fender Special Edition Standard Stratocaster Electric Guitar";

        description = '<p>The Fender Special Edition Standard Stratocaster electric guitar is a modified version of a Standard Series Strat featuring custom upgraded appointments such as a tinted and gloss finished vintage-style maple neck, classic 50\' spaghetti logo, aged white plastic parts, a black/white/black three-ply pickguard and three classic Fender single-coil pickups. Other features include an alder body, 21-fret 9.5" radius fingerboard, and a classic Fender Synchronized Tremolo. Case sold separately.<br><br></p><div> <h6>Features</h6> <ul> <li>Alder body</li><li>Vintage-tinted gloss maple neck</li><li>Modern "C" neck profile</li><li>Maple fretboard</li><li>Black dot position inlays</li><li>\'50s era "spaghetti" logo on the headstock</li><li>3 classic Fender single-coil pickups</li><li>Master Volume, two Tones</li><li>5-position blade selector switch</li><li>Synchronized Tremolo bridge</li><li>Three-ply black-white-black pickguard</li><li>Aged white knobs and pickups</li><li>Grey hardware</li></ul> </div>';

        price = "$599.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;            

        shortName = "Stratocaster LE";
        image = "Images/Limited-Edition-Standard-Stratocaster-Maple-Fingerboard-Electric-Guitar.jpg";
        price = "$599.99";

        longName = "Fender Limited Edition Standard Stratocaster Maple Fingerboard Electric Guitar";

        description = '<p>For guitarists everywhere who appreciate great style, rich and versatile tone, and excellent value, the Standard Stratocaster is an elegant and affordable classic with a great combination of traditional design and contemporary features. Time-honored Fender style and performance-minded modern upgrades don\'t have to break the bank, and this model delivers the best of both in an instrument ideal for Stratocaster players everywhere at every level. This model comes in a limited edition Sea Foam Pearl. Case sold separately.</p><div> <h6>Features</h6> <strong>Body</strong> <ul> <li>Body shape: Double cutaway</li><li>Body type: Solid body</li><li>Body material: Solid wood</li><li>Top wood: Not applicable</li><li>Body wood: Alder</li><li>Body finish: Gloss Polyester</li><li>Orientation: Right handed</li></ul> <strong>Neck</strong> <ul> <li>Neck shape: C</li><li>Neck wood: Maple</li><li>Joint: Bolt-on</li><li>Scale length: 25.5 in.</li><li>Truss rod: Standard</li><li>Neck finish: Satin Urethane</li></ul> <strong>Fretboard</strong> <ul> <li>Material: Maple</li><li>Radius: 9.5 in.</li><li>Fret size: Medium jumbo</li><li>Number of frets: 21</li><li>Inlays: Dot</li><li>Nut width: 1.65 in. (42 mm)</li></ul> <strong>Pickups</strong> <ul> <li>Configuration: SSS</li><li>Neck: Standard Single-Coil Strat</li><li>Middle: Standard Single-Coil Strat</li><li>Bridge: Standard Single-Coil Strat</li><li>Brand: Fender</li><li>Active or passive pickups: Passive</li><li>Series or parallel: Series</li><li>Piezo: No</li><li>Active EQ: No</li><li>Special electronics: None</li></ul> <strong>Controls</strong> <ul> <li>Control layout: Master volume, tone 1, tone 2</li><li>Pickup switch: 5-way</li><li>Coil tap or split: No</li><li>Kill switch: No</li></ul> <strong>Hardware</strong> <ul> <li>Bridge type: Tremolo/Vibrato</li><li>Bridge design: 6-saddle vintage-style syncronized tremolo</li><li>Tailpiece: Not applicable</li><li>Tuning machines: Standard cast</li><li>Color: Nickel/chrome</li></ul> <strong>Other</strong> <ul> <li>Number of strings: 6-string</li><li>Special features: Limited edition finish</li><li>Case: Sold separately</li><li>Accessories: None</li><li>Country of origin: Mexico</li></ul> </div></div></div>';

        price = "$599.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;             

        shortName = "Stratocaster Pro";
        image = "Images/American-Professional-Stratocaster-Rosewood-Fingerboard-Electric-Guitar.jpg";
        price = "$1,499.99";

        longName = "Fender American Professional Stratocaster Rosewood Fingerboard Electric Guitar";

        description = '<p>Often copied, but never surpassed, the Stratocaster is arguably the world&rsquo;s most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn&rsquo;t a re-imagining of the classic design; it&rsquo;s the authentic original model, evolved.<br><br>The choice of musical legends since its release, the Stratocaster feel and sound set the world on fire, powering music movements from electric blues to EDM, and everything in-between. In your hands this Strat is ready to navigate the creative twists and turns of your music, inspiring you to express yourself in new ways through your playing.<br><br>Developed by pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern &ldquo;Deep C&rdquo;-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords.<br><br>The best of yesterday and today, the American Professional Stratocaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.<br></p><div> <h6>Features</h6> <strong>Body</strong> <ul> <li>Body shape: Double cutaway</li><li>Body type: Solid body</li><li>Body material: Solid wood</li><li>Top wood: Not applicable</li><li>Body wood: Alder, Ash on Sienna Sunburst</li><li>Body finish: Gloss Polyurethane</li><li>Orientation: Right handed</li></ul> <strong>Neck</strong> <ul> <li>Neck shape: Modern Deep C</li><li>Neck wood: Maple</li><li>Joint: Bolt-on</li><li>Scale length: 25.5 in.</li><li>Truss rod: Dual-action</li><li>Neck finish: Satin</li></ul> <strong>Fretboard</strong> <ul> <li>Material: Rosewood</li><li>Radius: 9.5 in.</li><li>Fret size: Tall narrow</li><li>Number of frets: 22</li><li>Inlays: Dot</li><li>Nut width: 1.687 in. (42.8 mm)</li></ul> <strong>Pickups</strong> <ul> <li>Configuration: SSS</li><li>Neck: V-Mod Single-Coil Strat </li><li>Middle: V-Mod Single-Coil Strat </li><li>Bridge: V-Mod Single-Coil Strat </li><li>Brand: Fender</li><li>Active or passive pickups: Passive</li><li>Series or parallel: Series</li><li>Piezo: No</li><li>Active EQ: No</li><li>Special electronics: None</li></ul> <strong>Controls</strong> <ul> <li>Control layout: Master volume, tone 1, tone 2</li><li>Pickup switch: 5-way</li><li>Coil tap or split: No</li><li>Kill switch: No</li></ul> <strong>Hardware</strong> <ul> <li>Bridge type: Tremolo/Vibrato</li><li>Bridge design: 2-Point Synchronized Tremolo with Bent Steel Saddles and Pop-In Tremolo Arm </li><li>Tailpiece: Not applicable</li><li>Tuning machines: Deluxe staggered</li><li>Color: Nickel/chrome</li></ul> <strong>Other</strong> <ul> <li>Number of strings: 6-string</li><li>Special features: Electronics</li><li>Case: Hardshell case</li><li>Accessories: None</li><li>Country of origin: United States</li></ul> </div>';

        price = "$1,499.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;

        shortName = "Elite Stratocaster";
        image = "Images/American-Elite-Stratocaster-HSS-Maple-Fingerboard-Limited-Edition-Electric-Guitar.jpg";
        price = "$2099.99";

        longName = "Fender American Elite Stratocaster HSS Maple Fingerboard Limited-Edition Electric Guitar Aqua Marine Metallic";

        description = '<p>Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it\'s a sound that\'s helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. This Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a bridge position humbucker and freshly redesigned 2-point fulcrum vibrato bridge. With a solid alder body, and a 22-fret maple fingerboard with a contemporary 9.5" radius for easy bending, the Player Series Stratocaster HSS is primed and ready to carry you along your musical voyage.</p><div> <h6>Features</h6> <ul> <li>Gloss-finish solid alder body</li><li>25.5"-scale bolt-on maple neck with 22-fret, 9.5"-radius maple fingerboard</li><li>Fender Player Series Stratocaster pickups single-coil neck/middle, bridge humbucker, 5-way switch</li><li>2-point fulcrum tremolo bridge with vintage-style bent steel saddles, sealed, die-cast tuners</li></ul> </div>';

        price = "$2099.99";
        inventoryItems.push(new Inventory(i, shortName, longName, description, price, image, quantityInStock));
        i++;
        //console.log(inventoryItems);
        localStorage.setItem("inventoryInitialized", true);
        localStorage.setItem("inventoryItems", JSON.stringify(inventoryItems));
    }
        
}

initializeInventory();