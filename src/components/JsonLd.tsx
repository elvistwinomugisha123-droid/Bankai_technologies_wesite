export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bankai Technologies",
    url: "https://bankaitech.com",
    logo: "https://bankaitech.com/logo.png",
    description:
      "AI systems company based in Kampala, Uganda building intelligent automation for African businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bukoto",
      addressRegion: "Kampala",
      addressCountry: "UG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+256788572959",
      contactType: "customer service",
      availableLanguage: ["English", "Luganda"],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
