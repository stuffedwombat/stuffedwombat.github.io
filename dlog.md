[back](index) <br>

<h1>Dlog</h1>
this is a test.<br>
i am documenting the development of a game here.<br>
if that does not distract me too much, i will keep writing about game dev related stuff.<br>
<br>
to save time i will not care about spelling, grammar or making too much sense.
<br>
the post on top is the newest one. <br>
"dlog" is a combination of "development" and "blog". <br>
you can not stop me.


-----------------------------------------------------
<h1>06.03.20 - tired </h1>
Helo!<br>
<br>
todays dlog is super short because I am tired!<br>

I finished a demo version of the game and send it out.<br>
<br>
People played and generally liked it.<br>
<br>
Many of them had the same, fixable problems.<br>
<br>
The first test-art came in and its so great it hurts.<br>
<br>
I will make a big change to the characters movement set.<br>
<br>
The hats are a huge factor of enjoyment, especially compared to how easy they were to make.<br>
<br>
tomorrow I I will have been working on this game for 7 days.<br>
I took a lot of breaks and met with friends and spent quality time outside, but I have not taken a full day off of this so far.<br>
So i will do that tomorrow.<br>
In the evening I will write a summary dlog of the first week and plan the next week, but not touch the game itself.<br>
<br>
Now i will watch the new Eizoken episode.<br>
Tomorrow more about that :)<br>
<br>
Cheers


-----------------------------------------------------
<h1>06.03.20 - small/big changes! </h1>

Heyoooooo<br>
<br>
today was pretty great, game-wise!<br>
<br>
3 big things got done today<br>

**Thing 1: Lives**<br>
People have been suggesting to make the character not die from 1 hit since I started this project.<br>
In my mind, having zero margin of error makes the game more exciting, but I really have to keep reminding myself that this is not supposed to be a extremely hard game.<br>
In fact, the combat is only a part of the whole thing!<br>
So the game should be more accessible and forgiving.<br>
The problem is, that coding "damage" to the player is annoying and boring. When the character gets hit it needs a invincibilty timeframe and some kockback and i dont like it for some reason.<br>
But the game needs to be friendlier!<br>
<br>
Now I found a solution that works super nicely!<br>
When you take damage, your character dies, but now you loose 1 Health Point and a new one character drops in from above immediately!<br>
When you run out of HP you have to restart the run.<br>
<br>
That is pretty cool for multiple reasons:<br>
1.) it allows the player to reposition themselves after being put into a corner.<br>
2.) it feels quirky and weird and unusual.<br>
3.) the players ammunition persists!<br>
<br>
Let me quickly talk about number 3:<br>
when the player looses a health point, a new character is spawned. And that character brings new ammo into the room! So now there are two pieces of ammo that the player can pick up! By dying, you make the game easier! Its a negative feedback loop! So dope!
<br>
But this extra ammo does not come with you into the next level, so you should still try to not take damage, because while it makes things easier shortterm, long term you will run into problems!<br>
<br>
so that was pretty cool.<br>


**thing 2: new artist & first song**<br>
A pixelartist whose work I adore has said that they have the time to do the art for this game!<br>
I know now that I can make the art myself to an ok level, but having a pro artist on board is super dope!<br>
Nobody on this project gets paid, so i really appreciate the people who asked to help out. there have been more people asking than the game needed, which is always kind of painful for me, having to tell people that someone else is already doing the thing :(<br>
(everyone is getting rev share ofc if this thing ever makes any money)<br>
<br>
I also got to listen to the first draft of a song by Britt and wew... i looped it for 2 hours while coding.<br>
Its very good.<br>
I spent quite some time yesterday and today with writing directions for art and sound. That is always kind of fun :)<br>
<br>

