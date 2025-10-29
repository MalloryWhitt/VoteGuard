import React from "react";
import { Link } from "react-router-dom";

const Wrap = ({ children }) => (
  <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1.5rem", lineHeight: 1.7 }}>
    {children}
  </div>
);

const H1 = ({ children }) => (
  <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: "1.25rem", color: "#111827" }}>
    {children}
  </h1>
);
const H2 = ({ children, id }) => (
  <h2
    id={id}
    style={{
      fontSize: 22,
      fontWeight: 600,
      marginTop: "2rem",
      marginBottom: "0.75rem",
      color: "#1f2937",
      borderBottom: "2px solid #e5e7eb",
      paddingBottom: "0.3rem",
    }}
  >
    {children}
  </h2>
);
const P = ({ children }) => (
  <p style={{ fontSize: 17, color: "#374151", margin: "0.75rem 0" }}>{children}</p>
);
const Small = ({ children }) => (
  <small style={{ fontSize: 14, color: "#6b7280" }}>{children}</small>
);
const Card = ({ title, children }) => (
  <div
    style={{
      background: "#f8fafc",
      borderLeft: "4px solid #1d4ed8",
      padding: "1rem 1.25rem",
      borderRadius: "6px",
      boxShadow: "0 1px 4px rgba(0,0,0,.06)",
      margin: "1.75rem 0",
    }}
  >
    {title && (
      <strong style={{ display: "block", fontSize: "1rem", color: "#1e3a8a", marginBottom: "0.5rem" }}>
        {title}
      </strong>
    )}
    {children}
  </div>
);

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" style={{ color: "#1d4ed8", textDecoration: "underline" }}>
    {children}
  </a>
);

