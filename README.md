## Exercises for Next.js App Router

### Exercise 1: Basic Static Routing
Create a Next.js application with three static pages:
- Home page (`/`)
- About page (`/about`)
- Contact page (`/contact`)

**Objective:**
- Understand how to set up basic static routes using the `pages` directory in Next.js.

### Exercise 2: Dynamic Routing
Extend your application to include dynamic routing by adding a user profile page. Each user profile should be accessed via a URL pattern like `/users/[id]`, where `[id]` is the user ID.

**Objective:**
- Learn to handle dynamic parameters in URLs using Next.js file-based routing.
- Create a mock function to fetch user data based on the ID.

### Exercise 3: Nested Routes
Create a nested route for a product dashboard. The main dashboard is accessible at `/products`, and individual product details should be accessible at `/products/[id]`.

**Objective:**
- Set up nested routes in Next.js.
- Understand how parent and child components interact in the context of routing.

### Exercise 4: Programmatic Navigation
Add a search page at `/search` that includes a form where users can enter a search term. When the form is submitted, programmatically navigate to `/search/results` with the search term as a query parameter (e.g., `/search/results?term=searchedTerm`).

**Objective:**
- Implement programmatic navigation using Next.js hooks.
- Utilize the `useRouter` hook to push a new URL to the router.

### Exercise 5: Catch-all Routes
Implement a catch-all route for handling documentation pages under `/docs`. For instance, accessing `/docs/setup/installation` should load a documentation component capable of fetching content based on the path.

**Objective:**
- Use catch-all routes to handle arbitrary paths.
- Simulate fetching document content based on the pathname.