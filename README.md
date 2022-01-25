# GK Education App with Next.js.

We are four web developerment students 💻 in DCI (Digital Career Institute) who grouped together and work on the final project.

As conscious parents we are interested in finding helpful and engaging materials for our children 🐵 to learn new information and skills. There is a standard age based curriculum that all children must align with, based on where they reside in the world. The standardization of this information is often presented in a way that fails to create engagement and positive attitudes towards said subjects.

Cognitive psychologist Jerome Bruner suggests 📣 we are 22 times more likely to remember a fact when it has been wrapped in a story. Studies show that playing video games 🎮 encourages critical thinking, improves motor skills and promotes key social skills like leadership and team building 🆒.How can we combine curriculum based information, story telling and video games to help children learn❓

---

## Idea

Enter a choose your own adventure type learning application 🏆 that uses a database of curriculum based information attached to a visual story and game like interaction. The core concept is that in order to progress the story, children must correctly answer curriculum ✅ based questions matching their age group. Incentive type collectible items would be included in the game, these items can be used to help children progress or be used for secret endings. As a choose your own adventure their will be multiple ways to navigate to the end of the story and multiple ways to be side tracked and redirected and given a chance to get back on track by answering more questions or using collected items.

---

## Geniuses are Here 👽 (in alphabetical order)

- Bella, Byulim Yang
- Heather Fisher
- Josh Zermeno
- Holly, Tung Ching Lui 🇭🇰

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

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

---

## Our Heart of Structure 💙

- Each new game has a folder

```bash
Example of folder name: game_example
```

- Inside each folder, there is one index.jsx file.

```bash
Such as: game_example > index.jsx
```

- All reused components place inside components folder

```bash
  For example: components > ReusedComponentExample.jsx
```

- All others such as audios, data, images... you can place inside assests folder
- For each section (images, audios, or data), it is nice to create a folder related to that game.

```bash
  assests > images > game_example
  assests > audios > game_example
  assests > data > game_example
```

- All contexts will be placed inside context folder

```bash
  For example: context > ExampleContext.js
```

## Reference

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js Crash Course](https://youtu.be/mTz0GXj8NN0) - learn about Next.js in YouTube.
- [Next.js code](https://github.com/bella-ent/tests-for-final-project) by Bella
- [Next.js code](https://github.com/hollylui/Nextjs) by Holly
- [Trial version](https://github.com/hollylui/game-draft-v2) by Holly

```

```
