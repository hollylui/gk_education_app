# GK Education App with Next.js.

We completed this project at the end of a web development course with the Digital Career Institute (DCI) which is a MERN stack bootcamp. The project was completed in 7 weeks, which included learning NextJS from scratch. 

---

## Idea

- A platform of multi-media "choose your own adventure" educational games for preschool to elementary school aged kids

We tried to develop this game "Volcano Animal Rescue" as a framework which could be used to make additional games. After entering in user data, the user goes through the story line and periodically answers quiz questions. Correct answers earn a special item. When the user collects all special items, the special ending is unlocked.

---

## Technologies 
 
NextJS enhanced the performance of our app, enabling all of the html pages to be pre-rendered. We used getStaticProps to pre-render data from our database. 

We used LottieJS to create animations because we found it convenient to make vectors using AdobeXD and control them using afterEffects. 
 
MongoDB was included in our course curriculum with DCI, so we used it to store collections of story text and a collection of educational questions.

We used the Microsoft Speech to Text Generator to record audio versions of the story text, but would have used a speech-to-text API if we had more time. 

---

## Team Members (in alphabetical order)

- Bella, Byulim Yang
- Heather Fischer
- Josh Zermeno
- Holly, Tung Ching Lui

---

## Let's Rock 💥

:one: **First, install package**

```bash
npm i
```

:two: **Second, place your mogodb link in .env.local**

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>/gk_education?retryWrites=true&w=majority
```

:three: **Third, run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To use the project, you can create MongoDB collections with the same structure or text as in the “Data Structure” repo referenced below. Create also a questions collection with the following data structure: 
{"text":"question text", 
"answers":[
{"text":"answer text", "correctAnswer":boolean},
{"text":"answer text", "correctAnswer":boolean}, 
{"text":"answer text", "correctAnswer":boolean}, 
{"text":"answer text", "correctAnswer":boolean}
]}

---

```

## Reference

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js Crash Course](https://youtu.be/mTz0GXj8NN0) - learn about Next.js in YouTube.

[data structure](https://github.com/hollylui/data_structure) by Holly and Bella

- [Next.js code](https://github.com/bella-ent/tests-for-final-project) by Bella
- [Next.js code](https://github.com/hollylui/Nextjs) by Holly
- [app draft v2](https://github.com/hollylui/game-draft-v2) by Holly
- 
- [app draft v3](https://github.com/hollylui/game-draft-v3.git) by Holly
- [Animation](https://github.com/JoshZed/volcanoisland) by Josh

```

```
