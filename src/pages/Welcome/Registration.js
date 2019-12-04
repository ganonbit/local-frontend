import React from 'react';
import { Sidebar } from 'components/Sidebar/index';
import {
  LandingHeader,
  Video,
  MainContent,
  LandingFooter,
  Welcome,
} from './index';

export default function Registration() {
  return (
    <div className='page-has-left-panels page-has-right-panels pr-0'>
      <LandingHeader />
      <Sidebar />
      <div className='header-spacer'></div>
      <Video />
      <Welcome />
      <MainContent />
      <LandingFooter />
    </div>
  );
}
