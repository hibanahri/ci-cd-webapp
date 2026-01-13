# Portfolio Website Requirements

## Introduction

A professional, modern portfolio website for Hiba Nahri showcasing technical skills, projects, and professional experience. The website features smooth animations, dark/light mode toggle, and interactive project filtering. Built with Next.js and Tailwind CSS, it serves as a central hub for recruiters and collaborators to learn about skills, view completed projects, and get in touch.

## Glossary

- **Portfolio Website**: A personal website showcasing projects, skills, and professional information
- **Dark Mode**: A visual theme with dark background and light text
- **Light Mode**: A visual theme with light background and dark text
- **Project Card**: A UI component displaying project information including title, description, technologies, and links
- **Smooth Animation**: CSS/JavaScript transitions that create fluid visual effects
- **Contact Form**: A form allowing visitors to send messages directly from the website
- **Responsive Design**: Website layout that adapts to different screen sizes (mobile, tablet, desktop)
- **Next.js**: React framework with server-side rendering and static generation capabilities
- **Tailwind CSS**: Utility-first CSS framework for styling

## Requirements

### Requirement 1

**User Story:** As a recruiter, I want to quickly understand Hiba's professional background and skills, so that I can assess fit for opportunities.

#### Acceptance Criteria

1. WHEN a visitor lands on the portfolio THEN the website SHALL display a professional hero section with profile picture, name, headline, and brief summary
2. WHEN a visitor views the profile picture THEN the website SHALL display it as a circular, optimized image with professional styling
3. WHEN a visitor scrolls to the skills section THEN the website SHALL display all technical skills organized by category (Programming Languages, DevOps, Networking, Databases, Other)
4. WHEN a visitor views the about section THEN the website SHALL present a clear, concise professional summary highlighting key strengths and experience level
5. WHEN the page loads THEN the website SHALL apply smooth fade-in animations to all major sections

### Requirement 2

**User Story:** As a recruiter, I want to explore Hiba's projects in detail, so that I can evaluate technical capabilities and project experience.

#### Acceptance Criteria

1. WHEN a visitor navigates to the projects section THEN the website SHALL display all five projects as interactive cards
2. WHEN a visitor clicks on a project card THEN the website SHALL expand or navigate to show full project details including description, technologies used, and links
3. WHEN a visitor uses the project filter THEN the website SHALL filter projects by selected technology (e.g., Python, Docker, React)
4. WHEN a project card is displayed THEN the website SHALL show project title, brief description, technologies used, and links to GitHub/demo

### Requirement 3

**User Story:** As a visitor, I want to easily switch between dark and light modes, so that I can view the portfolio in my preferred visual style.

#### Acceptance Criteria

1. WHEN a visitor clicks the theme toggle button THEN the website SHALL switch between dark and light modes
2. WHEN the theme is changed THEN the website SHALL persist the user's preference in local storage
3. WHEN a visitor returns to the website THEN the website SHALL load with their previously selected theme
4. WHEN the page transitions between themes THEN the website SHALL apply smooth color transitions without jarring changes

### Requirement 4

**User Story:** As a recruiter, I want to contact Hiba directly, so that I can reach out about opportunities.

#### Acceptance Criteria

1. WHEN a visitor scrolls to the contact section THEN the website SHALL display a contact form with fields for name, email, message, and subject
2. WHEN a visitor submits the contact form THEN the website SHALL validate all required fields are filled
3. WHEN the form is submitted with valid data THEN the website SHALL send the message and display a success confirmation
4. WHEN the form submission fails THEN the website SHALL display an error message and allow the user to retry

### Requirement 5

**User Story:** As a mobile user, I want to navigate the portfolio easily on my phone, so that I can view projects and contact information on any device.

#### Acceptance Criteria

1. WHEN the website is viewed on a mobile device THEN the website SHALL display a responsive hamburger menu for navigation
2. WHEN the website is viewed on different screen sizes THEN the website SHALL adapt layout and font sizes appropriately
3. WHEN a visitor uses a mobile device THEN the website SHALL ensure all interactive elements are touch-friendly with adequate spacing
4. WHEN the website is viewed on tablet or desktop THEN the website SHALL display full navigation menu and optimized layouts

### Requirement 6

**User Story:** As a visitor, I want to navigate smoothly between sections, so that I can find information without page reloads.

#### Acceptance Criteria

1. WHEN a visitor clicks a navigation link THEN the website SHALL smoothly scroll to the corresponding section
2. WHEN a visitor scrolls through the page THEN the website SHALL highlight the current section in the navigation menu
3. WHEN a visitor clicks on social media links THEN the website SHALL open profiles in new tabs
4. WHEN the page loads THEN the website SHALL display a sticky navigation header that remains visible while scrolling

### Requirement 7

**User Story:** As a developer, I want the portfolio to load quickly and perform well, so that visitors have a smooth experience.

#### Acceptance Criteria

1. WHEN the website loads THEN the website SHALL render the initial page in under 3 seconds on standard internet connections
2. WHEN images are displayed THEN the website SHALL optimize images for web and use lazy loading for below-the-fold content
3. WHEN the website is deployed THEN the website SHALL achieve a Lighthouse performance score of 80 or higher
4. WHEN a visitor navigates between pages THEN the website SHALL use client-side routing to avoid full page reloads

### Requirement 8

**User Story:** As a visitor, I want to see visual feedback when interacting with elements, so that I understand what actions are available.

#### Acceptance Criteria

1. WHEN a visitor hovers over a button or link THEN the website SHALL display a visual change (color, scale, or underline)
2. WHEN a visitor clicks a button THEN the website SHALL provide immediate visual feedback (e.g., ripple effect or state change)
3. WHEN a form field is focused THEN the website SHALL highlight the field with a border or glow effect
4. WHEN a project card is hovered THEN the website SHALL display a subtle lift or shadow effect to indicate interactivity
