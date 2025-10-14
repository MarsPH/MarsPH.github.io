# Project Pages Layout Fix TODO

## Information Gathered
- index.html has clean hero with padding, 50/50 split but responsive, sections use containers with rows.
- Project pages use min-vh-100 for hero (too tall), small video (max-width 600px), sections with 50/50 splits feel cramped on PC.
- StandardProjectTemplate.html is basic, actual pages are detailed but need layout improvements.

## Plan
- Update project.css: Remove min-vh-100 from hero, adjust padding; increase video size to full width in column; adjust column proportions to 7/5 for better balance.
- Update StandardProjectTemplate.html: Apply new layout structure.
- Update all project HTML files (LightWthin.html, RocketInterceptor.html, MonsterHunter.html, Fugame.html, Flow.html): Sync with template, ensure consistent structure.

## Dependent Files to be edited
- project.css
- StandardProjectTemplate.html
- LightWthin.html
- RocketInterceptor.html
- MonsterHunter.html
- Fugame.html
- Flow.html

## Followup steps
- Test layouts on PC for cleanliness and professionalism.
- Ensure responsive design works on mobile.
- Verify Bootstrap integration is proper.
