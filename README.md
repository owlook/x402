# 🧭 BTCNav - Bitcoin Resource Navigator

<div align="center">
  
[![Bitcoin Orange](https://img.shields.io/badge/Bitcoin-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)](https://bitcoin.org)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-orange?style=for-the-badge)](https://github.com)
[![Community Driven](https://img.shields.io/badge/Community-Driven-orange?style=for-the-badge)](https://github.com)

A curated, community-maintained directory of Bitcoin tools, wallets, explorers, and resources.

[Visit Website](https://btcnav.vercel.app) • [Contribute](#-how-to-contribute) • [Report Issue](https://github.com/yourusername/btcnav/issues)

</div>

---

## 🎯 About

BTCNav is an open-source navigation website designed to help the Bitcoin community discover and access essential tools, wallets, block explorers, and educational resources. Built with modern web technologies and designed with the iconic Bitcoin orange theme.

### Features

✨ **Real-time Search** - Filter resources by name, description, or tags  
🏷️ **Smart Filtering** - Browse by category and combine multiple tag filters  
📱 **Responsive Design** - Beautiful experience on desktop and mobile  
🎨 **Bitcoin Theme** - Classic orange and black color scheme  
🔄 **Auto-Deploy** - Contributions are automatically deployed via Vercel  
🌐 **Open Source** - Community-driven and transparent

---

## 💡 How to Contribute

We welcome contributions from the Bitcoin community! Adding a new resource is simple:

### Step 1: Fork the Repository

Click the "Fork" button at the top right of this repository.

### Step 2: Edit the Data File

Edit the `/data/sites.json` file and add your resource following this format:

```json
{
  "name": "Your Resource Name",
  "url": "https://yourwebsite.com",
  "description": "Brief description of what your resource does (keep it under 100 characters)",
  "category": "Explorer",
  "tags": ["Bitcoin", "Open Source", "Tool"],
  "logo": "https://yourwebsite.com/logo.svg"
}
```

#### Available Categories

- `Explorer` - Block explorers and network visualization tools
- `Wallet` - Bitcoin wallets (desktop, mobile, hardware)
- `Node` - Node implementations and management tools
- `Protocol` - Protocol layers and specifications
- `Payment` - Payment processors and merchant tools
- `Tool` - Development tools and utilities
- `Media` - News, education, and content platforms
- `Exchange` - Trading platforms and exchanges
- `NFT` - Ordinals and Bitcoin NFT platforms

#### Field Guidelines

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ Yes | Official name of the resource |
| `url` | ✅ Yes | Full URL starting with https:// |
| `description` | ✅ Yes | Clear, concise description (60-100 chars) |
| `category` | ✅ Yes | One of the categories listed above |
| `tags` | ❌ No | Array of relevant tags for filtering |
| `logo` | ❌ No | Direct URL to logo image (SVG or PNG) |

### Step 3: Submit a Pull Request

1. Commit your changes with a clear message: `Add [Resource Name]`
2. Push to your fork
3. Open a Pull Request to the main repository
4. Wait for review and approval

### Step 4: Automatic Deployment

Once your PR is merged, the website will automatically rebuild and deploy within minutes!

---

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Data**: JSON static files

---

## 🚀 Local Development

Want to run BTCNav locally?

```bash
# Clone the repository
git clone https://github.com/yourusername/btcnav.git
cd btcnav

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see your local instance.

---

## 📋 Project Structure

```
/btcnav
├── /data
│   └── sites.json          # All resource data
├── /src
│   ├── /components         # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterBar.tsx
│   │   └── SiteCard.tsx
│   ├── /pages
│   │   └── Index.tsx       # Main page
│   └── index.css           # Bitcoin theme styles
└── README.md
```

---

## 📜 Guidelines for Submissions

### ✅ We Accept

- Open-source Bitcoin projects
- Established wallets and explorers
- Educational resources and tools
- Developer tools and APIs
- News and media platforms
- Community-recognized services

### ❌ We Don't Accept

- Scams or fraudulent projects
- Shitcoins or non-Bitcoin cryptocurrencies
- Unverified or suspicious platforms
- Resources promoting illegal activities
- Duplicate entries

---

## 🤝 Code of Conduct

This is a community project. Please be respectful, helpful, and constructive in all interactions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💖 Acknowledgments

Built with ❤️ for the Bitcoin community. Special thanks to all contributors who help maintain and improve this resource.

---

## 🔗 Links

- [Website](https://btcnav.vercel.app)
- [GitHub Repository](https://github.com/yourusername/btcnav)
- [Submit an Issue](https://github.com/yourusername/btcnav/issues)
- [Request a Feature](https://github.com/yourusername/btcnav/issues/new)

---

<div align="center">
  
**Made with ⚡ by the Bitcoin community**

</div>
