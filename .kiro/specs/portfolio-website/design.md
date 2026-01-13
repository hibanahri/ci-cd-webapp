# Portfolio Website Design Document

## Overview

The portfolio website is a modern, professional single-page application built with Next.js and Tailwind CSS. It features a responsive design with smooth animations, dark/light mode support, and interactive project filtering. The site showcases Hiba's technical skills, completed projects, and provides a contact mechanism for recruiters and collaborators.

**Key Design Principles:**
- Clean, professional aesthetic with subtle animations
- Mobile-first responsive design
- Accessibility-focused (WCAG 2.1 AA compliant)
- Performance-optimized with lazy loading and image optimization
- Dark/light mode with smooth transitions

## Architecture

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── api/
│       └── contact/        # Contact form API endpoint
├── components/
│   ├── Navigation.tsx      # Header with nav menu
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/summary section
│   ├── Skills.tsx          # Skills display
│   ├── Projects.tsx        # Projects showcase with filtering
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with social links
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── lib/
│   ├── projects.ts         # Project data
│   ├── skills.ts           # Skills data
│   └── theme.ts            # Theme utilities
├── styles/
│   └── globals.css         # Global styles
├── public/
│   └── images/             # Project images and assets
└── tailwind.config.ts      # Tailwind configuration
```

## Components and Interfaces

### Navigation Component
- Sticky header with logo/name
- Navigation links (About, Skills, Projects, Contact)
- Theme toggle button
- Mobile hamburger menu
- Active section highlighting

### Hero Section
- Profile picture (circular, optimized image)
- Large headline with name
- Professional tagline
- Call-to-action button (scroll to projects)
- Fade-in animation on load

### About Section
- Professional summary (3-4 sentences)
- Education background
- Key strengths highlighted
- Smooth scroll animation

### Skills Section
- Skills organized by category:
  - Programming Languages (C, C++, Python, Java, JavaScript)
  - Web Technologies (HTML, CSS)
  - DevOps (Linux, Docker, CI/CD)
  - Networking (TCP/IP, DNS, routing, Cisco Packet Tracer)
  - Databases (Oracle SQL)
  - Other (ML, Deep Learning)
- Skill badges with hover effects
- Category filtering

### Projects Section
- Filter buttons by technology
- Project cards in grid layout (responsive: 1 col mobile, 2 cols tablet, 3 cols desktop)
- Each card shows: title, description, technologies, links
- Expandable/modal view for full project details
- Smooth animations on card hover

### Project Card Component
- Project title
- Brief description (2-3 lines)
- Technology tags
- Links to GitHub and demo (if available)
- Hover lift effect with shadow

### Contact Section
- Contact form with fields:
  - Name (required)
  - Email (required, validated)
  - Subject (required)
  - Message (required, min 10 characters)
- Submit button with loading state
- Success/error messages
- Form validation feedback

### Footer
- Social media links (GitHub, LinkedIn)
- Copyright notice
- Back to top button

### Theme Toggle
- Button in header
- Toggles between dark and light modes
- Persists preference to localStorage
- Smooth color transitions

## Data Models

### Project Model
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
    article?: string;
  };
  category: string;
}
```

### Skill Model
```typescript
interface Skill {
  category: string;
  items: string[];
}
```

### Contact Form Model
```typescript
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Theme Persistence
*For any* theme selection (dark or light), when a user toggles the theme and refreshes the page, the website SHALL display the previously selected theme.
**Validates: Requirements 3.3**

### Property 2: Project Filter Accuracy
*For any* technology filter applied to the projects list, all displayed projects SHALL contain that technology in their technologies array, and no projects without that technology SHALL be displayed.
**Validates: Requirements 2.3**

### Property 3: Contact Form Validation
*For any* contact form submission with invalid data (missing required fields or invalid email format), the form SHALL reject the submission and display appropriate error messages without sending data.
**Validates: Requirements 4.2**

### Property 4: Responsive Layout Adaptation
*For any* viewport width, the website SHALL display appropriate layout (1 column for mobile <640px, 2 columns for tablet 640-1024px, 3 columns for desktop >1024px) without horizontal scrolling.
**Validates: Requirements 5.2**

### Property 5: Navigation Highlighting
*For any* scroll position on the page, the navigation menu SHALL highlight the section link corresponding to the current viewport position.
**Validates: Requirements 6.2**

### Property 6: Smooth Scroll Navigation
*For any* navigation link clicked, the page SHALL smoothly scroll to the target section within 500ms without jumping.
**Validates: Requirements 6.1**

### Property 7: Image Optimization
*For any* image displayed on the page, the image SHALL be optimized for web (compressed) and lazy-loaded if below the fold, reducing initial page load time.
**Validates: Requirements 7.2**

### Property 8: Interactive Feedback
*For any* interactive element (button, link, form field), hovering or focusing SHALL provide immediate visual feedback (color change, scale, or glow effect).
**Validates: Requirements 8.1, 8.2, 8.3, 8.4**

## Error Handling

### Contact Form Errors
- **Validation Errors**: Display inline error messages for each field
- **Network Errors**: Show "Failed to send message. Please try again." with retry button
- **Server Errors**: Display generic error message and log details for debugging

### Theme Persistence Errors
- If localStorage is unavailable, fall back to system preference
- If stored theme is invalid, reset to light mode

### Image Loading Errors
- Display placeholder or fallback image
- Log error for monitoring

### Performance Issues
- Implement error boundary for component failures
- Show user-friendly error message if page fails to load

## Testing Strategy

### Unit Testing
- Test individual components in isolation
- Test form validation logic
- Test theme toggle functionality
- Test project filtering logic
- Use React Testing Library for component tests

### Property-Based Testing
- **Property 1 (Theme Persistence)**: Generate random theme selections, verify localStorage persistence across page reloads
- **Property 2 (Project Filter Accuracy)**: Generate random technology filters, verify only matching projects display
- **Property 3 (Contact Form Validation)**: Generate invalid form data combinations, verify rejection and error messages
- **Property 4 (Responsive Layout)**: Generate random viewport widths, verify correct column layout
- **Property 5 (Navigation Highlighting)**: Generate random scroll positions, verify correct nav link highlighting
- **Property 6 (Smooth Scroll)**: Generate random navigation clicks, verify scroll completes within 500ms
- **Property 7 (Image Optimization)**: Verify all images are optimized and lazy-loaded
- **Property 8 (Interactive Feedback)**: Generate random element interactions, verify visual feedback appears

### Integration Testing
- Test full user flow: landing → exploring projects → filtering → contact form submission
- Test theme toggle across all sections
- Test responsive behavior on multiple device sizes

### Performance Testing
- Lighthouse audit (target: 80+ score)
- Page load time measurement
- Image optimization verification

### Accessibility Testing
- WCAG 2.1 AA compliance check
- Keyboard navigation testing
- Screen reader compatibility

## Deployment

- **Hosting**: Netlify (with GitHub integration for automatic deployments)
- **Build**: Next.js static export or server deployment
- **Domain**: Custom domain (if available) or Netlify subdomain
- **CI/CD**: GitHub Actions for automated testing and deployment
