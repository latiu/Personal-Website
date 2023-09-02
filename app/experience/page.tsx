'use client'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import TimelineCard from '@/components/timelinecard';

export default function Experience() {
    return (
      <main className="flex min-h-screen flex-col p-24 text-center">
        <h1 className="font-barlow text-3xl pb-4">EXPERIENCE</h1>
        <Timeline position="alternate">
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
              <TimelineConnector className='bg-white'/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Race to a Cure"
                subtitle="June 2020 - Sept 2022"
                position="Social Lead"
                description="Race to a Cure is a national platform that strives to spread positivity admist the Covid-19 pandemic through reliable news, vaccine updates, research studies, webinars, and virtual camps. I joined Race to a Cure near its formation as one of the sole graphic designers. I worked overtime to kickstart the organization, creating logos, banners, color schemes, everything you can think of. I actively contributed and watched as my efforts led to results, which led to my promotion to Social Lead, where I lead a department of 30 people. During my time there, I was able to grow our follower base from 100 to 7000, and gain proficient graphic design skills. I also gained strong research capabilities through a research study on the availability of medical resources, testing/reporting cases, and chronic illness during the Covid-19 pandemic. "
                imageSrc="https://static.wixstatic.com/media/287698_f7908c8b334b442b922dd168dc56fc5f~mv2.png/v1/crop/x_196,y_195,w_1110,h_863/fill/w_378,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dots%2520with%2520no%2520background_edited.png"
                link="https://www.racetoacure.org/"
                imageAlt="race to a cure logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
              <TimelineConnector className='bg-white'/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="The Bloom Red Project"
                subtitle="Aug 2020 - Jul 2022"
                position="Graphics Head"
                description="The Bloom Red Project is an organization that works to provide menstrual products to those in need and eradicate period stigma through educational campaigns. I worked as the Graphics Head and helped brand the organization, creating the logo using Inkscape and regularly working on promotional posts using Canva. Through public donation events in partnership with the City of Mississauga, we successfully raised over 5000 menstrual products to give to those in need."
                imageSrc="https://images.squarespace-cdn.com/content/v1/5e129ff97e94e335cac4e5eb/1626723531965-H1TGFTP657MGPPUWGK61/Krystal-PeriodDrive+%282%29.jpeg?format=2500w"
                link="https://www.instagram.com/thebloomredproject/?hl=en"
                imageAlt="bloom red logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
              <TimelineConnector className='bg-white'/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Medlife"
                subtitle="Sept 2021 - June 2022"
                position="Social Media Coordinator"
                description="MEDLIFE is a non-profit organization that aids low-income communities in Latin America and Africa. I worked at my school’s chapter as the Social Media Coordinator, leading a team of over 30 general members in creating promotional material. One of our most successful events would have been MEDLIFE week, a week-long fundraising event that raised over 1000 USD."
                imageSrc="https://images.givelively.org/nonprofits/016f5bda-2100-48ce-8cc8-f994ec58e678/campaigns/0a3fe79b-7ae5-4cfc-aff7-9d80aff6d67c/teams/539d1975-a084-4ce0-8b5f-cb42d50001c5/processed_bcd12d0a90a99c5244314f9200c45836f284f53dc418f4eedc28cdd20b427d0d_logo.png"
                link="https://www.instagram.com/medlifejfss/?hl=en"
                imageAlt="medlife logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
              <TimelineConnector className='bg-white'/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="NeurIPS CtrlGen Workshop"
                subtitle="Dec 2021"
                position="Volunteer"
                description="I had the pleasure of attending one of the most highly-ranked machine learning conferences in the world as a volunteer. In particular, I helped out with the 'CtrlGen: Controllable Generative Modelling in Language and Vision workshop', managing the chat and keeping engagement going. It taught me a lot about the limitations of machine learning models, and cool projects such as bots trained to play hide and seek virtually. This helped me a lot in developing my own machine-learning model for detecting toxicity on Discord."
                imageSrc="https://nips.cc/media/Press/NeurIPS_logo.svg"
                link="https://neurips.cc/virtual/2021/index.html"
                imageAlt="NeurIPS logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
              <TimelineConnector className='bg-white'/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="HOSA"
                subtitle="2020 - 2022"
                position="Forensic Science Competitor"
                description="A competition organized by the largest health science student organization in North America. I have competed on the national level in the forensic medicine category for two years and made it to the second stage of the Spring Leadership Conference last year. I have been able to explore a lot of the real-life applications of science and medicine, and have sharpened my critical thinking skills. I hope to continue to expand my knowledge in the area and gain higher standings this year. I also plan to continue with this competition during university."
                imageSrc="https://hosacanada.org/home/wp-content/uploads/2016/06/square-logo-1024x1024.png"
                link="https://hosacanada.org/home/"
                imageAlt="HOSA logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className='bg-white' />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Girl Genius Magazine"
                subtitle="Sept 2021 - Feb 2022"
                position="Writer"
                description="I was chosen over the summer to be a writer for Girl Genius Magazine, a magazine that highlights female and non-binary contributions in the world of STEAM. I worked on an article regarding Yusra Mardini, which was published in issue 7.  I have gotten the chance to work with multiple talented writers and layout designers. "
                imageSrc="https://media.licdn.com/dms/image/C561BAQHPDI2RPkroOQ/company-background_10000/0/1603165698207?e=1694296800&v=beta&t=mDGU-31OQfuKQXtLEcNJ_kR8Iuljqv5eqp6EnS-LZVo"
                link="https://www.instagram.com/girlgeniusmag/"
                imageAlt="Girl Genius Mag logo"
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </main>
    )
  }
  