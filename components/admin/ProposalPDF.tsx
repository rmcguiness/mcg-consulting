import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const navy = "#102a43";
const navyLight = "#243b53";
const gray = "#627d98";
const borderColor = "#d9e2ec";

const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: "Helvetica",
    fontSize: 11,
    color: navy,
    lineHeight: 1.5,
  },
  // Header
  header: {
    borderBottom: `2px solid ${navy}`,
    paddingBottom: 10,
    marginBottom: 15,
  },
  companyName: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: navy,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 10,
    color: gray,
    marginTop: 15,
    letterSpacing: 0.5,
  },
  // Proposal title area
  titleSection: {
    marginBottom: 30,
  },
  proposalTitle: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: navy,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: "row",
    gap: 24,
    marginTop: 4,
  },
  metaLabel: {
    fontSize: 9,
    color: gray,
    textTransform: "uppercase" as const,
    letterSpacing: 0.8,
  },
  metaValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: navyLight,
    marginTop: 2,
  },
  // Section
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: navy,
    borderBottom: `1px solid ${borderColor}`,
    paddingBottom: 6,
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 11,
    color: navyLight,
    lineHeight: 1.6,
  },
  // Investment box
  investmentBox: {
    backgroundColor: "#f0f4f8",
    borderRadius: 6,
    padding: 20,
    marginBottom: 24,
  },
  investmentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  investmentLabel: {
    fontSize: 11,
    color: gray,
  },
  investmentValue: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: navy,
  },
  priceTotal: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: navy,
  },
  divider: {
    borderBottom: `1px solid ${borderColor}`,
    marginVertical: 10,
  },
  // List
  listItem: {
    flexDirection: "row",
    marginBottom: 6,
  },
  bullet: {
    width: 16,
    fontSize: 11,
    color: navy,
  },
  listText: {
    flex: 1,
    fontSize: 11,
    color: navyLight,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 40,
    left: 50,
    right: 50,
    borderTop: `1px solid ${borderColor}`,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: {
    fontSize: 8,
    color: gray,
  },
});

export interface ProposalData {
  clientName: string;
  businessName: string;
  projectType: string;
  scope: string;
  price: number;
  timeline: string;
  paymentTerms: string;
  date: string;
}

const INCLUDED_ITEMS = [
  "Fully responsive design optimized for all devices",
  "Mobile-first development approach",
  "Search engine optimization (SEO) best practices",
  "2 rounds of design revisions",
  "Cross-browser compatibility testing",
  "Performance optimization (Core Web Vitals)",
  "30 days of post-launch support",
  "Google Analytics integration",
];

export default function ProposalPDF({ data }: { data: ProposalData }) {
  const upfront = Math.round(data.price * 0.5);
  const completion = data.price - upfront;

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.companyName}>MCG Consulting</Text>
          <Text style={styles.tagline}>
            Web Design &amp; Digital Strategy for the Florida Keys
          </Text>
        </View>

        {/* Title + Meta */}
        <View style={styles.titleSection}>
          <Text style={styles.proposalTitle}>Project Proposal</Text>
          <View style={styles.metaRow}>
            <View>
              <Text style={styles.metaLabel}>Prepared For</Text>
              <Text style={styles.metaValue}>
                {data.clientName || data.businessName}
              </Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>Business</Text>
              <Text style={styles.metaValue}>{data.businessName}</Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>Date</Text>
              <Text style={styles.metaValue}>{data.date}</Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>Project Type</Text>
              <Text style={styles.metaValue}>{data.projectType}</Text>
            </View>
          </View>
        </View>

        {/* Scope of Work */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scope of Work</Text>
          <Text style={styles.paragraph}>{data.scope}</Text>
        </View>

        {/* Investment */}
        <View style={styles.investmentBox}>
          <Text style={styles.sectionTitle}>Investment</Text>
          <View style={styles.investmentRow}>
            <Text style={styles.investmentLabel}>Total Project Cost</Text>
            <Text style={styles.priceTotal}>
              ${data.price.toLocaleString()}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.investmentRow}>
            <Text style={styles.investmentLabel}>
              {data.paymentTerms === "50/50"
                ? "50% Due Upon Agreement"
                : data.paymentTerms === "100-upfront"
                  ? "100% Due Upon Agreement"
                  : "Payment Due Upon Agreement"}
            </Text>
            <Text style={styles.investmentValue}>
              $
              {data.paymentTerms === "100-upfront"
                ? data.price.toLocaleString()
                : upfront.toLocaleString()}
            </Text>
          </View>
          {data.paymentTerms === "50/50" && (
            <View style={styles.investmentRow}>
              <Text style={styles.investmentLabel}>
                50% Due Upon Completion
              </Text>
              <Text style={styles.investmentValue}>
                ${completion.toLocaleString()}
              </Text>
            </View>
          )}
        </View>

        {/* Timeline */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Timeline</Text>
          <Text style={styles.paragraph}>{data.timeline}</Text>
        </View>

        {/* What's Included */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What&apos;s Included</Text>
          {INCLUDED_ITEMS.map((item, i) => (
            <View key={i} style={styles.listItem}>
              <Text style={styles.bullet}>{"\u2022"}</Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            MCG Consulting | ryan@mcgconsulting.com | (732) 675-8146
          </Text>
          <Text style={styles.footerText}>mcgconsulting.com</Text>
        </View>
      </Page>
    </Document>
  );
}
