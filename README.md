# Holidaze

# Holidaze

<img src="holidaze_promo_img.png" width="1280"/>

A website that users can search through venues and create a booking at a them. A venue manager can create venues, update and delete them. They can also see the bookings of each venue. A venue manager can only update or delete the venue they created, otherwise they will be shown a message at the top of the venue that they do not have permission to do this. Only users/venue managers with a @stud.noroff.no email can successfully register and login.

## Description

The user needs to register with a @stud.noroff.no email, in order to login and use the website. When registering the user can choose to be a venue manager or not by ticking the selection box in the register form. This role can be changed in the profile page later on also.

When logged in the user can view a list of venues in the venues page. Here they can also search through the list by title and choose which venue they want to click on.

Once a venue card is clicked on, they are taken to a page where they can view details on that specific venue. At the top the user can only see a booking button. The venue manager will either see the delete and update venue button, or a text saying that they are not the owner of that venue. I have set it up so you need to be the owner of that venue in order to view and use those buttons.

Further down the user can view a calendar and the avaliable dates to book. I have not made this work, so I made it possible to view the bookings for the venue and the calendar. I have written more about this in the issues part of this README.md.

On the profile page the user can view their avatar, name, email and if they are a venue manager or not. Below this the user can update their avatar or change their role to venue manager. If the user is already a venue manager they will also see a create venue button.

Below those buttons, the user can view a list of their bookings, and venue managers can also view a list of their created venues. Each card, be it booking or venue, will take the user to a page which will display details on that specifin venue or booking.

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

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Fontawsome](fontawsome.com)
- [antdesign]
- [vite]

## How to set up locally

To set up and test out the website locally on your desktop, click the code-button and open the project with gitthub desktop. Then you clone the project to your pc and open it up in VsCode or another coding app your use. You might need to do "npm i", before you can view the website locally in your browser. After that you just type and execute "npm run dev" and then click the localhost link that you get in the terminal.

Once the website is up in your browser, you need to register first. You can only register by using a @stud.noroff.no email. You don't need an official one, so feelfree to create your own. When you register you can choose to be a venue manager or not, by ticking the box for that in the register form. You can also change your role once you are logged in, by going to your profile page and press update venuemanager button.

## Links

Prototypes:
iPad - https://xd.adobe.com/view/f189cb20-369a-4fdc-8120-7babfc10e468-a4da/
phone - https://xd.adobe.com/view/9e98636e-e487-4f4c-86e1-ddfff4d5ddb2-cbcb/
desktop - https://xd.adobe.com/view/0d88e179-c880-491c-a2de-25361bba13ef-58db/

style guide - https://xd.adobe.com/view/b1a6dae5-e3ce-4837-8bee-72844e3fc460-e4f5/

Gantt chart - https://trello.com/b/RQoZEvgG/holidaze-project-exam-2

Kanban board - https://xd.adobe.com/view/fc330ee0-e56b-45b8-9cf4-342b5cf5776b-a960/

## Contact

[email address](audunroald@gmail.com)
