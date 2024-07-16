## README

### Project Overview

This project involves building reusable React components based on provided mockups. The components created are `MediaBanner` and `ItemRow`. The focus is on using TypeScript for type safety and Tailwind CSS for styling. The components leverage data from a custom hook at `src/useData`.

### Components

#### MediaBanner

The `MediaBanner` component displays a banner with an image, text, and a button. It adapts its layout based on the `orientation` prop.

**Props:**
- `img`: Contains the source and alt text for the image.
- `leadingText`: Text displayed above the heading.
- `heading`: The main heading text.
- `orientation`: Determines the layout orientation of the component.
- `button`: Contains the text and href for the button.

**Approach:**
- The component checks for the presence of the `img` prop to render conditionally.
- The layout orientation is controlled by dynamically applying Tailwind CSS classes.
- The `PrimaryButton` component is used for the button, ensuring reusability and consistency.

#### ItemRow

The `ItemRow` component displays a list of items in a grid format. Each item includes an image, heading, and body text.

**Props:**
- `items`: An array of items, each containing an image, heading, and body text.

**Approach:**
- The component checks for the presence of items before rendering.
- A responsive grid layout is achieved using Tailwind CSS classes.
- Each item is displayed using a flexible layout that adapts to different screen sizes.

#### PrimaryButton

The `PrimaryButton` component renders a styled button, which is used in both the `MediaBanner` and other potential components.

**Props:**
- `text`: The button text.
- `href`: The button link.

**Approach:**
- The component applies consistent styling using Tailwind CSS classes.
- Ensures the button is accessible by using semantic HTML.

### Technical Details

**TypeScript:**
- TypeScript is used to define the props for each component, ensuring type safety and better development experience.
- Types are imported from the `MockData` type in `src/useData`.

**Tailwind CSS:**
- Tailwind CSS provides utility-first styling, making it easy to apply responsive styles and maintain a consistent design.
- Responsive classes are used to ensure components adapt to different screen sizes.

### Design Decisions

1. **Component Reusability:**
   - The components are designed to be reusable, with props that allow for customization based on different use cases.

2. **Responsive Design:**
   - Tailwind CSS is used to apply responsive styles, ensuring the components look good on various screen sizes.

3. **Type Safety:**
   - TypeScript is used to define the props, ensuring that the components receive the correct data types and helping to catch errors during development.

### How to Run

1. **Install Dependencies:**
   ```bash
   npm install
2. **Start Development Server:**
   ```bash
   npm run dev
### Conclusion

This project demonstrates the creation of reusable React components using TypeScript and Tailwind CSS. The components are designed to be flexible and responsive, leveraging type-safe practices and utility-first styling. 