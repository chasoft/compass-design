import React, {useState} from 'react'
import Transitions from '../transitions'
import {pickChild} from '../utils/pick-child'
import {StyledComponentProps} from '../utils/stitches.types'
import {useDOMRef} from '../utils/use-dom-ref'
import AccordionContext from './accordion-context'
import AccordionExpandIcon, {
  AccordionExpandIconProps,
} from './accordion-expandIcon'
import AccordionTable from './accordion-table'
import AccordionTitle, {AccordionTitleProps} from './accordion-title'
import {StyledAccordion} from './accordion.styles'
interface Props extends StyledComponentProps {
  expand?: boolean
  defaultExpand?: boolean
  children: React.ReactNode
  onExpandChange?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  'aria-labelledby'?: string
}

export type AccordionProps = Props &
  Omit<React.HTMLAttributes<HTMLDivElement>, keyof Props>

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      // StyledComponentProps
      css = {},
      // ComponentProps
      expand: controlledExpand, //map the prop to a different name
      defaultExpand = false,
      children,
      onExpandChange,
      // HTML Div props
      ...delegated
    } = props

    const [uncontrolledExpand, setUncontrolledExpand] = useState(defaultExpand)
    const accordionBodyRef = useDOMRef<HTMLDivElement>(null)

    // Component expansion state managed by its own or by user
    const expand: boolean = (() => {
      if (controlledExpand !== undefined) {
        return controlledExpand
      }
      return uncontrolledExpand
    })()

    // Toggle expansion state only when user doesnt control the component
    const setExpandIfUncontrolled = React.useCallback(() => {
      if (!controlledExpand !== undefined) {
        setUncontrolledExpand((prevState) => !prevState)
      }
    }, [])

    const contextValue = React.useMemo(
      () => ({expand, setExpand: setExpandIfUncontrolled, onExpandChange}),
      [expand, setExpandIfUncontrolled, onExpandChange],
    )

    const accordionRef = useDOMRef<HTMLDivElement>(ref)

    // pick accordion title from children
    const {child: AccordionTitleElement, rest: NotAccordionaTitleElement} =
      pickChild<React.ReactElement<AccordionTitleProps>>(
        children,
        AccordionTitle,
      )

    // pick accordion expand icon from NotAccordionaTitleElement
    const {child: AccordionExpandIconElement, rest: AccordionContent} =
      pickChild<React.ReactElement<AccordionExpandIconProps>>(
        NotAccordionaTitleElement,
        AccordionExpandIcon,
      )

    // Render the AccordionTitleElement with the AccordionExpandIconElement as its children
    const AccordionTitleWithIcon =
      AccordionTitleElement && AccordionExpandIconElement
        ? React.cloneElement(AccordionTitleElement, {
            expandIcon: AccordionExpandIconElement,
          })
        : AccordionTitleElement

    return (
      <StyledAccordion {...delegated} css={css} ref={accordionRef}>
        <AccordionContext.Provider value={contextValue}>
          {AccordionTitleWithIcon}
          <Transitions
            role='region'
            aria-labelledby={props['aria-labelledby']}
            ref={accordionBodyRef}
            isLazyMounted={true}
            show={expand}
          >
            <div className='accordion-body-inner'>{AccordionContent}</div>
          </Transitions>
        </AccordionContext.Provider>
      </StyledAccordion>
    )
  },
)

export default Accordion as typeof Accordion & {
  Table: typeof AccordionTable
  Title: typeof AccordionTitle
  ExpandIcon: typeof AccordionExpandIcon
}
