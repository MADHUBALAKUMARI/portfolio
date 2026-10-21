# Madhubala Kumari — Portfolio

A responsive, single-page developer portfolio built with React and the Next.js App Router. Its visual direction is **nocturnal editorial / luminous systems**: a dark plum canvas, restrained violet-to-blue accents, Space Grotesk display type, Manrope body copy, and DM Mono technical details. The composition uses an editorial hero, orbiting code motif, and numbered project sections.

## Edit portfolio content

All editable profile and portfolio content is in **`src/data/portfolio.ts`**:

- Update the name, role, introduction, about copy, BCA degree text, and skill groups in the `portfolio` object.
- Edit each project title, description, technology tags, and `url` in `projects`. Leave a project URL as an empty string until a real link is available; the interface will show a non-clickable marker.
- Add real contact destinations in `contact.email`, `contact.linkedin`, and `contact.github`. Empty values are intentionally shown as “Not provided”; there is no pretend contact form.
- Set `resumeUrl` to a real resume file path or URL when one is ready. Until then, the page clearly marks the resume as unavailable.

Keep the `id` values for projects URL-safe and unique. No institution, graduation date, public profiles, email address, or resume file has been assumed.

## Run locally

From the workspace root:

```sh
PORT=3000 pnpm --filter @workspace/madhubala-portfolio run dev
```

The site now uses the Next.js App Router. `src/app/page.tsx` loads the portfolio,
`src/app/layout.tsx` sets page metadata and global styles, and `next.config.ts`
exports the static site. Build it with
`pnpm --filter @workspace/madhubala-portfolio run build`; the static output is
written to `out/`. Run the TypeScript check with
`pnpm --filter @workspace/madhubala-portfolio run typecheck`.
