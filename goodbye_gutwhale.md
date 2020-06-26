[back](thinking) 

Finally, almost 3 months after it released, I can stop thinking about Gutwhale.<br>
*This is the edited script of a talk I gave for the Game Dev Days 2020.*

content:
- the endles gamejam
- the call to action
- the important thing
- the power of deadlines
- the cost of deadlines
- the nice things
- conclusion

<h1>Goodbye Gutwhale</h1>

<h2>the endless gamejam</h2>

A few years ago I only did gamejams.<br> 
Gamejams are essentially deadlines, forcing you finish something. <br>
I also did a lot of short jams alone, where i would sit down and give myself 30 minutes to make a prototype.<br>
Many of the gifs I post on twitter are the results of these solo jams.<br> 
<br>
This helped me to learn to code and to design and to schedule, but over time I found that simply making stuff was not enough anymore.<br><br>
What I really love is doing something new. <br>
Something that has not existed before.<br>
Finding a new angle on an old problem brings me an intense, deep joy that is really hard to describe.<br>
<br>
There is a lot of unexplored space in games and what I am currently really interested in is **expression**:<br>
How do I tell a story through a game? <br><br>
How do I communicate how I feel through videogames? <br><br>
Its really hard and kind of stupid, considering that videogames are all about endless repetition in closed systems, but its what i want to explore right now.<br>
<br><br>
And I explored it at my own pace while working as a receptionist, making games like [Up in the sky](https://www.google.com) and [Every Wall](https://www.google.com).
<br>

<h2>the important thing</h2> 
There is a game developer called [miziziziz](https://twitter.com/miziziziz), one of the few who makes watchable youtube videos, 
who made a commercial game called [Theyes Thou](https://store.steampowered.com/app/1232330/Theyest_Thou) in one month.<br>
<br>
When I lost my job as a receptionist because of the coronavirus, I decided to steal that idea.<br>
Since I am not overly interested in traditional FUN game design, I needed to make something that felt new to me. <br>
I needed to make a game that actually said something about the world we move through everyday. Just making an entertainment box would have been too boring and unfocused. <br>
<br>
But since I was unemployed I felt like I needed to make something that at least had a shot at commercial viability. One month is not a lot of time, but I needed to come up with something that people would also want to pay for.
<br>
The roguelike we ended up making contains a short section at the end where I try to actually say something, where I try to express myself. This part of the game was important to me, the rest was just decorations. <br>
I wanted people to buy the game because it looked like a nice little roguelike, and then, in the end, I wanted them to engage with this secret part of the game that was actually important to me. <br>
<br>
And I had one month to make that real.<br>

<h2>the power of deadlines</h2>
Gutwhale is a product of its deadline.<br> 
All of it was made in the easiest way possible. The code is a mess of course, but I want to talk more about the decisions, forced upon us by the deadline, that permeate the whole project:<br>

- Gutwhale is only called Gutwhale because the project needed an artist.
[Franek](https://twitter.com/franek) is very good at making pixelart and he, for whatever reason, also loves to draw whales. So when he was on the fence about joining the project, I quickly changed the setting to take place inside of a whale. This does not make a lot of sense, but Franek got to draw a whale and the game had an artist.
<br>

- Gutwhale used to take place on a single screen, because then I would not have to write a camera system. When it turned out that a single screen was pretty boring, we just glued multiple single screens together and make the floor break once all enemies were defeated. The core loop of Gutwhale was born out of not wanting to code a camera system.
<br>

- The small size of the Levels themselves helped me in a lot of ways. The level generation code does not need to consider unreachable platforms and could be hacked together violently. Because there is so little space to move around in, enemies become more dangerous and I needed to code less of them to fill the game.
<br>
<br>
The deadline forced me to think quickly and to design dirtily, accidentally disovering some pretty neat things.<br>
It certainly has also hurt the game in a lot of ways.
<br>

<h2>the cost of deadlines</h2>

Gutwhale is unbalanced in both directions. <br>

For people with little to no platformer roguelike experience, it is extremely hard.minutes and then give up, never to touch the game again.<br>
<br>
For people who played downwell and gonner, it is a piece of cake and they can 100% the game in around 20 minutes. There is an endless nightmare mode, but it did not have an engaging highscore system, so the best players of Gutwhale quickly got bored.<br>
<br>
The save system of Gutwhale had horrible bugs and there were technical problems all over the place, prohibitung us from implementing Achievements and updating the game easily.<br>
<br>
And these problems are just that: <br>
Problems. <br>
<br>
They exist because we rushed through development at an insane speed and I can forgive myself for making them, because i was actually focusing on this one secret thing at the end.
<br>
**BUT**
<br>
The part of the game that is most important to me, the ending, is also not working as intended. I was unable to clearly communicate what I wanted to communicate. 
<br>
There was not enough time to conduct long term playtests and interview players about how they perceived the ending.<br>
There was not enough time for me to really reflect and ponder and tweak and adjust the ending of Gutwhale.<br>
I started the project as a compromise between compelling gameplay and a secret, expressive part, which enabled me to keep working on the game.<br>
And that part did not work. It did not resonate. <br>
At least it feels like that to me now.<br>
<br>

<h2>the nice things</h2>

Gutwhale was a success overall: <br> 
- It made me more money than I would have earned at my previous job, but not nearly enough to not have to go back to that job in 7 days.<br>
- It may make substantially more money on consoles or in bundles in the future.
- It gave me a better understanding of how to sell stuff on steam.
- and last but defenitly not least, I got to work with Franek, Britt Brady and Clovelt who have thaught me a lot and are amazing people.
<br>

<h2>conclusion</h2>

Finishing games is hard. <br>
Really hard. <br>
As a way to deal with this, a series of game jams has been created, where speed is key and the end product is only as important as the fact that it got finished.<br>
We have seen amazing games made in insanely short times and countless people have been able to dabble in game dev because of the contained nature of game jams.<br>
<br>
**BUT**
<br>
Applying this need for speed to bigger projects creates dynamics that should not be confused with efficiency and skill.<br>
<br>
The core part of Gutwhale, the one thing I was truly interested in, withered and died because of the deadline, because we were so wrapped up in getting the game done. <br>
There was simply not enough time to stop and smell the flowers.<br>
The deadline mercilessly  and in cold blood, pulled us away from being able to express ourselves.<br>
<br>
Gutwhale is nice and I am proud of it, but i think it is time for me to force myself to move on to a different way of development.<br>
<br>
When i did not know what I wanted express through the games I make, when i just wanted to MAKE, I needed frameworks to support me, to force me to do the work and to put in the hours, but after years of doing that, those structures have started to feel inhibiting in the best way possible. <br>
They are still able to teach me and to challenge me, but in the end, they are also keeping me from moving towards, to where I want to go, to do what I want to create.<br>
Deadlines keep me from really reflecting and looking at myself. They keep me from thinking about what i want to express through my work and they keep me from then actually saying that.<br>

[back](thinking) 
