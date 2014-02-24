/** @jsx React.DOM */

var articles = {
	'week1': {
		title: "Week 1 - An Introduction to Production & a Bit About Me",
		name: 'week1',
		html: (
			React.DOM.div(null, 
				React.DOM.time( {className:"date"}, "Wednesday, January 21"),
				React.DOM.p(null, 
					"Over the next seven week's, I'll be diving head first into a craft often overlooked by some, music production. I feel as though typical listeners attribute musical success to strictly compositional qualities, like a good hook, or catchy lyrics. But the success of a good recording hinges on the skills of it's producer. While I can manage to contrast some differences between two arbitrary recordings, I'd be crazy to claim any real understanding of what goes on behind the scenes - in the studio. Over the next 7 weeks, I'll be taking a deep dive into production techniques, as I apply them in my own works."
				),

				React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"Influences"),
					React.DOM.p(null, 
						"Back in High School, I was a metal head. No getting around it. I played in a few bands that tried to emulate the all to common metalcore sound, which was good fun but didn't pan out over time. In college, I continued to create music, but never towards a greater purpose then personal enjoyment. What I've amassed is dozens of hours of short, amateur iPhone recordings of motives and ideas that I would soon forget about. They became more of an exercise in creativity and musical technique. I believe that cataloging your creations is invaluable, and found recently that some musicians, such as ",React.DOM.a( {target:"_blank", href:"http://www.nerdist.com/2013/08/nerdist-podcast-rogue-wave/"}, "Zach Rogue"),", agree and do the same."
					),

					React.DOM.p(null, 
						"I started playing guitar when I was in the 7th grade, after being inspired by the music game ", React.DOM.span( {className:"italic"}, "Guitar Hero"),". When I was 17, I bought a decent bass so I could complete the lineup in a folk rock band that I'd formed with a few friends. This lead to my first recording experience, at a audio production school in Boston. I would later buy my first Acoustic guitar, which profoundly warped my play style and listening preferences. I never enjoyed playing the over popularized and de facto style of Acoustic common in any ",
							React.DOM.a( {target:"_blank", href:"http://youtu.be/nhivdSMdMxc?t=24s", title:"4 chords, 35 songs"}, "four chord song."),
							" I got into math rock, listening to bands like ",
							React.DOM.a( {target:"_blank", href:"http://topshelfrecords.bandcamp.com/album/songs-ideas-we-forgot"}, "Toe"),',', React.DOM.a( {target:"_blank", href:"http://americanfootball.bandcamp.com/album/american-football"}, "American Football"),', and ',React.DOM.a( {target:"_blank", href:"http://thistownneedsguns.bandcamp.com/"}, "This Town Needs Guns"),"."
					),

				React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"The EP"),
					React.DOM.p(null, 
						"I've thought a lot about how I want to structure and write my EP. Logistically, I've taken an iteration driven approach to both composing and producing. I plan to first produce a rough demo of each track (the first iteration) that solidifies the structure of the track, but not necessarily the arrangement. The second iteration will be a raw studio recording, and the third will be the mastered tracks. So far, I've written an intro piece, and recorded it via direct input from my electric acoustic guitar."
					),
					React.DOM.figure( {name:"intro", className:"embed left-border unloaded", 'data-iframe':"<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130688461&color=dba785&auto_play=false&show_artwork=true\"></iframe>"}
					),
					React.DOM.figcaption( {className:"left-border"}, "My introduction track was meant to slowly bring the listener up to the mood of the album"),

					React.DOM.p(null, 
					"A friend of mine, who is quite good at spoken word, has agreed to guest vocal on this track. I want to open the EP with a spoken word style monologue that conveys some of the themes and ideas present in the later tracks. The end of the song transitions perfectly into the second track, which I've drafted up an incomplete demo of as well. "
					),
					React.DOM.figure( {name:"song1", className:"embed left-border unloaded", 'data-iframe':"<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130688727&color=dba785&auto_play=false&show_artwork=true\"></iframe>"}
					),
					React.DOM.figcaption( {className:"left-border"}, "This rough demo was hastily thrown together for the purpose of sharing with potential vocalists."), 

					React.DOM.p(null, 
						"This showcases the first half of what I've written so far. I wanted to create something that could easily be sang over. This is my first time including banjo in a composition. I'm still not sure how to work it in to my style, as the banjo is heavily pigeonholed into a few select genres, bluegrass in particular. Because of this, I didn't have much reference material in the scope of they style that I've been playing."
					),

					React.DOM.p(null, 

						"Writing and producing an EP in 7 weeks certainly isn't easy, but it's been done by many before. One band, ",
						React.DOM.span( {className:"emphasis"}, "Explosions in The Sky"),
						", produced and composed a full length album in ",
						React.DOM.a( {target:"_blank", href:"http://www.explosionsinthesky.com/discography/6"}, "two weeks"),
						", using no existing material. With the gained reassurance from their feat, I drew up a ",
						React.DOM.a( {target:"_blank", href:"https://docs.google.com/spreadsheet/ccc?key=0AsqPkKbbLFV_dHJiY2RWdERaQXRkeGhQS2xGMWlidkEundefinedg"}, "time line"),
						" for the next 7 weeks. I'm adopting a waterfall like schedule which I feel is fairly straight forward.",
						React.DOM.div( {className:"inline aside"}, 
							" Compose",React.DOM.i( {className:"long arrow right icon"}), " Demo",React.DOM.i( {className:"long arrow right icon"}), " Record",React.DOM.i( {className:"long arrow right icon"}), " Mix "
						)
					),

					React.DOM.p(null, 
						"I plan to use my intro track as a guinea pig in the recording studio. It's relatively simple, with just one guitar line and no overlay, making it a perfect baseline. After that, I plan to compose a new song each week, following up with the waterfall cycle for each afterwards. You'll see in the graph that this creates a cascading effect, with the heaviest workload coalescing in the middle weeks of the term. If anything becomes a major time sink, it will trickle over to the next week, which will already have less of a base workload, allowing for the extra runoff."
					),

				React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"Reference Tracks"),
					React.DOM.p(null,  
						"For my EP, I've been tasked to identify some reference recordings whose sound I'd most like to emulate. After reading several production articles online, I realized that this is in fact a common practice, which helps define and mature the sound that you're trying to create. I wanted a warm acoustic sound, perhaps a little more bass driven. I looked towards ",React.DOM.span( {className:"emphasis"}, "This Town Needs Guns")," for my guitar sounds."
					),
					React.DOM.figure( {name:"ttng", className:"embed unloaded", 'data-iframe':"<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=627033204/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=7/transparent=true/' seamless><a href='http://thistownneedsguns.bandcamp.com/album/this-town-needs-guns'>This Town Needs Guns by TTNG</a></iframe>"}
					),React.DOM.figcaption( {className:"hugging"}, "I've been trying to tackle the guitar solo on this track for quite some time."),
					React.DOM.p(null, 
						"What I like about this track is that the acoustic has both a refined, but lightweight sound to it. It obviously wasn't terribly over engineered with reverb effects. I tend to prefer more honest recordings that sounds good, but don't try to reinvent the wheel. ",
						React.DOM.span( {className:"emphasis"}, "Toe")," also does a great job of this on some of there more tranquil acoustic songs."
					),
					React.DOM.figure( {name:"toe", className:"embed unloaded", 'data-iframe':"<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=2576577776/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=6/transparent=true/' seamless><a href='http://topshelfrecords.bandcamp.com/album/for-long-tomorrow'>For Long Tomorrow by toe</a></iframe>"}
					),
					React.DOM.p(null, 
						"The banjo sound I'm looking for needs to mesh with the acoustic guitar very well. So any major frequency changes to the guitar's sound will have to be similarly matched with the banjo. At this point, I'll point out that I have almost no clue what I'm talking about to this regard, so a more detail writeup is due in the coming weeks."
					),
					React.DOM.figure( {name:"hundred acre woods", className:"embed unloaded", 'data-iframe':"<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=3960580905/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=1/transparent=true/' seamless><a href='http://thehundredacrewoods.bandcamp.com/album/4-way-v-day-split'>4-Way V-Day split by The Hundred Acre Woods</a></iframe>"}	
					),React.DOM.figcaption( {className:"hugging"}, "The banjo and guitar sound really great together in the outro of this song."),
					React.DOM.p(null, 
						React.DOM.span( {className:"emphasis"}, "Hundred Acre Woods")," was the band that first inspired me to pick up the banjo. They're a more modern band that incorporates banjo playing. You'll see a lot of indie folk bands that are doing this now. I'm excited to see the instrument again pick up a bit of main stream attention outside of the Deliverance context."
					),

			
				React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"Foray into Production."),
					React.DOM.p(null, 
						"I've read through a collection of various blogs and articles regarding monitor placement. It turns out that the acoustics and frequency response of a monitoring/mastering room are more important then the mastering equipment its self. Bob Hodas presented an ",React.DOM.a( {target:"_blank", href:"http://www.bobhodas.com/speaker-placements-acoustic-effects.php"}, "excellent article")," detailing his gripes with most mastering studios that he has worked in. It got me thinking about our own makeshift studio in Riley. It was by no means constructed with good acoustics in mind. The low ceilings might cause some frequency disturbances. Fortunately, the 5:1 setup seems to be in perfect order, with each monitor raised an appropriate distance from the floor, creating a nice floated effect."
					)
			)
		)
	},

	'week2' : {
		title: "Week 2 - More About Audio",
		name: 'week2',
		html: (
			React.DOM.div(null, 
				SubHeader( {text:"A Look at Digital Audio"}),
				React.DOM.p(null, 
					"The human ear is said to detect frequencies between 20Hz and 20kHz. CDs use a technique called Pulse Code Manipulation to convert audio waves into digital information. They are sampled at a frequency rate of 44.1kHz/second. This translates to 44,100 samples of a wave's amplitude every second. These samples are typically stored as 2 or 3 byte numbers (recall that each byte is 8 bits). This means that for two channel stereo audio, a single second of audio would take up 172 kilobytes (528 with 24-bit samples)."
				),

				React.DOM.p(null, 
					"The amount of raw data stored to CDs allows for a near perfect recreation of the original material. Uncompressed audio formats such as FLAC and WAV make use of nearly all this data, resulting in a less then favorable file size. In order to squeeze thousands of songs onto an iPod, or stream songs over Spotify in no time at all, music compression is required."
				),

				React.DOM.p(null, 
					"Lossy audio encoders aim to strip away undetectable components of a track. It works by dividing the music into a number of small frequency sub bands within the 20hz-20khz range. After carefully analyzing and examining properties of each band, any data deemed imperceivable is tossed, the rest being 'smoothed' under a certain threshold. There's a lot to learn about lossy compression, like how unnoticeable parts of a track are isolated (the short answer, is ",React.DOM.a( {target:"_blank", href:"http://nautil.us/blog/the-math-trick-behind-mp3s-jpegs-and-homer-simpsons-face"}, "Fourier transforms"),"), but I can only tell you so much. One cool optimization that encodings such as MP3 make is called Mid/Side stereo. It mimics a left/right channel by maintaining a mid channel that contains the information that is identical in both channels from the original source, and a side channel that contains just the differing parts. This helps cut file size even more."
				),

				React.DOM.p(null, 
					"MP3 was created with a purpose: to shrink a CD quality recording 10 fold while still maintaining an acceptable listening quality. Unfortunately for the artist, and especially the sound engineer, this process trims a good bit of a recordings quality. MP3s encoded with a bit rate of under 256kbps can't even express the full bandwidth of the audible spectrum. Even at this bit rate, certain side effects of some of the compression techniques come to surface. Remember the sub band smoothing I mentioned before? Short high frequency spikes can actually be smeared out into a longer interval."
				),
				React.DOM.p(null, 
					"Now, while there may be a number of discernible audio artifacts generated during lossy encoding, it shouldn't be dismissed. The sheer demand for fast streaming audio means that providers can't afford the extra granularity of detail that uncompressed music gives. Right now, we're witnessing a re-popularization of uncompressed formats like FLAC. More providers are offering higher bit rate streams, that make the lossy listening experience a little bit better. I enjoy most of my music library on 256kbps mp3, and have nothing to complain over. ",React.DOM.a( {href:"http://bandcamp.com/"}, "Bandcamp"),", a music purchase/streaming site for up and coming artists, offers a variety of compressed and uncompressed formats for any purchase you make. I highly recommend checking for an album there before pirating or purchasing through an alternate digital market."
				),

				SubHeader( {text:"First Lyric Session: A sit down with Yubs"}),
				React.DOM.p(null, 
					"My friend ",React.DOM.a( {href:"https://twitter.com/kycayabyab"}, "Yubs"),", a fellow musician who frequently provides harmonica and spoken word accompaniments to my freestyle jams, came to visit last weekend to help me write lyrics for a track. This was my first real exercise in song writing. I've provided objective input for a singer's lyrics in the past, but never sat down to tell a real story through lyrics. We bounced ideas back and forth for a while, of what direction I wanted to take the album, what themes I wanted to cover, and differing approaches to present these themes."
				),

				React.DOM.p(null, 
					"Themeatically, we decided to cover ideas of remorse, but contrast them with acceptance. I spend a lot of time thinking about grief, and how we deal with it. That's what this first track is about, coping with death, and immorality through memory. Yubs and I quickly recorded a rough idea of how the song would play out, so that I could later go on to record the guitar part in the studio."
				),
					React.DOM.figure( {name:"song1", className:"embed left-border unloaded", 'data-iframe':"<iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132047041&color=dba785&auto_play=false&hide_related=false&show_artwork=true\"></iframe>"}),React.DOM.figcaption( {className:"left-border"}, "The song starts out gloomy, but moves towards a hopeful outro, meant to introduce the themes of the next song."), 
				React.DOM.p(null, 

					"While we were brainstorming, Yubs and I came up with this metaphor of a train. You get on at some point in your life, beginning a journey towards your nonexistence. Each stop represents choice, the possibility of debarking in an unknown land, to find yourself again and branch off onto a different path in life. A sort of juxtaposition between free will and determinism. We had a hard time translating this metaphor to song without making obvious comparisons, so we scraped the idea, but kept thinking of our character as being on this train ride of fate."
				),

				SubHeader( {text:"On Cultivating a Studio Experience"}),
				React.DOM.p(null, 
					"I went in to the studio to record the first track this week. I have recorded in a number of studios in the past, but have never dealt with the engineering behind it before. Professor Barton taught me a lot about optimal microphone placement, and how to layer two separate mic tracks together for a smooth balance. I'm currently using a Washburn Electric Acoustic guitar, so I have the option of using direct input. But I decided miking the guitar would be more intimate, and align better with the style I was going for, at least with the first song. The first microphone sits about 8 inches from the 12th fret of the guitar, while the second is angled towards the body. This picks up ambient effects like that of fingers sliding up and down the neck, and the attack of the thumb when it plucks a note. These sounds help nourish a cozy intimate feeling, of an isolated personal performance, played solely towards the listener."
				),

				React.DOM.p(null, 
					"After a few hours in the studio, I tracked the ",React.DOM.a( {target:"_blank", href:"https://soundcloud.com/d-rob-6/ep-intro-guitar-line"}, "guitar line for my first piece"),", which I had written a while back. It doesn't diverge much from what you heard in the vocal demo, but its obviously more distinguishable. Once I can get Yubs into the studio with me, we'll record his vocals and the track will be ready to master. I plan to hopefully finish this over the next weekend. My biggest mistake was wearing a sweater during the session, because you can faintly hear it brushing against the body of the guitar occasionally. But I guess that's just the danger of miking the guitar directly. After the 3rd take, I left the microphones rolling and recorded the ",React.DOM.a( {target:"_blank", href:"https://soundcloud.com/d-rob-6/track-2-guitar-demo"}, "guitar track for my next song"),". This is to be joined by a banjo line and hopefully some vocals in the near future."
				),

				React.DOM.p(null, 
					"On the topic of the banjo - I have no idea how to record it. In the digital age, whenever you have a problem, throw google at it. I quickly found an article in ",React.DOM.a( {href:"http://www.soundonsound.com/sos/aug08/articles/qa0808_1.htm", target:"_blank"}, "Sound on Sound"),", a digitized production magazine, which gave some hopeful insights. They suggest a fast and accurate mic with good coloration, probably a small diaphragm condenser, at a spacious distance of 2 to 3 feet (in order to let the sound 'develop'). Most people who have recorded with a banjo make a point to warn against miking near the head, and suggest to instead capture a little further up the neck. I'm anticipating at least an hour or two of finagling with the mic position to pick out just the right banjo sound."
				),

				React.DOM.p(null, 
					"I was reading a panel discussion featuring a handful of notable producers (of which no note will be made) in ",React.DOM.span( {className:"italic emphasis"}, "Behind the Glass, Volume 1"),", which is a wonderful and inspiring read that gives a lot of insight into the recording business. They kept overlapping on this theme of having a producer or engineer as an objective critic that an artists can bounce ideas off of. It's easy to think every note you write is done so with golden ink, but as an artist, its extremely necessary to view your song as a work in progress, which only grows with more creative input. Being a solo performer, I don't currently have that luxury. When I record, it's a one man job. A self contained system with no variance from external input. In a light, predictable. I intend to fill my studio time with session artists and friends that can constantly give input. I like to think of the studio as a populous grotto, rather then a hermit's cave."
				)


			)
		)
	},


	'week3': {

		title: "Week 3 - Portrait of a Man Whose Emotions Change the Weather",
		name: 'week3',
		html: (
			React.DOM.div(null, 
				React.DOM.p(null, 
					"Before this week, I only had a rough idea of what I wanted my EP to be, and where I wanted it to go. When I sat down with ",React.DOM.span( {className:"emphasis"}, "Yubs"),", we hashed out a set of themes, admittedly on the sullen side, that we wanted the lyrical portion of the EP to cover. We ended up creating a character who would persist between the songs. I'll describe him in the way an opening narration for a typical episode of ",React.DOM.span( {className:"italic emphasis"}, "The Twilight Zone")," would..."
				),
				Quote( {text:"Portrait of a man whose emotions change the world around him. Afluent only in despair, a monotonous day job offers his only solace from the sorrowing thoughts within. I take you now to a bleak train ride through a weeping city, the solitary journey to and from work that cripples his every hope and dream."} ),
				React.DOM.p(null, 
					"I realize now that in doing so, I had locked myself into a pretty gloomy and depressing album. This was not my intention, but rather a product of an off-beat writing session. I'm planning to mend the darker tones left behind by the first song by introducing a glimmer of hope into the character's story. This magical transformation takes place in the second song."
				),

				SubHeader( {text:"Second Lyric session: A Chat with Brie and Mike"} ),
				React.DOM.p(null, 
					"I'm fortunate enough to know a few of the many talented vocalists here at WPI. Two of them agreed to help me with lyrics and vocals for my second song. We sat down for an hour or so to come up with some lyrics. I explained the theme-wise continuation from my first track, and the overall flow of the song. We wrote lyrics for two back to back verses, and an interlude, before breaking it off for the day. What we came up with is a duet between the character from the first song, and a equally downtrodden women he meets on the train. It's about his struggle to make real connections with people after the loss of his former love. Hopefully, we'll finish the lyrics up for this track by the end of the week. I plan to record most of the instrumentals before hand however."
				),

				React.DOM.p(null, 
					"Vocals weren't meant to be a core component of my EP, they're more of a complement. For my second track, I knew right away that I'd need someone singing over most of the song. For my other songs however, I have no desire for any dedicated vocals. I've already written a guitar line for what will likely become the last song on my album. I took a lot of inspiration from ",React.DOM.span( {className:"italic"}, "Elk")," by ",React.DOM.span( {className:"emphasis"}, "This Town Needs Guns (TTNG)"),"."
				),
				React.DOM.figure( {className:"embed left-border unloaded", 'data-iframe':"<iframe style=\"border: 0; width: 100%; height: 142px;\" src=\"http://bandcamp.com/EmbeddedPlayer/album=990340459/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=7/transparent=true/\" seamless><a href=\"http://thistownneedsguns.bandcamp.com/album/animals\">Animals by TTNG</a></iframe>"}),React.DOM.figcaption( {className:"left-border"}, "I absolutely love the tapping in the guitar breaks"),
				React.DOM.p(null, 
					"I've written something with a similar energy level which I hope to finish composing this week. I recorded ",React.DOM.a( {href:"https://soundcloud.com/d-rob-6/track-3-demo", target:"_blank"}, "most of the song")," in the studio already, but still have a ways to go. I'm looking for another instrument, perhaps a trumpet, to provide a melody on top of the guitar. As with most songs on this EP, it will be through composed, meaning that it doesn't follow any rigid or repetitious pattern (such as verse-chorus-repeat). I've also decided to use the outro from the first song in this one. This time however, I plan to layer a number of small instrumental parts on top of the base chord progression, in a post-rock style. I think using this progression as both a forward passage to the album, as well as a eulogy, will add a sense of cohesion."
				),

				React.DOM.p(null, 
					"I've also set out to craft an ambient reprise track to insert between the second and final track. I got the idea after re-watching ",React.DOM.span( {className:"italic emphasis"}, "Upstream Color"),", which has a phenomenal soundtrack written by the film's writer, composer, editor, and director, Shane Carruth. I've recorded a ",React.DOM.a( {href:"https://soundcloud.com/d-rob-6/portrait-of-a-man-whose", target:"_blank"}, "rough demo")," using an effects pedal as a preamp to get most of the echo and fade effects without any EQ. I'm currently working with one of my classmates to add a piano melody to this. It functions as a reticent interlude, allowing the listener to ease in to the final song, leaving behind the mood from the first half of my EP. Speaking of which, the title of this song may very well end up being the name of the EP."
				),
				SubHeader( {text:"Listening Session: Sgt. Pepper, and the fifth beatle."} ),
				React.DOM.p(null, 
					"I sat down and listened to ",React.DOM.span( {className:"italic"}, "Sgt. Pepper's Lonely Hearts Club Band")," earlier this week. But not before reading a poignant interview with ",React.DOM.span( {className:"emphasis"}, "George Martin"),", who produced the album, as well as many subsequent releases. Martin claims that the album wouldn't have been as much of a success if it hadn't been recorded on a 4 track. This came as a surprise to me, as even at the time, multi track tapes were commonly used to record rich layered pop albums. Especially with the dense instrumental arrangements in some of the songs, its surprising that they we're able to squeeze everything down to just 4 lines. These limitations, Martin claims, fabricated a demand to be resourceful, and prompted them to explore the full boundaries set out by recording restrictions."
				),
				React.DOM.p(null, 
					"You can definitely notice how ",React.DOM.span( {className:"italic"}, "Pet Sounds")," influenced the album. Both share a mix of complex arrangements of esoteric auxiliary instruments, as well as the traditional and invigorating wall of sound. ",React.DOM.span( {className:"italic"}, "Within You Without You")," is perhaps my favorite track on the album. Composed solely by Harison, the eastern-inspired composition and daedal arrangement combine to cultivate a truly blissful five minutes of sound. This is where Martin's role as a music minded producer, who embraced theory and composed independently of any target instruments, came to light. Martin is a paragon for the ideals of this class, where the producer acts as an additional composer. Martin detailed in his interview that some of the Beatles, particularly Lenon, were fairly resistant to the inclusion of strings or orchestral arrangements in their records. Here's an instance where a producer had to step on the toes of his performers, and butt heads over how their art should be molded. Some musicians view a composition as a finished demo, to be brought to a studio for the purpose of producing a more aesthetic recording."
				),
				React.DOM.p(null, 
					"What Martin's interview has shown me, is that what you bring is actually a framework for a track, rather then a finished song. An ego can be a befogging shroud that isolates a creative system from external input. But collaboration is what truly enriches creativity. I love the act of writing, composing, or just brainstorming with a buddy. Bouncing ideas back and forth, watching as they rise and fall, or evolve with each added input. A heavy ego only marvels at the end product, but a true artist revels in the process of creation."
				)
			)
		)
	},

	'week4': {

		title: "Week 4 - Hipster Sweaters On Film",
		name: 'week4',
		html: (
			React.DOM.div(null, 
				React.DOM.p(null, 
					"This week, I finished composing the instrumentals for my EP. Now, all that's left to do is vocals and studio work. Yubs (the man behind the spoken word on my EP), came by later last week to help me finish the first track. I used a large diaphragm condenser microphone to record his vocals, which turned out pretty well. He might return to make an appearance on my third song as well. I still haven't decided whether or not to include vocals, but I'm leaning towards doing so."
				),
				
				SubHeaeer( {text:"A Closer Look at Miking Acoustics"}),
				React.DOM.p(null, 
					"I took the time to read up on miking Acoustic guitars. There are many ways to go about this, ranging from a single dynamic mic to a carefully positioned pairing of small condensers. Like all engineering, there is no absolute definitive solution, just a lot of different approaches that each garner a slightly different sound. For someone playing a traditional acoustic progression, the desired frequencies are largely resonating out of the sound hole, so miking towards this region produces a better sound. I learned that an additional room mic can really help saturate the main track with the added overlay of reverberated echoes and idle ambiance. For my second track, I mostly stick to a chord heavy progression, so I might play around with some of the sound hole centered styles. A single large diaphragm condenser placed a foot or so from the hole produces a really filling sound (at least in the audio examples ",React.DOM.a( {target:"_blank", href:"http://www.cakewalk.com/Support/kb/reader.aspx/2007013311"}, "here"),")."
				),

				React.DOM.p(null, 
					"But what about non traditional acoustic playing, such as finger style and classical? The outro of my second track, and the entirety of my third track, focus heavily on finger picking and intricate fretwork (hammer ons, pull offs, slides, and tapping). These nuances don't emanate from the hole like chords do, they start propagating from the fretboard, before anything is picked up and weakly refracted from the hole. Miking the neck thus becomes essential. For this reason, I use a split pairing: one large diaphragm condenser sufficiently spaced away from the neck, and one smaller microphone hovering less then a foot away from the 12th fret. This mic is usually a small diaphragm condenser, but I went to experiment with other types to see which best capture the ephemeral intricacies of more advanced playing techniques."
				),

				React.DOM.p(null, 
					"I hit up the studio earlier today and tracked out each section for my 3rd song. But not before playing around with different microphones. There's been a small dynamic mic in the studio for quite some time, and I decided to see how it would sound if I used it over the 12th fret.  "
				)

			)
		)

	},

}