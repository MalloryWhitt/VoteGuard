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
  <p style={{ fontSize: 17, color: "#374151", margin: "0.75rem 0", textAlign: "justify" }}>{children}</p>
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
      <strong
        style={{
          display: "block",
          fontSize: "1rem",
          color: "#1e3a8a",
          marginBottom: "0.5rem",
        }}
      >
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
  return (
    <Wrap>
      <H1>Resources: Protecting Real Voters, Not Phantom Fraud</H1>

      <P>
        <strong>VoteGuard</strong> situates its analysis within an established body of empirical and legal
        scholarship demonstrating that “voter fraud” has been vastly overstated as a political problem. Research
        from the <A href="https://www.brennancenter.org">Brennan Center for Justice</A>, the{" "}
        <A href="https://electionlab.mit.edu/">MIT Election Lab</A>, and federal accountability agencies converge
        on one conclusion: the rate of voter impersonation or ineligible participation in U.S. elections is
        statistically negligible. Yet the persistence of this myth—intensified through digital misinformation and
        partisan legislation—has produced measurable democratic harm.
      </P>

      <Card title="Empirical Baseline">
        <P>
          The quantitative evidence against the voter-fraud narrative is overwhelming. A Loyola Law School review
          of every federal election between 2000 and 2014 identified only{" "}
          <A href="https://www.washingtonpost.com/news/wonk/wp/2014/08/06/a-comprehensive-investigation-of-voter-impersonation-finds-31-credible-incidents-out-of-one-billion-ballots/">
            31 credible instances
          </A>{" "}
          of voter impersonation out of more than one billion ballots cast. Similarly, the{" "}
          <A href="https://www.brennancenter.org/our-work/research-reports/noncitizen-voting-illegal">
            Brennan Center
          </A>{" "}
          found that non-citizen voting occurs at rates between 0.0003% and 0.0025%, making it statistically
          indistinguishable from administrative error. These findings have been replicated across state audits,
          court filings, and Department of Justice reviews.
        </P>
        <P>
          The U.S. Government Accountability Office’s 2014 report concluded that strict voter ID laws depress
          turnout by as much as three percentage points in adopting states, with disproportionate impact on Black,
          Latino, rural, and low-income voters. The cumulative effect is what scholars term{" "}
          <em>structural disenfranchisement</em>—a process by which procedural requirements achieve the same
          exclusionary outcomes once produced by overtly discriminatory laws.
        </P>
      </Card>

      <H2>The Political Life of a Myth</H2>
      <P>
        Despite exhaustive evidence, the belief in widespread voter fraud remains deeply embedded in American
        political discourse. Studies from the{" "}
        <A href="https://www.pewresearch.org/politics/2021/01/15/voters-reflections-on-the-2020-election/">
          Pew Research Center
        </A>{" "}
        indicate that approximately one in four Americans continues to doubt the legitimacy of the 2020 election,
        even after over 60 court challenges failed to produce evidence of systemic irregularities. This endurance
        reflects not data uncertainty but what political theorists describe as a “moral panic”—a durable narrative
        used to justify exceptional measures.
      </P>
      <P>
        The digital ecosystem amplifies this panic through coordinated misinformation campaigns, particularly via
        social media ecosystems that reward outrage and simplicity over nuance. The{" "}
        <A href="https://www.brennancenter.org/our-work/research-reports/debunking-voter-fraud-myth">
          Brennan Center
        </A>{" "}
        and academic reviews of election communication patterns demonstrate that false claims of fraud correlate
        strongly with increases in proposed voting restrictions, even in states with no history of irregularities.
      </P>

      <H2>From Shelby County v. Holder to the SAVE Act</H2>
      <P>
        The Supreme Court’s 2013 decision in{" "}
        <A href="https://www.naacpldf.org/case-issue/shelby-county-v-holder/">
          <em>Shelby County v. Holder</em>
        </A>{" "}
        marked a watershed in the modern history of voting rights. By invalidating the preclearance formula of
        the Voting Rights Act, the Court removed federal oversight from jurisdictions with documented histories of
        racial discrimination in elections. Justice Ruth Bader Ginsburg’s dissent described the move as “throwing
        away your umbrella in a rainstorm.” Within months, states including Alabama, Texas, and North Carolina
        enacted new registration and ID laws that had previously been blocked under federal review.
      </P>
      <P>
        Representative{" "}
        <A href="https://sewell.house.gov/2025/3/rep-sewell-introduces-the-john-r-lewis-voting-rights-advancement-act-ahead-of-the-60th-anniversary-of-bloody-sunday">
          Terri Sewell
        </A>{" "}
        of Alabama’s 7th District introduced the{" "}
        <em>John R. Lewis Voting Rights Advancement Act</em> to restore preclearance provisions using
        contemporary data on discriminatory practices. The legislation reflects an ongoing recognition that the
        architecture of disenfranchisement evolves: today’s restrictions appear as bureaucratic procedure rather
        than explicit exclusion.
      </P>

      <H2>Economic and Administrative Barriers</H2>
      <P>
        The proposed <em>Safeguard American Voter Eligibility (SAVE) Act</em> typifies this modern iteration. By
        requiring documentary proof of citizenship—such as a passport or birth certificate—the Act imposes an
        administrative threshold that millions of eligible citizens cannot meet. According to the{" "}
        <A href="https://www.aclu.org/press-releases/aclu-condemns-house-passage-of-anti-voter-save-act-calls-on-senate-to-reject-it">
          American Civil Liberties Union
        </A>
        , fewer than half of American adults currently hold passports, and the costs of obtaining one—including
        processing fees, documentation retrieval, and time off work—effectively constitute a “wealth test” for
        democratic participation.
      </P>
      <P>
        These burdens mirror earlier exclusionary mechanisms such as poll taxes and literacy tests: legally
        neutral on their face, yet functionally discriminatory in practice. In this sense, the SAVE Act can be
        understood as a postmodern form of disenfranchisement—transposing historical patterns of suppression into
        the idiom of administrative compliance.
      </P>

      <H2>Democracy as Access, Not Suspicion</H2>
      <P>
        Real election security depends on transparency, auditing, and investment in nonpartisan administration,
        not on expanding the frontier of suspicion. The empirical literature suggests that democratic legitimacy
        strengthens when participation is broad, inclusive, and procedurally simple. Conversely, the more complex
        the registration process becomes, the more it filters for privilege rather than commitment. As the{" "}
        <A href="https://www.brennancenter.org/our-work/research-reports/truth-about-voter-fraud">
          Brennan Center
        </A>{" "}
        has written, the myth of voter fraud “has become a tool for justifying policies that suppress the vote
        rather than secure it.”
      </P>

      <Card title="Conclusion">
        The SAVE Act does not advance election integrity; it codifies distrust. By reframing participation as a
        potential threat, it inverts the democratic presumption of good faith. The historical record—from{" "}
        <em>Shelby County</em> to the present—shows that barriers justified in the name of security often serve to
        narrow the electorate itself. Protecting democracy requires confronting that pattern directly, and
        recommitting to what John R. Lewis called “the precious right to vote”—a right that must be expanded, not
        rationed.
      </Card>

      <hr style={{ margin: "2rem 0", border: "none", borderTop: "1px solid #e5e7eb" }} />
      <Small>
        Return to the{" "}
        <Link to="/" style={{ color: "#1d4ed8" }}>
          Home
        </Link>{" "}
        or{" "}
        <Link to="/map" style={{ color: "#1d4ed8" }}>
          Map
        </Link>
        .
      </Small>
    </Wrap>
  );
}