**thing 3: Hubworld, items and achievements**<br>
Having to write about all the assets the game needs helped me to define what I actually, really needed myself.<br>
The game now has a pretty hubworld with doors, some secret stuff, an achievement gallery and a item room, where you can equip items!<br>
I decided to add the items because i did some quick tests and its really not a lot of work, but they add a lot of possibility for indiviudal expression?<br>
<br>
Oh and also pretty much everything in the game is hardcoded :)<br>
It is all pretty clunky, but it works and I can change stuff very, very fast!<br>

**Thing 4: Demo is done!**<br>
haha i lied, there are 4 cool things!<br>
Two days before my deadline, the demo of the game is fully playable and working!<br>
I will add some quality of life stuff & tweak it a bit tomorrow and then send it out :)<br>
<br>
<br>
It has been almost a week since this project started and I am very, very happy with how things have been going.<br>
<br>
I guess I will write a summary / nostalgia post tomorrow :)<br>
<br>

Have a nice dayyyy!<br>




-----------------------------------------------------
<h1>06.03.20 - a little bit of work</h1>

Today I wrote the directions for the soundscape.<br>
The amazing Britt Brady (Gato Roboto) is going to help me with sfx and music and im very excited for what he will come up with!<br>
<br>
Then I added some blood particles and stuff like that and called it a day!<br>
I had some other things (related to real life and [Secret Project]) to do today and will later indulge in a movie night with friends.<br>
<br>
Nice stuff like this is important if you dont want to go insane i think.<br>
<br>
but yeah, in the next 3 days I will need to add a lot of stuff to have a demo ready to show to the people that have been asking!<br>
<br>
Cheers!



-----------------------------------------------------
<h1>05.03.20 - Rooms, Art and polish</h1>
yo yo yo yo yo yo yo yo yooooo!<br>
<br>
today I learned that the friend who was going to make the art can not do the art.<br>
Thats ok!<br>
So instead of starting with making the room generation code, I made some basic art assets and put them into the game, to get a sense of how much work that would be in the future.<br>
<br>
I got carried away a bit and juiced the player character!<br>
<br>
when i was halfway happy with that, I surprised myself by making the room generation code extremely quickly.<br>
<br>
It is basically cheating.<br>
Every room is filled with tiles at the start of the level.<br>
I have placed a bunch of sprites around the rooms and when the level is "loading" these move through the rooms and eat all tiles that they touch.<br>
To keep it random, there is a 50% chanche that the sprite will selfdestruct before starting to move.<br>
<br>
With this easy code and handplaced sprites I can create a lot of different rooms.<br>
<br>
When I played the game with this code & the basic art in place I was blown away.<br>
The game felt like a real game.<br>
It felt like everything was coming together.<br>
<br>
While playing, one of my predictions came true!<br>
I would find small ways to make the enemies more concrete over time!
The dropper is now really fucking cool.<br>
I am keeping todays dlog short because there were not too many interesting decisions today. I just worked :)<br>

Right now i dont know what I will work on tomorrow.<br>
Maybe I will bring the upgrades back? I have the time to do it & also some fun ideas :)<br>

Thats it for today tho!<br>
Cheers!


-----------------------------------------------------
<h1>04.03.20 - 6 new enemies</h1>
heyo, thanks for reading this :)<br>
<br>
Today was good!<br>
Instead of sprinting in the morning and the flaundering all day, I paced myself today.<br>
<br>
Two big things were done:<br>
    I made 6 new enemies<br>
    & assigned them into areas<br>

