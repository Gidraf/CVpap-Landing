import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Free CV/Resume Review',
    rating: 5,
    ratingCount: 8,
    price: 0,
    category: 'Free',
  },
  {
    id: 2,
    cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
    title: 'CV/Resume Revamping Customization',
    rating: 5,
    ratingCount: 500,
    price: 100,
    category: 'Bronze',
  },
  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'Generate a Cover Letter (Coming Soon)',
    rating: 4,
    ratingCount: 7,
    price: 0,
    category: 'Gold',
  },
  {
    id: 4,
    cover: '/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg',
    title: 'Generate an ATS CV/Resume (Coming Soon)',
    rating: 4,
    ratingCount: 12,
    price: 0,
    category: 'Platinum',
  },
]
