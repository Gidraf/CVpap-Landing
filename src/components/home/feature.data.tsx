import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Effortless Accessibility',
    description:
      'Experience seamless access with just your WhatsApp and a web browser, no downloads or account registrations required.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Cost-Effective Solution',
    description: 'Enjoy affordability and convenience that surpasses other CV creators in the market.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Swift and Effective',
    description:
      'Our CV processing system is remarkably fast and user-friendly, ensuring your CV/Resume is processed in less than a minute.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Tailor Your CV/Resume',
    description:
      'Let our AI bot customize your CV to align perfectly with a specific job description, giving it a competitive edge.',
    icon: <ContactSupportIcon />,
  },
]
