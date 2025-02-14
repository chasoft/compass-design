import {styled} from '../theme'

export const StyledImageViewerWrap = styled('div', {
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  margin: '0px',
  zIndex: '51',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
})

export const StyledToolbarWrap = styled('div', {
  zIndex: '52',
  position: 'fixed',
  marginBottom: 20,
  top: 20,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledImageInformationWrap = styled('div', {
  zIndex: '52',
  position: 'fixed',
  bottom: 60,
  left: 0,
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledToolbar = styled('div', {
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
  justifyContent: 'center',
})

export const StyledNavbar = styled('div', {
  zIndex: 52,
  position: 'fixed',
  height: 50,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
})

export const StyledNavbarItem = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: 53,
  height: 50,
  marginBottom: 10,
  img: {
    width: '60px',
    height: '50px',
    opacity: 0.5,
    marginRight: 2,
    marginLeft: 2,
    borderRadius: 4,
  },
  '.active': {
    opacity: 1,
    border: '2px solid $cdgBlue80',
  },
})
