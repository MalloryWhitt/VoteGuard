# VoteGuard

**VoteGuard** is a civic data transparency tool that visualizes the projected impact of federal voter ID legislation—specifically the **SAVE Act**—on eligible voters across the United States.

It compares:
- Estimated **disenfranchisement** (eligible voters lacking documentary proof of citizenship)
- Documented **election fraud** cases in the 2020 U.S. election

By contrasting these numbers state-by-state, VoteGuard helps users, policymakers, and journalists evaluate whether the voter fraud narrative used to justify such legislation is supported by real-world data.


## Data Sources

| Dataset | Description | Source | Link |

CVAP 2019–2023: Citizen Voting Age Population per state [U.S. Census Bureau]

(https://www.census.gov/programs-surveys/decennial-census/about/voting-rights/cvap/2019-2023-CVAP.html)

Election Fraud Cases: Confirmed voter fraud cases from 2020 [Heritage Foundation]

(https://www.heritage.org/voterfraud)

Disenfranchisement Estimate: Citizens lacking proof of citizenship [Brennan Center]

(https://www.brennancenter.org/our-work/analysis-opinion/213-million-american-citizens-voting-age-dont-have-ready-access)


## Methodology: Disenfranchisement Risk Projection

The SAVE Act would require voters to present documentary proof of citizenship (e.g., birth certificate, passport, or naturalization papers) to register and vote. According to the Brennan Center:

- Approximately **21.3 million** U.S. citizens of voting age (about 9%) lack ready access to such documents
- Roughly **3.8 million** citizens (about 2%) lack **any** form of documentary citizenship proof

These national figures are projected across states using each state’s **Citizen Voting Age Population (CVAP)** from the U.S. Census Bureau.  

Per-State Projection Formulas:
- Estimated_no_docs = CVAP × 9%
- Estimated_fully_undocumented = CVAP × 2%
