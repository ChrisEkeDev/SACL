import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { KEY_PRESS } from '../../constants';
import './styles.scss';
import { tabsAnimations } from '../../constants/animations';

const Tab = (props) => {
    const { tab, select, selectedTab, idx, tabsCount } = props;
    const isSelected = tab.id === selectedTab.id;

    const handleKeyDown = (e) => {
        let newIdx = undefined;
        if (KEY_PRESS.RIGHT(e)) newIdx = (idx + 1) % tabsCount;
        else if (KEY_PRESS.LEFT(e)) newIdx = (idx - 1 + tabsCount) % tabsCount;
        if (e.key === 'Enter' || e.key === ' ') select(tab);
        if (newIdx !== undefined) {
            setTimeout(() => {
                document.querySelectorAll('[role="tab"]')[newIdx].focus()
            }, 0)
        }
    };

    return (
        <div
            role="tab"
            layout
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => select(tab)}
            onKeyDown={handleKeyDown}
            className={`wrapper tab--wrapper ${isSelected && 'tab--selected'}`}
        >
            {
                isSelected &&
                <motion.div layout className="tab--underline" layoutId="underline"/>
            }
            {tab.label}

        </div>
    )
}

function Tabs({tabs}) {
    const [ selectedTab, setSelectedTab ] = useState(tabs[0]);

    return (
        <div className='tabs--wrapper'>
            <header className='tabs--header'  aria-label="Example Tabs">
            {
                tabs.map((tab, i) => (
                    <Tab
                        key={tab.id}
                        idx={i}
                        tab={tab}
                        select={setSelectedTab}
                        selectedTab={selectedTab}
                        tabsCount={tabs.length}
                    />
                ))
            }
            </header>
            <AnimatePresence mode='wait'>
                <motion.section
                    {...tabsAnimations}
                    key={selectedTab.id}
                    role="tabpanel"
                    className='tab--section'
                    aria-labelledby={selectedTab.id}
                >
                    {selectedTab.content}
                </motion.section>
            </AnimatePresence>
        </div>
    )
}

export default Tabs
