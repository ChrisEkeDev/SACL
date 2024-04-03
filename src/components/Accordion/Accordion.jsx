import React, { useState, useRef, createRef, forwardRef } from 'react';
import { LayoutGroup } from 'framer-motion';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AnimatePresence, motion } from 'framer-motion';
import { accordionAnimations } from '../../constants/animations';
import { KEY_PRESS } from '../../constants';
import './styles.scss';

const AccordionItem = forwardRef((props, ref) => {
  const { item, changeFocus, toggleOpen, isOpen } = props;

  const handleKeyDown = (e) => {
    if (KEY_PRESS.ENTER(e)) toggleOpen(item.id)
    else if (KEY_PRESS.UP(e) || KEY_PRESS.DOWN(e)) changeFocus(e.key, item.id)
  };

  return (
      <motion.li
        layout
        className='wrapper accordion_item--wrapper'>
          <motion.header
            layout
            role='button'
            ref={ref}
            onClick={() => toggleOpen(item.id)}
            className={`accordion_item--header ${isOpen && "accordion_item--selected"}`}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${item.id}`}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <h3 className='accordion_item--title'>{item.title}</h3>

            <motion.span
              animate={isOpen ? {rotate: 180} : {rotate: 0}}
              className='accordion_item--icon'
            >
              <BiChevronDown/>
            </motion.span>
          </motion.header>

          <AnimatePresence>
            {
              isOpen &&
              <motion.div
                id={`accordion-content-${item.id}`}
                {...accordionAnimations}
                className={`accordion_item--content`}
                hidden={!isOpen}
              >
                {item.content}
              </motion.div>
            }
          </AnimatePresence>

      </motion.li>
  )
})

function Accordion({items}) {
  const accordionRefs = useRef(items.map(() => createRef()));
  const [ openItems, setOpenItems ] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const toggleOpen = (itemId) => {
    setOpenItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const changeFocus = (direction, currentItemId) => {
    const idx = items.findIndex(item => item.id === currentItemId);
    let nextIdx = idx;
    if (direction === 'ArrowDown') nextIdx = (idx + 1) % items.length;
    else if (direction === 'ArrowUp') nextIdx = (idx - 1 + items.length) % items.length;
    accordionRefs.current[nextIdx]?.current?.focus();
  };

  return (
    <div className='wrapper accordion--wrapper'>
        <ul className='accordion--list'>
          <LayoutGroup>
            {
              items.map((item, i) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openItems[item.id]}
                  toggleOpen={toggleOpen}
                  changeFocus={changeFocus}
                  ref={accordionRefs.current[i]}
                />
              ))
            }
          </LayoutGroup>
        </ul>
    </div>
  )
}

export default Accordion
