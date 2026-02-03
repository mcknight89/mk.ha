# MK Home Assistant Collection

<div align="center">
  <img src="https://brands.home-assistant.io/hacs/icon.png" width="80" alt="MK HA logo" rel="icon" />
  <p>A collection of high-quality, customizable cards for Home Assistant</p>
</div>

<div align="center">

[![License](https://img.shields.io/github/license/mcknight89/mk.ha?style=for-the-badge)](LICENSE)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://hacs.xyz)
[![GitHub Release](https://img.shields.io/github/v/release/mcknight89/mk.ha?style=for-the-badge&color=blue)](https://github.com/mcknight89/mk.ha/releases)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=for-the-badge)](https://buymeacoffee.com/mcknight89)

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
3. Add `https://github.com/mcknight89/mk.ha` with category **Dashboard**.
4. Click **Install** on the "MK Home Assistant Collection" card.
5. Reload your resources.

### Manual

1. Download `mk-ha-collection.js` from the [latest release](https://github.com/mcknight89/mk.ha/releases).
2. Upload to `/config/www/mk-ha-collection.js`.
3. Add `/local/mk-ha-collection.js` to your specific dashboard resources.

---

## 🛠 Usage & Configuration

### 💡 MK State Card

A versatile card for visualizing and controlling any entity state, with support for specific state styling and badge overlays.

**Minimal Example:**
```yaml
type: custom:mk-state-card
entity: light.living_room
```

**Advanced Example:**
```yaml
type: custom:mk-state-card
entity: input_select.scene_selector
name: "Scene Controller"
layout: compact
# Custom badge
badge_entity: binary_sensor.motion
badge_position: top-right
badge_tap_action:
  action: toggle
# Interactions
hold_target: badge  # Hold card to see badge info
double_tap_target: entity
```

#### Configuration Options

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `type` | string | **Required** | Must be `custom:mk-state-card` |
| `entity` | string | **Required** | The entity to control |
| `name` | string | auto | Override the entity name |
| `icon` | string | auto | Override the entity icon |
| `layout` | string | `default` | Card layout: `default`, `compact`, `minimal`, `large` |
| `show_name` | boolean | `true` | Show the entity name |
| `show_state` | boolean | `true` | Show the text state |

#### Interactions

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `tap_action` | object | *Cycle State* | **Always** cycles through entity states (cannot be changed) |
| `hold_target` | string | `entity` | Which entity to target on hold: `entity` or `badge` |
| `hold_action` | object | `more-info` | Action when card is held |
| `double_tap_target` | string | `entity` | Which entity to target on double tap: `entity` or `badge` |
| `double_tap_action` | object | `none` | Action when card is double tapped |

#### Badge Configuration

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `badge_entity` | string | - | Entity to show as a badge overlay |
| `badge_position` | string | `top-right` | Position: `top-left`, `top-right`, `bottom-left`, `bottom-right` |
| `badge_show_state` | boolean | `false` | Show state text in badge instead of dot |
| `badge_tap_action`| object | `more-info` | Action when badge is clicked (toggle, more-info, etc.) |

---

### 🌐 MK Network Device Card

Track network devices with Online/Offline status, Wake-on-LAN (WOL) support, and last seen timestamps.

**Minimal Example:**
```yaml
type: custom:mk-network-device-card
entity: binary_sensor.pc_ping
```

**WOL Example:**
```yaml
type: custom:mk-network-device-card
entity: binary_sensor.gaming_pc_ping
mac_address: AA:BB:CC:DD:EE:FF
confirm_wol: true
```

#### Configuration Options

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `type` | string | **Required** | Must be `custom:mk-network-device-card` |
| `entity` | string | **Required** | A `binary_sensor` (usually via Ping integration) |
| `name` | string | auto | Override device name |
| `icon` | string | `mdi:lan` | Override icon |
| `layout` | string | `default` | Layout: `default`, `compact`, `detailed` |
| `show_last_seen` | boolean | `true` | Show "Last seen: X mins ago" |
| `online_color` | string | `#4caf50` | Color when online (green) |
| `offline_color` | string | `#f44336` | Color when offline (red) |

#### Wake on LAN (WOL)

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| `show_wol_button` | boolean | `true` | Enable the "Wake" button |
| `mac_address` | string | - | MAC address to send Magic Packet to |
| `wol_entity` | string | - | Optional `switch` or `button` entity to trigger instead of MAC |
| `confirm_wol` | boolean | `true` | Show confirmation dialog before waking |

*> Note: The WOL button automatically hides when the device is Online.*

---

<div align="center">
  <p><b>Created by <a href="https://github.com/mcknight89">@mcknight89</a></b></p>
  <p>Inspired by the community. Built for the community.</p>
</div>
