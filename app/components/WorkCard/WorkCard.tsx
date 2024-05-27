'use client';

import React from 'react';
import styles from './styles.module.css';
import HoverVideoPlayer from 'react-hover-video-player';
import Image from 'next/image';

interface WorkCardProps {
  imageURL: string;
  videoURL: string;
  client: string;
  title: string;
}

const WorkCard = ({ imageURL, videoURL, client, title }: WorkCardProps) => {
  return (
    <div className={styles.workCard}>
      <div className={styles.thumbnail}>
        <HoverVideoPlayer
          videoSrc={videoURL}
          pausedOverlay={<Image src={imageURL} alt='' width={500} height={0} />}
        />
      </div>
      <span>{client.toUpperCase()}</span>
      <p>{title}</p>
    </div>
  );
};

export default WorkCard;