<br>
the game consists of 3 areas, with 3 floors each.<br>
In every area, there are 3 types of enemies.<br>
<br>
Until today, I had 3 enemies that populated the first area, but to get a good sense for how a run will flow and progress in difficulty, I needed to have all 9 enemies coded.<br>
I did not plan the enemies I made. Some, I stole from Ben Stars much better Roguelike Shooter, but most were made up on the go.<br><br>
To make things move in Construct 2, the engine I use, you use Behavious that you attach to Sprites. This is extremely fast, bc I just drop a drawing into the engine and assign it a Behaviour, add a little bit of code and the enemie is done.<br>
<br>
In theory at least.<br>
Practically, I spent the majority of the day making little red boxes move in different ways.<br>
Some of the code is really, really bad and I am amazed that it works at all.<br>
But it works.<br>
<br>
To describe the process for each enemie here would take too long, but I want to go through the process of the "Slider" enemy here:<br>
<br>
The Slider was supposed to be a little box that moved in straight lines, unaffected by gravity. When it hit a wall, it was supposed to check the position of the player and then move either vertically or horizontally towards the player.<br>
Then it would hit a wall again and repeat the process, eventually honing in on the character.<br>
<br>
for some reason, I could not get this to work in a way that felt understanable. The Slider would just slide around like i told it to, but it did so without any agency. It was a very boring enemie.<br>
<br>
Stupidly I tried to tweak its movement values.<br>
<br>
After wasting quite some time, without the Slider ever feeling threatening or interesting, I was so frustrated that I just threw most of my code away and tried a completely different approach:<br>
<br>
The slider would only move from left to right until it hit a wall and the change directions. It was basically one of those spiky balls that we know from every platformer.<br>
<br>
Then I called the Slider done and moved on.<br>
I finished the other enemies and put them all in a level, to see how that felt.<br>
After struggling to survive a room full of 9 enemies for some time I was able to dispose of all of them... except for the slider, who did its rounds above the character.<br>
<br>
The slider was super boring.<br>
I do not remember how I got the idea, but I just quickly made the Slider slide down for a little bit after it hit a wall.<br>
And BAM.<br>
It was a kind of space invader now, inevitably zoning in on the player. The slider is not a threat from the start, but if you do not dispose of it quickly, it will make you life hell, as you jump constantly, trying to avoid it.<br>
<br>
I think I should try to create more dynamics like this, that are not only about evading and killing, but also about time and space.<br>
<br>
Anyways, after all the enemies were done (for now!!) I hit a slump, took a break and then came back to look at the mess I had just made.<br>
<br>
Because now I had 9 enemies, that I somehow had to distribute to 3 areas.<br>
This is horrible, because this is a super important step and there are 10000 variables.<br>
<br>
After a short moment of desperation, I simply "mapped" the enemies.<br>
Idk if there is a better phrase for that, but I divided them into groups that reflected their patterns of movement.<br>
Flying enemies in one group, dashing enemies in the other, etc etc<br>
<br>
This allowed me to better understand the pool of things I had to dsitribute.<br>
I followed the rule of "no 2 enemies with the same pattern of movement in the same area" and for some miracolous reason that was possible! yay!<br>
<br>
Then I removed all the level generation code and focused on just making the enemies spawn in their respective levels and played the game a bunch.<br>
It is far from perfect, but this first distribution kind of works and gives me a starting point, from which i can make changes towards a distribution of enemies that creates very intense, fair & short runs.<br>
<br>
so yeah that was my day. I think I worked more today than on any other day of this project so far. Today I came close to scratching the actual 8 hour work day :O<br>
<br>
Oh, I dont think I ever shared my development plan for this project!<br>
Basically, i want to have the game finished with 100% functionality by the 9th of May, which is in 5 days.<br>
After that I will still tweak some values and fix bugs and stuff like that, but I will not add any new mechanics or enemies!<br>
I will add the art & sound effects & music and fight hordes of bugs. Also the grueling steam process has to start, with all its forms and trailers and despair and stuff.<br>
<br>
<br>
I have been thinking a bit about how to market this game and came up with the term "finite roguelike". This game will have a definite ending and will not be a typical "endless" roguelike, but I can not talk about that here, bc its secret :) <br>
The friend that will do the art can start work on the 17th, which means that I will have to launch the steampage with my programmer art!<br>
That actually pushes me in an interesting direction:<br>
I could launch the steam page with (polished) programmer art and advertise the fact that the game is in develeopment right now!<br>
I could post these dlogs on the games steam page and interact with the people of steam!<br>
<br>
Since the whole project is built to be developed very quickly, the gamers might find it interesting to see it progress!<br>
<br>
But yeah, thats it for today!<br>
Tomorrow I think I will take it easier and only try to make some code that makes some cool rooms (and probably bend the meaning of the word "random" ^^).<br>

