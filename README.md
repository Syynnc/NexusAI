# 🎭 NexusAI - April Fools' Prank Website

<div align="center">

![NexusAI Banner](https://img.shields.io/badge/NexusAI-Fake_AI_Company-cyan?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Rickroll_Ready-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.2.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)

**A professional-looking AI company landing page that Rick Rolls everyone who clicks any link.**

Perfect for April Fools' Day pranks! 🎪

[Demo](#demo) • [Features](#features) • [Quick Start](#quick-start) • [Deployment](#deployment)

</div>

---

## 🎯 What is This?

NexusAI is a fully-functional, professional-looking landing page for a fictional AI company. The catch? **Every single link on the website redirects to a Rick Roll** (`https://www.youtube.com/watch?v=dQw4w9WgXcQ`).

It's the perfect April Fools' prank for:
- 🎓 Surprising your dev team
- 📧 Sending to friends who "want to learn about AI"
- 🎭 Creating convincing fake product demos
- 😈 General internet mischief

## ✨ Features

### 🎨 Authentic Design
- **Ultra-modern UI** with glassmorphism effects
- **Professional gradient backgrounds** and animations
- **Responsive design** that works on all devices
- **Sleek navigation** with multiple menu items
- **Hero section** with compelling call-to-action buttons

### 🎪 Prank Elements
- ✅ All navigation links Rick Roll
- ✅ "Start Free Trial" button Rick Rolls
- ✅ "Deploy Nexus Now" button Rick Rolls
- ✅ Footer links Rick Roll
- ✅ "Read Documentation" Rick Rolls
- ✅ Every. Single. Link. Rick Rolls.

### 🛠️ Technical Stack
- **Next.js 16.2.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Modern utility-first styling
- **Lucide React** - Beautiful icon library
- **React 19** - Latest React features

### 🎭 Convincing Features
- Fake "Nexus-v4 Foundation Model" announcement
- Three feature cards describing non-existent technology
- Professional navigation menu
- Realistic pricing/documentation links
- Copyright footer with "2026" date

## 🚀 Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Syynnc/NexusAI.git

# Navigate to the project directory
cd NexusAI/april-fools-app

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the prank in action!

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 📁 Project Structure

```
NexusAI/
└── april-fools-app/
    ├── app/
    │   ├── layout.tsx      # Root layout
    │   └── page.tsx        # Main landing page (the prank!)
    ├── public/             # Static assets
    ├── AGENTS.md           # AI efficiency rules for development
    ├── CLAUDE.md           # Development assistant reference
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    └── next.config.ts
```

## 🎨 Customization

### Change the Rick Roll URL

Edit `app/page.tsx` and modify the `PRANK_URL` constant:

```typescript
// Line 5 in app/page.tsx
const PRANK_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// Change to your own URL:
const PRANK_URL = "https://your-custom-prank-url.com";
```

### Modify the Company Name

Search and replace "NexusAI" with your desired company name throughout the app.

### Customize Colors

The app uses a cyan/blue color scheme. Modify Tailwind classes in `app/page.tsx`:
- `text-cyan-400` - Accent text color
- `bg-cyan-500` - Button backgrounds
- `from-cyan-400 via-blue-500 to-indigo-500` - Gradient colors

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Syynnc/NexusAI)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Share your prank URL!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure the build command: `npm run build`
4. Set the publish directory: `.next`

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render
- Any platform supporting Node.js

## 🎭 Usage Tips

### Maximum Prank Impact

1. **Send it professionally** - "Hey, check out this new AI platform I've been testing"
2. **Use a custom domain** - Deploy to something like `nexus-ai.com` for authenticity
3. **Share in Slack/Teams** - Post in your work chat: "New AI tool for the team to evaluate"
4. **Email campaign** - Send to friends with a professional-looking email
5. **Wait for reactions** - The confusion and laughter is worth it! 😂

### Best Occasions

- 🗓️ April 1st (April Fools' Day)
- 🎉 Team building activities
- 🎓 Tech presentations (as a joke slide)
- 💼 Pranking tech-savvy colleagues

## ⚠️ Disclaimer

This project is **purely for entertainment purposes**. It's a harmless prank intended to bring laughter and shouldn't be used maliciously. Always consider your audience and ensure everyone can enjoy the joke!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new prank features
- 🎨 Improve the design
- 📝 Fix typos or improve documentation

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly: `npm run lint` and `npm run build`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📜 License

This project is open source and available for anyone to use for pranking purposes. Just remember to use it responsibly! 😄

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Inspired by all the amazing April Fools' pranks over the years
- Special thanks to Rick Astley for never giving us up 🎵

## 📞 Contact

Have questions or want to share your prank results?

- **GitHub Issues**: [Report bugs or request features](https://github.com/Syynnc/NexusAI/issues)
- **Discussions**: Share your prank stories!

---

<div align="center">

Made with 💙 and a sense of humor

**Remember: Never gonna give you up, never gonna let you down!** 🎵

[![Star this repo](https://img.shields.io/github/stars/Syynnc/NexusAI?style=social)](https://github.com/Syynnc/NexusAI)

</div>
