# Paperclips (front end)
* A JS React/Ruby on Rails journaling app that allows users to track word counts, writing analytics, and awards cute animal pics for hitting goals.  

![demo-of-app](https://github.com/cooljasonmelton/paperclips-front-end/blob/master/Animated%20GIF-downsized_large%20(2).gif?raw=true)​

## Application Features
* Text area for daily journal entries that tracks word count
* Writing prompts scraped from https://thejohnfox.com/2016/06/creative-nonfiction-prompts/
* Awards cute animal pictures for every 100 words from Unsplash API (https://unsplash.com/)
* <a href='https://github.com/fullcalendar/fullcalendar-react'> Calender </a> that shows progress and allows user to read old journal entries.

## Built With​
* React.js
* Ruby on Rails RESTful API
* Redux and BrowserRouter
* FullCalender
* Semantic UI
​
## Installation Instructions
1. Cd into preferred directory and clone repo for front-end and back-end:
```bash
git clone git@github.com:cooljasonmelton/flat-note-front-end.git
git clone git@github.com:cooljasonmelton/flat-note-back-end.git
```
2. Cd into directory 'flat-note-back-end' repo directory and migrate database:
```bash
rails db:migrate
```
3. Start a rails server:
```bash
rails server
```
4. Open a new terminal tab. Cd into 'flat-note-front-end'. Install and run npm:
```bash
npm install && npm start
```
When prompted, run npm in a new port:
```bash
Y
```
5. Navigate browser to window opened by npm, by default: <a href='http://localhost:3001/'> http://localhost:3001/ </a> 

## Author
* <a href='https://github.com/cooljasonmelton'> Jason Melton</a>

## Acknowledgments
* Special thanks to Raza Jafri and Derek Castillo for all the help.




