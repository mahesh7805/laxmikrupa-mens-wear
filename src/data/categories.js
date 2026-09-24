/**
 * Centralized Category Data Architecture
 * Based strictly on PRODUCT.md and verified Laxmikrupa Emporium taxonomy.
 * Designed for future API replacement (e.g. GET /api/categories).
 */

export const CATEGORIES = [
  {
    slug: 'kurtas',
    name: 'Kurtas',
    eyebrow: 'COLLECTION // ETHNIC WEAR',
    tagline: 'Plain solids, mandarin collars, and celebratory designer prints.',
    description: 'Explore our signature range of artisanal kurtas crafted from breathable cottons and rich blends, tailored for celebratory occasions and everyday sophistication.',
    image: '/assets/images/ethnic_wear_category.jpg',
    heroImage: '/assets/images/ethnic_wear_category.jpg',
    count: '24+ Styles',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Solid & Mandarin Classic',
        description: 'Clean monochrome silhouettes with crisp mandarin collars engineered for timeless festive charm.',
      },
      {
        number: '02',
        title: 'Printed & Designer Motifs',
        description: 'Foil accents, subtle floral impressions, and contemporary geometric patterns on lightweight cotton.',
      },
      {
        number: '03',
        title: 'Extensive Size Range',
        description: 'Tailored proportions ranging from size 32 through 50 ensuring comfortable festive drape for every gentleman.',
      },
      {
        number: '04',
        title: 'Celebration Ready',
        description: 'Vibrant festive colorways including royal maroons, festival saffrons, mustard golds, and ocean teals.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Kurtas', slug: 'all' },
      { id: 'plain-solid-kurtas', name: 'Plain / Solid', slug: 'plain-solid-kurtas' },
      { id: 'printed-designer-kurtas', name: 'Printed & Designer', slug: 'printed-designer-kurtas' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'kurta-pajamas',
    name: 'Kurta Pajama Sets',
    eyebrow: 'COLLECTION // 2-PIECE ENSEMBLES',
    tagline: 'Coordinated ethnic pairs with tailored tops and churidar pajamas.',
    description: 'Complete celebratory ethnic sets featuring structured ethnic kurtas paired seamlessly with crisp white and ivory bottoms for puja ceremonies, family gatherings, and weddings.',
    image: '/assets/images/hero_campaign.jpg',
    heroImage: '/assets/images/hero_campaign.jpg',
    count: '16+ Sets',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Coordinated 2-Piece Sets',
        description: 'Harmonious pairings with tailored kurtas and comfortable churidar or salwar bottoms.',
      },
      {
        number: '02',
        title: 'Ceremony & Puja Attire',
        description: 'Designed specifically for cultural rituals, family pujas, and traditional evening functions.',
      },
      {
        number: '03',
        title: 'Breathable Pure Cottons',
        description: 'Fabric blends chosen for Surat and Indian climates to ensure effortless comfort during long events.',
      },
      {
        number: '04',
        title: 'Direct Store Tailoring',
        description: 'Fittings verified by in-store expertise with size availability from 36 up to 50.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Sets', slug: 'all' },
      { id: 'kurta-pajama-sets', name: 'Traditional Sets', slug: 'kurta-pajama-sets' },
      { id: 'festive-sets', name: 'Festive Ensembles', slug: 'festive-sets' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'shirts',
    name: 'Casual Shirts',
    eyebrow: 'COLLECTION // SHIRTS & CASUALS',
    tagline: 'Artisanal cotton prints, batik impressions, and evening party silhouettes.',
    description: 'A versatile curation of everyday cotton shirts, distinctive prints, and tailored evening party wear designed for modern ease and sharp appeal.',
    image: '/assets/images/cat_folded_shirts.jpg',
    heroImage: '/assets/images/shirts_casuals_category.jpg',
    count: '18+ Designs',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Artisanal & Batik Prints',
        description: 'Geometric motifs and rich organic dyes inspired by contemporary Indian textile artistry.',
      },
      {
        number: '02',
        title: 'Evening & Party Silhouettes',
        description: 'Structured spread collars and dark obsidian and metallic undertones for night events.',
      },
      {
        number: '03',
        title: 'All-Day Breathability',
        description: 'High thread-count cotton weaves that stay crisp and comfortable through long days.',
      },
      {
        number: '04',
        title: 'Versatile Styling',
        description: 'Pairs effortlessly with tailored trousers or casual bottoms across sizes M to XXL.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Shirts', slug: 'all' },
      { id: 'casual-printed-shirts', name: 'Casual Printed', slug: 'casual-printed-shirts' },
      { id: 'party-wear-shirts', name: 'Party Wear', slug: 'party-wear-shirts' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'trousers',
    name: 'Trousers',
    eyebrow: 'COLLECTION // BOTTOMS & SEPARATES',
    tagline: 'Tailored regular and slim-fit trousers in timeless neutral tones.',
    description: 'Precision-tailored trousers structured to pair cleanly with our casual shirts, short kurtas, and formal silhouettes.',
    image: '/assets/images/cat_trousers.jpg',
    heroImage: '/assets/images/cat_trousers.jpg',
    count: '12+ Fits',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Structured Regular & Slim',
        description: 'Clean tapered cuts with reinforced waistband construction for dependable daily wear.',
      },
      {
        number: '02',
        title: 'Versatile Palette',
        description: 'Essential slate charcoals, deep navy blues, and warm earthy taupes that match any shirt.',
      },
      {
        number: '03',
        title: 'Comfort Stretch & Durability',
        description: 'Selected fabric blends designed for ease of movement without losing sharp crease retention.',
      },
      {
        number: '04',
        title: 'Waist Sizes 30 to 40',
        description: 'Standard sizing with in-store hem adjustments available at our Surat showroom.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Trousers', slug: 'all' },
      { id: 'formal-trousers', name: 'Formal Tailored', slug: 'formal-trousers' },
      { id: 'casual-bottoms', name: 'Casual Bottoms', slug: 'casual-bottoms' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'festive-wear',
    name: 'Festive Wear',
    eyebrow: 'COLLECTION // CELEBRATORY ATTIRE',
    tagline: 'Vibrant celebratory kurtas, wedding mandali ensembles, and festive highlights.',
    description: 'A dedicated showcase of celebratory menswear designed for Navratri, Diwali, Ganesh Utsav, and wedding baraat festivities.',
    image: '/assets/images/festive_group_category.jpg',
    heroImage: '/assets/images/festive_group_category.jpg',
    count: 'Festive Edition',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Utsav Color Palette',
        description: 'Traditional auspicious hues — bhagwa saffron, marigold yellow, and deep crimson.',
      },
      {
        number: '02',
        title: 'Celebratory Embellishments',
        description: 'Subtle metallic and woven accents that capture festive lighting beautifully.',
      },
      {
        number: '03',
        title: 'Family & Mandali Harmony',
        description: 'Coordinated palettes designed for family portraits and festive gatherings.',
      },
      {
        number: '04',
        title: 'Direct WhatsApp Booking',
        description: 'Quick stock and sizing confirmation directly with our Surat store attendants.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Festive Wear', slug: 'all' },
      { id: 'festival-wedding-group-sets', name: 'Wedding & Festive', slug: 'festival-wedding-group-sets' },
      { id: 'kavad-yatra-bol-bam-specials', name: 'Devotional Specials', slug: 'kavad-yatra-bol-bam-specials' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'kids',
    name: 'Kids & Boys',
    eyebrow: 'COLLECTION // BOYS ETHNIC WEAR',
    tagline: 'Festive kurta sets and traditional ensembles for boys (Sizes 20–30).',
    description: 'Charming, comfortable ethnic kurta sets tailored especially for young boys and teens, making family coordination seamless for weddings and festivals.',
    image: '/assets/images/ethnic_wear_category.jpg',
    heroImage: '/assets/images/ethnic_wear_category.jpg',
    count: 'Sizes 20–30',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Youth Proportions (20–30)',
        description: 'Specially patterned for boys aged 2 to 14 with soft inner seams to prevent irritation.',
      },
      {
        number: '02',
        title: 'Father-Son Matching',
        description: 'Coordinating fabric colorways that pair seamlessly with men’s kurtas for wedding events.',
      },
      {
        number: '03',
        title: 'Lightweight & Play-Friendly',
        description: 'Soft pure cotton weaves allowing easy movement throughout lengthy celebrations.',
      },
      {
        number: '04',
        title: 'Complete Sets with Pajamas',
        description: 'Delivered as ready-to-wear sets with elasticated comfortable bottoms.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Boys Wear', slug: 'all' },
      { id: 'boys-kids-ethnic-sets', name: 'Boys Kurta Sets', slug: 'boys-kids-ethnic-sets' },
    ],
    isSpecialInquiry: false,
  },
  {
    slug: 'group-orders',
    name: 'Group / Bulk Orders',
    eyebrow: 'SPECIAL BUSINESS OFFERING // BULK RUNS',
    tagline: 'Coordinated outfits for wedding baraats, festival mandalis, and devotional yatras.',
    description: 'Specialized bulk and custom quantity dressing for groups of 10 to 500+ members. We provide coordinated color matching, multi-size breakdowns, and direct Surat workshop assistance.',
    image: '/assets/images/hero_store_display.jpg',
    heroImage: '/assets/images/hero_store_display.jpg',
    count: '10–500+ Pcs',
    featured: true,
    specialties: [
      {
        number: '01',
        title: 'Festival & Mandali Runs',
        description: 'Uniform saffron, yellow, and festive sets for Ganesh Mandalis and Navratri groups.',
      },
      {
        number: '02',
        title: 'Wedding Baraat Coordination',
        description: 'Matching themes across groom’s friends and family in sizes from 32 to 50.',
      },
      {
        number: '03',
        title: 'Devotional & Yatra Apparel',
        description: 'Dedicated Kavad Yatra / Bol Bam specials in lightweight devotional cottons.',
      },
      {
        number: '04',
        title: 'Direct Wholesale Pricing',
        description: 'Specialized volume quotes and personalized coordination via WhatsApp and store visits.',
      },
    ],
    subcategories: [
      { id: 'all', name: 'All Group Orders', slug: 'all' },
      { id: 'mandali-runs', name: 'Mandali & Festival', slug: 'mandali-runs' },
      { id: 'wedding-baraat', name: 'Wedding Baraats', slug: 'wedding-baraat' },
      { id: 'devotional-yatra', name: 'Devotional Yatras', slug: 'devotional-yatra' },
    ],
    isSpecialInquiry: true,
    specialInquiryDetails: {
      headline: 'Plan Your Group Or Mandali Order With Our Surat Team',
      subheadline: 'Whether you need 15 matching kurtas for a wedding baraat or 200+ sets for a festival mandali, we coordinate sizes, colors, and prompt delivery.',
      quantityTiers: ['10 – 25 pieces', '26 – 50 pieces', '51 – 100 pieces', '100+ pieces (Custom Workshop Run)'],
      verifiedPhone: '+91 98254 05629',
      whatsappNumber: '919825405629',
    },
  },
];

/** Helper query functions */
export const getAllCategories = () => CATEGORIES;

export const getCategoryBySlug = (slug) => {
  if (!slug) return null;
  const normalized = slug.toLowerCase().trim();
  return CATEGORIES.find((c) => c.slug === normalized) || null;
};

export const getFeaturedCategories = () => CATEGORIES.filter((c) => c.featured);
