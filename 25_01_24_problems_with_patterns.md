## 24.01.25

I really enjoy coming up with interactions. I build games around these interactions so that I can pay rent. Left to my own devices (as I have been since the success of Mosa Lina), I will just keep doodling around forever.

There is something hypnotic about staring at your screen, playing around with a movement mechanic while developing it. Looking for edge cases, getting a feel for the movement speed, fine-tuning visual feedback: all of this involves playing the game without really playing it, looking and feeling more than trying to progress.

Sometimes I skip the game part completely and just build input visualisation software that spits out endless variations of a pattern. Some sort of puppet-theatre-proc-gen. I then look at it for a few minutes, zoning out, watching the colors and shapes fly by.

But players want objectives. When presenting people with my hypnotic visualisation things, they rarely saw any reason for interacting with them as there never was any reward (except more of the same).

This need for rewards has been irking me for a long time now. I tried to work against it with Mosa Lina, which has worked out kind of okay, but that game still relies very much on levels you can win or fail. It’s too engaging to allow you to let go of your desire to win and directly embrace the raw interactivity of the blinking-lights-in-your-face-software.

There’s a kind of fugue state that you can enter when you play a game just for the sake of interacting with it. When you don’t care wether you fail or succeed, when you just let your fingers do the work of triggering reactions to your actions, you can zone out in a very specific way, where you just kind of silently sit with your subconscious (or whatever it’s called now) while your thoughts roam free.

The concept that i’ve been writing about these last few weeks (“you create your own obstacles”) really lends itself to trying to tackle this idea of making a game that you engage with just for the sake of engaging with it.

If you make your own obstacles by moving, you get a direct representation of the core conceit of videogames: voluntarily engaging with pre-mediated challenges. Without your desire to play, without you loading up your computer, selecting the .exe, clicking on “start” and then moving the character, there are no obstacles, and there is no play.

The core problem with the concept is that if you create your own obstcales by moving, you can figure out how a way to move that makes the obstacles trivial to dodge.

Without an immediate need for immediate action, the brain goes looking for larger goals, for the cursed progression and rewards. People get bored once they figure out how to trivialise the obstacles.

For the “make your own bullet hell” prototype i’ve been working on this last month, this trivialisation meant that you would just slowly travel in a big circle, creating a consistent wave of bullets that moved out of the way before you completed a single loop.

Last week I proudly proclaimed that I had finally solved the issue. I had not. Now however…

… let me present the current rules that seem to prevent all currently known exploits, forcing you to consistently pay a little bit of attention without caring too much about winning.

> if you move too slowly, you will start to spawn bombs, the explosions of with cover the whole screen in bullets, forcing you to move faster eventually

> If you move too quickly, the bullets you spawn will move very slowly, staying on the screen as obstacles for a long time, forcing you to eventually slow down


Crucially, what constitutes “too slowly” and “too quickly” is slowly changing according to a chaotic and hard to predict pattern. The middle ground of movement speed, where you are triggering neither bombs nor slow bullets, is always slightly shifting.

But there were two more exploits I had to track and counter.

> If you move in fast, tight circles, progressively traveling across the screen, you are moving too quickly to spawn bombs, while also covering so little space that even the slow bullets don’t have enough time to cover the screen. I solved this by tracking wether the player changes movement angle rapidly and then, if they are, spawning bombs.

This is just a slightly more complicated version of spawning bombs when the players moves too slowly. Just as the next exploit is just a version of traveling too quickly:

> If you “scratch” the screen, if you rapidly jerk the mouse back and forth over a large area, you are able to spawn slow bullets in such concentrated masses that they dont take up enough space on the screen, allowing you to constantly dodge them. I solved this by tracking how much space the player covers while spawning bullets and then, if they cover a lot of space (which only happens while scratching), turning the slow bullets into extremely slow bullets. They stay on screen for ages, filling it up quickly, making it impossible once more to repeat a single interaction mindlessly forever.

Like i said, i don’t think that this covers all the potential exploits, but it covers all the currently known ones sufficiently enough that finding the boring equilibrium would take an unreasonable amount of dedication.

It’s been an interestening process, iterating over the same basic idea for two weeks, slowly, really slowly, getting closer to something that really works. I definitely got too close to the subject matter a lot, getting lost in approaches and dropping them in rapid succession. It’s very satisfying to actually see something concrete emerge from all of this, slightly unhinged, experimentation.

Feedback from playtests has been more positive than ever for a few days (even my teenaged cousin likes it) and I am confident that I’ll be able to write the text that will scroll in the background, behind the bullet hell, in time to finish the game before Jan 31st, when the submissions for AMAZE close.

Descriptions of my work have taken over this blog. I quite like that, but there’s other stuff I’d also like to talk. Things outside of immediate development, but still related to making games. Maybe next month.

I’ve also been making concrete plans for my future again, which is pretty nice considering that I feel like i’d been just floating along for a year or so. I am really quite lucky to be able to do all of this work. Really.

[back](blogagain)



