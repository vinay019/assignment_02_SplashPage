# assignment_02_SplashPage

Assignment 02: Created a Splash Page similar to the provided wireframe

used an audio tag to play an mp3 file
using the address tag, the address came as italic, so to match everything else to the same style i just added font style italic to the body for consistency. I've googled and found out that the address tag does that so to the content inside it.

CodePen link: https://codepen.io/vinyan/pen/WbvaRQN

Reflection:

Q. What requirements did you achieve?

A. I believe I’ve managed to create a splash page similar to the wireframe provided in terms of the layout and structure. I did change the content as I thought Frankie did mention that we had the creative license to do so. So I decided to make something fun. I added an audio tag to autoplay when the user enters the correct answer in the JS prompt. Also I unhid a GIF image when the correct answer is provided.

Q. Were there any requirements or goals that you were unable to achieve?

A. In terms of the requirements, as with the brand colours I decided to just apply it to the fonts and did not try the suggested CSS Borders. A couple of reasons for this is, since the colours were RGB, I thought they were too bright and looked a bit gaudy when there’s too much of it. Secondly, if I had tried I might have taken more time to complete this assignment. I’ve also realised that with regards to the stretch goals, I did something else than what was suggested, such as the opening soon, book in advance and also the prompt to personally greet the user.

Q. If so, what was it that you found difficult about these tasks?

A. I struggled a bit to get the basic layout to match the wireframe provided. I think I can do better especially with the layout. I have noticed that the page scales differently on my MacBook screen vs my big monitor. I only used padding and did not set/play around with the margins or the borders. On hindsight, that would have been a better approach to layout it better. I struggled a bit to get the address spaced like in the wireframe. Initially on using the UL tags, the list contents were displayed with bullet points. After a bit of research I found that I could just use a break tag to achieve what I wanted and did not need to use a list. Using a P tag would mean I have too much space between the lines. Something I only wanted for the phone number and the email, so I could match the wireframe layout. I also struggled to get the audio file to autoplay. For some reason it doesn’t autoplay on my safari browser but does on Chrome. I also noted that on Codepen it does autoplay. I had an idea earlier in the evening about getting a wrong user input for the JS prompt and then played around a bit to get the desired effect. I found the code we wrote at the taster session, where we changed the background colour when the user inputs the incorrect prompt response. I used that and modified it a bit. I struggled trying to hide the middle container class but found a workaround by making the font colours to red to hide the address and the contact information. I did find out later that the reason why the GetElementID did not work was the middle-container was a class and not defined as an ID. I implemented the hover tag, something Tim introduced in the taster session. I tried getting it implemented in the left and right containers but that didn't work. I also tried to get a background image to fill the page when you hover over any of the text but I couldn't figure it out yet.

Optional:

Q. Requesting feedback about a specific part of your submission.

A. I’m yet to clean up the code and remove all the comments, I will do so after I submit this. But can you please review the code and let me know what I can do better, what improvements to make, errors etc, please? One thing I can think of is the layout could potentially be done better if I had done it the way you had suggested, creating borders around each of the content and then being more meticulous with the positioning. At the moment, what I did works but I do realise there is a lot of improvement to be done.

Q. What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

A. I did watch a couple of YouTube videos to figure out how to add the audio tag, and also reviewed W3Schools, MDN, google search led me to some reddit posts as well. I did also check with ChatGPT re how to autoplay and hide the embedded mp3 file without showing the controller on the page. It did give me some suggestions which I did not understand and was beyond my current knowledge so did not use it.

Q. What errors or bugs did you encounter while completing your assignment? How did you solve them?

A. The error I mentioned previously re the middle-container not being hidden in JS code, that one I found out when I pasted my code in codepen. It showed me that that returned a null and as a result the code after that was also not being run. When I removed that, it also fixed the audio element which I wanted to hide when the user enters the wrong answer in the prompt. One more thing I've just realised. When I used the address tag, all the content under that were displayed as italics, I googled and found out that, that was because browsers do that to content inside the address tag. To keep the whole content in the page in the same style, I applied the font style to Italics in the body for consistency.

Q. What went really well and what could have gone better?

A. Overall, I think I did okay but there’s way too much to learn and explore. I think I should take another jab at structuring the layout because what works now may not work when things get complex. Also I will need to figure out how to layout so the webpage does not look awkward when viewed on a larger screen vs a smaller screen. But this is exciting and has got my creative juices flowing. Definitely a small step, but a step in the right direction.
