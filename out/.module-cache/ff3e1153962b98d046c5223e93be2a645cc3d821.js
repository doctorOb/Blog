/** @jsx React.DOM */

console.log('called');
var week1 = React.createClass({displayName: 'week1',
	render: function() {
		return (
			React.DOM.div( {className:"journal week"}, 
			React.DOM.time( {className:"date"}, "Wednesday, January 21"),
			React.DOM.p(null, 
				"Over the next seven week's, I'll be diving head first into a craft often overlooked by some, music production. I feel as though typical listeners attribute musical success to strictly compositional qualities, like a good hook, or catchy lyrics. But the success of a good recording hinges on the skills of it's producer. While I can manage to contrast some differences between two arbitrary recordings, I'd be crazy to claim any real understanding of what goes on behind the scenes - in the studio. Over the next 7 weeks, I'll be taking a deep dive into production techniques, as I apply them in my own works."
			),

			React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"Influences"),
				React.DOM.p(null, 
					"Back in High School, I was a metal head. No getting around it. I played in a few bands that tried to emulate the all to common metalcore sound, which was good fun but didn't pan out over time. In college, I continued to create music, but never towards a greater purpose then personal enjoyment. What I've amassed is dozens of hours of short, amateur iPhone recordings of motives and ideas that I would soon forget about. They became more of an exercise in creativity and musical technique. I believe that cataloging your creations is invaluable, and found recently that some musicians, such as <a target='_blank' href='http://www.nerdist.com/2013/08/nerdist-podcast-rogue-wave/'>Zach Rogue</a>, agree and do the same."
				),

				React.DOM.p(null, 
					"I started playing guitar when I was in the 7th grade, after being inspired by the music game <span className=\"italic\">Guitar Hero</span>. When I was 17, I bought a decent bass so I could complete the lineup in a folk rock band that I'd formed with a few friends. This lead to my first recording experience, at a audio production school in Boston. I would later buy my first Acoustic guitar, which profoundly warped my play style and listening preferences. I never enjoyed playing the over popularized and de facto style of Acoustic common in any <a target=\"_blank\" href=\"http://youtu.be/nhivdSMdMxc?t=24s\" title=\"4 chords, 35 songs\">four chord song.</a> I got into math rock, listening to bands like <a target=\"_blank\" href=\"http://topshelfrecords.bandcamp.com/album/songs-ideas-we-forgot\">Toe</a>, <a target=\"_blank\" href=\"http://americanfootball.bandcamp.com/album/american-football\">American Football</a>, and <a target=\"_blank\" href=\"http://thistownneedsguns.bandcamp.com/\">This Town Needs Guns</a>."
				),

			React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),"The EP")

				
		)	
		);
	}
});
$(document).ready(function(){


console.log('called');
console.log(React.renderComponentToString(week1(null)));
});
