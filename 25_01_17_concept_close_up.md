## 17.01.2025 (but published on the 18th bc this took a lot longer than expected)

Okay, let’s talk about the concept I mentioned last week. It basically boils down to this:

> You create your own obstacles

I always struggled with system-design, but the idea of a self-generating gameplay loop is really compelling to me. It touches on something I’ve been wrestling with for a while:

We play video games because we want to. So why do we have all these scores and objectives and markers of progression? Why can’t we just enjoy playing?


The obstacles in the game are only as real to us as we desire them to be. Why not stop pretending and just allow ourselves to experience a kind of explicitly endless, explicitly pointless, explicitly self-inflicted period of interactivity?

This, slightly dramatic, line of thought is where all of this will hopefully end up, once the game is released. But I am getting ahead of myself. Where do these strange hopes for this simple concept come from?

I have done a bit of auto-archeology and looked through the Gifs I posted on twitter between 2017 and 2022. Then I looked through the games I released, trying to find traces of the ideas that would eventually merge into the game I’ve been working on this week. 

This is going to be quite a read. Like, I am surprised at this myself, but it seems that this little text has turned into a kind of long and dry chronology of stuff I did in the past. Let’s go.

Probably inspired by Nuclear Throne, Downwell and the general vibe of the times, I was making a lot of shooty-dodgy games in 2017. But I could never really get the enemies to be interestening. They would always just aim for the player and shoot some bullets. And so I would eventually half-abandon action for puzzle, where more of the logic was allowed to run inside of the players head, and I did not have to learn how to code state machines. 


On the 7th of October 2019, I released a game on itch.io. 
In it, you spawn physics objects at the position of the mouse by clicking. The physics objects always point at the center of the screen when spawning. They will also push themselves into the direction they are ponting in. The more physics objects you can balance against it each other in the middle of the screen, the more points you get.

On the 18th December 2019, I posted a gif to twitter.
It shows a spaceship, dodging bullets, fired at it from above. The Bullets seem to always spawn close to the current position of the spaceship and are easily dodged.

On the 15th December of 2019, I posted a gif to twitter.
It shows a topdown game where you shoot physics objects inside of a small room. If one of the physics objects touches you, the level restarts. You seem to have to shoot a specific number of physics objects to beat a level.

On the 30th april 2020, I posted another gif to twitter.
It shows a kind of puppet shows that delivers a narrative. A character complains about arrows showing up and hurting them. They say they will go visit the elephant, to find out more. Gameplay begins. You teleport a character to the position of the mouse by clicking. This causes an Arrow to spawn at the characters old position, forcing them to keep moving to avoid getting hit.

In spring of 2022, I worked on Kaballa for a while but never released it anywhere.
It was a platformer where, every second, a bullet would begin to spawn at your current position. You would be confined to a small group of floating islands, that you would need to constantly travel back and forth over, in order to avoid the projectiles, shooting at you.


After Kaballa petered out (for reasons that, if explained, would explode the length of this post into even more unreasonable territory), mouse controls came into sharp focus.


I have been really surprised by the amount of work I have done that is only playable with a mouse. Probably because it is confined to the PC and impossible to port, controls that focus on the unique properties of the mouse are rare, making it relatively easy to deploy novel-feeling control schemes.

Where a button gives you a simple yes/no to work with, where a joystick gives you one of 360 degrees and value between 0 and 1, the mouse provides you with a semi-analogue position on the screen. It is in one definite place, but moving the mouse intentionally to that exact coordinate (x624y822) requires an extremely high level of precision and intent. 

As a tool, we aim the cursors roughly at large buttons that eventually break down into concrete yes/no inputs again, but as a toy it can be used to add uncertainty into a deterministic system, by magnifying the tiny variations within the player’s input.

One could argue that the touchscreen allows access to that same imprecision, but the problem with the touchscreen is the touch. In order to give the precise x/y input that is central to the mouse, you would need to constantly have your finger on the screen, which, besides being very uncfomfortable, would also obscure the thing you’d be pointing at. 

The consistent stream of x/y coordinates is what makes the mouse so interestening as a input device. You have analogue control over the speed and direction with which you move something that is bound by the edges of the screen you play within. I really like it!


On the 10th Jun 2022, we released Geballer on Steam
Your little character is always lerping towards the position of the mouse. You are confined to a little room. Boxes spawn randomly into the room. If you touch them with your character, they spawn a shower of harmless projectiles, that, once they hit the walls of the room, become dangerous and aim at you in various patterns and configurations. You need to collect a certain amount of boxes to advance. Not collecting boxes causes you to slowly loose progress. The game is about deciding when to spawn the next wave of bullets.

On the 18th May 2023, I published 6792km on itch.io.
A little airplane is always lerping towards the position of the mouse. It leaves little trail of clouds behind as it travels. After a while, the clouds turn into bullets that aim for the airplane. I would spend a few days updating this little thing, trying to plug the holes in the design. 

People would always find ways to endlessly loop around the screen, moving without having to pay attention, optimising themselves out of fun and organic situations of danger. Actually, this was the exact problem that killed Kaballa as well, now that I write this out. Wasn’t so hard to explain after all.

In the summer of 2024, I did a lot of prototypes, explicitly building on 6792km, never arriving anywhere but covering a lot of ground.
 
For the last few weeks, I’ve been doodling around with the concept again, pursuing a physics based version for a while, before returning to the good old little character that lerps to the mouse. RollinBarrel had a great idea that gave it some spice and this week I finally solved the issue that made both Kaballa and 6792km peter out. 

But this is enough, for now.

I enjoy looking back at my work like this, trying to find connections and throughlines, but this is getting out of hand. I barley managed to squeeze the stuff about the mouse in there and haven’t even gotten to the whole hypnosis-type experiments I was running during all those years as well.

It’s simply too much stuff to cover in one post. I will pick up where I left next week.

[back](blogagain)
