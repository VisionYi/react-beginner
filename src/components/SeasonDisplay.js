import React from 'react'
import styled from 'styled-components'

/**
 * 這裡全部使用 Style Component 產生動態 css (scoped) + Tailwind CSS 配置所有的元素樣式
 */
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`

const StyledIcon = styled.i`
  position: absolute;
  width: 100px;
  height: 100px;
`

const SeasonDisplay = (props) => {
  const getSeason = (lat, month) => {
    if (month > 2 || month > 9) {
      return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
  }

  const seasonMapping = {
    summer: {
      text: 'Let\'s hit the beach!',
      iconName: 'akar-icons:sun',
      css: {
        wrapperBg: 'bg-orange',
        iconColor: 'text-red',
      }
    },
    winter: {
      text: 'Burr, it is chilly!',
      iconName: 'ion:snow',
      css: {
        wrapperBg: 'bg-blue2',
        iconColor: 'text-blue',
      }
    },
  }

  const seasonName = getSeason(props.lat, new Date().getMonth())
  const season = seasonMapping[seasonName]

  return (
    <StyledWrapper className={`${props.className} ${season.css.wrapperBg}`}>
      <StyledIcon className={[season.css.iconColor, 'top-4 left-4']}>
        <span className="iconify h-full w-full" data-icon={season.iconName} data-inline="false"></span>
      </StyledIcon>
      <h1 className="text-5xl">{season.text}</h1>
      <StyledIcon className={[season.css.iconColor, 'bottom-4 right-4']}>
        <span className="iconify h-full w-full" data-icon={season.iconName} data-inline="false"></span>
      </StyledIcon>
    </StyledWrapper>
  )
}

export default SeasonDisplay
