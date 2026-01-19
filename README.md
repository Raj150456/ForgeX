# ForgeX

Live Demo: https://forge-x-pi.vercel.app/

Project Title
ForgeX — a small frontend learning project built with TypeScript and CSS.

Overview
- Learning goal: Learn TypeScript for building frontend UI, practice component/code structure, and deploy a static site.
- What it does: A UI-focused web project (pages/components and interactions). It is a student project used to practice TypeScript and frontend layout.

Key Features
- Interactive frontend components written in TypeScript
- Responsive layout styled with CSS
- Simple client‑side interactions for learning DOM + TS patterns
- Deployed to Vercel for a live demo

Tech Stack (only what exists in the repo)
- TypeScript
- CSS
- Static hosting (Vercel for deployment)

Live Demo
- https://forge-x-pi.vercel.app/ — (deployed on Vercel)

How to run locally
1. Clone the repo:
   git clone https://github.com/Raj150456/ForgeX.git
2. Install dependencies:
   - If the repo uses npm/yarn, run:
     npm install
     # or
     yarn
3. Start the dev server:
   - Check package.json for the exact script, commonly:
     npm run dev
     # or
     npm start
4. Open the URL shown by the dev server (often http://localhost:3000 or http://localhost:5173).

If the project is a plain static TypeScript build without a dev server, you can build and preview:
- npm run build
- Serve the dist directory (e.g., with a static server)

What I learned
- Basic TypeScript setup and using typed code for frontend behavior
- How to structure a small frontend project and separate styling
- How to deploy a static frontend to Vercel and verify the live URL
- How to document the project so others can run it

Future improvements
- Add short README-run scripts (exact npm scripts) and a CONTRIBUTING note
- Add screenshots or a short video/GIF showing the main interactions
- Add tests for critical UI behaviors (student-level unit/visual tests)
- Improve accessibility and keyboard navigation for components

Notes for interview
- Be ready to explain one component you built and one bug you fixed.
- Explain what TypeScript feature helped you (types, interfaces, or stricter checks).