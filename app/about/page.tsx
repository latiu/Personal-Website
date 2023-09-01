'use client'
import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="p-6">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function About() { 
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="flex p-24 h-[calc(100vh-72px)] items-center"> 
      <div className="w-full h-full text-right">
      <h1 className="font-barlow text-3xl">ABOUT ME</h1>
      <div className="w-full h-full flex">
        <Tabs value={value} onChange={handleChange} aria-label="tabs" className="bg-light-pink rounded-l-lg" orientation="vertical">
          <Tab label="art" {...a11yProps(0)} />
          <Tab label="dance" {...a11yProps(1)} />
          <Tab label="film" {...a11yProps(2)} />
        </Tabs>

        <Box className="w-full bg-white text-left rounded-r-lg">
          <TabPanel value={value} index={0}>
            It's been 10 years since I picked up my first sketchbook. Since then, I've expanded my skills to include not just sketching, but acrylic painting, clay modelling and digital art. From there I went into the field of graphic design, learning softwares such as Figma, Adobe, Inkscape and Canva and working for various nonprofits. That eventually led me to explore frontend development, and work towards becoming a full stack developer. I believe art is a universal language, and that beautiful user interfaces greatly affect a person’s daily experience.
          </TabPanel>
          <TabPanel value={value} index={1}>
            dance
          </TabPanel>
          <TabPanel value={value} index={2}>
            film
          </TabPanel>
        </Box>
      </div>
      </div>
    </main>
  );
}
