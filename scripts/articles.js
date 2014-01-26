/** @jsx React.DOM */

var Blog = React.createClass({
	render: function() {
		return (
			<div className="journal week">
			<time className="date">{"Wednesday, January 21"}</time>
			<p>
				{"Over the next seven week's, I'll be diving head first into a craft often overlooked by some, music production. I feel as though typical listeners attribute musical success to strictly compositional qualities, like a good hook, or catchy lyrics. But the success of a good recording hinges on the skills of it's producer. While I can manage to contrast some differences between two arbitrary recordings, I'd be crazy to claim any real understanding of what goes on behind the scenes - in the studio. Over the next 7 weeks, I'll be taking a deep dive into production techniques, as I apply them in my own works."}
			</p>

			<h2 className="ui header"><i className="coffee icon"></i>Influences</h2>
				<p>
					{"Back in High School, I was a metal head. No getting around it. I played in a few bands that tried to emulate the all to common metalcore sound, which was good fun but didn't pan out over time. In college, I continued to create music, but never towards a greater purpose then personal enjoyment. What I've amassed is dozens of hours of short, amateur iPhone recordings of motives and ideas that I would soon forget about. They became more of an exercise in creativity and musical technique. I believe that cataloging your creations is invaluable, and found recently that some musicians, such as "}<a target='_blank' href='http://www.nerdist.com/2013/08/nerdist-podcast-rogue-wave/'>Zach Rogue</a>{", agree and do the same."}
				</p>

				<p>
					{"I started playing guitar when I was in the 7th grade, after being inspired by the music game "} <span className="italic">Guitar Hero</span>{". When I was 17, I bought a decent bass so I could complete the lineup in a folk rock band that I'd formed with a few friends. This lead to my first recording experience, at a audio production school in Boston. I would later buy my first Acoustic guitar, which profoundly warped my play style and listening preferences. I never enjoyed playing the over popularized and de facto style of Acoustic common in any "}
						<a target="_blank" href="http://youtu.be/nhivdSMdMxc?t=24s" title="4 chords, 35 songs">four chord song.</a>
						{" I got into math rock, listening to bands like "}
						<a target="_blank" href="http://topshelfrecords.bandcamp.com/album/songs-ideas-we-forgot">Toe</a>{','} <a target="_blank" href="http://americanfootball.bandcamp.com/album/american-football">American Football</a>{', and '}<a target="_blank" href="http://thistownneedsguns.bandcamp.com/">This Town Needs Guns</a>{"."}
				</p>

			<h2 className="ui header"><i className="coffee icon"></i>{"The EP"}</h2>
				<p>
					{"I've thought a lot about how I want to structure and write my EP. Logistically, I've taken an iteration driven approach to both composing and producing. I plan to first produce a rough demo of each track (the first iteration) that solidifies the structure of the track, but not necessarily the arrangement. The second iteration will be a raw studio recording, and the third will be the mastered tracks. So far, I've written an intro piece, and recorded it via direct input from my electric acoustic guitar."}
				</p>
				<figure name="intro" className="embed unloaded" data-iframe='<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130688461&amp;color=dba785&amp;auto_play=false&amp;show_artwork=true"></iframe>'>
				</figure>
				<figcaption>{"My introduction track was meant to slowly bring the listener up to the mood of the album"}</figcaption>

				<p>
				{"A friend of mine, who is quite good at spoken word, has agreed to guest vocal on this track. I want to open the EP with a spoken word style monologue that conveys some of the themes and ideas present in the later tracks. The end of the song transitions perfectly into the second track, which I've drafted up an incomplete demo of as well. "}
				</p>
				<figure name="song1" className="embed unloaded" data-iframe='<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/130688727&amp;color=dba785&amp;auto_play=false&amp;show_artwork=true"></iframe>'>
				</figure>
				<figcaption>{"This rough demo was hastily thrown together for the purpose of sharing with potential vocalists."}</figcaption> 

				<p>
					{"This showcases the first half of what I've written so far. I wanted to create something that could easily be sang over. This is my first time including banjo in a composition. I'm still not sure how to work it in to my style, as the banjo is heavily pigeonholed into a few select genres, bluegrass in particular. Because of this, I didn't have much reference material in the scope of they style that I've been playing."}
				</p>

				<p>

					{"Writing and producing an EP in 7 weeks certainly isn't easy, but it's been done by many before. One band, "}
					<span className="emphasis">Explosions in The Sky</span>
					{", produced and composed a full length album in "}
					<a target="_blank" href="http://www.explosionsinthesky.com/discography/6">two weeks</a>
					{", using no existing material. With the gained reassurance from their feat, I drew up a "}
					<a target="_blank" href="https://docs.google.com/spreadsheet/ccc?key=0AsqPkKbbLFV_dHJiY2RWdERaQXRkeGhQS2xGMWlidkE&usp=sharing">time line</a>
					{" for the next 7 weeks. I'm adopting a waterfall like schedule which I feel is fairly straight forward."}
					<div className="inline aside">
						Compose<i className="long arrow right icon"></i> Demo<i className="long arrow right icon"></i> Record<i className="long arrow right icon"></i> Mix
					</div>
				</p>

				<p>
					{"I plan to use my intro track as a guinea pig in the recording studio. It's relatively simple, with just one guitar line and no overlay, making it a perfect baseline. After that, I plan to compose a new song each week, following up with the waterfall cycle for each afterwards. You'll see in the graph that this creates a cascading effect, with the heaviest workload coalescing in the middle weeks of the term. If anything becomes a major time sink, it will trickle over to the next week, which will already have less of a base workload, allowing for the extra runoff."}
				</p>

			<h2 className="ui header"><i className="coffee icon"></i>Reference Tracks</h2>
				<p> 
					{"For my EP, I've been tasked to identify some reference recordings whose sound I'd most like to emulate. After reading several production articles online, I realized that this is in fact a common practice, which helps define and mature the sound that you're trying to create. I wanted a warm acoustic sound, perhaps a little more bass driven. I looked towards "}<span className='emphasis'>This Town Needs Guns</span>{" for my guitar sounds."}
				</p>
				<figure name='ttng' className='embed unloaded' data-iframe="<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=627033204/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=7/transparent=true/' seamless><a href='http://thistownneedsguns.bandcamp.com/album/this-town-needs-guns'>This Town Needs Guns by TTNG</a></iframe>">
				</figure><figcaption className='hugging'>{"I've been trying to tackle the guitar solo on this track for quite some time."}</figcaption>
				<p>
					{"What I like about this track is that the acoustic has both a refined, but lightweight sound to it. It obviously wasn't terribly over engineered with reverb effects. I tend to prefer more honest recordings that sounds good, but don't try to reinvent the wheel. "}
					<span className='emphasis'>Toe</span>{" also does a great job of this on some of there more tranquil acoustic songs."}
				</p>
				<figure name='toe' className='embed unloaded' data-iframe="<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=2576577776/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=6/transparent=true/' seamless><a href='http://topshelfrecords.bandcamp.com/album/for-long-tomorrow'>For Long Tomorrow by toe</a></iframe>">
				</figure>
				<p>
					{"The banjo sound I'm looking for needs to mesh with the acoustic guitar very well. So any major frequency changes to the guitar's sound will have to be similarly matched with the banjo. At this point, I'll point out that I have almost no clue what I'm talking about to this regard, so a more detail writeup is due in the coming weeks."}
				</p>
				<figure name='hundred acre woods' className='embed unloaded' data-iframe="<iframe style='border: 0; width: 100%; height: 142px;' src='http://bandcamp.com/EmbeddedPlayer/album=3960580905/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/t=1/transparent=true/' seamless><a href='http://thehundredacrewoods.bandcamp.com/album/4-way-v-day-split'>4-Way V-Day split by The Hundred Acre Woods</a></iframe>">	
				</figure><figcaption className='hugging'>{"The banjo and guitar sound really great together in the outro of this song."}</figcaption>
				<p>
					<span className='emphasis'>Hundred Acre Woods</span>{" was the band that first inspired me to pick up the banjo. They're a more modern band that incorporates banjo playing. You'll see a lot of indie folk bands that are doing this now. I'm excited to see the instrument again pick up a bit of main stream attention outside of the Deliverance context."}
				</p>

		
			<h2 className="ui header"><i className="coffee icon"></i>Foray into Production.</h2>
				<p>
					{"I've read through a collection of various blogs and articles regarding monitor placement. It turns out that the acoustics and frequency response of a monitoring/mastering room are more important then the mastering equipment its self. Bob Hodas presented an "}<a target="_blank" href="http://www.bobhodas.com/speaker-placements-acoustic-effects.php">excellent article</a>{" detailing his gripes with most mastering studios that he has worked in. It got me thinking about our own makeshift studio in Riley. It was by no means constructed with good acoustics in mind. The low ceilings might cause some frequency disturbances. Fortunately, the 5:1 setup seems to be in perfect order, with each monitor raised an appropriate distance from the floor, creating a nice floated effect."}
				</p>
				
		</div>	
		);
	}
});
