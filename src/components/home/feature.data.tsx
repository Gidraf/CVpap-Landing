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
    title: 'Easily Accessable',
    description:
      'The only thing you need is your whatsapp and a web browser app  download required nor account registration required',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: "It's cheaper and more convinient like the available cv-creators in the market",
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Fast and Efficient',
    description:
      'Our cv processing system is very fast and easy to use, it takes less than a minute to process a cv/Resume.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Customize your CV/Resume',
    description: 'Our AI bot can customize your CV to match a specific job description while revamping',
    icon: <ContactSupportIcon />,
  },
]
