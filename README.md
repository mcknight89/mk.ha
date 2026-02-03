# MK Home Assistant Collection

<div align="center">
  <img src="https://brands.home-assistant.io/hacs/icon.png" width="80" alt="MK HA logo" rel="icon" />
  <h1>MK Home Assistant Collection</h1>
  <p>A collection of high-quality, customizable cards for Home Assistant</p>
</div>

<div align="center">

[![License](https://img.shields.io/github/license/mcknight89/mk.ha?style=for-the-badge)](LICENSE)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://hacs.xyz)
[![GitHub Release](https://img.shields.io/github/v/release/mcknight89/mk.ha?style=for-the-badge&color=blue)](https://github.com/mcknight89/mk.ha/releases)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=for-the-badge)](https://www.buymeacoffee.com)

</div>

---

## 📦 Features

- **MK Network Device Card**: Manage and visualize your network devices with ease.
- **MK State Card**: A beautiful, highly configurable visualization for any entity state.
- **Easy Configuration**: Fully configurable via the Home Assistant UI editor—no YAML required for basic setup.
- **Themeable**: Automatically adapts to your Home Assistant theme.

---

## 🚀 Installation

### HACS (Recommended)

1. Open **HACS** in Home Assistant.
2. Go to **Frontend** > **menu** (3 dots) > **Custom repositories**.
3. Add `https://github.com/mcknight89/mk.ha` with category **Lovelace**.
4. Click **Install** on the "MK Home Assistant Collection" card.
5. Reload your resources.

### Manual

1. Download `mk-ha-collection.js` from the [latest release](https://github.com/mcknight89/mk.ha/releases).
2. Upload to `/config/www/mk-ha-collection.js`.
3. Add `/local/mk-ha-collection.js` to your specific dashboard resources.

---

## 🛠 Usage

### MK State Card

Visual state control for lights, switches, and input booleans.

```yaml
type: custom:mk-state-card
entity: light.living_room
```

### MK Network Device Card

Manage network devices.

```yaml
type: custom:mk-network-device-card
entity: device_tracker.my_phone
```

---

<div align="center">
  <p><b>Created by <a href="https://github.com/mcknight89">@mcknight89</a></b></p>
  <p>Inspired by the community. Built for the community.</p>
</div>
