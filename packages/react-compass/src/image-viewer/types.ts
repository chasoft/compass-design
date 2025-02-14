import {IconDefinition} from '@fortawesome/fontawesome-svg-core'
import {ActionType} from './Icon'

export interface IViewerCoreState {
  index: number
  visible: boolean
  activeIndex: number
  width: number
  height: number
  top: number
  left: number
  rotate: number
  imageWidth: number
  imageHeight: number
  scaleX: number
  scaleY: number
  loading: boolean
  loadFailed: boolean
  startLoading: boolean
}

export enum ActionTypeEnum {
  setVisible = 'setVisible',
  setActiveIndex = 'setActiveIndex',
  update = 'update',
  clear = 'clear',
}

export interface IAction {
  type: ActionTypeEnum
  payload: Partial<IViewerCoreState>
}

export interface ViewerImageSize {
  width: number
  height: number
}

export interface ImageDecorator {
  src: string
  alt?: string
  defaultSize?: ViewerImageSize
  srcPreview?: string
}

export interface ToolbarConfig {
  key: string
  actionType: ActionType
  icon?: IconDefinition
  render?: React.ReactNode
  onClick?: (activeImage: ImageDecorator) => void
}

export interface ViewerDefaultImg {
  src: string
  width?: number
  height?: number
}

export interface IViewerProps {
  index?: number
  visible?: boolean
  onClose?: () => void
  images?: ImageDecorator[]
  activeIndex?: number
  container?: HTMLElement
  drag?: boolean
  zoomable?: boolean
  rotatable?: boolean
  scalable?: boolean
  onMaskClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  loop?: boolean
  noClose?: boolean
  isShowImageInformation?: boolean
  isShowPreview?: boolean
  isShowToolbar?: boolean
  changeable?: boolean
  customToolbar?: (toolbars: ToolbarConfig[]) => ToolbarConfig[]

  // zoom speed
  zoomSpeed?: number

  // default image size
  defaultSize?: ViewerImageSize

  // if load img failed, show default img
  defaultImg?: ViewerDefaultImg

  // disable keyboard support
  disableKeyboardSupport?: boolean

  // no reset zoom after image change
  noResetZoomAfterChange?: boolean

  // no limit image initialization size
  noLimitInitializationSize?: boolean

  // default scale
  defaultScale?: number

  // callback when iamge change
  onChange?: (activeImage: ImageDecorator, index: number) => void

  // disable mouse zoom
  disableMouseZoom?: boolean

  // total indicator name.
  totalName?: string

  // max scale
  maxScale?: number

  // min scale
  minScale?: number
}
