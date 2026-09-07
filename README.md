# CLAMP project page

Source for the public [CLAMP project page](https://clamp2026.github.io/), published with GitHub Pages from the root of the `main` branch. The site is static HTML/CSS with a small optional BibTeX copy enhancement. No package installation or build step is required.

## Content and evidence

- Use **CLAMP: Training-Free Diffusion Inverse Solver** for the project identity, followed by the unchanged official paper title and author order.
- The HTML result tables transcribe all 134 dataset/method rows from [arXiv:2605.27990v1, Tables 1 and 3](https://arxiv.org/html/2605.27990v1). These are author-reported paper results; retain the source version, protocol, and distinction from new runs when editing them.
- The reproduction section links to the [v0.1.0 code release](https://github.com/Seunghyeok0715/CLAMP/releases/tag/v0.1.0) and distinguishes its one-image FFHQ execution check from complete benchmark reproduction.
- ICML 2026 is the preferred paper citation. The arXiv link provides access to the manuscript; its DOI is not used as a proceedings DOI.
- Checkpoints, datasets, local benchmark artifacts, and separate CSV exports are not bundled in this website repository. Research results remain available as HTML tables and the existing figures.

## Local preview

```bash
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. Check the page on desktop and mobile, expand the result tables, and copy the BibTeX. The core content remains readable without JavaScript. Push reviewed changes to `main` to publish through the existing GitHub Pages configuration.

## Discovery and maintenance

`index.html` includes a canonical URL, description, Open Graph/X previews using an existing research figure, academic citation metadata, and structured paper information. `robots.txt` permits crawling and references `sitemap.xml`. The previous site had no robots file; the wildcard rule preserves that unrestricted default. No separate model-training crawler policy is introduced. Update the sitemap modification date when the page changes.

Crawler access and metadata do not establish that the page has been indexed or improve its ranking by themselves. A site owner can verify the canonical URL and request indexing through their search-engine webmaster account. No Search Console indexing request or discovery evaluation was performed as part of this page update.

The inherited Nerfies analytics ID was removed after confirming it matched the upstream template. Add analytics only with a measurement ID controlled by this project's owner. The unused template interpolation/carousel script is no longer loaded, avoiding requests for nonexistent demonstration images.

## Website license

This website is licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). The original page template is adapted from [Nerfies](https://github.com/nerfies/nerfies.github.io). Existing research figures are retained.
