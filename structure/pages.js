import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📄' />
const SummerIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌞' />
const CalendarIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📅' />
const JobsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⚒' />
const JobsYear = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏂' />
const JobsSummer = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏄‍♂️‍' />
const JobsForm = () => <Emoji style={{ fontSize: '2rem' }} symbol='📃‍' />
const DirectorsIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎯' />
const ContactIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📫' />
const QuestionIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='❓' />
const CampIcon = () => <Emoji style={{ fontSize: '2rem' }} symbol='⛺' />

export const PageMenuItem = S.listItem()
  .title('Pages')
  .icon(Icon)
  .child(
    S.list()
      .title('Pages')
      .items([
        S.documentListItem()
          .id('ourCamp')
          .title('Our Camp')
          .icon(CampIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('eligibility')
          .icon(DirectorsIcon)
          .title('Eligibility')
          .schemaType('page'),
        S.documentListItem()
          .id('safety')
          .title('Safety')
          .icon(CalendarIcon)
          .schemaType('page'),
        S.documentListItem()
          .id('ratesAndFinancing')
          .title('Rates & Financing')
          .icon(SummerIcon)
          .schemaType('page'),
          S.documentListItem()
          .id('weekendCamp')
          .title('Weekend Camp')
          .schemaType('page')
          .icon(JobsIcon),
          S.documentListItem()
          .id('summerCamp')
          .title('Summer Camp')
          .icon(JobsSummer)
          .schemaType('page'),
          S.documentListItem()
          .id('rvSites')
          .title('RV Sites')
          .icon(JobsYear)
          .schemaType('page'),
          S.documentListItem()
          .id('parentResources')
          .title('Parent Resources')
          .icon(QuestionIcon)
          .schemaType('page'),
          S.documentListItem()
          .id('campApplication')
          .title('Camp Application')
          .icon(JobsForm)
          .schemaType('page'),

          S.divider(),
          
          S.documentListItem()
          .id('privateEvents')
          .title('Private Events')
          .icon(JobsForm)
          .schemaType('page'),

          S.divider(),
          
          S.documentListItem()
          .id('volunteer')
          .title('Volunteer')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('availablePositions')
          .title('Available Positions')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('volunteerFAQs')
          .title('Volunteer FAQs')
          .icon(JobsForm)
          .schemaType('page'),

          S.divider(),
          
          S.documentListItem()
          .id('donate')
          .title('Donate')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('sponsorshipOpportunities')
          .title('Sponsorship Opportunities')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('namingRights')
          .title('Naming Rights')
          .icon(JobsForm)
          .schemaType('page'),
          
          S.divider(),

          S.documentListItem()
          .id('aboutUs')
          .title('About Us')
          .icon(Icon)
          .schemaType('page'),
          S.documentListItem()
          .id('ourStory')
          .title('Our Story')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('ourLeadership')
          .title('Our Leadership')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('ourPartners')
          .title('Our Partners')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('directions')
          .title('Directions')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('photoGallery')
          .title('Photo Gallery')
          .icon(JobsForm)
          .schemaType('page'),
          S.documentListItem()
          .id('faqs')
          .title('FAQs')
          .icon(JobsForm)
          .schemaType('page'),
      ])
  )