export default function Resources() {
  const sources = [
    {
      href: "https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-what-real-story",
      label: "Brennan Center for Justice: Noncitizen Voting—What’s the Real Story?",
    },
    {
      href: "https://electionlab.mit.edu/research",
      label: "MIT Election Data + Science Lab: Voter Turnout and Access Studies",
    },
    {
      href: "https://www.pewresearch.org/short-reads/2023/09/19/misinformation-about-election-fraud-has-persisted-since-2020/",
      label: "Pew Research: Misinformation About Election Fraud Since 2020",
    },
    {
      href: "https://naacpldf.org/wp-content/uploads/Shelby-County-v-Holder-Case-Analysis.pdf",
      label: "NAACP LDF: Shelby County v. Holder (Case Analysis)",
    },
    {
      href: "https://sewell.house.gov/media/press-releases/rep-sewell-introduces-john-r-lewis-voting-rights-advancement-act",
      label: "Rep. Terri Sewell: John R. Lewis Voting Rights Advancement Act",
    },
    {
      href: "https://www.aclu.org/press-releases/aclu-condemns-house-passing-of-save-act",
      label: "ACLU: Condemning the SAVE Act",
    },
  ];

  return (
    <Wrap>
      <H1>Resources: Protecting Real Voters, Not Phantom Fraud</H1>
      <P>
        This section anchors <strong>VoteGuard</strong> in the empirical and historical record. Decades of
        academic inquiry—from the <A href="https://www.brennancenter.org">Brennan Center for Justice</A> to the{" "}
        <A href="https://electionlab.mit.edu">MIT Election Data + Science Lab</A>—conclude that widespread
        voter fraud in the United States is statistically negligible. Yet laws such as the <em>Safeguard American
        Voter Eligibility (SAVE) Act</em> recycle this myth, imposing documentation barriers that disenfranchise
        legitimate voters. Understanding this pattern requires looking beyond 2020 to a longer arc of
        constitutional retrenchment and racialized voter suppression.
      </P>

      <Card title="Summary">
        <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: 16, color: "#374151" }}>
          <li>
            <strong>Empirical evidence:</strong> Between 2000 and 2020, only{" "}
            <A href="https://www.washingtonpost.com/news/wonk/wp/2014/08/06/a-comprehensive-investigation-of-voter-impersonation-finds-31-credible-incidents-out-of-one-billion-ballots/">
              31 credible cases of voter impersonation
            </A>{" "}
            were found out of over one billion ballots cast.
          </li>
          <li>
            <strong>Policy risk:</strong> Requiring passports or birth certificates functions as a{" "}
            <strong>de facto wealth test</strong>, disproportionately excluding lower-income, rural, and minority voters.
          </li>
          <li>
            <strong>Historical continuity:</strong> These restrictions reflect post–<em>Shelby County v. Holder</em> patterns,
            where states exploited the rollback of federal oversight to tighten access under the guise of “integrity.”
          </li>
        </ul>
      </Card>

      <H2>The Research: “Voter Fraud” vs. Empirical Reality</H2>
      <P>
        The notion of mass voter fraud has been repeatedly tested and falsified. The{" "}
        <A href="https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-what-real-story">
          Brennan Center
        </A>{" "}
        found the incidence of non-citizen voting between 0.0003% and 0.0025%—less than the statistical noise rate
        in administrative data. Studies by the{" "}
        <A href="https://electionlab.mit.edu">MIT Election Lab</A> demonstrate that allegations of systemic fraud
        typically trace back to clerical errors, data entry mismatches, or misunderstandings about provisional ballots.
      </P>
      <P>
        Yet misinformation persists. According to{" "}
        <A href="https://www.pewresearch.org/short-reads/2023/09/19/misinformation-about-election-fraud-has-persisted-since-2020/">
          Pew Research (2023)
        </A>
        , one in four Americans still believes the 2020 election was “stolen,” despite exhaustive audits and bipartisan
        confirmations. This misinformation has become a powerful pretext for restrictive voting laws—a phenomenon the
        <A href="https://law.yale.edu"> Yale Law Journal</A> describes as “legislating against ghosts.”
      </P>

      <H2>From Shelby County v. Holder to the SAVE Act</H2>
      <P>
        In 2013, the Supreme Court’s decision in{" "}
        <A href="https://naacpldf.org/wp-content/uploads/Shelby-County-v-Holder-Case-Analysis.pdf">
          <em>Shelby County v. Holder</em>
        </A>{" "}
        effectively nullified Section 5 of the Voting Rights Act, which required jurisdictions with histories of racial
        discrimination to obtain federal “preclearance” before changing election laws. The Court argued that the formula
        used to determine those jurisdictions was outdated—yet within months, several states (including Alabama and Texas)
        enacted new voter ID and registration laws that had previously been blocked.
      </P>
      <P>
        The aftermath of <em>Shelby</em> revealed what Justice Ruth Bader Ginsburg warned in dissent: that removing federal
        oversight “was like throwing away your umbrella in a rainstorm.” The{" "}
        <A href="https://www.brennancenter.org/our-work/analysis-opinion/shelby-county-v-holder-decision-explained">
          Brennan Center’s longitudinal studies
        </A>{" "}
        have documented measurable declines in minority voter registration and turnout in formerly protected jurisdictions.
      </P>

      <H2>Alabama’s Role and the Legacy of John R. Lewis</H2>
      <P>
        Alabama stands at the intersection of this history. The state was the petitioner in <em>Shelby County v. Holder</em>,
        and it remains a proving ground for the future of voting rights. Representative{" "}
        <A href="https://sewell.house.gov/media/press-releases/rep-sewell-introduces-john-r-lewis-voting-rights-advancement-act">
          Terri Sewell
        </A>
        , who represents Alabama’s 7th District, has led the reintroduction of the{" "}
        <em>John R. Lewis Voting Rights Advancement Act</em>—a bill restoring federal preclearance and modernizing oversight
        formulas using recent data on discrimination.
      </P>
      <P>
        Sewell’s work honors the legacy of{" "}
        <A href="https://johnlewis.house.gov/">John Lewis</A>, whose 1965 march across Selma’s Edmund Pettus Bridge catalyzed
        the original Voting Rights Act. The SAVE Act’s citizenship documentation requirements echo pre-1965 barriers like
        literacy tests and poll taxes—measures framed as “neutral” but designed to suppress marginalized voices.
      </P>

      <H2>The Economics of Disenfranchisement</H2>
      <P>
        According to the{" "}
        <A href="https://www.gao.gov/products/gao-14-634">U.S. Government Accountability Office (GAO)</A>,
        voter ID and documentary proof laws have statistically significant negative effects on turnout—up to 3 percentage
        points in states implementing strict rules. That impact compounds among low-income voters who cannot afford the
        fees, travel, or time off work to obtain documents.
      </P>
      <P>
        This dynamic mirrors what political scientists term “cost-based disenfranchisement”: when bureaucratic or economic
        barriers shift the composition of the electorate without formally excluding anyone. In effect, the SAVE Act would
        introduce a <strong>citizenship surcharge</strong> on participation—a moral and constitutional regression.
      </P>

      <Card title="In Short">
        The SAVE Act and similar proposals do not secure democracy; they constrict it. Real election integrity is built
        through transparency, technology investment, and civic education—not suspicion. The path forward lies in renewing
        the promise of the Voting Rights Act, embracing Representative Sewell’s and John Lewis’s vision of a democracy
        broad enough for everyone.
      </Card>

      <H2>Learn More & Primary Sources</H2>
      <ul style={{ fontSize: 16, lineHeight: 1.7, marginLeft: "1.1rem", color: "#374151" }}>
        {sources.map((src, i) => (
          <li key={i}>
            <A href={src.href}>{src.label}</A>
          </li>
        ))}
      </ul>

      <hr style={{ margin: "2rem 0", border: "none", borderTop: "1px solid #e5e7eb" }} />
      <Small>
        Return to the <Link to="/" style={{ color: "#1d4ed8" }}>Home</Link> or{" "}
        <Link to="/map" style={{ color: "#1d4ed8" }}>Map</Link>.
      </Small>
    </Wrap>
  );
}
