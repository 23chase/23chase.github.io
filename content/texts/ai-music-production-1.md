+++
title = "Diving into AI-Powered Music Production"
date = "2023-10-07T14:23:23+02:00"

# description = "None of the sounds in AI-generated music are real. Whereas before all kind of music producers were looking for good samples to cut, modify and reuse, now a new wave of sample digging has opened up: to create a promt that is good enough to produce high quality audio."

tags = ["ai","future","music"]

+++

When ChatGPT was released in November 2022, it got hundreds of potential implications—you can get answer to almost any question, get ready-made essay on specified subject, working programming code or compiling business strategy. And the quality of the output depends mostly only on how good you are at asking in the right way. One of the first thoughts I had was: how can we use the coming wave of generative AI in music production?

There are some interesting ways to do it now. They're not perfect: AI can generate a good-sounding mall-core or a good vocal part. But these are the first massive steps towards massive changes in the way artists work. 

**Theory**

First good use case is a [Text-to-MIDI](https://www.youtube.com/watch?v=tV82Wy-tXRE). MIDI can be created for melodies, chord progressions or drum parts. One approach is to use ChatGPT to get a textual representation of MIDI and then convert it to MIDI using [simple Python code](https://www.reddit.com/r/ChatGPT/comments/101mq1l/chatgpt_and_midi/). The second is to use various tools such a [WavTool](https://wavtool.com/), which is essentially a DAW in the browser that have a feature to create a MIDI file directly from a text prompt and add it to the track. It also has additional functions such as the ability to ask in text to add effects to desired tracks. 

The next implication is to generate one-shot samples, loops, stems or even complete “songs”. On 10 May 2023, Google released [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) and 3 months later Meta released [MusicGen](https://huggingface.co/spaces/facebook/MusicGen). Both are text-to-music models that create the finished track with a good enough quality. Google offers beta access via the [waiting list](https://aitestkitchen.withgoogle.com/experiments/music-lm), while Meta's model is open-source, and in addition to working with text prompts can be enriched with a short audio clip as a reference, and the model will be able to pick up both in the output. 

Generating a monolith audio itself isn't helpful for producers. To get access to tracks within "song", we can use [another AI](https://voice.ai/tools/stem-splitter) to separate tracks on stems. This allows to working with full tracks as loops, and sampling the AI-generated audio to one-shots. Another interesting implication is to create samples using text-to-sound models as Meta's [AudioGen](https://audiocraft.metademolab.com/audiogen.html), which generates environmental sounds and sound effects. One more option is to use tools that generate samples, such as [this VST plugin](https://samplab.com/text-to-sample).

Text-to-speech models can generate a person's voice, but now there are more specific models available to generate a real-sounding vocal. You can even [update a vocal](https://musicfy.lol/) with a real person's voice and use it to fake it. In April 2023, artists [made a fake AI-generated](https://www.businessinsider.com/fake-ai-generated-travis-scott-album-taken-off-youtube-soundcloud-2023-4) Travis Scott album.

It's getting to the point where every aspect of the whole song can be generated. One example is the collective [Dadabots](https://dadabots.com/), who build their own "raw audio neural networks that can imitate bands". They produce different kinds of extreme genres and [stream them 24/7](https://www.youtube.com/watch?v=MwtVkPKx3RA). They were [early visionaries](https://dadabots.com/science.php) in the field, trying to generate music by specifying musical influences that a model trains on. They participated (?) in recent launch of [Stable Audio](https://stableaudio.com), text-to-music service trained on assets from stock audio provider AudioSparx, and it works really well. Another example is a [Suno AI](https://www.suno.ai/) that generates full songs, but in a way that analyses the patterns of words, rhythms and sounds and combines them with audio that follows the cadence and structure of the lyrics provided.

So with the current state of technology it is possible to produce a song using only generated sounds with a wide variety of possible tools and approaches. I wanted to see what I could get out of it.

**Practice**

I used MusicGen to create the base of a track, here is what I got initially: 

[Base audio](https://www.are.na/block/24034406)

The next step was to separate the lead sound from the drums, so that I could work on both. I used the Voice AI stem splitter to do this. After that I worked on the composition and added the bass line. The bass was sampled from another (failed) generated track. 

It felt like the drums were groovy but still static. I wanted to add some percussion, but after playing around with the promts in MusicGen, it became clear that it was hard to get a clean solo track for the hi-hats. Stable Audio helped here when I asked for "2000s trap, hi-hat solo, 140 bpm, fast, aggressive", although it took several tries to tweak the prompt: 

[Hi-hat audio](https://www.are.na/block/24034441)

The main problem was creating the vocal track. I decided to use Suno, but results weren't convincing, and I even had to go directly to ChatGPT and ask for lyrics, here what I got:

```
What's the canvas of your psyche, tell me, what's the hue? 
Is it Picasso's blue or Van Gogh's yellow too?
In the labyrinth of thoughts, are you lost in the maze?
Abstract expressions in your mind, like art ablaze.
Are your dreams like Dali's clocks, melting in the night?
As Salvador surreal.

As Salvador surreal, do you feel your grip on sight?
Is your life a Kafkaesque novel, pages turning strange?
Metamorphosing daily, as your world deranges.
When you peer into the mirror, what's the reflection?
An Escher staircase, endless, no clear direction?
The ink of your existence, does it spill beyond the lines?
Are you the lyrics or the beat in these rhymes?
```

Despite the heavy name-dropping, I kinda like it. I threw it to Suno, and it took me many tries to get vocal part good enough to be used as an acapella for my song. This is what I got for vocals: 

[Vocal audio](https://www.are.na/block/24034448)

I used the stem splitter again, but this time bass was heavy and distorted the vocal part, which impacted overall quality. I had to adjust the tempo, and in general the flow doesn't match the beat (Suno's initial generation was better in this respect), although it's applicable.

I polished a piece, did a raw mix and of course [AI mastered it](https://www.bandlab.com/mastering). You can listen to the final version here:

[Fake Song](https://www.are.na/block/24034459)

I haven't encountered many issues, but worth mentioning is that adding BPM to the prompt doesn't always help, and the generated audio has a different tempo. Some of the models produce very high end output: it sounds like a top-level production. However, sometimes it can sound flat and noisy, giving a feeling of low quality. With text-to-music/sound, you can't change the created audio slightly, play with instruments or adjust drums (though there are some [tools](https://www.youtube.com/watch?v=U1qMiTrIiO0) that help); you can only update it from scratch and get a completely different track. This is where text-to-MIDI can help. 

The downside of text-to-MIDI is the fact that it is better to know music theory to “explain” to AI model how and which chords to change, what rhythm to use and so on. Music is very mathematical, and without theory you have to describe everyting in very figurative terms, which is difficult to do well. Also, it's just a MIDI file: and it doesn't eliminate the need to find a good sound, arrange a song, add layers and so on. But it works.

I was also surprised: when I was trying to get a good enough solo drum part, I split it into stems. Somehow the AI found a vocal track in there that wasn't audible when I listened to the whole track. This "vocal" sounds like an otherworldly voice, and I am so fascinated by the fact that this voice never existed, and this AI model brings it to life. It comes from a huge dataset that is a compilation of many musical compositions that people collectively have produced over the last many years.

What's also exciting is that none of the sounds in my song are "real", they're all generated by different AI models. Whereas before all kind of music producers were looking for good samples to cut, modify and reuse, now a new wave of sample digging has opened up: to create a promt that is good enough to produce high quality audio that can be used again. I'm definitely going to use one of these tools: it opens up new doors in sound production.
