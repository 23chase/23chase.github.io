+++
title = "App Marketing predictions using MMM"
date = "2022-08-21T18:23:23+02:00"
description = "We wanna know, how our money works. Guide for non-technical marketers."
tags = ["marketing","app"]
+++

<br>

## What is MMM?

Marketing Mix Modeling is an analysis of historical marketing data to estimate the impact of marketing channels and activities on sales and forecast the future.

Put it simple: ***We wanna know, how our budget works.***

<br>

## Why anybody should care about it?

In terms of marketing, it is not always possible to say, that Channel X caused Y increase in sales in Z time. Everything starts with non-trackable ads, or ads that very difficult to track, like TV or billboards.

How can you be sure, that this money were worth spending on this funny but very expensive rolls between evening TV shows? How can you track the dependencies, if you have dozens of activities that track differently? How can you be sure that you don’t cannibalize your own organic traffic?

![HERE THE PICTURE OF POSSIBLE TOUCHPOINTS](/possible-touchpoints.png)

Big brands need tools to analyze the diverse marketing landscape filled with big marketing budget. They have been in the MMM game [from 1949](https://en.wikipedia.org/wiki/Marketing_mix_modeling).

Personally, I start to think of prediction after iOS privacy hit (and upcoming Android Privacy Sandbox + Cookies death), that changed mobile ads' environment entirely. I used to check campaign results in analytical tools (MMPs) like AppsFlyer / Adjust, but for now I can’t rely on data from them — it becomes different, and you can’t simply get the data and be 100% confident, that this data == true.

App marketing was complicated as it is — you have many unobservable touchpoints through the way of user to your product, and last-click attribution model sucks — it is VERY difficult to distinguish noise from signal and make an informed decision.

**But iOS 14.5 hit was the last warning — we need to change.**

<br>

## With the help of MMM we want to …

- Weight the channels. So we can see, how every marketing platform impacts our Marketing Mix over time — we’ll see the percentage of this effect and calculate CPA / ROI. Even if we don’t see many conversions attributed to Facebook, historically we know that the platform gives us high-quality users. How can we not guess, but see the real numbers?
- Make the decisions. If we see the full picture of channel’s weight, we can decide on how much should we spend on. We can put some platforms on pause, stop some partners or backwards — go all in and give the whole budget to TikTok.
- Predict the future. Only in terms of sales (or any other conversions) by changing the planned spend. You can literally change the planned budgets on the fly and see what’s happens. No more guessing, just plain statistic.

To summarize — MMM gives the app marketer a possibility to handle everything plus don’t rely on user-level data, which is awesome.

<br>

## How does it works in general?

MMM uses various sorts of regression analyses. [Regression analysis](https://en.wikipedia.org/wiki/Regression_analysis) — process for estimating the relationships between two variables — dependent (output) and independent (input).

There are many types of regressions, but linear regression is the most common. It is used to predict a variable based on the another variable using the straight line that most closely goes between these variables.

![HERE THE PICTURE OF STRAIGHT LINE BETWEEN POINTS](/linear-regression.png)

You give X and Y and want to find out, how these variables works out. By X you can mean Marketing spend by channels, PR coverage, Seasonality, Weather, App Store ranking and other stuff. By Y you can mean anything that you wanna predict — Sales, Web or In-app events.

<br>

## What else can you check with MMM?

Else you would like to consider

- AdStock effects — the delayed impact of marketing activities over time. If you know, that you get only N per cent of events in first week, you need it to understand how ads will perform later.
- Baseline — the number of Y that you will get without any marketing activities. This is the “real” organic installs/events, and in some sense it reflects the power of your brand.
- Saturation — declining efficiency as spend increases. Every channel have a point of saturation, where adding money is not efficient. It is very convenient to know, (even approximate), where this point is, e.g. that you can’t increase the spend more, than x1.5, because after that point your Customer Acquisition Cost (CAC) will skyrocket.

![HERE THE PICTURE OF STRAIGHT LINE BETWEEN POINTS](/saturation.png)

<br>

## What are the limitations of MMM approaches?

- They are more biased towards short-term data.
- They have bias to time-specific marketing activities.
- Not every model will see and use underlying connections, seasonality, economical situation etc. You mostly put into model well-know historical data.
- Some of the MMM’s can’t clearly get into account seasonality, auction and economical situation, that will hugely influence the results.

Despite these limitations, we need just a vector to set the hypotheses, so it's fine.

<br>

## But how can I start?

There are few options to start with. Which one to choose will depends on how much money / time / other resources you have. E.g. some marketers can hire a person who will handle it, some can ask their in-house analytical team, others can manage it by their selves.

Start simple, keep ROI in mind and with time move to more advanced approach, as you will understand limitations and your request.

![HERE THE PICTURE OF POSSIBLE SOLUTIONS](/hard-choice.png)

From simple and cheap to difficult and expensive:

### 1 - Build in Google Sheets

This is how I started — with the simple Google Spreadsheet, that counts spend by the week and shows changes in installs and some in-app events. If you have short attribution window (less than a week, obviously) — you can see how large changes impacts your funnel. Of course, it was not enough.

The next step to dive into MMM — use Google Spreadsheet to actually predict. I found out a great article, that shows how you can use LINEST function to build your first real MMM: [https://mobileuseracquisitionshow.com/episode/mmm-marketing-mix-models-ios-14-att/](https://mobileuseracquisitionshow.com/episode/mmm-marketing-mix-models-ios-14-att/). How it works:

- You get the coefficient for every X (input like ad spend for channel), and by multiplying the spend by the channel in specific week by this coefficient you get the number of how much events/sales/installs you get from this channel. Conclusion — you see how this channel impacts overall mix. More data and weeks you have — more clear will be the percentage.
- You can calculate average CPA by channel, I mean more real CPA, then in your other dashboards. Compare results and find the truth.
- Predict the future results of a desired event. Using coefficients, you can calculate, how your outcome changes with the different budget allocation.

But how do LINEST function work?

This was the first question, when I tried this function by myself. From Google Docs Help — «Given partial data about a linear trend, calculates various parameters about the ideal linear trend using the least-squares method». What is least-squares method? Reframing [the Wikipedia](https://en.wikipedia.org/wiki/Least_squares): «The method of least squares is a an approach to approximate the solution by minimizing the sum of the squares of the residuals made in the results of each individual equation». Here I stop — maybe I will dive deeper next time.

I have some difficulties with this type of MMM — first I had not enough data to make trustworthy model, then I found out, that I have big spikes in spending and this brake entire approach. Also, average error rate was acceptable, but from week to week I found out some peaks, that ruins everything. So the main goal is to reach the point, where you can trust this Model. And it will take some time.


### 2 - Use Open Source solutions

**Facebook Robyn**

[https://facebookexperimental.github.io/Robyn/](https://facebookexperimental.github.io/Robyn/)

Facebook Robyn uses [Ridge Regression](https://en.wikipedia.org/wiki/Ridge_regression) — this type is different from linear regression because it overcomes the problem of multicollinearity. Robyn provides a much more advanced dive into MMM topic:

- They have a “Prophet” code, that decomposes data into “trend, seasonality, holiday and weekday impacts, in order to improve the model fit and ability to forecast”. It is very useful, as simple LINEST in Google Sheets will require you to check those impacts by your own and try to add it to MMM manually.
- They have three categories of variables. Paid Media — everything that have direct ad spend. Organic — marketing activities without possibility to connect marketing spend, like Push notifications, Social posts or Newsletter. Context — everything behind the previous two categories — from unemployment rates to prices, everything that could add more context to the forecast because it directly impacts your dependent variables.
- They have built-in AdStock (2 techniques) and Saturation (using Hill function) that estimates 10000 models using evolutionary algorithm Nevergrad in parallel. Facebook put much effort in this part of MMM.

**Google LightweightMMM**

[https://github.com/google/lightweight_mmm](https://github.com/google/lightweight_mmm)

Most funny part, that this MMM is unofficial. Uses [Bayesian Methods](https://en.wikipedia.org/wiki/Bayesian_inference) instead of Linear or Ridge regression — it gives an opportunity to show you more plausible results in the final model. They also have AdStock and Saturation built-in. What is better — users reports, that LightweightMMM estimate your model significantly faster, than Robyn.

### 3 - Buy ready-made MMM solution from some 3rd-party vendor / SaaS startup / Consultant

Sometimes it is a good solution — if you don’t have enough expertise, and simple Google Sheet is not enough — this is your choice. When I started to gather info about MMMs I found out dozens of companies, who can handle everything for you. The question is how will you distinguish the right people from dilettantes. The cost of fail depends on your spend, but it could be accumulated, if you will trust wrong data long enough.

### 4 - Make in-house model

Obviously, it is expensive, as it will take anywhere from few weeks to few months of well-trained analysts to create and stabilize it. It is a good way if you are concerned about privacy, or have very specific goals in mind, that not fits into the usual pipeline. Otherwise, it is better to use Open Source.

<br>

## Final word

I would like to make an MMM (in some variant) the part of my weekly or monthly routine, and be more efficient on that way. MMM is only the one puzzle in the global picture of fragmented app marketing tracking, and it is fine to use it with MMP and SKAdNetwork, with product and web analytics. Stay tuned!

<br>

### Helpful materials

- What is Marketing Mix Modelling? 3 Benefits & Limitations — [https://blog.hurree.co/blog/marketing-mix-modeling](https://blog.hurree.co/blog/marketing-mix-modeling)

- Media Mix Modeling for Mobile: What Data is Needed? — [https://phiture.com/mobilegrowthstack/media-mix-modeling-for-mobile-what-data-is-needed/](https://phiture.com/mobilegrowthstack/media-mix-modeling-for-mobile-what-data-is-needed/)

- Regression analysis — [https://en.wikipedia.org/wiki/Regression_analysis](https://en.wikipedia.org/wiki/Regression_analysis)

- Analysts guide to MMM — [https://facebookexperimental.github.io/Robyn/docs/analysts-guide-to-MMM](https://facebookexperimental.github.io/Robyn/docs/analysts-guide-to-MMM)

- How Google LightweightMMM Works — [https://getrecast.com/google-lightweightmmm/](https://getrecast.com/google-lightweightmmm/)

- The MMM Checklist — [https://getrecast.com/mmm-checklist/](https://getrecast.com/mmm-checklist/)

- What does “Bayesian” mean and why is it better? — [https://getrecast.com/bayesian/](https://getrecast.com/bayesian/)

- Why MMM is so hard — [https://getrecast.com/mmm-hard/](https://getrecast.com/mmm-hard/)
