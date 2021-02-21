import React from 'react'
import styled from 'styled-components'
import { color, position } from 'styled-system'
import theme from '../styles/theme'

const SWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  ${color}
`

const SIcon = styled.i`
  position: absolute;
  width: 100px;
  height: 100px;
  ${color}
  ${position}
`

const Title = styled.h1`
  font-size: ${theme.fontSizes.xxl};
`

const seasonConfig = {
  summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'akar-icons:sun',
    wrapperBg: 'orange',
    iconColor: 'red',
  },
  winter: {
    text: 'Burr, it is chilly!',
    iconName: 'ion:snow',
    wrapperBg: 'blue2',
    iconColor: 'blue',
  },
}

const getSeason = (lat, month) => {
  if (month > 2 || month > 9) {
    return lat > 0 ? 'summer' : 'winter'
  }
  return lat > 0 ? 'winter' : 'summer'
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const {text, iconName, wrapperBg, iconColor} = seasonConfig[season]

  return (
    <SWrapper bg={wrapperBg} className={props.className}>
      <SIcon color={iconColor} top="3" left="3">
        <span className="iconify h-full w-full" data-icon={iconName} data-inline="false"></span>
      </SIcon>
      <Title>{text}</Title>
      <SIcon color={iconColor} bottom="3" right="3">
        <span className="iconify h-full w-full" data-icon={iconName} data-inline="false"></span>
      </SIcon>
    </SWrapper>
  )
}

export default SeasonDisplay