Bye!<br>




-----------------------------------------------------
<h1>03.03.20 - first iteration complete!</h1>

Wew.<br>
I got a LOT of stuff done in the morning, but after that my day was fragmented with things I had to take care of.<br>
Independent of those things, I think today I blew all my powder in the first 2 hours of work.<br>
<br>
I noticed that I was getting less effective, but did not take the looong break I would have needed.<br>
Lets hope I can recognise this stuff better from now.<br>
<br>
But yeah, before that, I was on fire.<br>
I made a very rudimentary random level generator!<br>
The rooms now look different and enemies spawn at random positions!<br>
Yay!
<br>
I have also tested add physic objects and it works very well!<br>
Because of some coding issues, I will need to have essentially at least 3 game objects per enemie:<br>
One that controls the movement and the collision.<br>
The second that is a wobbly physic thing that makes it look less sterile.<br>
And the third is the corpse of the wobbly physics thing, that adds permanence and all that good stuff!<br>
<br>
This will be a lot of stupid manual labour to set up. Every single one of these objects needs some custom code and its just a lot of cliking and copy pasting code to change one variable. <br>
I am pretty sure that there is a more elegant code-y solution, but if i dont find that on accident I will just brute force & hardcode these things to save time.<br>
I can save myself a lot of work, if keep the amount of different enemies down, which was the plan all along!<br>
<br>
After adding a shitty menu, a rudimentary hubworld and the functionality to switch between them, I completed the first iteration of the game!<br>
Yay<br>
<br>
The random generated levels are still way too hard but I spend a considerable amount of time just playing my own game, which is a good sign i think.<br>
I think that I will just make the game studpidly easy from my perspective. For now I have only been working on the first area (of three planned) and it is not a very friendly introduction to the game.<br>
I am wondering if I should put different enemies in there or make the existing ones easier?<br>
For now I think I will just keep adding enemies until I have enough and then place them in the area where they work best to create a rising level of difficulty? <br><br>(I guess this stuff is similar to level design? I should first introduce weak "dashing enemies" before showing the hard "dashing enemies", etc, I guess I need to categorise the enemies I make and then let good old Kishōtenketsu take over.)
<br>
<br>
Like I said before, I ran out of steam quickly today, so i could not really push forward and start on the second iteration already.<br>
Maybe reaching milestones such as this just makes your tiredness / exhaustion catch up?<br>
Idk, but i think the solution is to just ride that time of low energy out and do something different, instead of working ineffectively, like i did today.<br>
<br>
But yeah, overall I am still very happy with how this is going so far!<br>
<br>
Tomorrow I will tweak the room generation code, tweak the enemies & make some new ones.<br>
<br>
(I also finished some stuff related to what I want to say with the game today. But thats secret. All i can say is that after loosing my steam, I spent way too much time  trying to make an idea work in an unintutive way, before switching approach and being done with it in a few minutes.)
<br>


-----------------------------------------------------
<h1>02.03.20 - Remaking [Always Down]</h1>

