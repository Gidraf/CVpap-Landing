import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/free.jpg',
    title: 'Complimentary CV/Resume Review',
    rating: 5,
    to: 'https://api.whatsapp.com/send?phone=254735143282&text=1',
    ratingCount: 8,
    price: 0,
    category: 'Free',
  },
  {
    id: 2,
    cover: '/images/courses/customize.png',
    title: 'Personalized CV/Resume Revamping',
    rating: 5,
    ratingCount: 500,
    to: 'https://api.whatsapp.com/send?phone=254735143282&text=2',
    price: 100,
    category: 'Bronze',
  },
  {
    id: 3,
    cover: '/images/courses/coverletter.svg',
    title: 'Craft a Cover Letter (Coming Soon)',
    to: 'https://api.whatsapp.com/send?phone=254735143282&text=Hi',
    rating: 4,
    ratingCount: 7,
    price: 0,
    category: 'Gold',
  },
  {
    id: 4,
    cover: '/images/courses/ats.jpeg',
    title: 'Generate an ATS-Optimized CV/Resume (Coming Soon)',
    to: 'https://api.whatsapp.com/send?phone=254735143282&text=Hi',
    rating: 4,
    ratingCount: 12,
    price: 0,
    category: 'Platinum',
  },
]
