# TotTaps 🐾

**The keyboard toy for tiny tots!**

A free, safe, and engaging web app for toddlers and babies who love to smash keyboards. Every tap bursts into colors, sounds, and chaos!

🔗 **Live Demo:** [tottaps.app](https://tottaps.app) *(coming soon)*

---

## ✨ Features

- 🎨 **6 Colorful Themes** - Party, Jungle, Ocean, Space, Dino, Diwali
- ⌨️ **Interactive Animations** - Letters pop out with every key press
- 🖱️ **Mouse Trails & Sparkles** - Visual feedback for mouse movement
- 🔊 **Procedural Sounds** - Generated audio (no files needed)
- 📱 **Multi-Input Support** - Keyboard, mouse, and touch
- 🔒 **Fullscreen Safe Mode** - Prevents accidental exits
- 👪 **Parent Controls** - Hidden settings panel
- ⏱️ **Optional Timer** - Limit screen time (2/5/10/15 min)
- 🐢 **Reduce Motion** - Accessibility option
- 📊 **Session Reports** - Fun stats at the end

---

## 🚀 Quick Start

### Option 1: Open Locally
1. Open `index.html`
2. Open in any modern browser
3. Click "Start Tapping"
4. Let the chaos begin!

### Option 2: Host It Yourself
```bash
# Clone the repo
git clone https://github.com/yourusername/tottaps.git
cd tottaps

# Serve locally (Python)
python -m http.server 8000

# Or use any static server
npx serve .
```

Visit `http://localhost:8000/`

---

## 👪 Parent Controls

**Access the parent panel:**
- Hold top-left corner for 2 seconds, OR
- Type "parent" on the keyboard

**Available controls:**
- 🔊 Toggle sound on/off
- 🐢 Reduce motion (for sensitive children)
- 🎨 Switch themes
- ⏱️ Set time limit
- ⤢ Enter fullscreen
- ↺ Reset session

---

## 🌐 Deployment Guide

### Deploy to GitHub Pages (Free)

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/tottaps.git
git push -u origin main
```

2. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: Deploy from `main` branch
   - Save

3. **Access your site**
   - `https://yourusername.github.io/tottaps/`

### Add Custom Domain

1. **Buy domain** (recommended: tottaps.app)
   - Namecheap, Porkbun, or Google Domains

2. **Configure DNS**
   - Add CNAME: `www` → `yourusername.github.io`
   - Add A records for apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Update GitHub Pages**
   - Settings → Pages → Custom domain: `tottaps.app`
   - Enable "Enforce HTTPS"

---

## 🎨 Themes

| Theme | Colors | Mascot | Best For |
|-------|--------|--------|----------|
| 🎉 Party | Rainbow | 🐾 Paw | Default fun |
| 🌿 Jungle | Green/Yellow | 🦁 Lion | Nature lovers |
| 🌊 Ocean | Blue/Cyan | 🐙 Octopus | Water fans |
| 🚀 Space | Purple/Pink | 🚀 Rocket | Space explorers |
| 🦕 Dino | Orange/Brown | 🦕 Dino | Dinosaur fans |
| 🪔 Diwali | Gold/Orange | 🪔 Lamp | Festival vibes |

---

## 🛠️ Technical Details

**Built with:**
- Vanilla JavaScript (no frameworks)
- HTML5 Canvas for animations
- Web Audio API for sounds
- CSS3 animations
- Single file (~2500 lines)

**Browser Support:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

**Performance:**
- Lightweight (~100KB uncompressed)
- No external dependencies (except fonts)
- 60fps animations
- Efficient particle system

---

## 📱 Mobile Optimization

TotTaps works great on mobile devices:
- Touch-optimized
- Responsive design
- Prevents zoom/scroll
- Works in landscape/portrait

**Tip:** Add to home screen for app-like experience!

---

## 🤝 Contributing

Found a bug? Have an idea? Contributions welcome!

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

**Ideas for contributions:**
- New themes
- More sound variations
- Additional animations
- Accessibility improvements
- Translations

---

## 📄 License

MIT License - Free to use, modify, and distribute.

See [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

Built with ❤️ for parents everywhere.

---

## 📞 Support

- 🐛 Report bugs: [GitHub Issues](https://github.com/yourusername/tottaps/issues)
- 💬 Questions: hello@tottaps.app
- 🌟 Star the repo if you like it!

---

## 🎯 Roadmap

- [ ] PWA support (offline mode)
- [ ] More themes (Halloween, Christmas, etc.)
- [ ] Educational mode (letters/numbers learning)
- [ ] Multiplayer mode (two keyboards)
- [ ] Custom theme creator
- [ ] Save/load preferences
- [ ] Mobile app (iOS/Android)

---

**Made with chaos and joy** 🐾✨
