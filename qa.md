[back](thinking)

*@h_a_l_e_x asked:*
### What are your ways of working specifically on Game Feel (Steve Swink) and Juiciness please!

I add it like a sprinkle of salt here and there. When I started to make games I was really obsessed with these concepts and saw them as integral to my process. I used to add screenshake before I even had a gameplay loop. This intense focus lead to me becoming quite intuitive with juice, but over time I lost interest in it. My focus shifted to more abstract game design stuff. I guess I still always try to get the "Game Feel" to a place where whatever I am making is enjoyable to touch and play with, but beyond that I haven't really been thinking about these concepts a whole lot.

Actually, thinking about it, I had to actively stop myself from focusing so much on juice. It was like a compulsion, a kind of automatism, but it slowed down my work. Once a protoype is all juiced up, it automatically **feels** cool, no matter wether it actually is. It's the whole "investing too much into an early prototype" thing again, where your attachement to your very first attempt is so large that you get lost in the sauce.

ACTUALLY, this happened to me a lot! In the years before shipping qomp, I was in this kind of desperate manic state. Always prototyping, always experimenting, only sometimes finishing. I would have an Idea, quickly bang out a rough approximation of gameplay and then (here comes the mistake) add some juice to it. Then, once the joy of having a cool looking thing on the screen faded, I would be left out of the flow, directionless, vaguely dreading the next steps. So why not add some more juice? Wouldn't it be fun to code a really smooooth camera system? Nobody wants to face the uncertainty of the games larger direction and pacing!



*someone who's @ I didn't copy properly and whose reply I can't find rn asked:*
### From what I can gather, you seem like you don't like to dwell on past projects too much (or you get consumed by ideas for new projects). Do you think that moving on to the next game would be better for you personally? Do you want to work on ML for the forseeable future?"

Yes, I am very much always moving on from whatever I just did.
I don't consider Mosa Lina to be finished yet, but I really needed the current break from it. Still, I won't be able to move on to the next project until I consider Mosa Lina to be done. So yes, I will work on it a bit more. But not for too long ;)
<br><br><br>


*Geist Traft (@traft25372) asks:*
## How did you make the slope collisions for Mosa Lina? Because from what I’ve heard good slope collisions in platformers is like finding how to turn lead into gold.

Basically, there's an invisible sensor at the bottom of the player object that checks if you're overlapping ground or not. This sensor is VERY wide. Like, almost as wide as the character, allowing you to kind of jump-climb even super steep slopes.

It's also just pretty heavily tweaked physics!
When you're not giving any input while standing on the ground, the game will radically slow down the character, resulting in this kind of slow sliding. There's probably a whole lot of small clamps and lerps and little tweaks that I can't remember right now. Making non-90-degree-ground enjoyable to traverse was one of the very first things that I tackled with this version of Mosa Lina. It took like six or seven iterations to get it to where it's at now.
<br><br><br>

*Vlp (@SomeVolp) asks:*
## Is it hard to self-publish?

In some ways, it's is a lot easier because I really dislike negotiations and paperwork. 
Companies also move  slowly. I don't want to spend 6 months writing emails to *maybe* get funding. By self-publishing I can spend that time on making the games instead.

Self publishing on steam really makes it pretty easy to reach a large amount of people. Doing it is not very difficult (if a bit confusing). Making sustainable money off of it is a different beast entierly.

Even though most of my games made back the money that was spent on them (and even though I was living very cheaply) the profit would not have been enough to finance my life. I was living off of the money from a low-stake loan and the freak accident of selling an IP. 

It's only with Mosa Lina that a self-published game actually produced enough money to live off of directly. 
<br><br><br>

*@0ozymandias1 asks:*
## Whats your usual method for coming up with game ideas? Are they epiphanies? Inspiration from existing works?  Just dabbling and seeing what sticks?

It all comes from being interested in things. The more things you're interested in, the wider the variety of ideas that you'll have. The more intensely you focus on a single thing, the more specific ideas you'll have. But if you are not paying attention to the world around you, if you aren't curious about the stuff you experience, then ideas will be slow to come and you'll imbue every single one with way too much importance, potentially dragging you down for years to come.

