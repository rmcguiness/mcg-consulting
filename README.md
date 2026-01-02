# MCG Consulting - Next.js Website

A modern, iOS-inspired website for MCG Consulting built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern iOS Design** - Clean, elegant interface with smooth animations
- 🎨 **White & Navy Blue Theme** - Professional color scheme
- 📱 **Fully Responsive** - Works beautifully on all devices
- ⚡ **Fast Performance** - Built with Next.js 14 and optimized for speed
- 🎯 **TypeScript** - Type-safe code for better development experience

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
└── package.json
```

## Customization

- **Colors**: Edit the `tailwind.config.ts` file to customize the navy blue color palette
- **Content**: Update the component files in the `components/` directory
- **Styling**: Modify `app/globals.css` for global styles

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
