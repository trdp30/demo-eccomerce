import React, { useMemo } from 'react'

import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  settings: Settings
  children: React.ReactNode
  className?: string
}

const Carousel: React.FC<Props> = (props) => {
  const { settings, children } = props
  const defaultSettings = useMemo(
    () => ({
      ...settings
    }),
    [settings]
  )
  return <Slider {...defaultSettings}>{children}</Slider>
}

export default Carousel
