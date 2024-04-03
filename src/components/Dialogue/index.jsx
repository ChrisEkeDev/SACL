import React, { useEffect, useRef } from 'react';
import { KEY_PRESS } from '../../constants';
import IconButton from '../Button/IconButton'
import ReactDOM from 'react-dom';
import { BiX } from 'react-icons/bi';
import './styles.scss';
import Button from '../Button/Button';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnimations, modalAnimations } from '../../constants/animations';

function Dialogue({ isOpen, onClose, dialogue }) {
    const dialogueRef = useRef(null);

    useEffect(() => {
        if (isOpen) dialogueRef.current.focus();
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e) => KEY_PRESS.ESCAPE(e) ? onClose() : null;
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    if (!isOpen) return null;


    return ReactDOM.createPortal(
        <AnimatePresence mode='wait'>
            {
                isOpen &&
                <motion.div
                    id={`dialogue-${dialogue.id}`}
                    {...fadeAnimations}
                    aria-modal="true"
                    role="dialogue"
                    ref={dialogueRef}
                    tabIndex={-1}
                    className="dialogue--wrapper"
                >
                    <motion.div
                        {...modalAnimations}
                        id={`modal-${dialogue.id}`}
                        className="dialogue--modal"
                        role="document">
                        <header className='dialogue--header'>
                            <h3>{dialogue.title}</h3>
                            <IconButton
                                styles="dialogue--icon"
                                icon={BiX}
                                label="Close"
                                action={onClose}
                            />
                        </header>
                        <p className='dialogue--body'>{dialogue.content}</p>
                        {
                            dialogue.action &&
                            <Button
                                styles="primary button--full"
                                action={() => dialogue.action()}
                                label={dialogue.actionLabel}
                            />
                        }
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>,
        document.body
    );
}

export default Dialogue