Here is a list of the places where some of my ideas came from:

- playing around with Box2D
- constructing a morphological matrix of potential interactions
- writing an essay about game design
- taking a classic game and adding a twist
- reading basic game design theory
- playing a boardgame with friends
- hiking in the forest
- interest in merging humans and computers

Interestingly enough, most of my ideas seem to come from engagement with games & game design!
<br><br><br>

*@YemmyTheFerret asks:*
## What is your go to meal while working on games. Or meals? Or food in general? I'm hungry
I'm trying to figure that out right now. My go to meal changed a lot over the last years. It used to be midnight pizza, then it became sage-sauce-spaghetti and now it is... I don't know. I made some onion & pees soup today. Before that I ate sausages with mashed potatoes two days in a row because I didn't know that you shouldn't freeze mashed potatoes. I'm working on it.
<br><br>

*@TinyBox11 asks:*
## How do you decide whether a feature or anything at all belongs in the game or not? Let’s say you want to add an enemy that attacks in a specific pattern, how do you decide if it compliments the game or is just redundant/ worse?

This is a question of vision. You can only make decisions like that when you have a pretty accurate idea of what the game should be.

Is the game about memorising attack patterns or is it about finding weak spots? If you can't answer this question, then you can't know if your enemie compliments the game or not.

The idea of a vision (or northstar or pillar etc) is that it is larger than any single problem. It is not concerned with details, but with the larger impact. It's about what the finished game wants to achieve. 

List of things that you could want to achieve with the finished games:
- Goty
- earn a living
- test a new engine feature
- impress your friends
- learn to code
- have a nice afternoon

It doesn't really matter what your vision is. As long as you commit to it, you can use it to help with decisions like the ones you described.
Just ask yourself:

Does doing THING make the game more aligned with VISION?
- If yes, do it.
- If no, don't do it.
- If maybe, try and evaluate.
<br><br><br>

*@tsallast_ asks:*
## Do you feel like there's any aspects of interactivity that have gone largely unexplored by games?

Yes! 

 Three things are especially interesting to me here:
- removing external motivators from games to destroy the desire to win and be smart and correct and cool.
- dynamically changing the game in reaction to how people play the game (not necessarily unexplored, but underexplored in my opinion)
- communication with NPCs on an level of verb-equality
<br><br><br>

*@ms_frogrammer asks:*
## what are your thoughts on having a message in your game? should there be one or is the game on its own enough of a message?

Every game has a message. Most of the times the message is something like: "Hey! Look at this!! Isn't this super fucking cool?!?"

You can make games for any reason whatsoever. Most people make games because they love games. You can love more than one thing though.

Actually, I would highly recommend it.
<br><br><br>

*@DicedBasilisk asks:*
## Any tips and tricks of rapid prototyping, or however you like to go about testing game ideas out so quickly?

Three things come to mind immediatly:

### Get comfortable with failing
If your prototype isn't doing what you hoped it would, throw it away. Don't be too precious about specific ideas or approaches. Holding on to a failed prototype and investing more and more time into it in order to salvage the previous effort is just going to leave you with a thing that you won't recognise. Instead of trying to realise a specific vision, it will only be a reaction to the problems you encountered. Such a thing can not serve as a building block for future work, it just muddies the water with weak direction.

### Work within your technical comfort zone
You don't want to constantly have to look up how to code that specific thing again. If you can't realise your idea quickly and without substantial googling, then the idea is too complicated for you right now. Simplify it, dumb it down, abstract it and try again. 

### Work on a large conceptual scale
The prototype you are making right now is just a small stepping stone towards a larger goal. You are not trying to find the perfect implementation of that cool idea you had, you are just exploring the possibility space around that idea. If you try to approach the same concept from 3 angles I guarantee you that you will find surprising commonalities and contrasts, the kind of raw fundamentals that you can use to make something that's genuinly your own.
<br><br><br>

Thanks for all the questions <3

josh

[back](thinking)