today was pretty ok, in terms of work done on the game.<br>
not perfect, but pretty ok.<br>
<br>
after taking care of some personal stuff, i threw away everything I made so far and started anew.<br>
This always helps me to keep the code clean-ish and make everything usable quickly.<br>
Like, now there are enemies which have a "master instance" and just get spawned, instead of 30 individual instances placed in the editor. I can make changes to them super quickly.<br>
<br>
quality of life stuff like this is super boring to make, but now that i know what the project is going to be thats what i will do most of the time: <br>
boring stuff.<br>
<br>
I also removed all physics elements from the game, to be able to better balance it.<br>
having physics just forces you to tweak obscure values with chaotic effects forever and i dont have time for that.<br>
tomorrow i will try to add some physics wonkyness back into the game, but only on a visual level.<br>
everything will run on neat little square colliders but on top of that i want some weird spinning legs and wobbly monsters.<br>
lets hope that works out.<br>
<br>
a big thing i played around with a lot today were fundamentals:<br>
screensize, player movement, enemie movement patterns etc etc<br>
<br>
none of the things that are in the game now are close to perfect, but they are a healthy start.<br>
<br>
i think that a game becomes better the more you iterate over its individual parts. and in order to iterate, one has to call something done for the time being, even if it really sucks. as long as it does the job, it is done for now.<br>
<br>
but before leaving all those fundamentals alone, i changed them a lot and tested how they felt.<br>
essentially, the game became smaller & faster through that.<br>
I made the jump of the character snappier, its movement speed higher, the level smaller and increased the reaction times of enemies.<br>
<br>
I also made the player have only one bullet to shoot. this makes the gameplay loop tighter and the game a lot harder.<br>
<br>
all of this felt right, considering that the game has to be fundamentally done in 5 days from tomorrow.<br>
there will be no art or polish, but the little red boxes should move and behave in ways that feel as "real" (maybe "solid" is a better word?) as possible.<br>
<br>
This is again one of these things that you can only get through iterations (or a lot of experience).<br>
Like, when enemies move at JUST the right speed to create a sense of urgency but still leave you time to react, then you probably worked on them for quite some time and reworked a lot of stuff very often.<br>
and things are very far from that right now, but i needed to lay the first stone today.<br>
<br>
i indulged in one phyisics thing today though. when you die, a huge block falls down and crushes everything beneath it.<br>
that just feels cool.<br>
<br>
overall i think the project is in good shape.<br>
<br>
on the production side i realised that it is probably impossible for me to make art that does not look like shit, so i asked a friend if he would help out when (IF) the game continues to develop in a promising direction (and he said yes! yay! ).<br>
<br>
i dont know how i feel about writing this dlog right now.<br>
it has turned into a completely unedited stream of conciousness, but i dont have enegery for anything else right now.<br>
<br>
maybe writing is also something that you get better at over time?<br>


-----------------------------------------------------
<h1>01.03.20 - Starting [Always Down]</h1>

