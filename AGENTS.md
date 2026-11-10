# Steamdle - Project Instructions

## 1. Project Overview

Steamdle is a lightweight web game inspired by Scrandle.

Players compare two Steam games and guess which game has a higher positive user review percentage.

The game provides two modes:
- Daily Challenge: A fixed set of 10 rounds shared by all users each day.
- Random Challenge: A randomly generated set of 10 rounds.

## 2. Tech Stack

- React
- TypeScript
- Vite
- CSS
- Steam Store / Steamworks API
- localStorage
- GitHub Pages

## 3. Technical Constraints

- Keep the project lightweight.
- Do not introduce a backend server.
- Do not use a database.
- Avoid unnecessary dependencies.
- Prefer native React hooks over external state management libraries.
- Use static JSON datasets whenever possible.
- Never expose Steam API credentials in client-side code.
- Keep the application compatible with GitHub Pages.
- Support both desktop and mobile browsers.

## 4. Game Rules

- Each session consists of exactly 10 rounds.
- Each round presents two different Steam games.
- Players select the game with the higher positive review percentage.
- Positive review percentage is calculated as:

  positiveReviews / (positiveReviews + negativeReviews) * 100

- Correct answer will be decided up to the first decimal point number(00.0%). Game should not provide the tie case where it has exactly same percentage; block this case upon the round generation.
- Reveal both games' review percentage after selection, up to the first decimal point number(00.0%).
- Display the final score after round 10.

## 5. Game Modes

### Daily Challenge
- Use a deterministic date-based seed.
- All players must receive the same 10 rounds on the same date.
- Use a versioned dataset to prevent daily questions from changing unexpectedly.
- Allow only one completed daily attempt per date, using localStorage.

### Random Challenge
- Generate a random set of 10 rounds.
- Do not repeat games within a session.
- Allow unlimited replay.

## 6. UI / UX

- Use Scrandle as a layout and interaction reference, not as an asset to copy.
- Create a clean, dark, Steam-inspired visual design.
- Display game artwork, game titles, prices, and trailers.
- Clearly distinguish the selected answer and the correct answer.
- Make the layout responsive for desktop and mobile.
- Prioritize usability and visual consistency.

## 7. Development Rules

- Implement features incrementally.
- Do not modify unrelated files unnecessarily.
- Explain important architectural decisions.
- Run TypeScript checks and production builds after major changes.
- Do not silently ignore API errors or missing game data.
- Use meaningful component and variable names.
- Keep game logic separate from UI components.

## 8. Out of Scope for MVP

- User accounts
- Multiplayer
- Leaderboards
- Online score synchronization
- Backend servers
- Database
- Monetization