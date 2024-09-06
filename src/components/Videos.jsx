/* eslint-disable react/prop-types */
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
// import ChannelCard from "./ChannelCard";
import { Stack, Box } from "@mui/material";

const Videos = ({ videos,direction }) => {
  return (
    <Stack direction={direction || 'row'} flexWrap={"wrap"} alignItems={'center'} justifyContent={"center"} gap={3}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
