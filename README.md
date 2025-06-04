
# Firebase Studio Project - Personal Portfolio

This is a Next.js personal portfolio website built with Firebase Studio.
It uses Next.js, React, ShadCN UI components, Tailwind CSS, and Genkit (for potential AI features).

## Getting Started

1.  **Clone the repository (or set up files locally):**
    Ensure you have all the project files.

2.  **Install dependencies:**
    Open your terminal in the project root and run:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the port specified in `package.json`) with your browser to see the result..

4.  **Add your resume:**
    Place your `resume.pdf` file in the `public/` directory.

## Deployment

### GitHub Pages
This project is configured for easy deployment to GitHub Pages using GitHub Actions.
1.  Push your code to a GitHub repository.
2.  Ensure the `.github/workflows/deploy.yml` file is present.
3.  In your GitHub repository settings, go to "Pages" and set the "Build and deployment" source to "GitHub Actions".
The site will be built and deployed automatically on pushes to the main branch.

### Firebase Hosting
1.  Install Firebase CLI: `npm install -g firebase-tools`
2.  Login: `firebase login`
3.  Initialize: `firebase init hosting`
    *   Select your Firebase project.
    *   Set public directory to `out`.
    *   Configure as a single-page app: Yes.
4.  Build: `npm run build`
5.  Deploy: `firebase deploy --only hosting`

Explore the `src/app/page.tsx` file to start customizing your portfolio.
