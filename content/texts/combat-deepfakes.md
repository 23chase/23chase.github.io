+++
title = "How to combat deepfakes technology?"
date = "2023-01-24T18:23:23+01:00"

#
# description = "These concerns are serious, but every warning sign also an opportunity."

tags = ["ai","deepfake","privacy"]
+++

Artificial Intelligence (AI) improvement is fraught with danger at a high-level —economical, [ethical](https://nickbostrom.com/ethics/ai), [existential](https://en.wikipedia.org/wiki/Existential_risk_from_artificial_general_intelligence). We have heard alarming notes from researchers such as Bostrom and Hawking, and from businessmen such as Gates and Musk. However, the rapid rise of low-level, day-to-day implementations also brings concerns. Tools to create fake realities are becoming increasingly accessible, and these can be very harmful.

Someone can already create fake images or videos of a person, or even attend online calls. Know Your Customer (KYC) procedures, which require banks to verify identity before account opening, [can be fooled](https://www.paymentvillage.org/blog/how-i-used-deepfakes-to-bypass-security-verifications-in-a-bank). Real-time deepfakes [can even pass liveness checks](https://www.theverge.com/2022/05/18/23092964/deepfake-attack-facial-recognition-liveness-test-banks-sensity-report), allowing someone to impersonate another person, open a bank account, and use it to commit crimes. Financial companies are vulnerable to such attacks — many are lagging behind the progress curve, while tools for creating such fraud become more affordable and [easy to use](https://github.com/sensity-ai/dot). This is an ongoing race between fraudsters and banks.

Faking the texts can spread misinformation and deceive individuals, impersonate a person or organization, fabricate quotes or statements, or to create entirely false news stories. [Replika AI](https://replika.com/) — a companion app, that is “always here to listen and talk”, was created with the [initial idea](https://qz.com/1698337/replika-this-app-is-trying-to-replicate-you) of building a [digital version of real person](https://www.theverge.com/a/luka-artificial-intelligence-memorial-roman-mazurenko-bot), who was killed in car accident. So, with enough text data offenders can mimic a writing style and use messages to convince or fool a victim. Same with faking the voice and fooling audio-recognition systems.

Abundant data such as photos, videos, audio, and textual materials provide an opportunity to [fake an entire personality](https://arstechnica.com/information-technology/2022/12/thanks-to-ai-its-probably-time-to-take-your-photos-off-the-internet/). Personality fraud can be used in many cybercriminal activities, with one limitation: with the current state of AI, you need enough data to train models to fake an identity, though it is becoming easier.

These concerns are serious, but every warning sign also an opportunity. 

<br>

To fight images deepfakes we can add watermarks on every photo captured by camera, use [Photoguard](https://gradientscience.org/photoguard/) method to fight diffusion models, or [add watermarks into generative output](https://medium.com/@steinsfu/stable-diffusion-the-invisible-watermark-in-generated-images-2d68e2ab1241#504e). Another option is to build a tool to reverse image search and verifying sources. The caveat is that watermarking involves some limitation into usage of generative AI-models, which is hard to imagine — it always will be some backdoors to use.

But for now, due to the difficulty of protecting a person from having their photos/videos used as input for training, we have a straightforward approach: to take photos off the internet. Visual recognition can be countered by using special clothing that can be produced to thwart AI-recognition security cameras, as recently [was done by students](https://petapixel.com/2022/12/12/71-coat-makes-wearers-invisible-to-ai-security-cameras/) in China.

We can escape faking the audio by using a tool for checking it for human or non-human source. Additionally, we can use audio recognition software to ensure that the audio is authentic. We can use audio watermarking as well, which involves embedding audio with a unique identifier that can be used to track or verify its origin.

We can verify the authenticity of texts and whether they have been generated with the help of tools such as [GPTZero](https://gptzero.me/) and [Originality](https://originality.ai/).

Creating fake personalities can be useful for various purposes, such as customer reviews and market research, or to revive fictional characters. In 2019, the trend of creating virtual influencers began. However, at the time, there was a problem: the cost of production was too high, and every project required a lot of resources, but was authentic and unique. Deepfakes technologies can help everyone to have multiple virtual personalities, similar to how we have multiple emails or TikTok accounts.