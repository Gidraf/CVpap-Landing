import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/free.jpg',
    title: 'Free CV/Resume Review',
    rating: 5,
    ratingCount: 8,
    price: 0,
    category: 'Free',
  },
  {
    id: 2,
    cover: '/images/courses/customize.png',
    title: 'CV/Resume Revamping Customization',
    rating: 5,
    ratingCount: 500,
    price: 100,
    category: 'Bronze',
  },
  {
    id: 3,
    cover: '/images/courses/coverletter.svg',
    title: 'Generate a Cover Letter (Coming Soon)',
    rating: 4,
    ratingCount: 7,
    price: 0,
    category: 'Gold',
  },
  {
    id: 4,
    cover: '/images/courses/ats.jpeg',
    title: 'Generate an ATS CV/Resume (Coming Soon)',
    rating: 4,
    ratingCount: 12,
    price: 0,
    category: 'Platinum',
  },
]
