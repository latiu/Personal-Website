'use client'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineCard from '@/components/timelinecard';

import rcafLogo from "/app/images/rcaf_logo.png";
import bloomRedPhoto from "/app/images/bloom_red_photo.png";
import girlGeniusPhoto from "/app/images/girl_genius_photo.png";
import hosaLogo from "/app/images/hosa_logo.jpeg";
import medlifeLogo from "/app/images/medlife_logo.png";
import neuripsLogo from "/app/images/neurips_logo.png";
import r2acLogo from "/app/images/r2ac_logo.png";

export default function Experience() {
    return (
      <main className="flex min-h-screen flex-col p-24 text-center">
        <h1 className="font-barlow text-3xl pb-4">EXPERIENCE</h1>
        <Timeline position="alternate">
          <TimelineItem >
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: 'white' }} />
                <TimelineConnector sx={{ bgcolor: 'white' }}/>
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard 
                  title="Royal Canadian Air Force - The Flight Deck"
                  subtitle="May 2023 - August 2023"
                  position="Full-stack Developer"
                  description="Working in a close knit team of 5, we were labelled as the forefront of innovation for the RCAF, pushing the limits of research and development. During my term, the main focus was fixing the problem of communication between students on the BTL (Basic Training List) and their managers. In simple terms, it’s the stage where new recruits to the military undergo their training. Through brainstorming and meeting with users, we decided to tackle the problem straight from the root - onboarding, a process which was nonexistent at the time. We decided to create a web app that acted as a central source of truth - a BTL portal that allowed for a back and forth line of communication between managers and students through guides, forums, announcements, faqs and feedback. Having a good knowledge of frontend and design, I spearheaded the prototyping process, coming up with a MVP in under 2 weeks using Figma, Vue.js, and Vuetify. Using Pinia as a state management system, I was able to persist some example data, making it demofyable. Through feedback on online demos with direct users both on the student and manager side, new features were implemented and ui/ux was constantly modified. When we reached a state everyone was satisfied with, we started building a backend, the goal being to produce a deployable app that could be directly tested by users. Using Node.js and Express.js, we effectively created controller and service layers that then connected to a PostgreSQL database through the ORM Sequelize. Example login in credentials were created, and sessions were implemented with express-session. Once that was done, we got the chance to visit the military base and interact with members of the BTL in person. They tested the program straight from the computer, and valuable feedback was gained. That marked the end of the work term, and we summarized all of this feedback into a master document for the next people to take over. Working at the RCAF was hands down the greatest learning and most rewarding experiences of my life."
                  imageSrc={rcafLogo.src}
                  link="https://www.theflightdeck.ca/"
                  imageAlt="the RCAF logo"
                />
              </TimelineContent>
            </TimelineItem>
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }} />
              <TimelineConnector sx={{ bgcolor: 'white' }}/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Race to a Cure"
                subtitle="June 2020 - Sept 2022"
                position="Social Lead"
                description="Race to a Cure is a national platform that strives to spread positivity admist the Covid-19 pandemic through reliable news, vaccine updates, research studies, webinars, and virtual camps. I joined Race to a Cure near its formation as one of the sole graphic designers. I worked overtime to kickstart the organization, creating logos, banners, color schemes, everything you can think of. I actively contributed and watched as my efforts led to results, which led to my promotion to Social Lead, where I lead a department of 30 people. During my time there, I was able to grow our follower base from 0 to 7000, and gain proficient graphic design skills. I also gained strong research capabilities through a research study on the availability of medical resources, testing/reporting cases, and chronic illness during the Covid-19 pandemic. "
                imageSrc={r2acLogo.src}
                link="https://www.racetoacure.org/"
                imageAlt="race to a cure logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }} />
              <TimelineConnector sx={{ bgcolor: 'white' }}/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="The Bloom Red Project"
                subtitle="Aug 2020 - Jul 2022"
                position="Graphics Head"
                description="The Bloom Red Project is an organization that works to provide menstrual products to those in need and eradicate period stigma through educational campaigns. I worked as the Graphics Head and helped brand the organization, creating the logo using Inkscape and regularly working on promotional posts using Canva. Through public donation events in partnership with the City of Mississauga, we successfully raised over 5000 menstrual products to give to those in need."
                imageSrc={bloomRedPhoto.src}
                link="https://www.instagram.com/thebloomredproject/?hl=en"
                imageAlt="bloom red logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }} />
              <TimelineConnector sx={{ bgcolor: 'white' }}/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Medlife"
                subtitle="Sept 2021 - June 2022"
                position="Social Media Coordinator"
                description="MEDLIFE is a non-profit organization that aids low-income communities in Latin America and Africa. I worked at my school’s chapter as the Social Media Coordinator, leading a team of over 30 general members in creating promotional material. One of our most successful events would have been MEDLIFE week, a week-long fundraising event that raised over 1000 USD."
                imageSrc={medlifeLogo.src}
                link="https://www.instagram.com/medlifejfss/?hl=en"
                imageAlt="medlife logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }}/>
              <TimelineConnector sx={{ bgcolor: 'white' }}/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="NeurIPS CtrlGen Workshop"
                subtitle="Dec 2021"
                position="Volunteer"
                description="I had the pleasure of attending one of the most highly-ranked machine learning conferences in the world as a volunteer. In particular, I helped out with the 'CtrlGen: Controllable Generative Modelling in Language and Vision workshop', managing the chat and keeping engagement going. It taught me a lot about the limitations of machine learning models, and cool projects such as bots trained to play hide and seek virtually. This helped me a lot in developing my own machine-learning model for detecting toxicity on Discord."
                imageSrc={neuripsLogo.src}
                link="https://neurips.cc/virtual/2021/index.html"
                imageAlt="NeurIPS logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }} />
              <TimelineConnector sx={{ bgcolor: 'white' }}/>
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="HOSA"
                subtitle="2020 - 2022"
                position="Forensic Science Competitor"
                description="A competition organized by the largest health science student organization in North America. I have competed on the national level in the forensic medicine category for two years and made it to the second stage of the Spring Leadership Conference last year. I have been able to explore a lot of the real-life applications of science and medicine, and have sharpened my critical thinking skills. I hope to continue to expand my knowledge in the area and gain higher standings this year. I also plan to continue with this competition during university."
                imageSrc={hosaLogo.src}
                link="https://hosacanada.org/home/"
                imageAlt="HOSA logo"
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: 'white' }} />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard 
                title="Girl Genius Magazine"
                subtitle="Sept 2021 - Feb 2022"
                position="Writer"
                description="I was chosen over the summer to be a writer for Girl Genius Magazine, a magazine that highlights female and non-binary contributions in the world of STEAM. I worked on an article regarding Yusra Mardini, which was published in issue 7.  I have gotten the chance to work with multiple talented writers and layout designers. "
                imageSrc={girlGeniusPhoto.src}
                link="https://www.instagram.com/girlgeniusmag/"
                imageAlt="Girl Genius Mag logo"
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </main>
    )
  }
  