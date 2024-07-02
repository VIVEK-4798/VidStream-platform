import React from 'react';
import {Stack} from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos, direction}) => {
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction||'row'} flexWrap="wrap" justifyContent="start"
     gap={2} margin= '0' padding='0'>
      
      {videos .map((item, idx) =>(
        <>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.channelId && idx === 0 && <ChannelCard channelDetail={item} idx ={idx}/>}
        </>
      ))}
    </Stack>
  );
}

export default Videos;