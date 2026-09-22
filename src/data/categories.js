/**
 * Authoritative Category Taxonomy
 * Based strictly on PRODUCT.md for Laxmikrupa Emporium
 */

export const CATEGORIES = [
  {
    id: 'ethnic-wear',
    name: 'Ethnic Wear',
    slug: 'ethnic-wear',
    description: 'Traditional and contemporary Indian ethnic menswear, kurta pajama sets, and celebratory attire.',
    subcategories: [
      {
        id: 'plain-solid-kurtas',
        name: 'Plain / Solid Kurtas',
        slug: 'plain-solid-kurtas',
        description: 'Mandarin-collar solid tone kurtas in vibrant and neutral colorways.',
      },
      {
        id: 'printed-designer-kurtas',
        name: 'Printed / Designer Kurtas',
        slug: 'printed-designer-kurtas',
        description: 'Festive printed, foil-motif, and designer ethnic kurtas.',
      },
      {
        id: 'kurta-pajama-sets',
        name: 'Kurta Pajama Sets',
        slug: 'kurta-pajama-sets',
        description: 'Coordinated two-piece kurta and pajama/churidar sets.',
      },
      {
        id: 'boys-kids-ethnic-sets',
        name: 'Boys & Kids Ethnic Sets',
        slug: 'boys-kids-ethnic-sets',
        description: 'Ethnic sets designed for boys and young gentlemen (Sizes 20–30).',
      },
    ],
  },
  {
    id: 'shirts-casuals',
    name: 'Shirts & Casuals',
    slug: 'shirts-casuals',
    description: 'Everyday casual shirts, artistic prints, evening party wear, and structured trousers.',
    subcategories: [
      {
        id: 'casual-printed-shirts',
        name: 'Casual Printed Shirts',
        slug: 'casual-printed-shirts',
        description: 'Batik, geometric, and floral printed lightweight cotton shirts.',
      },
      {
        id: 'party-wear-shirts',
        name: 'Party Wear Shirts',
        slug: 'party-wear-shirts',
        description: 'Contemporary party-wear shirts with refined finishes and tailored cuts.',
      },
      {
        id: 'trousers-bottoms',
        name: 'Trousers / Bottoms',
        slug: 'trousers-bottoms',
        description: 'Men’s formal and casual trousers and coordinating bottoms.',
      },
    ],
  },
  {
    id: 'festive-group-orders',
    name: 'Festive & Group Orders',
    slug: 'festive-group-orders',
    description: 'Specialized group dress codes, wholesale quantities, and festival collections.',
    subcategories: [
      {
        id: 'festival-wedding-group-sets',
        name: 'Festival & Wedding Group Sets',
        slug: 'festival-wedding-group-sets',
        description: 'Matching bulk kurta sets for Ganesh Utsav, Navratri, and wedding celebrations.',
      },
      {
        id: 'family-matching-sets',
        name: 'Family Matching Sets',
        slug: 'family-matching-sets',
        description: 'Coordinated festive styling across Men (32–50), Boys (20–30), and Ladies (S–4XL).',
      },
      {
        id: 'kavad-yatra-bol-bam-specials',
        name: 'Kavad Yatra / Bol Bam Specials',
        slug: 'kavad-yatra-bol-bam-specials',
        description: 'Dedicated devotional saffron and printed attire for Kavad Yatra mandalis.',
      },
    ],
  },
];

export const STORE_SECTIONS = [
  { id: 'wholesale-inquiry', name: 'Wholesale Inquiry', href: '#wholesale-inquiry' },
  { id: 'visit-store', name: 'Visit Store', href: '#visit-store' },
  { id: 'whatsapp-assistance', name: 'WhatsApp Assistance', href: 'https://wa.me/919512905629' },
];
