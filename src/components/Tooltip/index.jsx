import React, { useState, useRef, useEffect } from 'react';
import './styles.scss';

function Tooltip({tooltip, children}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const showTimeout = useRef(null);

    useEffect(() => {
        if (isHovering) {
            showTimeout.current = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
        } else {
            clearTimeout(showTimeout.current);
            setIsVisible(false);
        }
        return () => clearTimeout(showTimeout.current);
    }, [isHovering]);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleFocus = () => setIsHovering(true);
    const handleBlur = () => setIsHovering(false);

    return (
        <div
            className="tooltip--wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0}
            aria-describedby={`tooltip-${tooltip.id}`}
        >
            {children}
            {isVisible && (
                <small
                    id={`tooltip-${tooltip.id}`}
                    role="tooltip"
                    className="tooltip--text">
                    {tooltip.label}
                </small>
            )}
        </div>
    )
}

export default Tooltip
