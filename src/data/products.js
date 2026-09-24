/**
 * Centralized Prototype Product Data Model
 * Based strictly on PRODUCT.md and verified inventory understanding.
 * Structured for future backend API replacement (GET /api/products).
 */

export const DEMO_PRODUCTS = [
  {
    id: 'lk-eth-01',
    slug: 'classic-solid-mandarin-kurta',
    name: 'Classic Solid Mandarin Kurta',
    categorySlug: 'kurtas',
    categoryName: 'Kurtas',
    subcategorySlug: 'plain-solid-kurtas',
    subcategoryName: 'Plain / Solid',
    tagline: 'Refined Mandarin-collar solid kurta crafted for festive celebrations and cultural gatherings.',
    description: 'A timeless staple featuring a crisp mandarin band collar, structured placket, and breathable high-twist cotton weave. Finished with premium tailoring that ensures comfortable drape across day-long celebrations.',
    priceDemo: '₹899',
    priceNumeric: 899,
    colors: [
      { name: 'Mustard Yellow', hex: '#D4A017' },
      { name: 'Royal Maroon', hex: '#6B1724' },
      { name: 'Ocean Teal', hex: '#1B4D5A' },
      { name: 'Pure White', hex: '#F9F9F8' },
    ],
    sizes: ['36', '38', '40', '42', '44', '46', '48', '50'],
    sizeRangeLabel: 'Men: 36 to 50',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Solid', 'Mandarin', 'Festive', 'Classic'],
    featured: true,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/ethnic_wear_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-10',
  },
  {
    id: 'lk-eth-02',
    slug: 'designer-printed-festive-kurta',
    name: 'Designer Printed Festive Kurta',
    categorySlug: 'kurtas',
    categoryName: 'Kurtas',
    subcategorySlug: 'printed-designer-kurtas',
    subcategoryName: 'Printed & Designer',
    tagline: 'Traditional geometric and foil-motif festive print with a structured silhouette.',
    description: 'Designed for evening festivities and wedding receptions. Features intricate tonal and foil geometric impressions on fine-combed cotton, detailed with matching buttons and reinforced shoulder seams.',
    priceDemo: '₹1,199',
    priceNumeric: 1199,
    colors: [
      { name: 'Midnight Navy', hex: '#162238' },
      { name: 'Deep Emerald', hex: '#1E4D2B' },
      { name: 'Crimson Red', hex: '#8B1E28' },
    ],
    sizes: ['38', '40', '42', '44', '46'],
    sizeRangeLabel: 'Men: 38 to 46',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Printed', 'Designer', 'Evening', 'Festive'],
    featured: true,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/hero_campaign.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-12',
  },
  {
    id: 'lk-eth-03',
    slug: 'traditional-kurta-pajama-2-piece-set',
    name: 'Traditional Kurta Pajama 2-Piece Set',
    categorySlug: 'kurta-pajamas',
    categoryName: 'Kurta Pajama Sets',
    subcategorySlug: 'kurta-pajama-sets',
    subcategoryName: 'Traditional Sets',
    tagline: 'Complete coordinated set with a tailored ethnic kurta and crisp white churidar pajama.',
    description: 'An all-in-one celebratory solution. Includes a premium long ethnic kurta paired with matching crisp cotton churidar pajama bottoms, ideal for wedding rituals, Diwali, and family pujas.',
    priceDemo: '₹1,499',
    priceNumeric: 1499,
    colors: [
      { name: 'Saffron Orange', hex: '#E66A2C' },
      { name: 'Ivory Cream', hex: '#EDE8D0' },
      { name: 'Sky Blue', hex: '#4A7C9B' },
    ],
    sizes: ['36', '38', '40', '42', '44', '48', '50'],
    sizeRangeLabel: 'Men: 36 to 50',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['2-Piece Set', 'Churidar', 'Puja', 'Wedding'],
    featured: true,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/festive_group_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-08',
  },
  {
    id: 'lk-eth-04',
    slug: 'boys-festive-kurta-pajama-set',
    name: 'Boys Festive Kurta Pajama Set',
    categorySlug: 'kids',
    categoryName: 'Kids & Boys',
    subcategorySlug: 'boys-kids-ethnic-sets',
    subcategoryName: 'Boys Kurta Sets',
    tagline: 'Tailored celebratory ethnic set for boys and youth (Sizes 20–30).',
    description: 'Crafted with delicate soft-touch seams and elasticated comfort bottoms so young boys look dashing without any discomfort during lengthy Indian wedding functions.',
    priceDemo: '₹749',
    priceNumeric: 749,
    colors: [
      { name: 'Sunny Yellow', hex: '#E8B923' },
      { name: 'Royal Blue', hex: '#1E3F7A' },
      { name: 'Maroon', hex: '#6B1724' },
    ],
    sizes: ['20', '22', '24', '26', '28', '30'],
    sizeRangeLabel: 'Boys: 20 to 30',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Kids', 'Boys', 'Festive', 'Matching'],
    featured: true,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/ethnic_wear_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-14',
  },
  {
    id: 'lk-cas-01',
    slug: 'batik-inspired-casual-printed-shirt',
    name: 'Batik-Inspired Casual Printed Shirt',
    categorySlug: 'shirts',
    categoryName: 'Casual Shirts',
    subcategorySlug: 'casual-printed-shirts',
    subcategoryName: 'Casual Printed',
    tagline: 'Lightweight breathable cotton shirt with artisanal geometric and organic motifs.',
    description: 'An everyday statement piece highlighting rich indigo and earth-toned motifs inspired by heritage block and batik crafts. Cut in a modern relaxed-fit with a structured cuban collar.',
    priceDemo: '₹699',
    priceNumeric: 699,
    colors: [
      { name: 'Indigo Print', hex: '#23395B' },
      { name: 'Earth Ochre', hex: '#C28448' },
      { name: 'Sage Green', hex: '#5B7065' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    sizeRangeLabel: 'Sizes: M to XXL',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Batik', 'Casual', 'Cotton', 'Summer'],
    featured: true,
    groupOrderAvailable: false,
    inquiryEnabled: true,
    image: '/assets/images/shirts_casuals_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-05',
  },
  {
    id: 'lk-cas-02',
    slug: 'tailored-party-wear-evening-shirt',
    name: 'Tailored Party Wear Evening Shirt',
    categorySlug: 'shirts',
    categoryName: 'Casual Shirts',
    subcategorySlug: 'party-wear-shirts',
    subcategoryName: 'Party Wear',
    tagline: 'Sleek contemporary finish with a sharp spread collar for celebratory gatherings.',
    description: 'Structured evening shirt tailored from satin-finish combed cotton with subtle luster. Sharp Italian collar, concealed button placket, and french cuffs suited for receptions and celebrations.',
    priceDemo: '₹899',
    priceNumeric: 899,
    colors: [
      { name: 'Obsidian Black', hex: '#121316' },
      { name: 'Champagne Silver', hex: '#C5C6C8' },
      { name: 'Wine Plum', hex: '#4A1525' },
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    sizeRangeLabel: 'Sizes: M to XXL',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Party Wear', 'Evening', 'Tailored', 'Satin Touch'],
    featured: true,
    groupOrderAvailable: false,
    inquiryEnabled: true,
    image: '/assets/images/cat_folded_shirts.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-16',
  },
  {
    id: 'lk-cas-03',
    slug: 'structured-formal-and-casual-trousers',
    name: 'Structured Formal & Casual Trousers',
    categorySlug: 'trousers',
    categoryName: 'Trousers',
    subcategorySlug: 'formal-trousers',
    subcategoryName: 'Formal Tailored',
    tagline: 'Comfortable regular and slim-fit trousers designed to pair with shirts and short kurtas.',
    description: 'Engineered with mid-rise styling, angled side pockets, and durable crease retention. Pairs seamlessly with our casual printed shirts or celebratory short kurtas.',
    priceDemo: '₹999',
    priceNumeric: 999,
    colors: [
      { name: 'Slate Charcoal', hex: '#34383D' },
      { name: 'Navy Blue', hex: '#1D2A44' },
      { name: 'Warm Taupe', hex: '#8C8275' },
    ],
    sizes: ['30', '32', '34', '36', '38', '40'],
    sizeRangeLabel: 'Waist: 30 to 40',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Trousers', 'Formal', 'Bottoms', 'Versatile'],
    featured: false,
    groupOrderAvailable: false,
    inquiryEnabled: true,
    image: '/assets/images/cat_trousers.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-07',
  },
  {
    id: 'lk-grp-01',
    slug: 'festival-and-wedding-mandali-group-kurta-set',
    name: 'Festival & Wedding Mandali Group Kurta Set',
    categorySlug: 'festive-wear',
    categoryName: 'Festive Wear',
    subcategorySlug: 'festival-wedding-group-sets',
    subcategoryName: 'Wedding & Festive',
    tagline: 'Coordinated matching kurtas in bulk quantities for Ganesh Utsav, Navratri, and Baraats.',
    description: 'Our premier group solution. Provides uniform fabric dyeing, identical colorway matching across hundreds of garments, and multi-size distribution from 32 to 50.',
    priceDemo: 'Wholesale Inquiry',
    priceNumeric: 0,
    colors: [
      { name: 'Festival Saffron', hex: '#E65C00' },
      { name: 'Ganesh Yellow', hex: '#F9A825' },
      { name: 'Royal Maroon', hex: '#6B1724' },
      { name: 'Ocean Teal', hex: '#00695C' },
    ],
    sizes: ['32', '34', '36', '38', '40', '42', '44', '46', '48', '50'],
    sizeRangeLabel: 'Bulk Runs: 32 to 50',
    stockStatus: 'Available for Bulk Inquiry',
    availability: 'bulk-only',
    tags: ['Mandali', 'Group Orders', 'Wedding Baraat', 'Ganesh Utsav'],
    featured: true,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/festive_group_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-02',
  },
  {
    id: 'lk-grp-02',
    slug: 'bol-bam-kavad-yatra-devotional-attire',
    name: 'Bol Bam / Kavad Yatra Devotional Attire',
    categorySlug: 'festive-wear',
    categoryName: 'Festive Wear',
    subcategorySlug: 'kavad-yatra-bol-bam-specials',
    subcategoryName: 'Devotional Specials',
    tagline: 'Dedicated saffron and printed devotional attire for Kavad Yatra mandalis and yatris.',
    description: 'Lightweight, quick-drying saffron cotton ensembles specifically designed for long-distance pilgrimage marches and spiritual events in individual and group quantities.',
    priceDemo: 'Wholesale & Retail',
    priceNumeric: 0,
    colors: [
      { name: 'Saffron Bhagwa', hex: '#FF6F00' },
      { name: 'Devotional Yellow', hex: '#FBC02D' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeRangeLabel: 'Sizes: S to XXL & Kids',
    stockStatus: 'In Stock',
    availability: 'in-stock',
    tags: ['Devotional', 'Bol Bam', 'Kavad Yatra', 'Bhagwa'],
    featured: false,
    groupOrderAvailable: true,
    inquiryEnabled: true,
    image: '/assets/images/festive_group_category.jpg',
    thumbnail: '/assets/images/fabric_macro.jpg',
    createdAt: '2025-01-03',
  },
];

/** Helper query functions */
export const getAllProducts = () => DEMO_PRODUCTS;

export const getProductsByCategory = (categorySlug) => {
  if (!categorySlug || categorySlug === 'all') return DEMO_PRODUCTS;
  const slug = categorySlug.toLowerCase().trim();
  
  if (slug === 'group-orders') {
    // Return all items that support group orders
    return DEMO_PRODUCTS.filter((p) => p.groupOrderAvailable);
  }
  
  return DEMO_PRODUCTS.filter((p) => p.categorySlug === slug);
};

export const getFeaturedProducts = (limit = 6) => {
  const featured = DEMO_PRODUCTS.filter((p) => p.featured);
  return featured.slice(0, limit);
};

export const getProductById = (id) => {
  return DEMO_PRODUCTS.find((p) => p.id === id) || null;
};

export const getProductBySlug = (slug) => {
  return DEMO_PRODUCTS.find((p) => p.slug === slug) || null;
};

export const getRelatedProducts = (productId, limit = 4) => {
  const current = getProductById(productId);
  if (!current) return DEMO_PRODUCTS.slice(0, limit);
  return DEMO_PRODUCTS.filter(
    (p) => p.id !== productId && p.categorySlug === current.categorySlug
  ).slice(0, limit);
};
