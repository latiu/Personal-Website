import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { TitleOutlined } from '@mui/icons-material';
import Link from 'next/link';

interface Props {
    title: string
    position: string
    subtitle: string
    description: string
    imageSrc: string
    link: string
    imageAlt: string
  }

export default function TimelineCard(props: Props) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' }}>
      
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ height: 200 }}
        image={props.imageSrc}
        alt={props.imageAlt}
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.position}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            {props.subtitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
            </Typography>
        </CardContent>
        <Box sx={{ pl: 1, pb: 1 }}>
          <IconButton>
            <Link href={props.link} target="_blank">
                <LinkIcon sx={{ height: 32, width: 32 }}/>
            </Link>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
