import React, { useState, useEffect } from 'react';
import { connect } from "frontity";
import Box from '@mui/material/Box';
import { SliderContainer, SliderWrapper, Slider, SliderItem, ButtonsWrapper, SlideContent, PrevButton, NextButton, Indicators, Indicator, IndicatorAct } from './styled'
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SliderCmp = ({ state }) => {
    const { theme, home } = state.option;

    const [slideData, setSlideData] = useState(
        {
            activeIndex: 1,
            left: 0,
            width: 0
        }
    );

    const prevSlide = () => {
        if (slideData.activeIndex === 1) {
            setSlideData(pre => ({
                ...pre,
                activeIndex: home.slider.items.length,
                left: pre.width * (home.slider.items.length - 1) * -1
            }));
        } else {
            setSlideData(pre => ({
                ...pre,
                activeIndex: pre.activeIndex - 1,
                left: pre.left + pre.width
            }));
        }
    };

    const nextSlide = () => {
        if (slideData.activeIndex === home.slider.items.length) {
            setSlideData(pre => ({
                ...pre,
                activeIndex: 1,
                left: 0
            }));
        } else {
            setSlideData(pre => ({
                ...pre,
                activeIndex: pre.activeIndex + 1,
                left: pre.left - pre.width
            }));
        }
    };

    const clickIndicator = (e) => {
        setSlideData(pre => ({
            ...pre,
            activeIndex: parseInt(e.target.textContent),
            left: pre.width - parseInt(e.target.textContent) * pre.width
        }));
    };

    useEffect(() => {
        if (document) {
            setSlideData({
                ...slideData,
                width: document.getElementsByClassName('slide')[0].offsetWidth
            })
        }
    }, [])

    return (
        <div style={{ position: 'relative' }}>
            <SliderContainer>
                <SliderWrapper className='slide'>
                    <Slider style={{ width: slideData.width * home.slider.items.length }}>
                        {
                            home.slider.items.map(({ title, description, img }, index) => (
                                <SliderItem key={index} style={{ left: slideData.left, width: slideData.width }} className='slider-item'>
                                    <Box sx={{ display: 'flex', height: 400 }}>
                                        <Box sx={{ backgroundImage: `url(${img})`, width: { sm: '65%', xs: '100%' }, minHeight: { sm: '65%', xs: '50%' }, backgroundSize: 'cover' }} />
                                    </Box>
                                    <SlideContent sx={{ width: { sm: '35%', xs: '100%' }, height: { sm: '100%', xs: '50%' }, mt: { sm: 0, xs: 'auto' }, mr: 0, ml: 'auto' }}>
                                        <Typography sx={{ color: '#000', fontSize: { sm: 27, xs: 20 }, mb: { sm: 4, xs: 2 }, fontWeight: { sm: 700, xs: 500 } }} variant='h2'>{title}</Typography>
                                        <Typography sx={{ color: '#000', fontSize: { sm: 16, xs: 14 } }}>{description}</Typography>
                                    </SlideContent>
                                </SliderItem>
                            ))
                        }
                    </Slider>
                </SliderWrapper>
                {
                    slideData.width ?
                        <ButtonsWrapper style={{ width: slideData.width }}>
                            <PrevButton title='' onClick={() => prevSlide()}><KeyboardArrowLeftIcon /></PrevButton>
                            <NextButton title='' onClick={() => nextSlide()}><KeyboardArrowRightIcon /></NextButton>
                        </ButtonsWrapper> : null
                }
            </SliderContainer >
            {
                slideData.width ?
                    <Indicators style={{ width: slideData.width }}>
                        {home.slider.items.map((item, index) => (
                            <Box key={index} sx={{ display: 'inline-block' }}>
                                {
                                    index + 1 === slideData.activeIndex ?
                                        <IndicatorAct style={{ backgroundColor: theme.warning }} onClick={clickIndicator} /> :
                                        <Indicator onClick={clickIndicator} />
                                }
                            </Box>
                        ))
                        }
                    </Indicators> : null
            }
        </div >
    )
}

export default connect(SliderCmp);