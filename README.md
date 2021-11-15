# Kalidoface 3D - Face and Full-Body tracking for Vtubing on the web!

A sequal to **[Kalidoface](https://kalidoface.com)** which supports Live2D avatars, **[Kalidoface 3D](https://3d.kalidoface.com)** is a web app that brings support for 3D Vtuber avatars. It now features more dynamic camera angles, and even full-body tracking options using the latest Mediapipe human pose detection models. Add the web app to your homescreen to use it in standalone full screen or even use it in OBS as a browser object directly.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B75DIY1)

![Kalidoface Face Tracking](https://cdn.glitch.me/29e07830-2317-4b15-a044-135e73c7f840%2Fkalidoface-face-closeup.gif?v=1633451401758) ![Kalidoface Pose Demo](https://cdn.glitch.me/29e07830-2317-4b15-a044-135e73c7f840%2Fkalidoface-pose-dance.gif?v=1633453098775)

### Use your own VRM 3D models

Kalidoface 3D works with <b>VRM 3D models</b>. Just drag and drop your own .vrm files to add your Vtuber character. Might support other types of 3D human models if they're easy to implement.<br><br>Models are saved locally so you won't need to reupload them next visit!

![VRM file support](https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fezgif-2-b312e89d3e07.gif?v=1626110793139)

### Call a friend

Share your <b>6 digit code</b> with a friend to start a private <b>voice call</b> using virtual avatars! Now updated with new selfie and first person camera modes.

![Peer to Peer chat](https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2Fezgif-3-a2691d6ea927.gif?v=1626111894228)

### Upload custom background

Upload image backgrounds, or use the included <b>chroma key colors</b> for keying in special software such as OBS. You can also upload resizeable <b>gif stickers</b> to use as props for your videos/streams. Uploaded images are also saved locally for the next time you visit!

![Panorama Background](https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FIMG_1391.GIF?v=1626108547668)

### Add resizeable stickers

Add <b>image/gif</b> stickers that you can resize and use as props for videos or streaming.

![Chroma Keys](https://cdn.glitch.com/29e07830-2317-4b15-a044-135e73c7f840%2FIMG_1389.GIF?v=1626108547406)

All sample VRM models are not mine and credit should go to the creators on Vroid Hub.

### OBS Integration

To use Kalidoface directly in a Browser object in OBS, you need the `-use-fake-ui-for-media-stream` and `--allow-file-access-from-files` flags enabled. This is used to get access to the webcam and to allow custom This can be done through a terminal/command prompt. Below is a sample to get it running on mac. Just add the 2 prompts right after the path to your OBS application.

```
/Applications/OBS.app/Contents/MacOS/OBS -use-fake-ui-for-media-stream --allow-file-access-from-files
```

### Standalone Tracking Library

Interested in making your own Vtuber app? **[Kalidoface](https://github.com/yeemachine/kalidokit)** is a JS library that solves for face, full body, and hand tracking.

<a href="https://github.com/yeemachine/kalidokit"><img src="https://github.com/yeemachine/kalidokit/blob/main/docs/kalidokit_glitch.gif?raw=true" alt="Kalidokit Template" width="100%"/></a>
