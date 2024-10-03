
# Fair Play - Gamification of Anti-Doping

This project was developed as part of the **Smart India Hackathon 2024**, under the **Smart Education** theme. The goal of the project is to raise awareness about anti-doping practices in sports through an interactive, story-driven game. The project integrates various gamification techniques to ensure athletes understand anti-doping regulations and stay engaged in learning.


**Team Name:** Soil Souls  

## Project Overview
**Fair Play** is a gamified platform designed to educate athletes about clean sports and anti-doping regulations. The game uses immersive storytelling, real-time interaction, and gamified progress tracking to engage users. The platform is accessible across devices and features AI-powered doubt resolution and real-time news integration.

## Key Features
- **User Registration**: Customizable avatars to reflect users' sport, level, and achievements.
- **Story-Based Gameplay**: Engaging storylines integrate clean sport concepts.
- **AI-Powered Doubt Resolution**: Real-time, intelligent assistance via Botpress' AI-driven chatbot for anti-doping queries.
- **Real-Time Chat Interaction**: WebSocket-based chat for community engagement.
- **Badge Sharing & Leaderboard**: Share achievements and view progress through real-time leaderboards.
- **Live News & Resources**: Real-time updates from WADA and other authorities.

## Technical Approach
- **Cross-Platform Accessibility**: Built using Unity for gaming, React Native for mobile, and Next.js for the web.
- **Dynamic Decision-Based Games**: Unity’s Node-Based Analysis System offers multiple story endings based on player decisions.
- **Personalized Insights**: PyCaret's ML models and Hugging Face Transformers provide player-specific reports.
- **Data Security**: AES-256 encryption and secure HTTPS connections.

## Challenges and Solutions
- **Knowledge Gaps**: The in-platform chatbot offers real-time guidance to simplify complex anti-doping rules.
- **Behavioral Change**: Real-life athlete testimonials inspire positive behavior through authentic examples.
- **Peer Pressure**: A leaderboard and points system encourage healthy competition among peers.

## Platform Features
- **Daily Challenges**: Gamified tasks with checkpoints encourage continuous learning.
- **Real-Life Testimonials**: Integration of real athletes' stories to add authenticity.
- **Campus Ambassador Program**: Peer-driven promotion of clean sports.
- **Points Exchange System**: Digital currency system incentivizes engagement.

## Development Tools and Frameworks
- **Frontend**: Next.js
- **Backend**: Node.js, WebSocket, PyCaret, Botpress AI , WebGl
- **Game Engine**: Unity
- **Security**: AES-256 Encryption

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/anshuman-rai-27/DopeSope
   ```
2. Install dependencies for the web app:
   ```bash
   cd web-app
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Live Demo
Check out the live version of the project:
- [Web App](https://dope-sope.vercel.app)
