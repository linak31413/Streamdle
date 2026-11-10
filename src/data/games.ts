export type Game = {
  id: number
  title: string
  subtitle: string
  price: string
  positiveReviews: number
  negativeReviews: number
  artwork: string
  accent: string
  trailerLabel: string
}

export const games: Game[] = [
  { id: 1145360, title: 'Hades', subtitle: 'Rogue-like · Mythology', price: '$24.99', positiveReviews: 195412, negativeReviews: 3124, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg', accent: '#ff765d', trailerLabel: 'A godlike escape attempt' },
  { id: 413150, title: 'Stardew Valley', subtitle: 'Farming Sim · Cozy', price: '$14.99', positiveReviews: 315822, negativeReviews: 8270, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg', accent: '#e2c16c', trailerLabel: 'Your new life begins here' },
  { id: 367520, title: 'Hollow Knight', subtitle: 'Metroidvania · Souls-like', price: '$14.99', positiveReviews: 286510, negativeReviews: 4387, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg', accent: '#8ba7d6', trailerLabel: 'Beneath the fading town' },
  { id: 1091500, title: 'Cyberpunk 2077', subtitle: 'RPG · Open World', price: '$59.99', positiveReviews: 718431, negativeReviews: 189420, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg', accent: '#f4d72a', trailerLabel: 'Welcome to Night City' },
  { id: 1151640, title: 'Horizon Zero Dawn', subtitle: 'Action RPG · Adventure', price: '$39.99', positiveReviews: 70682, negativeReviews: 13649, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/library_600x900.jpg', accent: '#9cbb59', trailerLabel: 'A world reclaimed by nature' },
  { id: 292030, title: 'The Witcher 3', subtitle: 'RPG · Story Rich', price: '$39.99', positiveReviews: 707483, negativeReviews: 16082, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg', accent: '#d3aa72', trailerLabel: 'The final hunt begins' },
  { id: 105600, title: 'Terraria', subtitle: 'Sandbox · Survival', price: '$9.99', positiveReviews: 1057900, negativeReviews: 21500, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/library_600x900.jpg', accent: '#78b768', trailerLabel: 'Dig, fight, explore, build' },
  { id: 1086940, title: "Baldur's Gate 3", subtitle: 'RPG · Turn-Based', price: '$59.99', positiveReviews: 650281, negativeReviews: 21566, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', accent: '#bc796f', trailerLabel: 'Gather your party' },
  { id: 255710, title: 'Cities: Skylines', subtitle: 'City Builder · Simulation', price: '$29.99', positiveReviews: 186245, negativeReviews: 10428, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/255710/library_600x900.jpg', accent: '#67bfd0', trailerLabel: 'Build the city of tomorrow' },
  { id: 620, title: 'Portal 2', subtitle: 'Puzzle · Co-op', price: '$9.99', positiveReviews: 305188, negativeReviews: 3011, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg', accent: '#67afe4', trailerLabel: 'The test is about to begin' },
  { id: 570, title: 'Dota 2', subtitle: 'MOBA · Strategy', price: 'Free to play', positiveReviews: 1684200, negativeReviews: 384500, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/570/library_600x900.jpg', accent: '#c4544c', trailerLabel: 'A battle of ancient powers' },
  { id: 271590, title: 'Grand Theft Auto V', subtitle: 'Action · Open World', price: '$29.99', positiveReviews: 1320700, negativeReviews: 206490, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/library_600x900.jpg', accent: '#80b85c', trailerLabel: 'Three lives. One city.' },
  { id: 440, title: 'Team Fortress 2', subtitle: 'FPS · Team-Based', price: 'Free to play', positiveReviews: 975422, negativeReviews: 73814, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/440/library_600x900.jpg', accent: '#da9a62', trailerLabel: 'Meet the team' },
  { id: 292910, title: 'Black Mesa', subtitle: 'FPS · Sci-Fi', price: '$19.99', positiveReviews: 63282, negativeReviews: 3152, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/362890/library_600x900.jpg', accent: '#d4ac5e', trailerLabel: 'Rise and shine, Mr. Freeman' },
  { id: 250900, title: 'The Binding of Isaac: Rebirth', subtitle: 'Rogue-like · Action', price: '$14.99', positiveReviews: 186273, negativeReviews: 5632, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/250900/library_600x900.jpg', accent: '#dba875', trailerLabel: 'A tale of sacrifice' },
  { id: 391540, title: 'Undertale', subtitle: 'RPG · Indie', price: '$9.99', positiveReviews: 146281, negativeReviews: 4384, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/391540/library_600x900.jpg', accent: '#b4a1c2', trailerLabel: 'The friendly RPG' },
  { id: 236850, title: 'Europa Universalis IV', subtitle: 'Strategy · Grand Strategy', price: '$39.99', positiveReviews: 68242, negativeReviews: 12391, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/236850/library_600x900.jpg', accent: '#d6b674', trailerLabel: 'Shape a nation through history' },
  { id: 489830, title: 'The Elder Scrolls V: Skyrim', subtitle: 'RPG · Open World', price: '$39.99', positiveReviews: 306884, negativeReviews: 17242, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/489830/library_600x900.jpg', accent: '#afbdc0', trailerLabel: 'The dragonborn returns' },
  { id: 252490, title: 'Rust', subtitle: 'Survival · Multiplayer', price: '$39.99', positiveReviews: 476145, negativeReviews: 104843, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/252490/library_600x900.jpg', accent: '#d78d62', trailerLabel: 'Survive together. Or alone.' },
  { id: 108600, title: 'Project Zomboid', subtitle: 'Survival · Sandbox', price: '$19.99', positiveReviews: 214239, negativeReviews: 11945, artwork: 'https://cdn.akamai.steamstatic.com/steam/apps/108600/library_600x900.jpg', accent: '#9eaa74', trailerLabel: 'This is how you died' },
]

export const roundPairs: [number, number][] = [
  [0, 1], [2, 3], [4, 5], [6, 7], [8, 9],
  [10, 11], [12, 13], [14, 15], [16, 17], [18, 19],
]

export function getPositivePercentage(game: Game): number {
  return Math.round((game.positiveReviews / (game.positiveReviews + game.negativeReviews)) * 1000) / 10
}
