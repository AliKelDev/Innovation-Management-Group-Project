# Innovation Management Project - Group 7

This project is a slide presentation created for a class project on Innovation Management. Instead of using traditional slide creation tools (like PowerPoint or Google Slides), the presentation was **hardcoded** using React and deployed to Netlify for easy sharing with the professor and classmates.

## Live Demo

You can view the live presentation here:  
👉 [Innovation Management Project - Group 7](https://innovation-management-project-group7.netlify.app/)

---

## Why Hardcode the Slides?

Creating slides using traditional tools can be time-consuming, especially when dealing with complex layouts, animations, or custom designs. By hardcoding the slides in React, I was able to:

- **Customize the design** to match the project's requirements perfectly.
- **Reuse components** for consistency across slides.
- **Deploy instantly** using Netlify, making it accessible to everyone with a link.
- **Leverage my ReactVite template** for faster development and deployment.

---

## Tools and Technologies Used

- **React**: For building the slide components and managing state.
- **Vite**: For fast development and bundling.
- **Lucide Icons**: For high-quality icons used in the presentation.
- **Tailwind CSS**: For styling and responsive design.
- **Netlify**: For deployment and hosting.

---

## How It Works

The presentation is built as a React component (`Presentation.js`). Each slide is an object in an array, containing the title, subtitle, and content. The content is rendered dynamically based on the current slide index.

### Key Features:
- **Progress Bar**: Shows the progress of the presentation.
- **Navigation Buttons**: Allow users to move between slides.
- **Reusable Components**: Cards and icons are reused across slides for consistency.
- **Responsive Design**: The presentation works seamlessly on both desktop and mobile devices.

---

## How to Run Locally

If you'd like to run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AliKelDev/ReactViteTemplate.git
Navigate to the project directory:

bash
Copy
cd ReactViteTemplate
Install dependencies:

bash
Copy
npm install
Run the development server:

bash
Copy
npm run dev
Open your browser and visit http://localhost:3000 to view the presentation.

Deployment
The project was deployed using Netlify. To deploy your own version:

Fork this repository or use your own ReactVite template.

Connect your repository to Netlify.

Deploy the project with a single click.

Credits
ReactVite Template: Created by AliKelDev.

Lucide Icons: Used for icons in the presentation.

Tailwind CSS: Used for styling.

License
This project is open-source and available under the MIT License. Feel free to use it for your own presentations or projects!

Made with ❤️ by [Your Name]
For Innovation Management Class - Group 7
