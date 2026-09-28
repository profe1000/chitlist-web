import { Croissant, Fuel, ShoppingBasket, Utensils, type LucideIcon } from 'lucide-react'

export type Service = {
  slug: string
  title: string
  text: string
  image: string
  heroImage: string
  alt: string
  icon: LucideIcon
  tagline: string
  intro: string
  highlights: { title: string; text: string }[]
}

export const services: Service[] = [
  {
    slug: 'bakery',
    title: 'Bakery',
    text: 'Freshly baked bread, pastries and treats made with care, for every occasion.',
    image: '/images/bakery.jpg',
    heroImage: '/images/story-bakery.jpg',
    alt: 'Customers at a bakery display counter',
    icon: Croissant,
    tagline: 'Baked Fresh. Every Day.',
    intro: 'From soft, sliced bread for the morning table to meat pies, doughnuts and celebration cakes, the Chilist Bakery bakes fresh every day so there is always something warm waiting for you.',
    highlights: [
      { title: 'Daily Bread', text: 'Soft loaves, sliced and unsliced, baked fresh each morning.' },
      { title: 'Pastries & Snacks', text: 'Meat pies, sausage rolls, doughnuts and puff-puff for on-the-go cravings.' },
      { title: 'Cakes to Order', text: 'Birthday, wedding and celebration cakes made to your taste.' },
    ],
  },
  {
    slug: 'eatery',
    title: 'Eatery',
    text: 'Delicious meals in a warm and welcoming environment.',
    image: '/images/eatery.jpg',
    heroImage: '/images/eatery-hero.jpg',
    alt: 'Trays of jollof and fried rice at a Nigerian eatery',
    icon: Utensils,
    tagline: 'Home-Style Meals. Served Warm.',
    intro: 'Sit down to jollof rice, fried rice, swallow and soups, grills and more, cooked the way you like it and served fast in a clean, welcoming space.',
    highlights: [
      { title: 'Local Favourites', text: 'Jollof, fried rice, pounded yam, egusi, pepper soup and more.' },
      { title: 'Quick Service', text: 'Dine in or take away, ready when you are.' },
      { title: 'Group & Event Orders', text: 'Trays and packs for offices, parties and family gatherings.' },
    ],
  },
  {
    slug: 'minimart',
    title: 'MiniMart',
    text: 'Everyday essentials, snacks, drinks and more, always within reach.',
    image: '/images/minimart-lagos.jpg',
    heroImage: '/images/minimart-lagos.jpg',
    alt: 'Well-stocked supermarket shelves',
    icon: ShoppingBasket,
    tagline: 'Everyday Essentials. Always in Stock.',
    intro: 'Pick up groceries, toiletries, drinks and snacks in one quick stop. The Chilist MiniMart keeps the things you need every day right where you need them.',
    highlights: [
      { title: 'Groceries', text: 'Provisions, beverages and household staples at fair prices.' },
      { title: 'Snacks & Drinks', text: 'Chilled drinks and snacks for the road or the office.' },
      { title: 'Personal Care', text: 'Toiletries and home essentials, always within reach.' },
    ],
  },
  {
    slug: 'filling-station',
    title: 'Filling Station',
    text: 'Quality fuel. Reliable service. Keeping you on the move.',
    image: '/images/filling-station.jpg',
    heroImage: '/images/hero-filling-station.jpg',
    alt: 'Fuel nozzle filling a car at a filling station',
    icon: Fuel,
    tagline: 'Quality Fuel. Honest Measure.',
    intro: 'Fill up with confidence. Our filling stations deliver quality fuel with accurate pumps and friendly attendants, keeping you and your business moving.',
    highlights: [
      { title: 'Quality Fuel', text: 'PMS and diesel you can trust, with accurate, calibrated pumps.' },
      { title: 'Friendly Attendants', text: 'Fast, courteous service every time you pull in.' },
      { title: 'One Convenient Stop', text: 'Grab a meal, fresh bread or essentials while you fuel.' },
    ],
  },
]
