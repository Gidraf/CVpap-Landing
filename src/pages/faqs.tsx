import React from 'react'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Sample array of FAQs
const faqs = [
  {
    question: 'What is CV Revamping/Make OVER Process',
    answer:
      'Revamp your CV/Resume instantly with ease using these steps below. 1. Reply with current CV in Word or PDF Document format along with the job description as the message. You can do this by attaching the Job description as the caption, or you can send the document first, then send the job description as a message. 2 Select the template you desire from our Catalog using the following link: https://wa.me/c/254735143282 Once you have completed these steps, the system will take it from here and process your CV. Strictly follow the given steps in order to revamp your resume/cv successfully. We currently support .pdf/.docx documents if your document is .doc kindly convert to .pdf or .docx document before sending',
  },
  {
    question: "How does CVpap's CV/Resume revamping process work?",
    answer:
      "CVpap's CV/Resume revamping process is powered by an automated AI-powered tool called CVPap Bot. The process involves sending your current CV in Word or PDF format along with the job description as a message. You can attach the job description as the caption or send it separately. Afterward, you select your desired template from our Catalog. Once you complete these steps, the system will take over and process your CV.",
  },
  {
    question: 'What formats are supported for sending my current CV?',
    answer:
      'CVpap currently supports .pdf and .docx formats for sending your current CV. If your document is in .doc format, kindly convert it to .pdf or .docx before sending.',
  },
  {
    question: 'How do I revamp my current CV and job description?',
    answer:
      'Reply this message with your cv document in pdf or word format, you can either attach the job description as the caption when sending the document, or you can send the document first and then send the job description as a message.',
  },
  {
    question: 'Where can I select the template for my revamped CV/Resume?',
    answer:
      'You can select your desired template for your revamped CV/Resume from our Catalog. Simply follow the link provided: https://wa.me/c/254735143282',
  },
  {
    question: 'What if I want to choose multiple designs for my CV/Resume template?',
    answer: 'If you choose multiple designs from our Catalog, only the first design you select will be processed.',
  },
  {
    question: 'Can I modify my CV/Resume after selecting the template?',
    answer:
      'Once you have selected the template for your CV/Resume, the system will proceed with processing it. Modifications to the CV/Resume can be made after the initial processing.',
  },
  {
    question: 'How long does it take for CVpap to process my CV/Resume?',
    answer:
      "The processing time for your CV/Resume varies depending on various factors. However, CVpap's system is designed to process your CV/Resume swiftly and efficiently.",
  },
  {
    question: 'Is it necessary to strictly follow the given steps for successful CV/Resume revamping?',
    answer:
      'Yes, it is essential to strictly follow the given steps for successful CV/Resume revamping. Following the steps ensures a smooth and efficient processing experience.',
  },
  {
    question: 'What if I encounter any issues during the CV/Resume revamping process?',
    answer:
      "If you encounter any issues during the CV/Resume revamping process, please reach out to CVpap's support team for assistance. We are here to help resolve any concerns you may have.",
  },
  {
    question: "Who can I contact for support or inquiries regarding CVpap's services?",
    answer:
      "For support or inquiries regarding CVpap's services, please contact our support team through the Contact Us section on our website.",
  },
  {
    question: 'Can I trust CVpap with my CV/Resume revamping?',
    answer:
      'Yes, you can trust CVpap with your CV/Resume revamping. Our automated AI-powered tool ensures professionalism and accuracy in revamping your CV/Resume.',
  },
  {
    question: 'Is there a refund policy for CV/Resume revamping services?',
    answer:
      "CVpap's refund policy is detailed in our Terms & Conditions section on our website. Please refer to the refund policy for more information.",
  },
  {
    question: "How can I provide feedback on CVpap's CV/Resume revamping services?",
    answer:
      'We welcome feedback from our users to continually improve our CV/Resume revamping services. You can provide feedback through our website or contact our support team directly.',
  },
  {
    question: 'Does CVpap offer assistance with cover letters or ATS CVs?',
    answer:
      'CVpap is planning to introduce assistance with cover letters and ATS CVs in the future. Stay tuned for updates on our services.',
  },
  {
    question: 'Can I receive notifications on the status of my CV/Resume revamping process?',
    answer:
      'CVpap is working on implementing notification features to keep users informed about the status of their CV/Resume revamping process. We will announce updates on this feature soon.',
  },
  {
    question: 'Where can I find CVpap on social media?',
    answer:
      'You can find CVpap on various social media platforms such as Instagram, YouTube, Twitter, Dribbble, and GitHub. Follow us for updates and announcements.',
  },
  {
    question: 'Does CVpap have a privacy policy?',
    answer:
      'Yes, CVpap has a privacy policy that outlines how we collect, use, and protect your personal information. You can review our privacy policy on our website.',
  },
  {
    question: 'Is CVpap available globally?',
    answer: "No, CVpap's services are only accessible in Kenya.",
  },
  {
    question: 'Can I refer friends or colleagues to CVpap for CV/Resume revamping?',
    answer:
      'Yes, you can refer friends or colleagues to CVpap for CV/Resume revamping services. Share your positive experience with others and help them revamp their CVs/Resumes effectively.',
  },
  {
    question: 'Does CVpap offer discounts or promotions?',
    answer:
      'CVpap occasionally offers discounts or promotions on our CV/Resume revamping services. Stay updated on our website or social media channels for announcements.',
  },
  {
    question: 'Does CVpap offer corporate solutions for CV/Resume revamping?',
    answer:
      'CVpap provides corporate solutions for organizations seeking to revamp multiple CVs/Resumes. Contact our corporate solutions team for more information.',
  },
  {
    question: 'Can I share my feedback anonymously with CVpap?',
    answer:
      'Yes, you can share your feedback anonymously with CVpap. We value all feedback and use it to improve our services.',
  },
  {
    question: "What makes CVpap's CV/Resume revamping services stand out?",
    answer:
      "CVpap's CV/Resume revamping services stand out due to our automated AI-powered tool, seamless accessibility, affordability, and swift processing. We prioritize user satisfaction and strive to deliver exceptional results.",
  },
  {
    question: "Is CVpap's CV/Resume revamping service suitable for professionals in all industries?",
    answer:
      "Yes, CVpap's CV/Resume revamping service is suitable for professionals in various industries. Our customization options ensure that your CV/Resume aligns perfectly with your industry requirements.",
  },
  {
    question: 'What if I have specific preferences for my CV/Resume design?',
    answer: 'Currently We offer Designes listed on our Catalogue',
  },
  {
    question: 'How much is the CVpap',
    answer:
      'Our prices ranges, kindly have a look at our whatsapp catalogue to view your desired prices, this si the link: https://wa.me/c/254735143282',
  },
]
const Faqs: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

Faqs.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Faqs
