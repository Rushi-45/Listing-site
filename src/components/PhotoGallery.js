import Gallery from 'react-photo-gallery';
import React, { Component } from 'react';

class PhotoGallery extends React.Component {
    render() {
        return (
            <>
            <Gallery photos={PHOTO_SET1} />
            <Gallery photos={PHOTO_SET2} />
            </>
        );
    }
}
const PHOTO_SET1 = [
    {
        src: 'https://mldllifespacebucket01.s3.amazonaws.com/2018/09/over-win.jpg',
        width: 4,
        height: 3      
    },
    {
        src: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/10/18/Project-Photo-1-DS-Max-Sangam-Grand-Bangalore-5126913_345_1366_310_462.jpg',
        width: 1,
        height: 1
    },
    {
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6znuQ2YHjoRVvC1yLRF3gHOb_3MXXn5OWw&usqp=CAU',
        width: 4,
        height: 3
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksLaUyTWqCjg3HlrHsaAJLdXx_bmv2CjPvg&usqp=CAU',
        width: 1,
        height: 1
    }
];
const PHOTO_SET2 = [
    {
        src: 'https://mldllifespacebucket01.s3.amazonaws.com/2018/09/over-win.jpg',
        width: 4,
        height: 3
    },
    {
        src: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/10/18/Project-Photo-1-DS-Max-Sangam-Grand-Bangalore-5126913_345_1366_310_462.jpg',
        width: 1,
        height: 1
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6znuQ2YHjoRVvC1yLRF3gHOb_3MXXn5OWw&usqp=CAU',
        width: 4,
        height: 3
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksLaUyTWqCjg3HlrHsaAJLdXx_bmv2CjPvg&usqp=CAU',
        width: 1,
        height: 1
    }
];


export default PhotoGallery