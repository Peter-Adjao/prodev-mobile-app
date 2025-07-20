📱 ProDev Mobile App
A scalable multi-screen mobile application built with React Native, Expo Router, and TypeScript, emphasizing modular architecture, reusable components, and clean navigation practices. This app evolves through two key milestones:

0x04: Stack Navigation for linear screen transitions (e.g. authentication flows).

0x05: Tab Navigation for organized, sectioned content access with reusable UI elements.

🚀 Overview
Milestone	Navigation Type	Purpose
0x04	Stack Navigation	Join → Sign In → Home flow with screen depth
0x05	Tab Navigation	Home, Search, Saved, Inbox, Profile screens
💡 Key Features
Feature	Description
🧭 Navigation Architecture	Combines Stack and Tab navigation for modern UX
📱 Multi-Screen Flow	Screens organized by purpose: auth, discovery, engagement
🧱 Modular Folder Structure	Screens scoped under app/ and app/(home) for scalability
* 📋 Typed Interfaces	TypeScript interfaces for component safety and reusability
* 🖼️ Property Listing UI	Card-style previews for properties with rating, price, and location
* 🧪 Local Sample Data	Simulated listings displayed without backend integration
* 🛠️ Vector Icons Integration	Beautiful icons with @expo/vector-icons for each tab
* 🎨 Centralized Styling	Flexible design via isolated style modules

# 📦 Dependencies
Ensure the following are installed:

bash
expo-router
@expo/vector-icons
# And all default Expo modules
🛠️ Setup Instructions

# 📁 Initial Setup (0x04)
bash
npx create-expo-app@latest prodev-mobile-app-0x04
cd prodev-mobile-app-0x04
npm run reset-project
Place required images into:

assets/images/
├── hero-icon.png
├── Logo.png
├── logo-green.png
├── google.png
├── facebook.png


# 📁 Milestone Setup (0x05)
bash
cp -r prodev-mobile-app-0x04 prodev-mobile-app-0x05
cd prodev-mobile-app-0x05
Additional images used in property listings:

assets/images/
├── mansion.png
├── sample-image.png
🗂 Folder Structure (Unified)
prodev-mobile-app/
├── app/
│   ├── _layout.tsx                 # Stack Layout (0x04)
│   ├── index.tsx                  # Home Screen (0x04)
│   ├── join.tsx                   # Join Screen (0x04)
│   ├── signin.tsx                 # Sign In Screen (0x04)
│   └── (home)/                    # Tab Layout & Screens (0x05)
│       ├── _layout.tsx           # Tabs Layout
│       ├── index.tsx             # Home tab
│       ├── search.tsx            # Search tab
│       ├── saved.tsx             # Saved tab
│       ├── inbox.tsx             # Inbox tab
│       └── profile.tsx           # Profile tab
├── assets/
│   └── images/                   # All assets and illustrations
├── components/
│   ├── PropertyListing/
│   │   └── index.tsx
│   └── common/
│       └── PropertyListingCard.tsx
├── constants/
│   └── data.ts                   # Local filters and listings
├── interfaces/
│   └── index.ts                  # Typed interfaces
├── styles/
│   ├── _mainstyle.ts            # Styles for Stack screens
│   ├── _joinstyle.ts            # Join screen styles
│   └── propertyCardStyle.ts     # Property card styling
└── README.md

## Testing & Roadmap
✅ Manual screen verification via Expo Dev Client

✅ Card rendering with sample listings