# 🎈 Bloons Tower Defense Upgrade Calculator

A web-based upgrade cost calculator for Bloons Tower Defense games with Discord Bot integration.

## 🚀 Features

- **Web Interface**: Interactive calculator to select towers and upgrades
- **Cost Breakdown**: Detailed breakdown of tower base costs and upgrade expenses
- **Total Cost Calculation**: Automatically calculate total cost for selected upgrades
- **Discord Bot Integration**: Use `/calculate` and `/towers` commands in Discord
- **Expandable Design**: Easily add more towers and games from the Bloons series

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Discord Bot Token (for Discord bot functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/user043-tech/bloons-tower-defense-upgrade-calculator.git
   cd bloons-tower-defense-upgrade-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Add your Discord Bot Token** (optional, only if using Discord bot)
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create a new Application
   - Go to "Bot" section and click "Add Bot"
   - Copy the token and paste it in `.env` file:
     ```
     DISCORD_TOKEN=your_bot_token_here
     ```
   - Enable "Message Content Intent" in Bot settings
   - In OAuth2 → URL Generator, select `bot` scope and `Send Messages` permission
   - Use the generated URL to invite the bot to your server

## 🏃 Running the Application

### Web Server Only
```bash
npm start
```
The web interface will be available at `http://localhost:3000`

### Discord Bot Only
```bash
npm run bot
```

### Both (in separate terminals)
Terminal 1:
```bash
npm start
```

Terminal 2:
```bash
npm run bot
```

## 💻 Web Interface Usage

1. Open `http://localhost:3000` in your browser
2. Select towers by checking their boxes
3. Choose upgrades for each tower (Top, Middle, Bottom paths)
4. Click "Calculate Total Cost" to see the breakdown
5. View the cost breakdown and total cost
6. Click "Reset" to start over

## 🤖 Discord Bot Usage

### Commands

**`/towers`** - List all available towers
```
/towers
```

**`/calculate`** - Get detailed upgrade costs for a specific tower
```
/calculate tower:Dart Monkey
```

## 📁 Project Structure

```
bloons-tower-defense-upgrade-calculator/
├── data/
│   └── towers.json           # Tower data and upgrade information
├── src/
│   ├── server.js             # Express server and API routes
│   └── discord-bot.js        # Discord bot implementation
├── public/
│   ├── index.html            # Web interface HTML
│   ├── styles.css            # Web interface styling
│   └── app.js                # Web interface JavaScript
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 📝 API Endpoints

### GET `/api/towers`
Get all available towers

**Response:**
```json
[
  {
    "id": "dart-monkey",
    "name": "Dart Monkey",
    "baseCost": 1200,
    "upgrades": { ... }
  }
]
```

### GET `/api/towers/:towerId`
Get specific tower details

### POST `/api/calculate`
Calculate total upgrade costs

**Request:**
```json
{
  "towers": [
    {
      "towerId": "dart-monkey",
      "topUpgrades": [1, 2, 3],
      "middleUpgrades": [],
      "bottomUpgrades": [1]
    }
  ]
}
```

**Response:**
```json
{
  "breakdown": [
    {
      "tower": "Dart Monkey",
      "baseCost": 1200,
      "upgrades": [...],
      "subtotal": 3200
    }
  ],
  "totalCost": 3200
}
```

## 🔄 Adding More Towers

To add more towers from BTD6 or other Bloons games:

1. Edit `data/towers.json`
2. Add a new tower object with:
   - `id`: Unique identifier (e.g., "glue-gunner")
   - `name`: Display name
   - `baseCost`: Base tower cost
   - `upgrades`: Object with `top`, `middle`, `bottom` paths
3. Each upgrade needs: `tier` (1-5), `cost`, and `name`

Example:
```json
{
  "id": "glue-gunner",
  "name": "Glue Gunner",
  "baseCost": 1400,
  "upgrades": {
    "top": [
      { "tier": 1, "cost": 450, "name": "Bigger Globs" },
      ...
    ],
    ...
  }
}
```

## 🤝 Contributing

Feel free to contribute! To add support for more towers or Bloons games:

1. Fork the repository
2. Create a feature branch
3. Add your changes (new towers, improvements, etc.)
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 About Bloons Tower Defense

Bloons Tower Defense is a tower defense game series created by Ninja Kiwi. This calculator is a fan-made tool to help players optimize their tower upgrades.

## 📮 Support

For issues, questions, or suggestions, please open an issue on GitHub!

---

Made with ❤️ for BTD Players | v1.0.0
