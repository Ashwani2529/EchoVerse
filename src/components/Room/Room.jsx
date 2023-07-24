import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';


const Room = () => {
    const {roomID}=useParams();
    const myMeeting=async (element)=>{
        const appID=91815006;
        const serverSecret="ef41d0f19d5d8efb425175d1ef4ed712";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(),"Ashwani");
    const zc=ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container:element,
        sharedLinks: [
            {
              name: 'Copy Link',
              url:`https://echoverse.netlify.app/room/${roomID}`,
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
