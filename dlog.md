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