The place where I work has sent me on (paid) vacation because of COVID19.<br>
There is nothing to do for [Secret Project] except waiting for emails.<br>
<br>
So I am going to try (once more) to release a commercial game on steam in a month.
<br>
I have tried that a few times and always gave up pretty soon.<br>
Always because of lack of direction. I did not actually know what I wanted to make.<br>
I only knew that it should be """good""".
<br>
Yesterday I took took a "wobbly arms hold a gun" prototype and tried to make it easier to control.<br>
I ended up with a platforming shooter that felt pretty neat.<br>
<br>
I spent way too much time on making some physics based enemies to shoot at.<br>
I had some fun adding weird and huge guns for the character to hold, utilising the modularity of the code I wrote.<br>
Stuff like that (coding physics, making weird stuff) is always fun.<br>
<br>
But its also not really that productive when so much of the game is undefined.<br>
Once more I did not really know what I wanted the game to be, but this time I realised that early enough and stopped having fun.<br>
<br>
So, what the fuck is this going to be?<br>
Based on the movement, aiming and camerasystem I had already coded, I felt that the game should take place on a single screen.<br>
With the way the wobbly arms and gun was set up is what kind of hard to aim and having a wide level where stuff happens offscreen would just add to accuracy problems.<br>
<br>
Ok, so its going to be singlescreen.<br>
But thats boring.<br>
<br>
After doing some things that I can not remember, I came up with something pretty cool.<br>
When all the enemies on screen are dead, the floor dissapears and you drop down into the next room full of enemies.<br>
<br>
This is basically a fully realised gameplay loop and i like it very much.<br>
Oh yeah, I forgot to say: I thought that the "7 day roguelike" on itch.io (which I initially made the game for) was for action rogulikes (downwell, etg, etc).<br>
So from the start of development, I thought that the game has to contain randomly generated levels.<br>
That is pretty hard to code, but if I only have to randomly generate single rooms its doable.<br>
<br>
So having the player fluidly dropping into singlescreen room after singlescreen room makes coding the game easy, but it also feels cool with the physics based corpses of dead enemies. They ofc also fall down and over time you have this huge graveyard of dead things kind of "following" you as you go downwards.
<br>
Another cool thing about the singlescreen rooms is that the enemies do not have to navigate a very complicated space:<br>
Again, easy to code.<br>
<br>
After I had that "destroy floor when all enemies are dead" meachanic in, I felt for the first time that this could be a very small commercial game. It basically steals shamelessly from downwell and super crate box in some aspects but thats fine.<br>
<br>
oh also i realised that the jam was mostly for traditional turnbased roguelikes, so i am no longer making the game in the frame of that jam. Still, I want to have the core game done in a week.
<br>
It still felt a bit barren and boring, so i added a mechanic i prototypes 100 years ago:<br>
you have limited ammo and when a bullet hits a wall/enemie it turns into ammo that you can pick up again.<br>
(i think i unconsciously stole this from high hell)<br>
this old mechanic fits together perfectly with the breaking floors mechanic for obvious reasons.<br>
<br>
I played around with some stuff and realised that time had passed much quicker than i thought. then i went to sleep.<br>
this is kind of turning into a diary? whatever :)<br>
<br>
I woke up today and hated the project immediatly.<br>
By using every ounce of selfcontrol i found withing myself i was able to force myself to sit down and do some little things on the game.<br>
i realised that there is no reason to hate it. it was just super undefined. I started to make a mental list of what the thing (bc at this point it was basically just a weird little blob of mechanics) lacked.<br>
<br>
I thought it lacked style (which is true). especially with Sludge Life announced i feel like i have been too comfy with my visual stuff.<br>
I made some shitty drawings, felt bad about my art skills and went to the last shift at work before my vacation.<br>
<br>
in the subway i wrote up the core loops of the game and planned some run/permanent upgrades and stuff like that.<br>
i recently experimented a lot with physics stuff, so i thought it would be cool to have achievemnts and game over screens and stuff like that represented as physical objects. then I had to get out of the subway.<br>
<br>
naturally, after a short time focusing on something else (in this case work), it clicked.<br>
I realised how I could utilise the things I had already made (and some things i had planned) to express something that I wanted to express for a long time.<br>
I tried to to that with a different project a while back (but that was abandoned for lack of direction ofc) and that project was called "always down", so this is now the working title of the current project.<br>
Having found what I want to say is extremely important, because it basically makes every decision about everything super easy.<br>
Instead of asking myself if a mechanic, dynamic or aesthtic would be "cool" or "good", i can now just ask: "does this help express what i want to say?"<br>
The only hard thing left to do is to do some tests for each of those decisions and then pick the option that has the most overlap between "expresses the thing i want to say" and "i can make this very quickly". (which is obviously still super hard, but not as hard as not knowing which way is up)<br>
<br>
maybe you forgot, but i want to have this thing released on steam in a month from now.<br>
<br>
I dont want to talk about what (or how) i want to express with this game.<br>
expressing things through mechanics and like... play is still pretty new to me.<br>
It feels very private because I am extremely insecure about it.<br>
Also if i explain it, i ruin a cool moment for you :)<br>
<br>
Having found the thing I wanna say with the game, I was able to cut a lot of things (upgrades, items, etc) that I had previously included to satisfy convention.<br>
<br>
As I am typing this, I know pretty much exactly what I have to do this week.<br>
The concept of the game is done and i just need to make it real.<br>
Lets hope I do not wake up tomorrow and hate it.<br>


[back](index)
