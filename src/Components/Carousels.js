import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = 
[
  {
    src: '/images/inTime.jpg',
    altText: 'Art 1',
    caption: 'แนะนำ',
    header: 'INTIME',
    key: '1'
  },
  {
    src: '/images/Tenet.jpg',
    altText: 'Art 2',
    caption: 'แนะนำ',
    header: 'Tenet',
    key: '2'
  },
  {
    src: '/images/inception.jpg',
    altText: 'Art 3',
    caption: 'แนะนำ',
    header: 'Inception',
    key: '3'
  },
  {
    src: '/images/Edge of Tomorrow.jpg',
    altText: 'Art 4',
    caption: 'แนะนำ',
    header: 'Edge of Tomorrow',
    key: '4'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;