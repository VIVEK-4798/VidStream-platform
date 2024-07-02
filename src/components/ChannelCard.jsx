import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail, marginTop, margin}) => (
  <>
    <Box
    sx={{boxShadow: 'none',
         borderRadius: '20px',
         display: 'flex',
         justifyContent:'center',
         alignItems: 'center',
         width: {xs: '356px', md: '320px'},
         height: '326px',
         margin,
         marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display: 'flex', flexDirection: 'column',
          justifyContent:'center', textAlign: 'center', color:'fff'
        }}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: '50%' ,height: '180px', width: '180px', mb :2 , border: '1px solid #e3e3e3'}}
          />
          <Typography variant="h6" sx={{fontSize: 20, color: 'white', ml: '2px'}}>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize:'15px', color:'gray',fontWeight:'500'}}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>

    </Box>
    </>
  )

export default ChannelCard