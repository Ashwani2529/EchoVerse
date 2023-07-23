import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const Room = () => {
    const {roomId}=useParams();
    const myMeeting=async (element)=>{
        const appID=1822860915;
        const serverSecret="4caed6ec9f92f7beae99ed5c7d178f88";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(),"Ashwani");
    const zc=ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
        sharedLinks: [
            {
              name: 'Copy Link',
              url:"http://localhost:3000/",
            },
          ],
        scenario:{
            mode:ZegoUIKitPrebuilt.GroupCall,
        },
        showScreenSharingButton:true,
    });
    };
  return (
    <div ref={myMeeting}/>
   
  )
}

export default Room