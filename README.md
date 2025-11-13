# 🎯 Talanta_Scout

## ⚽ Football Talent Scouting Platform for Kenya

> A modern, multi-tier football scouting platform built with dynamic JavaScript - **ONE codebase for ALL tiers!**

[![Commits](https://img.shields.io/github/commit-activity/m/jj-tech-ranger/Talanta_Scout)](https://github.com/jj-tech-ranger/Talanta_Scout)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## ✨ Key Features

### 🎨 **Visual Excellence**
- Modern gradient backgrounds and card designs
- Smooth animations and transitions
- Hover effects with depth and shadow
- Responsive layouts for all devices
- Beautiful color palette with TalantaScout green (#00B140)

### 🔐 **Dynamic Multi-Tier System**
The platform supports **5 subscription tiers** with ONE HTML file per page:
- 🆓 **Basic** - Free tier with essential features
- 🥉 **Bronze** - KSH 500/month
- 🥈 **Silver** - KSH 1,500/month  
- 🥇 **Gold** - KSH 3,000/month
- 💎 **Platinum** - KSH 5,000/month

### 🎭 **Role-Based Dashboards**
- **Player Dashboard** - Profile, training, matches, scout connections
- **Scout Dashboard** - Player search, watchlists, team requests
- **Coach Dashboard** - Team management, training plans, match analysis
- **Admin Dashboard** - Full platform control and analytics

---

## 🏗️ Architecture

### **The Magic: `data-min-package` Attributes**

Instead of creating 5 separate HTML files per page (170+ files total), we use **data attributes** to dynamically show/hide features:

```html
<!-- Available to ALL tiers -->
<div class="stat-card">
    <h3>Profile Views</h3>
    <p>127</p>
</div>

<!-- Only for Bronze and above -->
<div class="stat-card" data-min-package="bronze">
    <h3>Video Views</h3>
    <p>523</p>
</div>

<!-- Only for Gold and above -->
<button class="action-btn" data-min-package="gold">
    📧 Message Scouts
</button>
```

The `main.js` file automatically:
1. Detects user's package tier from localStorage
2. Scans all elements with `data-min-package`
3. Shows/hides elements based on tier access
4. Adds lock overlay for inaccessible features

---

## 📁 Project Structure

```
Talanta_Scout/
├── index.html                 # Landing page
├── login.html                 # Login with role-based redirect
├── assets/
│   ├── css/
│   │   ├── styles.css         # Global styles
│   │   └── playerdashboard.css # Player dashboard styling
│   └── js/
│       └── main.js            # Dynamic tier system
└── player/
    └── dashboard.html         # Player dashboard (ONE file, ALL tiers)
```

---

## 🚀 How It Works

### 1. **User Logs In**
```javascript
// login.html stores user data
localStorage.setItem('userRole', 'player');
localStorage.setItem('packageTier', 'silver');
```

### 2. **Dashboard Loads**
```javascript
// main.js initializes on page load
document.addEventListener('DOMContentLoaded', function() {
    initializePackageFeatures();
});
```

### 3. **Features Auto-Filter**
```javascript
function initializePackageFeatures() {
    const currentTier = getCurrentPackageTier();
    const featureElements = document.querySelectorAll('[data-min-package]');
    
    featureElements.forEach(element => {
        if (!hasPackageAccess(minPackage)) {
            element.classList.add('feature-locked');
        }
    });
}
```

---

## 🎨 Visual Design Highlights

### **Dashboard Layout**
- Dark gradient sidebar with hover animations
- White content cards with subtle shadows
- Stats grid with hover lift effects
- Color-coded package badges

### **Color Palette**
```css
--primary-green: #00B140;
--primary-green-dark: #008F33;
--primary-green-light: #33C265;

/* Package Colors */
--bronze-color: #CD7F32;
--silver-color: #C0C0C0;
--gold-color: #FFD700;
--platinum-color: #E5E4E2;
```

### **Animations**
- Smooth transitions on all interactive elements
- Hover lift effect on cards (translateY(-8px))
- Gradient progress bars
- Modal fade-in/slide-up animations

---

## 💻 Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox/grid
- **Vanilla JavaScript** - No frameworks needed!
- **localStorage** - Client-side data persistence
- **GitHub** - Version control and hosting

---

## 🎯 Benefits Over Original Approach

| Original | New Dynamic Approach |
|----------|----------------------|
| 170+ duplicate HTML files | ~30 consolidated files |
| Separate code for each tier | ONE codebase with data attributes |
| Hard to maintain | Easy updates |
| Larger repository | Clean structure |
| More bugs | Centralized logic |

---

## 🔮 Future Enhancements

- [ ] Complete all role dashboards (scout, coach, admin)
- [ ] Add profile pages for each role
- [ ] Implement backend API integration
- [ ] Add real authentication system
- [ ] Create image assets and logos
- [ ] Add video upload functionality
- [ ] Implement search and filtering
- [ ] Add messaging system

---

## 📝 License

MIT License - feel free to use this approach in your own projects!

---

## 👨‍💻 Author

**jj-tech-ranger**
- GitHub: [@jj-tech-ranger](https://github.com/jj-tech-ranger)

---

## 🌟 Star This Repo!

If you find this dynamic multi-tier approach useful, please star the repository!

---

**Built with 💚 for Kenyan Football Talent**
