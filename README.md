# 🎈 Bloons Upgrade Manager

A web-based upgrade cost calculator for Bloons Tower Defense games with Discord Bot integration.

## 🚀 Features

- **Web Interface**: Interactive calculator to select towers and upgrades (runs locally)
- **Cost Breakdown**: Detailed breakdown of tower base costs and upgrade expenses
- **Total Cost Calculation**: Automatically calculate total cost for selected upgrades
- **Discord Bot Integration**: Use `/towers` and `/calculate` commands in Discord
- **No Backend Required**: Fully static website - works on GitHub Pages or locally
- **Expandable Design**: Easily add more towers and games from the Bloons series

## 📋 Prerequisites

- Node.js (v14 or higher) - only for Discord Bot
- npm or yarn
- Discord Bot Token (for Discord bot functionality)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/user043-tech/bloons-upgrade-manager.git
   cd bloons-upgrade-manager
   ```

2. **For Discord Bot only - Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Add your Discord Bot Token**
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

### Web Interface (Static - No Server Needed)

**Option 1: Open locally**
- Open `public/index.html` in your browser
- Or use a simple HTTP server:
  ```bash
  # Python 3
  python -m http.server 8000
  # Then open http://localhost:8000/public/
  ```

**Option 2: View on GitHub Pages**
- Visit: https://user043-tech.github.io/bloons-upgrade-manager

### Discord Bot (Runs on Your PC)
```bash
npm install
node src/discord-bot.js
```

## 💻 Web Interface Usage

1. Open the interface (locally or via GitHub Pages)
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
bloons-upgrade-manager/
├── public/                   # Static website
│   ├── index.html           # Web interface HTML
│   ├── styles.css           # Web interface styling
│   ├── app.js               # Web interface JavaScript
│   └── data/
│       └── towers.json      # Tower data
├── src/
│   ���── discord-bot.js       # Discord bot (local only)
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── package.json             # Project dependencies
└── README.md                # This file
```

## 🔄 Adding More Towers

To add more towers from BTD6 or other Bloons games:

1. Edit `public/data/towers.json`
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