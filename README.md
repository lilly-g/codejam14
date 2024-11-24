# sociouts
### _extinguish inefficiency._
_Tired of indecisive planning?_
_Scared to have your ideas shot down?_
_Coordinate group plans with ease using interactive and collaborative selection technology._
_Join a group, select your area, and start swiping!_

## Inspiration
We've always been very indecisive when it comes to organizing hangouts as a friend group. Paralyzed by our anxiety of having our idea shut down immediately, we wanted a system that would allow us to consider all ideas equally and anonymously. Enter _sociouts_, a fast and easy way to plan group outings stress-free!

Tired of indecisive planning?
Scared to have your ideas shot down?
Coordinate group plans with ease with interactive and collaborative selection!
Join a group, select your area, and start swiping!

## What it does
_sociouts_ allows a friend group to collaboratively plan an outing, with custom filters on locations, distance and type of outing. The group can then vote "yes" or "no" on each filtered result, and _sociouts_ will tally up the votes and provide the top 3 destinations! Details on each destination are included during the voting process.

## How we built it
We used Node.js/Express.js for a simple server backend, and Next.js as our frontend. To store our data, we used MongoDB Atlas. For our destination filters, we used the OpenStreetMap database to pull destination information within the given radius and location.

## Challenges we ran into
None of us had used this particular tech stack before, and had very little JavaScript experience before this hackathon. This led to many roadblocks and long hours of reading documentation and watching tutorials on the tech stack.

Our first thought was to use the Google Maps API for location querying, but after some research, we saw that it was locked behind a paywall - which pushed us to look for other solutions, like OpenStreetMap.

## Accomplishments that we're proud of
We were able to learn a lot about the MERN stack, and we put together a final product with most of the functionality that we set out to implement. We have a working MongoDB database, and built a CRUD API to query it.

## What we learned
The intricacies of different JS frameworks, and how our frontend made API calls to our backend, and in turn our database. Styling with Tailwind CSS.

## What's next for sociouts
Completing the voting system, polishing up the UI and adding more features, such as the manual addition of destinations into the final list to be voted on.

