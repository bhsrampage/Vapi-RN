## The latest and greatest boilerplate for Infinite Red opinions

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Project File Tree

The Ignite boilerplate project's structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   └── app.tsx
├── assets
│   ├── icons
│   └── images
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   └── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Install iOS pods with `npx pod-install`
4. Set up your `.env` file with the required Vapi tokens.
5. Run the local server with `npm start -- --reset-cache`.

### Design Decisions

1. Continued to use predefined icons by the ignite boiler plate for the Mic button.
2. Also added a SignUP screen to make a complete authentication system.
3. I have kept the DemoScreens for future reference regarding code style.
4. if I had more time I would integrate react native gifted chat as well to create a authentic AI assistant experience.
5. I would also add a spectogram like in most poppular applications to show feedback of captured voice.
