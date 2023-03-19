<h1>Task Management App</h1>

Task management application for organizing your daily tasks.

#

## Table of Contents

[](#)

- [](#)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
- [](#-1)
  - [Tech Stack](#tech-stack)
- [](#-2)
  - [Getting Started](#getting-started)
- [](#-3)
  - [Project Structure](#project-structure)

## Prerequisites

- <img style="padding-right:10px;" align="left"  src="readme/assets/NodeJs.png"   height="22"/> <p>_Node JS @12.X and up_</p>
- <img style="padding-right:10px;" align="left"  src="readme/assets/Npm.png"   height="20"/> <p>_npm @6 and up_</p>

#

## Tech Stack

- <img style="padding-right:10px;" align="left"  src="readme/assets/React.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[React @18.2.0]</a> - The library for web and native user interfaces<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Vite.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[Vite @4.0.0]</a> - Build tool that aims to provide a faster and leaner development experience for modern web projects.<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Typescript.png"   height="20"/> <p><a href="https://www.typescriptlang.org/" target="_blank">[Typescript @4.7.4]</a> - TypeScript is JavaScript with syntax for types.<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/TailwindLogo.png"   height="15"/> <p><a href="https://tailwindcss.com/" target="_blank">[tailwindcss @3.1.3]</a> - CSS framework<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Axios.png"   height="15"/> <p><a href="https://axios-http.com/" target="_blank">[axios @0.27.2]</a> - Promise based HTTP client for the browser and node.js<p/>

- <img style="padding-right:10px;" align="left"  src="readme/assets/Formik.png"   height="20"/> <p><a href="https://formik.org/" target="_blank">[formik @2.2.9]</a> - Open source form library for React and React Native<p/>

- <p><a href="https://www.npmjs.com/package/yup" target="_blank">yup @0.32.11</a> - Schema builder for value parsing and validation.<p/>

#

## Getting Started

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/Ana-Vartasashvili/task-management-app.git
```

2\. Navigate to the repository

```sh
cd task-management-app/
```

3\. Next step requires install all the dependencies

```sh
npm install
```

or

```sh
yarn install
```

4\. copy .env

```sh
cp .env
```

5\. after that you can run application from terminal:

```sh
npm run dev
```

Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

#

## Project Structure

```bash

├─── public
├─── readme
├─── src
│     ├── components
│         ├── authForm
│             ├── AuthFormCard.tsx
│             └── AuthFormInput.tsx
│         ├── card
│             └── Card.tsx
│         ├── navbar
│             ├── Navbar.tsx
│             ├── NavbarItem.tsx
│             └── types.d.ts
│         ├── sidebar
│             └── Sidebar.tsx
│         ├── task
│             └── AddTask.tsx
│         ├── tasks
│             ├── TaskListItem.tsx
│             ├── TasksList.tsx
│             └── types.d.ts
│     ├── icons
│     ├── illustrations
│     ├── pages
│         ├── allTasks
│             ├── AllTasks.tsx
│             ├── AllTasksList.tsx
│             └── AllTasksListItem.tsx
│         ├── home
│             └── Home.tsx
│         ├── pageNotFound
│             └── PageNotFound.tsx
│         ├── signedUp
│             └── SignedUp.tsx
│         ├── signIn
│             ├── SignIn.tsx
│             └── useSignIn.ts
│         ├── signUp
│             ├── SignUp.tsx
│             └── useSignUp.ts
│         ├── tasks
│             ├── Tasks.tsx
│             ├── useAddTask.ts
│             ├── useDeleteTask.ts
│             ├── useGetTasks.ts
│             ├── useSignOut.ts
│             └── useUpdateTaskIsCompleted.ts
│         ├── types.d.ts
│     ├── schemas
│         ├── signInSchema.ts
│         └── signUpSchema.ts
│     ├── services
│         ├── authServices.ts
│         └── axios.ts
│     ├── store
│         ├── store.ts
│         └── tasksSlice.ts
│     ├── types
│         └── global.d.ts
│     ├── App.tsx
│     ├── index.css
│     ├── main.tsx
│     └── vite-env.d.ts
│- .env
│- .gitignore
│- .prettierrc.json
│- package-lock.json
│- package.json
│- postcss.config.js
│- README.md
│- tailwind.config.cjs
│- tsconfig.json
│- tsconfig.node.json
│- vercel.json
│- vite.config.ts


```
