"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { VideoPlayer } from "@slogvo/react-universal-video";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "video.js/dist/video-js.css";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Img } from "react-image";
import { BlockAnimatedCard } from "@/components/BlockAnimatedCard";

const markdownContent = `
# @slogvo/react-universal-video

\`@slogvo/react-universal-video\` is a React module that allows you to easily play videos from different sources such as HTML5, YouTube, and streaming services (like HLS). Simply provide a video URL, and the module will automatically select the appropriate player to play the video. You can also customize the player’s style as needed.

## Installation

<div style="color:#0ea5e9; margin-bottom: 8px">To use the module, follow these steps:</div>

<strong>1. You can install it via npm, yarn or pnpm:</strong>

\`\`\`bash
npm i @slogvo/react-universal-video
\`\`\`

\`\`\`bash
yarn add @slogvo/react-universal-video
\`\`\`

\`\`\`bash
pnpm add @slogvo/react-universal-video
\`\`\`

<strong>2. Install required peer dependencies:</strong>

\`\`\`bash
pnpm install react react-dom video.js videojs-contrib-quality-levels videojs-http-source-selector
\`\`\`

<strong>3. You can import the Video.js CSS into your project wherever you need it. You have the flexibility to include it globally, or only in the specific components or pages where it is required. Here are a couple of options for doing so:</strong>

\`\`\`bash
import "video.js/dist/video-js.css";
\`\`\`

You can also check out more information at https://videojs.com/guides/react.

## Usage

To use the video player, simply import the VideoPlayer component and pass the video URL as a prop.

### Example:

\`\`\`typescript
import React from "react";
import VideoPlayer from "@slogvo/react-universal-video";

const App = () => {
  return (
    <div>
      // HTML5
      <VideoPlayer
        url="https://videos.pexels.com/video-files/5013307/5013307-hd_1920_1080_30fps.mp4"
        width="800"
        height="450"
      />
      // Yotube
      <VideoPlayer
        url="https://www.youtube.com/watch?v=oA91tf1Udr0"
        width="800"
        height="450"
      />
      // HLS
      <VideoPlayer
        url="https://live-hls-abr-cdn.livepush.io/live/bigbuckbunnyclip/index.m3u8"
        width="800"
        height="450"
      />
    </div>
  );
};

export default App;
\`\`\`

## VideoPlayer Component Props

| Prop        | Description                                                                   | Default |
| ----------- | ----------------------------------------------------------------------------- | ------- |
| \`url\`       | The video URL to play. This can be a YouTube URL, MP4 file, or streaming URL. | \`-\`     |
| \`width\`     | The width of the player.                                                      | \`100%\`  |
| \`height\`    | The height of the player.                                                     | \`400px\` |
| \`autoplay\`  | Whether the video should autoplay.                                            | \`false\` |
| \`controls\`  | Whether to show video controls (play, pause, volume, etc.).                   | \`true\`  |
| \`className\` | Custom CSS class for the player.                                              | \`-\`     |

## Components

### VideoPlayer

The main component of this module. It automatically selects the appropriate player (YouTube, HTML5, or streaming) based on the video URL you provide.

\`\`\`typescript
import VideoPlayer from "@slogvo/react-universal-video";
\`\`\`

## How It Works

The VideoPlayer component automatically determines the type of video based on the provided URL:

<div><strong>YouTube:</strong> If the URL is a YouTube video, the YoutubePlayer component will be used.</div>

<div><strong>HTML5 (MP4):</strong> If the URL is an MP4 file (or other HTML5 video formats), the Html5 component will be used.</div>
<div><strong>Stream (HLS):</strong> If the URL is a streaming video (e.g., m3u8), the VideojsPlayer component will be used.</div>

## Customizing Styles

You can add custom CSS classes to the player using the className prop to style the player as needed.

## Utility Functions

You can use utility functions from @slogvo/react-universal-video to interact with video URLs, such as extracting YouTube video IDs:

\`\`\`typescript
import { getYoutubeId } from "@slogvo/react-universal-video";

const youtubeId = getYoutubeId("https://www.youtube.com/watch?v=9cklv0qQ8Jw");
console.log(youtubeId); // Output: 9cklv0qQ8Jw
\`\`\`

## Contributing

If you'd like to contribute to @slogvo/react-universal-video, feel free to fork the repository and submit a pull request. We appreciate your contributions!
`;

const Home = () => {
  return (
    <div>
      <div className="relative">
        <BackgroundBeamsWithCollision>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <h3 className="text-2xl max-w-md relative z-20 md:text-3xl lg:text-5xl font-bold text-center text-white font-sans tracking-tight">
              Hi, I'm Long
              <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-sky-500 via-blue-400 to-sky-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                  <span className="">A Web Developer</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-sky-500 via-blue-400 to-sky-500   py-4">
                  <span className="">A Web Developer</span>
                </div>
              </div>
              <BlockAnimatedCard />
            </h3>
            <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] text-white border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm text-justify max-w-sm mt-2 dark:text-neutral-300"
                >
                  I work on a variety of projects ranging from frontend
                  development to full-stack web applications. Whether it's
                  building intuitive UIs or optimizing performance, my goal is
                  always to deliver an exceptional product.
                </CardItem>
                <CardItem
                  translateZ="100"
                  rotateX={20}
                  rotateZ={-10}
                  className="w-full mt-4"
                >
                  <Img
                    src="https://i.imgur.com/nH5BDn6.jpeg"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-end items-end mt-10">
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href="mailto:volonglqd@gmail.com"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Contact me now →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side: Video Demo */}
        <div className="w-full lg:w-2/5 p-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Video Demos</h2>
          <div className="flex flex-col gap-8">
            <VideoPlayer
              url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
              width="100%"
              height="450"
            />
            {/* HTML5 */}
            <VideoPlayer
              url="https://videos.pexels.com/video-files/5013307/5013307-hd_1920_1080_30fps.mp4"
              width="100%"
              height="450"
            />
            {/* YouTube */}
            <VideoPlayer
              url="https://www.youtube.com/watch?v=IzSYlr3VI1A"
              width="100%"
              height="450"
            />
          </div>
        </div>
        {/* Right Side: README Preview */}
        <div className="w-full lg:w-3/5 p-4 overflow-auto">
          <div className="p-4">
            <MarkdownPreview source={markdownContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
