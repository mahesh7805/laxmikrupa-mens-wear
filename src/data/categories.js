/**
 * Authoritative Category Taxonomy
 * Based strictly on PRODUCT.md for Laxmikrupa Emporium
 */

export const CATEGORIES_LIST = [
  {
    id: 'kurtas',
    name: 'Kurtas',
    subtext: 'Plain / Solid & Designer',
    image: '/assets/images/ethnic_wear_category.jpg',
    categoryKey: 'ethnic-wear',
    count: '24+ Designs',
  },
  {
    id: 'casual-shirts',
    name: 'Casual Shirts',
    subtext: 'Batik & Cotton Prints',
    image: '/assets/images/cat_folded_shirts.jpg',
    categoryKey: 'shirts-casuals',
    count: '18+ Styles',
  },
  {
    id: 'trousers',
    name: 'Trousers',
    subtext: 'Tailored Formal & Casual',
    image: '/assets/images/cat_trousers.jpg',
    categoryKey: 'shirts-casuals',
    count: '12+ Fits',
  },
  {
    id: 'ethnic-sets',
    name: 'Ethnic Sets',
    subtext: 'Kurta Pajama Sets',
    image: '/assets/images/hero_campaign.jpg',
    categoryKey: 'ethnic-wear',
    count: '16+ Sets',
  },
  {
    id: 'festive-wear',
    name: 'Festive Wear',
    subtext: 'Wedding & Group Mandalis',
    image: '/assets/images/festive_group_category.jpg',
    categoryKey: 'festive-group-orders',
    count: 'Bulk Runs',
  },
  {
    id: 'fabric-racks',
    name: 'Store Racks',
    subtext: 'Fine Cotton & Silks',
    image: '/assets/images/hero_store_display.jpg',
    categoryKey: 'all',
    count: 'Surat Atelier',
  },
];

export const CATEGORIES = [
  {
    id: 'ethnic-wear',
    name: 'Ethnic Wear',
    slug: 'ethnic-wear',
    image: '/assets/images/ethnic_wear_category.jpg',
    tagline: 'Tailored Kurtas & Celebratory Ensembles',
    description: 'Traditional and contemporary Indian ethnic menswear, kurta pajama sets, and celebratory attire.',
    subcategories: [
      { id: 'plain-solid-kurtas', name: 'Plain / Solid Kurtas', slug: 'plain-solid-kurtas' },
      { id: 'printed-designer-kurtas', name: 'Printed / Designer Kurtas', slug: 'printed-designer-kurtas' },
      { id: 'kurta-pajama-sets', name: 'Kurta Pajama Sets', slug: 'kurta-pajama-sets' },
      { id: 'boys-kids-ethnic-sets', name: 'Boys & Kids Ethnic Sets', slug: 'boys-kids-ethnic-sets' },
    ],
  },
  {
    id: 'shirts-casuals',
    name: 'Shirts & Casuals',
    slug: 'shirts-casuals',
    image: '/assets/images/cat_folded_shirts.jpg',
    tagline: 'Breathable Cottons & Evening Silhouettes',
    description: 'Everyday casual shirts, artistic prints, evening party wear, and structured trousers.',
    subcategories: [
      { id: 'casual-printed-shirts', name: 'Casual Printed Shirts', slug: 'casual-printed-shirts' },
      { id: 'party-wear-shirts', name: 'Party Wear Shirts', slug: 'party-wear-shirts' },
      { id: 'trousers-bottoms', name: 'Trousers / Bottoms', slug: 'trousers-bottoms' },
    ],
  },
  {
    id: 'festive-group-orders',
    name: 'Festive & Group Orders',
    slug: 'festive-group-orders',
    image: '/assets/images/festive_group_category.jpg',
    tagline: 'Coordinated Sets & Mandali Run Quantities',
    description: 'Specialized group dress codes, wholesale quantities, and festival collections.',
    subcategories: [
      { id: 'festival-wedding-group-sets', name: 'Festival & Wedding Group Sets', slug: 'festival-wedding-group-sets' },
      { id: 'family-matching-sets', name: 'Family Matching Sets', slug: 'family-matching-sets' },
      { id: 'kavad-yatra-bol-bam-specials', name: 'Kavad Yatra / Bol Bam Specials', slug: 'kavad-yatra-bol-bam-specials' },
    ],
  },
];
