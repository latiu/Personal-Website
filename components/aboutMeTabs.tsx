'use client'
import * as React from 'react';
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

export default function aboutMeTabs(props:{tab1: String, tab2: String, tab3: String, title: String}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-full text-right">
    <h1 className="font-barlow text-3xl">{props.title}</h1>
    <div className="w-full h-full flex">
      <Tabs value={value} onChange={handleChange} aria-label="tabs" className="bg-light-pink rounded-l-lg" orientation="vertical">
        <Tab label={props.tab1} {...a11yProps(0)} />
        <Tab label={props.tab2} {...a11yProps(1)} />
        <Tab label={props.tab3} {...a11yProps(2)} />
      </Tabs>

      <Box className="w-full bg-white text-left rounded-r-lg">
        <TabPanel value={value} index={0}>
          {props.tab1}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {props.tab2}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {props.tab3}
        </TabPanel>
      </Box>
    </div>
    </div>
  );
}