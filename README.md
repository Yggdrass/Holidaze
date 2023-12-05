# Holidaze

![image description](main/holidaze_promo_img.png)


## Project Process

I started the project by setting up a plan for what parts of the website that was needed. Then I plotted them into a Trello board. This way I could plan out the time needed to complete each part and space the work out evenly over the period of the Exam.
I started first to create a style guide in adobe XD so I could get a general idea of what elements of colour, icons etc that I wanted to use. My idea behind this venue booking site, was a website for "princesses" of all agaes and genders. Therefore I went with the pink and purple colours as well as the royal-like looking background images. I wanted to meet the feeling of exclusive and royal for the user.

After the style guide I created the project prototype, so I could give the customer a feeling of how it would feel like on all platforms like desktop, iPad and phone. The final design might change after this part of the process, but it is mostly for the customer to get a general feel for the website before creation.

When I started to work on the website it self, I wanted to test out working with React in Vite. We have previously worked with create-react-app but I felt there were alot of lag, so I wanted to test out how Vite would feel and work in comparison. I used elements from Bootstrap for the forms and modals. Otherwise I used mostly React and buildt things by hand. The Calender was from Ant design, a website I have never worked with before and it was hard to understand how to use their componants. 

To design the look of the components, I opted to use module.css. I used a few css-files in a css folder and one for each page that also was connected to the components within that page. In the main css folder I put files that handle the buttons, modals etc, so files with alot of classNames that are of the same group. In each page folder I kept a css.module per page that also contains aspects of classes for the components within that page.
I also set up a storage folder that kept consts regarding the accesstoken and profile, and also handling of the localstorage.
I moved the components into a components folder and structurized them into other folders inside of that.


## Issues

I had alot of trouble building the calendar and making iot possible to set the dates from the venues booking, so the user can see the avaliable booking dates. I tried to get the dateFrom and dateTo from the bookings, set them in a range function and then match themup with the calendars dates, and then the dates that match would be disabled. I only managed to show the bookings with dates on the venue details page and disable dates prior to the current date. I have never in my time at Noroff been tought how to build and use a calendar and I tried alot of different variations onliune, but nothing worked and the last one I implemented was one that was provided to my be a teacher. So I didn't manage to implement this feature correctly as I have never done it before and the docs on Ant Design was impossible to understand. So I did the next best thing, and that is what you can see on the venue details page.

I also had lots of issues trying to host the website on Netlify or Github pages. I tried to follow a guide from Noroff from js-frameworks on how to host on netlify but it didn't work.
