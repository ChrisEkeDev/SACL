import React, { useRef, useState, useEffect } from 'react'
import IconButton from '../Button/IconButton';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import './styles.scss';

function Carousel(props) {
    const { id, items, viewLimit, component: Item, width, gap } = props;
    const [ scrollVariable, setScrollVariable ] = useState(0);
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ announcement, setAnnouncement ] = useState('');
    const [ count, setCount ] = useState(1);
    const displayedItems = viewLimit || 4;
    const itemWidth = width / displayedItems;
    const list = useRef(null);
    const container = useRef(null)

    const handleScroll = (direction) => {
        if (list.current) {
            const newCount = direction === 'right' ? count + 1 : count - 1;
            setCount(newCount);
            list?.current?.scrollTo({
                left: direction === 'right' ?
                scrollPosition + scrollVariable :
                scrollPosition - scrollVariable,
                behavior: 'smooth'
            })
            setScrollPosition(direction === 'right' ? scrollPosition + scrollVariable : scrollPosition - scrollVariable);
            const visibleItemsIndices = Array.from({ length: displayedItems }, (_, i) => i + newCount - 1);
            const newAnnouncement = `Now showing items from ${newCount} to ${newCount + displayedItems - 1} of ${items.length}`;
            setAnnouncement(newAnnouncement);
        }
    }

    useEffect(() => {
        setScrollVariable(itemWidth);
        setAnnouncement(`Carousel initialized. Showing items 1 to ${displayedItems} of ${items.length}`);
    }, [width, gap])

    return (
        <div
            ref={container}
            className='carousel--wrapper'
            style={{width: width}}
            aria-roledescription="carousel"
            aria-label="Gallery"
            aria-live="polite"
        >

            <IconButton
                label="Scroll Left"
                icon={BiLeftArrowAlt }
                styles="carousel--icon icon--left secondary"
                action={() => handleScroll("left")}
                hidden={count === 1}
            />

            <ul
                ref={list}
                className='carousel--list'
                style={{gap: `${gap}px`}}
                role="group"
            >
                {
                    items.map((data, i) => (
                        <li

                            key={`${i}-${data.id}`}
                            className='carousel--item'
                            style={{width: `${itemWidth}px`}}>
                            <Item data={data}/>
                        </li>
                    ))
                }
            </ul>

            <IconButton
                label="Scroll Right"
                icon={BiRightArrowAlt }
                styles="carousel--icon icon--right secondary"
                action={() => handleScroll("right")}
                hidden={count - 1 === items.length - displayedItems}
            />


            <div
                className="carousel--announcement"
                aria-live="polite"
            >
                {announcement}
            </div>
        </div>
    )
}

export default Carousel
