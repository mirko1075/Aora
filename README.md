# AORA

[![logo](https://res.cloudinary.com/dbggt3o28/image/upload/v1605774696/AORA-logo_AORA_-_PNK_-_Tagline_ful5wg.jpg)](https://res.cloudinary.com/dbggt3o28/image/upload/v1605774696/AORA-logo_AORA_-_PNK_-_Tagline_ful5wg.jpg)

## Description

In Aora, users will take fitness clases from an instructor in a live feed wherever and whenever they want. Users can schedule clases depending on their time availability and keep a log of classes they have taken in the past.

## User Stories

- **Homepage** - As a user, I want to check the calendar for upcoming classes and get active! 🏠
- **Calendar results** - As a user I want to see a list of classes available for today displayed on a timetable, the posibility to see upcoming days and a way to filter criteria to match my needs. 🔎
- **Class information** - As a user I want to be able to click on a class, see the information on the class schedule, goal, duration and instructor, adding it to my schedule or deleting it. 💪
- **Sign Up** -As a user I want to sign up quickly and get in there, straigth to Aora. 🏋️‍♂️
- **Log In** - As a user I want to be greeted with a HELLO! and riderected to the homepage. 🙌 
- **Log Out** - As a user I want to be  You are done with your workout, you can log out so no one can access your account. 👋
- **User Profile** - As users, we want to be able to edit our profiles whenever we need it. Here we will have our personal information, a profile picture, classes we have done in the past and upcoming classes that we have signed up for. 🥊

## Server Routes (back-end)

| **Method** | **Route**                                 | **Description**                                              | **Request - Body**                                           |
| ---------- | ----------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `GET`      | `/`                                       | Main page route. Renders home `index` view. With calendar.   |                                                              |
| `GET`      | `/private/my-schedule`                    | Renders `/private/my-schedule`form view                      |                                                              |
| `GET`      | `/private/class-details/:idClass`         | Renders `/private/class-details`form view.                   |                                                              |
| `POST`     | `/private/class-details/:idClass`         | Manage schedule and unschedule. Renders `/private/class-details`form view. | {name, description, closure message, schedule, duration, class type, difficulty, url} |
| `GET`      | `/private/class-schedule/add/:idClass`    | Add class to user's schedule                                 | {User.class: [ClassId]}`                                     |
| `GET`      | `/private/class-schedule/delete/:idClass` | Delete class from user's schedule                            | {User.class: [ClassId]}`                                     |
| `GET`      | `/signup`                                 | Renders `auth/signup` form view.                             |                                                              |
| `POST`     | `/signup`                                 | Sends Sign Up info to the server and creates user in the DB. Renders `auth/signup` view. | {email, password, repeat password}                           |
| `GET`      | `/login`                                  | Renders `auth/login` form view.                              |                                                              |
| `POST`     | `/login`                                  | Sends Log In form data to the server and redirects to homepage. | {email, password}                                            |
| `GET`      | `/logout`                                 | Logges user out and redirects to `login` view.               |                                                              |
| `GET`      | `/private/profile/:userId`                | Private route. Renders `private/profile` view.               |                                                              |
| `GET`      | `/private/edit-user/:userId`              | Private route. Renders `private/edit-user` form view.        |                                                              |
| `POST`     | `/private/edit-user/:userId`              | Private route. Sends edit-profile info to server and updates user in DB and in `profile` view. | {[imageUrl], name, lastName, gender, e-mail, birthDate, city, country, password, type, height, weight, goal, body type} |
| `GET`      | `/private/live-class/:classId`            | Renders the `/private/live-class`view class live feed.       |                                                              |

## Models

USERS

```
{
  name: String,
  lastName: String,
  email: {type: String, unique: true },
  gender: String,
  birthDate: Date,
  city: String,
  country: String,
  password: String,
  userType: {type: String, enum:["user","trainer"]},
  picUrl: String,
  userHeight: Number,
  userWeight: Number,
  userGoal:   {type: String, default: "", enum: ["STRENGHT","WEIGHT LOSS", "MASS GAIN", "GENERAL HEALTH"]} ,
  userBodyType:  {type: String, default: false, enum: ["Ectomorph", "Endomorph","Esomorph"]} ,
  userWeightGoal: Number,
  trainerBio: String,
  trainerRate: Number,
  scheduledClasses: [{ type: Schema.Types.ObjectId, ref: ‘Class’ }]
}
```

CLASSES

```
{
  trainer: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: {String, unique: true},
  description: String,
  closureMessage: String,
  scheduled: Date,
  duration: Number,
  classType:  {type:String, enum:["Hiit", "Strenght", "Stretch"]} ,
  difficulty: {type:String, enum: ["Hard", "Medium", "Easy"]},
  url: String,
  equipment: [{type:String, enum:["Yoga mat", "Dumbells", "Elastic band", "None"]}]
}
```

## Backlog

- Instructor option such as setting up a profile and a class, checking user's profile.
- Badges, prices, achievements.
- Allow users to interact with each other and see others' profiles.
- Video on demand.
- Live feed join button.
- Multi timezone.

## Links

#### Git

[Repository Link](https://github.com/mirko1075/Aora)

[Deploy Link](https://why-so-serial.herokuapp.com/)

#### Trello

[Our Trello board](https://trello.com/b/yAu4Puzc/aora)

#### Figma

[Jaw dropper](https://www.figma.com/file/xDs3PWFw0z6c81lIGlABfs/AORA-%40-Ironhack?node-id=872%3A21155)

