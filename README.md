# VoteGuard

**VoteGuard** is a data transparency and visualization project that examines the relationship between voting accessibility, verified voter fraud, and proposed policy reforms such as the *Safeguard American Voter Eligibility (SAVE) Act*. The platform compares official data on eligible voting populations with verified voter fraud records to contextualize the scale of alleged fraud relative to the potential for disenfranchisement.

---

## Overview

VoteGuard presents a visual, data-driven analysis of how restrictive documentation requirements—such as those proposed in the SAVE Act—could disproportionately affect low-income, rural, elderly, and minority voters who lack access to passports or birth certificates. The project integrates official datasets to highlight the contrast between the extremely low incidence of verified voter fraud and the large number of citizens who would lose voting eligibility under stricter ID laws.

Users can interact with an interactive U.S. map to explore each state’s:
- Estimated **Citizen Voting-Age Population (CVAP)**  
- Verified cases of voter fraud  
- Projected number and percentage of voters potentially disenfranchised under the SAVE Act  

---

## Methods and Data

VoteGuard combines two publicly verifiable, authoritative datasets:

1. **Citizen Voting Age Population (CVAP)** — from the [U.S. Census Bureau](https://www.census.gov/programs-surveys/decennial-census/about/voting-rights/cvap.html).  
   This dataset estimates the number of eligible voters by state and demographic group and serves as a standard reference for representation and redistricting analyses.

2. **Election Fraud Database** — from the [Heritage Foundation](https://www.heritage.org/voterfraud).  
   This database compiles confirmed cases of voter fraud from court records and media reports, providing one of the few structured national records of adjudicated incidents.

By aligning these datasets, VoteGuard quantifies the ratio of verified voter fraud cases to eligible voters and estimates the proportion of the electorate potentially excluded by documentary proof-of-citizenship requirements.

---

## Technologies Used

- **React** — Front-end framework for modular, dynamic UI  
- **D3.js** — Data visualization library for rendering the interactive map  
- **React Simple Maps** — Geographic rendering built on D3 projections  
- **Vite** — Development and build tool for optimized front-end bundling  
- **CSV + d3-fetch** — For parsing and loading dataset files  
- **HTML5 / CSS3 / ES6** — Core web technologies

---

## Deployment

VoteGuard can be deployed using any modern static hosting provider, such as [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or GitHub Pages.

### To build locally
```bash
npm install
npm run dev       # Start local dev server
npm run build     # Create optimized production build
