# ReactNative-Boilerplate

A boilerplate for building cross-platform mobile applications using React Native and Expo. This project is designed to help you quickly set up a robust and scalable mobile app with modern tools and best practices.

## Features

- **Expo Router**: Simplified navigation and routing.
- **NativeWind**: Tailwind CSS for styling React Native components.
- **Dark and Light Mode**: Seamless theme switching with persistent mode support.
- **Reusable Components**: Includes common UI components like `ThemeToggle`, `Avatar`, `Button`, `Card`, `Progress`, `Text`, and `Tooltip`.
- **Android Navigation Bar**: Matches the current theme.
- **State Management**: Powered by Zustand for simple and scalable state management.

## Prerequisites

1. Make sure you have a [Supabase](https://supabase.com/) account and have created a new project.
2. Install [Node.js](https://nodejs.org/) and [Expo CLI](https://docs.expo.dev/get-started/installation/).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ReactNative-Boilerplate.git
   cd ReactNative-Boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Fill out your `.env` file with the required environment variables.

4. Run database migrations (if applicable):

   ```bash
   bun migrate:local
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   For specific platforms:
   - Android: `npm run dev:android`
   - iOS: `npm run dev:ios`
   - Web: `npm run dev:web`

## Scripts

- `npm run dev`: Start the Expo development server.
- `npm run clean`: Clean up `.expo` and `node_modules` directories.
- `npm run postinstall`: Generate Tailwind CSS styles.

## Folder Structure

```
src/
├── app/                # Application screens and layouts
├── components/         # Reusable UI components
├── lib/                # Utility functions and hooks
├── assets/             # Static assets like images
├── global.css          # Tailwind CSS configuration
├── package.json        # Project dependencies and scripts
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Screenshots

<img src="https://github.com/mrzachnugent/react-native-reusables/assets/63797719/42c94108-38a7-498b-9c70-18640420f1bc"
     alt="starter-base-template"
     style="width:270px;" />
```
Make sure you have a Supabase account and have created a new project.

After filling out your .env file, run 'bun migrate:local' to create your database tables.

To start the API and web development servers, run 'bun api' and 'bun web' in separate terminal tabs.

```