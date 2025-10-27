# 🧭 x402 Navigator - Payment Protocol Resources

<div align="center">
  
[![x402 Protocol](https://img.shields.io/badge/x402-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)](https://x402.gitbook.io/x402)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-orange?style=for-the-badge)](https://github.com)
[![Community Driven](https://img.shields.io/badge/Community-Driven-orange?style=for-the-badge)](https://github.com)

A curated, community-maintained directory of x402 payment protocol tools, APIs, and resources.

[Visit Website](https://x402nav.vercel.app) • [Contribute](#-how-to-contribute) • [Report Issue](https://github.com/owlook/x402/issues)

</div>

---

## 🎯 About

x402 Navigator is an open-source directory designed to help developers and businesses discover x402-compatible tools, APIs, payment processors, and resources. The x402 protocol enables services to charge for API access directly over HTTP using the 402 Payment Required status code, supporting crypto-native payments for speed, privacy, and efficiency.

### Features

✨ **Real-time Search** - Filter resources by name, description, or tags  
🏷️ **Smart Filtering** - Browse by category and combine multiple tag filters  
📱 **Responsive Design** - Beautiful experience on desktop and mobile  
🎨 **x402 Theme** - Modern orange and black color scheme  
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

| Field         | Required | Description                               |
| ------------- | -------- | ----------------------------------------- |
| `name`        | ✅ Yes   | Official name of the resource             |
| `url`         | ✅ Yes   | Full URL starting with https://           |
| `description` | ✅ Yes   | Clear, concise description (60-100 chars) |
| `category`    | ✅ Yes   | One of the categories listed above        |
| `tags`        | ❌ No    | Array of relevant tags for filtering      |
| `logo`        | ❌ No    | Direct URL to logo image (SVG or PNG)     |

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

Want to run x402Nav locally?

```bash
# Clone the repository
git clone https://github.com/owlook/x402.git
cd x402

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see your local instance.

---

## 📋 Project Structure

```
/x402
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
│   └── index.css           # x402 theme styles
└── README.md
```

---

## 📜 Guidelines for Submissions

### ✅ We Accept

- x402-compatible APIs and services
- Payment processors and tools
- Developer libraries and SDKs
- Educational resources and documentation
- Community projects and tools
- x402 implementation examples

### ❌ We Don't Accept

- Scams or fraudulent projects
- Non-x402 payment systems
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

Built with ❤️ for the x402 community. Special thanks to all contributors who help maintain and improve this resource. Learn more about x402 at [x402.gitbook.io](https://x402.gitbook.io/x402).

---

## 🔗 Links

- [Website](https://x402nav.vercel.app)
- [x402 Documentation](https://x402.gitbook.io/x402)
- [GitHub Repository](https://github.com/owlook/x402)
- [Submit an Issue](https://github.com/owlook/x402/issues)
- [Request a Feature](https://github.com/owlook/x402/issues/new)

---

<div align="center">
  
**Made with ⚡ by the x402 community**

</div>
