Hype Machine V2

This project I created as a last ditch effort to hand in something for the milestone 2 project.

Unfortunately the modules on javascript and jQuery was too much for me to comprehend in the time we had to study. I ended up falling very far begind and had
to skim a lot of the content to make up the time. My goal from here is to hand in this project as is and take some time doing the modules again and 
looking for other learning resources so I can get the understanding I need to complete my fullstack education.

I originally decided to create a memory concentration game with an international rugby theme. I created a game board in html and css which I understand 
pretty well but when it came to adding functionality I just did not have the time or the understanding to make it happen. I will include the files for 
the concentration game in a folder in this project. 

For the memory game my ambitions were to create a custom rule set that would simulate a rugby game. The game board I created had 20 cards where the aim 
was to match national flags to the national rugby team logo. The nations represented are the current top 10 following the rugby world cup 2019.
The rules I wanted to implement are as follows:

* Count down timer - set to 40 seconds to simulate the 40 minute halves of a rugby game.
* Half Time - after the first 40 seconds the game will turn over all cards and reshuffle them.
* Full Time - Game ends and scrore is calculated to determine if the player wins or not.
* Scoring - I wanted each match to score 5 points to simulate a rugby try. 
* Conversion - After making a match I wanted the game to allow the player one chance to make another match for a further 2 points to simulate the kick for goal.
  The game will return to normal after the conversion would be completed or failed.
* Opposition - I wanted to implement a rule where if you made 3 mis matches in a row the game will add a score onto another counter representing an oposing team
  scoring against the player.
* Reset board - If the player clears all the cards on the board before time runs out the board will reset and reshuffle so the player can keep scoring for the full game time.
* Game Over - Win state will be calculated after 2 rounds of 40 seconds. If the player score is higher than the opposition score the player wins. 

Along with the custom rule set I wanted to implement I wanted to add in sound effects that were somewhat dynamic based on player actions. I had recorded some tv commentary
and split them into positive and negative reactions and also found sound effects for back ground music and card turning. The sounds I collected was to simulate watching
a game of rugby on tv.

* Background music - generic stadium crowd sounds
* Match Success - game will play a randomly selected positive commentator sound clips.
* Match Fail - game will play randomly selected negative commentator sound clips from an array.
* Game Start - plays a game start rugby whistle 
* Game Over - plays a match over whistle blast and commentator sound clips

As I said before my ambitions were greater than my abilities. I was not able to start writing functions for what I wanted to acheive because I just didnt know what to do.
After I created the game board I spent the days that I had left on the project trying to find what I needed back in the modules and from other sources but again 
I was skimming the content and could not find the undestanding that I needed to pull off this task.

During the weekend before submission I abandoned the project. Resigned to the fact that I will not be able to hand in anything with even a single javascript function in it.


And that is where the idea for Hype Machine came to me. I work as a DJ on Sunday nights and during my sets I always wanted to bring in an air horn and blast it to hype up the
crowds but I do not know where I can buy them in my local area. So I thought I could make one in software and bring it with me to use during the gig. At time of writing 
the gig was last night and I am knocking this README out just before submitting.

Before I gave up on my rugby card game project the last thing I was looking at was the .mousedown event in the Jquery documentation. I thought if I could just make an app
that could use that function to play a sound and combined with a .mouseup to stop and reset the sound I could have an air horn that I could play like and instrument 
in software form on my phone and use it for my gig that evening and it will take at least one line of jQuery to create!

So what I coded is now what you are looking at as my project submission. It has HTML, CSS and JQuery. It is based on combining two different jQuery events .mousedown and .mouseup
on .mousedown the function will fire and audio element. On .mouseup the element will stop and reset to 0.

The effect is that if you hold the button down the full air horn sound will play out until it stops. If you release the button the sound stops immediately. When the button is 
pressed again the sound will play from the start. This allows for rythmic pulsing of the soundbite and can be played in time to music or in stacatto blasts to grab the attention
of an audience. I call it the Hype Machine v2 because I became aware of a similar hardware product also called Hype Machine just before I left my computer to go to work.

I was very excited to use the product I just created. But it turns out that it does not respond the way I want it to on mobile devices. It is so slow as to be almost completely
broken. I think that would be because I would need to add in some functiionality to make the mobile browser wait for the sound to load first before firing the play function.
Well I hope to be able understand enough about javascript and jquery soon so I can fix it.