import React, {SyntheticEvent, useState} from 'react'
import Slider from '../slider'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  SettingIcon,
  VolumeIcon,
} from './icon'
import {
  ErrorVariantProps,
  StyledButtonWrapper,
  StyledControllerWrapper,
  StyledSlideBarWrapper,
  StyledVideoPlayer,
  StyledVolume,
} from './video-player.styles'
import VolumeSlider from './volume-slider/volume-slider'

interface Props extends StyledComponentProps {
  src: string
  id?: string
  loop?: boolean
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  poster?: string
  preload?: 'auto' | 'metadata' | 'none'
  width?: number
  height?: number
  'aria-label'?: string
  'aria-labelledby'?: string
  'aria-describedby'?: string
  'aria-details'?: string
  className?: string
  onNext?: () => void
  onPrev?: () => void
  onSetting?: () => void
}

export type VideoPlayerProps = Props &
  ErrorVariantProps &
  Omit<React.ButtonHTMLAttributes<HTMLVideoElement>, keyof Props>

const VideoPlayer = React.forwardRef<HTMLVideoElement, Props>((props, ref) => {
  const {
    // StyledComponentProps
    css = {},
    // children
    id,
    src,
    poster,
    width,
    height,
    preload = 'auto',
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,
    className,
    onNext,
    onPrev,
    onSetting,
    // AriaButtonProps
    ...ariaSafeProps
  } = props

  const videoRef = useDOMRef<HTMLVideoElement>(ref)
  const [paused, setPaused] = useState(!autoPlay)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(muted ? 0 : 100)
  const [loadError, setLoadError] = useState(false)

  function play() {
    if (videoRef.current?.paused) {
      videoRef.current?.play().finally(null)
      setPaused(false)
    } else {
      videoRef.current?.pause()
      setPaused(true)
    }
  }

  function onLoadedData(e: SyntheticEvent<HTMLVideoElement>) {
    setDuration(e.currentTarget.duration ?? 0)
    e.currentTarget.volume = volume / 100
  }

  function onTimeUpdate(e: SyntheticEvent<HTMLVideoElement>) {
    const pg =
      (e.currentTarget.currentTime / e.currentTarget.duration) * 100 ?? 0
    setCurrentTime(e.currentTarget.currentTime ?? 0)
    setProgress(pg)
    if (loop === false && pg === 100) setPaused(true)
  }

  function onToggleVolume(value: number) {
    if (videoRef.current) {
      videoRef.current.volume = value / 100
      setVolume(value)
    }
  }

  function onToggleProgress(value: number) {
    if (videoRef.current) {
      videoRef.current.currentTime = (duration * value) / 100
      setProgress(value)
    }
  }

  const handleError = () => {
    setLoadError(true)
  }

  const componentProps = () => {
    return {
      className,
      css,
      ...ariaSafeProps,
    }
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    callback?: () => void,
  ) => {
    const key = event.key
    if (key === 'Enter' || key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      callback?.()
    }
  }

  const handleSliderKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key
    switch (key) {
      case 'ArrowRight':
        event.preventDefault()
        event.stopPropagation()
        if (videoRef.current) {
          const value = Math.min(progress + duration * 0.05, 100)
          videoRef.current.currentTime = (duration * value) / 100
          setProgress(value)
        }
        break
      case 'ArrowLeft':
        event.preventDefault()
        event.stopPropagation()
        if (videoRef.current) {
          const value = Math.max(progress - duration * 0.05, 0)
          videoRef.current.currentTime = (duration * value) / 100
          setProgress(value)
        }
        break
    }
  }

  const handleVolumeKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key
    switch (key) {
      case 'ArrowUp':
        event.preventDefault()
        event.stopPropagation()
        if (videoRef.current) {
          const value = Math.min(volume + 10, 100)
          videoRef.current.volume = value / 100
          setVolume(value)
        }
        break
      case 'ArrowDown':
        event.preventDefault()
        event.stopPropagation()
        if (videoRef.current) {
          const value = Math.max(volume - 10, 0)
          videoRef.current.volume = value / 100
          setVolume(value)
        }
        break
    }
  }

  const handleWrapperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key
    switch (key) {
      case 'ArrowLeft':
      case 'ArrowRight':
        handleSliderKeyDown(event)
        break
      case 'ArrowUp':
      case 'ArrowDown':
        handleVolumeKeyDown(event)
        break
    }
  }

  const delegateProps = componentProps()

  return (
    <StyledVideoPlayer css={css} id={id} onKeyDown={handleWrapperKeyDown}>
      {loadError && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Sorry, the video failed to load. Please try again later.
        </div>
      )}
      <video
        {...delegateProps}
        src={src}
        ref={videoRef}
        loop={loop}
        poster={poster}
        preload={preload}
        muted={muted}
        controls={false}
        autoPlay={autoPlay}
        width={width}
        height={height}
        onLoadedData={onLoadedData}
        onTimeUpdate={onTimeUpdate}
        onClick={play}
        onError={handleError}
      />
      {controls && (
        <>
          <StyledVolume tabIndex={0}>
            <VolumeSlider value={volume} onChange={onToggleVolume} />
            <div className='slider-bar-volume-icon'>
              <VolumeIcon value={volume} onChange={onToggleVolume} />
            </div>
          </StyledVolume>
          <StyledControllerWrapper>
            <StyledSlideBarWrapper>
              <span>{formatTime(currentTime)}</span>
              <Slider
                value={progress}
                onChangeEnd={onToggleProgress}
                tooltip={false}
                css={{
                  background: '#C8C6C4',
                  '.range-slider': {background: '#fff'},
                }}
              />
              <span>{formatTime(duration)}</span>
            </StyledSlideBarWrapper>
            <StyledButtonWrapper>
              <div className='slider-bar-button-main'>
                <div
                  tabIndex={0}
                  className='slider-bar-button-prev'
                  onClick={onPrev}
                  onKeyDown={(e) => handleKeyDown(e, onPrev)}
                >
                  <PrevIcon />
                </div>
                <div
                  tabIndex={0}
                  className='slider-bar-button-play'
                  onClick={play}
                  onKeyDown={(e) => handleKeyDown(e, play)}
                >
                  {paused ? <PlayIcon /> : <PauseIcon />}
                </div>
                <div
                  tabIndex={0}
                  className='slider-bar-button-next'
                  onClick={onNext}
                  onKeyDown={(e) => handleKeyDown(e, onNext)}
                >
                  <NextIcon />
                </div>
                <div
                  tabIndex={0}
                  className='slider-bar-button-setting'
                  onClick={onSetting}
                  onKeyDown={(e) => handleKeyDown(e, onSetting)}
                >
                  <SettingIcon />
                </div>
              </div>
            </StyledButtonWrapper>
          </StyledControllerWrapper>
        </>
      )}
    </StyledVideoPlayer>
  )
})

const formatTime = (secs: number) => {
  if (secs) {
    const sec_num = parseInt(`${secs}`, 10)
    const hours = Math.floor(sec_num / 3600)
    const minutes = Math.floor(sec_num / 60) % 60
    const seconds = sec_num % 60

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? `0${v}` : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':')
  }
  return '0:00'
}

export default VideoPlayer
