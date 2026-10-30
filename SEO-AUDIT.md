# SEO & GEO audit — DRP Fitness

Audit scope: repository inspection on 30 October 2026. No live crawl, Search Console, Lighthouse, Rich Results Test, or external schema validator credentials were available; external indexing and performance scores are not asserted.

## Initial audit

| Severity | Finding | Current implementation / impact | Recommendation |
| --- | --- | --- | --- |
| High | Production host identity | App metadata/sitemap/robots used `drpfitness.id`, while the owner confirms `drp-fitness.my.id`. Conflicting domains weaken canonical/entity consistency. | Set one verified host as metadata base, canonical, sitemap, and robots source; configure `NEXT_PUBLIC_SITE_URL` to the deployed origin. |
| Medium | Canonical coverage | No explicit per-route canonical metadata. | Set self-referencing canonicals on all indexable pages. |
| Medium | Schema completeness | Root JSON-LD had business details and socials but omitted URL/image/logo/map and used a hardcoded telephone. | Supply verified entity properties consistently from the canonical domain and existing site data. |
| Medium | Content credibility | Trainer metadata described the trainer as “experienced” without evidence; some location copy claimed convenient/strategic access without support. | Use factual descriptions; avoid unverified claims and only state supplied facts. |
| Low | Sitemap freshness | Sitemap used the current time on each generation and a fixed domain. | Use a stable last-modified date and canonical host to avoid indicating every page changes on every build. |
| Low | AI discovery | No supplementary machine-readable overview existed. | Added optional `llms.txt`, with verified facts and public pages; it is not an indexing or ranking guarantee. |

### Existing strengths

- Next.js 15.5.25, React 19, JavaScript, App Router (`app/`).
- Five public pages: `/`, `/harga`, `/fasilitas`, `/pelatih`, `/lokasi`; no separate About or Gallery route. Facilities and community photos are homepage sections.
- Unique titles and descriptions already existed for the five routes; page content is server-rendered and prices are text.
- Dynamic Next sitemap and robots conventions existed; no auth/admin pages were found.
- `next/image` is used, hero image is prioritized, lower-page imagery/maps are lazy loaded, dimensions supplied, Google fonts use `next/font` with swap.
- Local gym data (address, phone, hours, map, coordinates, prices, services) and social profiles are already present. Existing navigation/footer offer internal links.
- No redirect rules or SEO-specific dependencies; no image format conversion required for current webp assets.

## Implemented

- Canonical origin now defaults to `https://drp-fitness.my.id` and can be set using `NEXT_PUBLIC_SITE_URL` (set it to the exact deployed HTTPS origin).
- Self-referencing canonical metadata on each public route; consistent site URL in OG, JSON-LD, sitemap, and robots.
- Gym JSON-LD includes canonical `@id`, name, URL, image, logo, address, verified coordinates, hours, telephone, map, social profiles, and stated price range. JSON-LD escapes `<` before embedding.
- Robots allows public pages and explicitly lists common AI retrieval/training user agents. These controls are separate from Google/Bing search indexing; allowing a bot does not ensure crawling, indexing, or AI citation. A crawler may honor or ignore its own policy directives.
- Replaced unsupported trainer experience claim in metadata.
- Added this audit and optional `public/llms.txt` discovery overview.

## Search intent and page targeting

| Page | Primary topic / intent | Secondary topics | Cannibalization note |
| --- | --- | --- | --- |
| `/` | Gym Cibitung (local/commercial discovery) | fitness center Bekasi, DRP Fitness | Keep broad gym discovery here. |
| `/harga` | Gym membership and gym prices Cibitung (transactional) | personal trainer price, boxing/muaythai price | Keep specific prices and packages here. |
| `/fasilitas` | Gym facilities Cibitung (commercial investigation) | strength equipment, cardio, dumbbells | Distinct from general homepage overview. |
| `/pelatih` | Personal trainer Cibitung (commercial investigation) | trainer profile, personal training | Do not claim certifications/experience without evidence. |
| `/lokasi` | DRP Fitness location and hours (navigational/local) | gym near Wanasari/Cibitung | Keep address, map, contact, hours consistent. |

Search demand and competitor keyword volumes have not been verified; these are relevance-led targets, not volume claims. Existing internal links connect key pages. Each route has one primary H1 through the shared `SectionHeading` component.

## Local SEO and authority follow-up

- Confirm the canonical domain resolves over HTTPS and redirects any alternate production host directly to it once domain ownership/DNS is confirmed; do not point canonical to a host that does not serve the site.
- Keep Google Business Profile name, address, phone, hours, category, website, and photos consistent with these verified site details. Suggested primary category: Gym/Fitness center, selecting the closest current GBP category. Add services and fresh authentic facility photos; request honest customer feedback without incentives or fabricated reviews.
- Verify socials, coordinates, phone, hours, and displayed prices with the owner periodically. Use `NEXT_PUBLIC_SITE_URL=https://drp-fitness.my.id` in production deployment settings.
- Image filenames are existing descriptive-ish asset paths; renaming offers limited benefit and was skipped. Improve alt text toward what each image depicts when image content is manually reviewed.

## Content opportunities (write only from real experience)

1. **Starting at DRP Fitness: a first-visit guide** — target: gym for beginners Cibitung; intent: informational/local. Meta: “What to expect on your first visit to DRP Fitness in Cibitung, including current visit prices, available facilities, hours, and how to ask the team questions.” Headings: What to expect; facilities available; current visit rates; opening hours and location; questions to ask the team. Link to `/harga`, `/fasilitas`, `/lokasi`.
2. **How to choose a gym membership in Cibitung** — target: gym membership Cibitung; intent: comparison/transactional. Meta: “Compare DRP Fitness visit and monthly membership options, what each price covers, and how to contact the gym before joining.” Headings: Visit vs monthly membership; published prices; questions before joining; contact and location. Link to `/harga`, `/lokasi`.
3. **Personal training options at DRP Fitness** — target: personal trainer Cibitung; intent: commercial investigation. Meta: “Review the published solo, duo, and trio session packages at DRP Fitness and find out how to ask about scheduling.” Headings: Available formats; published session packages; questions about scheduling; meet the trainer. Link to `/pelatih`, `/harga`, `/lokasi`. Confirm terms and schedule availability with the business before writing.

## Remaining / validation checklist

- **Critical:** Verify the custom domain is connected and set `NEXT_PUBLIC_SITE_URL` in deployment before indexing. Confirm HTTPS and one-hop alternate-domain redirects.
- **High:** Submit sitemap in Google Search Console and Bing Webmaster Tools; verify GBP NAP and hours. No live search-platform access was part of this code audit.
- **Medium:** Run production Lighthouse/PageSpeed on deployed routes and check field Core Web Vitals after collecting traffic data. No performance score is claimed from source review alone.
- **Medium:** Validate rendered JSON-LD via Schema.org Validator and Google Rich Results Test; no external validator was executed here. LocalBusiness rich-result eligibility and visibility are not guaranteed.
- **Low:** Publish a small number of first-hand articles only when the business can supply original details and photos. `llms.txt` is supplementary and not a universal crawler standard.

## Validation record

Completed: `npm run lint` (ESLint 9 flat config), `npm run build` (all routes statically prerendered), generated sitemap and robots inspected, and rendered page HTML checked for page canonicals, route-specific Open Graph, and JSON-LD. External Rich Results/Schema validation, deployed-domain verification, Google Search Console, Bing Webmaster Tools, and PageSpeed remain pending access/deployment.
