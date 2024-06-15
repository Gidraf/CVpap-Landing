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
      'Yes, it is essential to strictly follow the given steps for successful CV/Resume revamping. Following the steps ensures a smooth and efficient processing experience. Our systems are configured to follow the steps set in place by the creator',
  },
  {
    question: 'What if I encounter any issues during the CV/Resume revamping process?',
    answer:
      "If you encounter any issues during the CV/Resume revamping process, please reach out to CVpap's support team for assistance. We are here to help resolve any concerns you may have. This issues only comes with not able to access the services, but regarding cv creation process all the services are self service",
  },
  {
    question: "Who can I contact for support or inquiries regarding CVpap's services?",
    answer:
      "For support or inquiries regarding CVpap's services, please contact our support team through the Contact Us section on our website. our customer@cvpap.com",
  },
  {
    question: 'Can I trust CVpap with my CV/Resume revamping?',
    answer:
      'Yes, you can trust CVpap with your CV/Resume revamping. Our automated AI-powered tool ensures professionalism and accuracy in revamping your CV/Resume.',
  },
  {
    question: 'Is there a refund policy for CV/Resume revamping services?',
    answer:
      'We refund the Cash within 48 hurs of payment. If you paid via the online link for those that use M-pesa app will receive the update after 10-14 days of working days. We advice our clients to only make the payment after they are satisfied with the cv creation, since you can process the cv to a maximum of 15 tries before making the payment, we are hopefully in this tries you will find a suitable version for you to make purchase to.',
  },
  {
    question: "How can I provide feedback on CVpap's CV/Resume revamping services?",
    answer:
      'We welcome feedback from our users to continually improve our CV/Resume revamping services. You can provide feedback through our website or contact our support team directly. Or through our social media platforms.',
  },
  {
    question: 'Does CVpap offer assistance with cover letters or ATS CVs?',
    answer: `Yes we do offer assistance for cover letter and all our cv are ATS compliance since it's AI generated use this link to and select cover letter link: https://wa.me/c/254735143282`,
  },
  {
    question: 'Can I receive notifications on the status of my CV/Resume revamping process?',
    answer:
      'We Do notify Users instantly once the Cv is done, if it has taken longer to process your CV it may be an issue with your document format or networking issues while we process your. We advice to repeat the process. We are working to improve this experience ',
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
    question: 'How much is the Cv revamping services cost',
    answer:
      `Our prices ranges, kindly have a look at our whatsapp catalogue to view your desired prices, this si the link: https://wa.me/c/254735143282, 
      This are our products and prices all are in kenya shillings
      "azurill":"240",
      "bronzor":"210",
      "chikorita":"290",
      "ditto":"270",
      "gengar":"230",
      "glalie":"200",
      "kakuna":"200",
      "leafish":"260",
      "nosepass":"300",
      "onyx":"195",
      "pikachu":"205",
      "rhyhorn":"200",`,
      "Cover Letter": "150"
  },
  {
    question: 'How Do I remove the watermark',
    answer:
      'To remove the watermark, open the link given to you with your resume sample, click on download pdf, from there you will be proceed in making the purchase via M-pesa. Please use the method to make the payment any other method of payment to receive your cv instantly if you pay directly via mpesa app you will have to wait upto 7 days for your payment to be processed so that you may receive your cv. Make sure you are satisfied with what you are paying for. if not kindly process the cv again to get a different data.',
  },
  {
    question: 'How Do I Edit My Cv',
    answer:
      'To edit your Cv, open the link given to you with your resume sample, click Edit on the top left corner of your screen , Scroll to the session you want to edit then Edit. Please note the basic inputs e.g. email phone and anmes are saved automatically, but the other sestion you will have to click on the  in order to edit or click an add button in order to add',
  },
  {
    question: 'Can you Edit for Me',
    answer:
      'Currently all our services are self services, this means you will be given the link for you to edit the cv viw our web portal platform. Due to high volume of CV received we can not process every cv on our end that is why we offer you with the link for better experience',
  },
  {
    question: `I have paid via the method but I can't get the cv`,
    answer: `If you have you have paid but you haven't received the cv/resume, you can open the link given and click on the download pdf button, you won;t have to pay again`,
  },
  {
    question: `Is it subscriptory Plan or I have to Pay everytime I download the Cv`,
    answer: `The payments is only valid for 90 days. Since we refresh Our Database every 90 Days`,
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
