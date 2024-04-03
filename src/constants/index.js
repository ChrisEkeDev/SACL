import { BiSearch, BiSolidHeart, BiSolidPlusCircle } from "react-icons/bi"
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

export const NAV_LINKS = [
    {
        id: 1,
        label: 'Buttons',
        href: 'buttons'
    },
    {
        id: 2,
        label: 'Inputs',
        href: 'inputs'
    },
    {
        id: 3,
        label: 'Accordion',
        href: 'accordion'
    },
    {
        id: 4,
        label: 'Select',
        href: 'select'
    },
    {
        id: 5,
        label: 'Tabs',
        href: 'tabs'
    },
    {
        id: 6,
        label: 'Dialogues',
        href: 'dialogues'
    },
    {
        id: 7,
        label: 'Carousel',
        href: 'carousel'
    },
    {
        id: 8,
        label: 'Alerts',
        href: 'alerts'
    },
    {
        id: 9,
        label: 'Radios',
        href: 'radios'
    },
    {
        id: 10,
        label: 'Checkbox',
        href: 'checkbox'
    },
    {
        id: 11,
        label: 'Loading',
        href: 'loading'
    },
    {
        id: 12,
        label: 'Forms',
        href: 'forms'
    }
]


export const BUTTONS_DATA = {
    TEXT_BUTTON: {
        id: 1,
        label: 'Submit',
        action: () => alert('Click')
    },
    ICON_TEXT_BUTTON: {
        id: 2,
        label: 'Add Item',
        action: () => alert('Click'),
        icon: BiSolidPlusCircle
    },
    ICON_BUTTON: {
        id: 3,
        label: 'Add to Favorites',
        action: () => alert('Click'),
        icon: BiSolidHeart
    }
}


export const ACCORDION_DATA = [
    {
        id: 1,
        title: 'Accordion Section Title',
        content: dummyText
    },
    {
        id: 2,
        title: 'Accordion Section Title',
        content: dummyText
    },
    {
        id: 3,
        title: 'Accordion Section Title',
        content: dummyText
    }
]

export const INPUTS_DATA = {
    TEXT_INPUT: {
        id: 'text',
        label: 'Text Input',
        name: 'text',
        type: 'text',
        placeholder: 'Please enter some text...'
    },
    ICON_TEXT_INPUT: {
        id: 'icon_text',
        label: 'Text Input w/ Icon',
        name: 'icon_text',
        icon: BiSearch,
        type: 'text',
        placeholder: 'Please enter some text...'
    },
    TEXTAREA_INPUT: {
        id: 'textarea',
        label: 'TextArea Input',
        name: 'textarea',
        type: 'textarea',
        placeholder: 'Please enter some text...'
    },
    ERROR_TEXT_INPUT: {
        id: 'error_text',
        label: 'Text Input',
        name: 'error_text',
        type: 'text',
        placeholder: 'Please enter some text...',
        error: 'This is an error!'
    }
}

export const SELECT_DATA = {
    EXPERIENCE:  [
            {
                id: 1,
                value: 0,
                label: '0-5 years'
            },
            {
                id: 2,
                value: 5,
                label: '5-10 years'
            },
            {
                id: 3,
                value: 10,
                label: '10-15 years'
            },
            {
                id: 4,
                value: 15,
                label: '15-20 years'
            },
            {
                id: 5,
                value: 20,
                label: '20+ years'
            }
        ]
}

export const TABS_DATA = [
    {
        id: 1,
        label: 'Tab 1',
        content: `Tab 1. ${dummyText}`
    },
    {
        id: 2,
        label: 'Tab 2',
        content: `Tab 2. ${dummyText}`
    },
    {
        id: 3,
        label: 'Tab 3',
        content: `Tab 3. ${dummyText}`
    },
    {
        id: 4,
        label: 'Tab 4',
        content: `Tab 4. ${dummyText}`
    },
    {
        id: 5,
        label: 'Tab 5',
        content: `Tab 5. ${dummyText}`
    }
]

export const DIALOGUE_DATA = {
    DIALOGUE_1: {
        id: 1,
        title: 'Dialogue Title 1',
        content: dummyText,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Modal 1')
    },
    DIALOGUE_2: {
        id: 2,
        title: 'Dialogue Title 2',
        content: dummyText,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Modal 2')
    },
    DIALOGUE_3: {
        id: 3,
        title: 'Dialogue Title 3',
        content: dummyText,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Modal 3')
    }
}

export const CAROUSEL_DATA = [
    {
        id: 1,
        title: 'Carousel Title 1',
        content: `Carousel 1. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 1')
    },
    {
        id: 1,
        title: 'Carousel Title 2',
        content: `Carousel 2. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 2')
    },
    {
        id: 1,
        title: 'Carousel Title 3',
        content: `Carousel 1. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 3')
    },
    {
        id: 1,
        title: 'Carousel Title 4',
        content: `Carousel 4. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 4')
    },
    {
        id: 1,
        title: 'Carousel Title 5',
        content: `Carousel 5. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 5')
    },
    {
        id: 1,
        title: 'Carousel Title 6',
        content: `Carousel 6. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 6')
    },
    {
        id: 1,
        title: 'Carousel Title 7',
        content: `Carousel 7. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 7')
    },
    {
        id: 1,
        title: 'Carousel Title 8',
        content: `Carousel 8. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 8')
    },
    {
        id: 1,
        title: 'Carousel Title 9',
        content: `Carousel 9. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 9')
    },
    {
        id: 1,
        title: 'Carousel Title 10',
        content: `Carousel 10. ${dummyText}`,
        actionLabel: 'Click Me',
        action: () => alert('Clicked Carousel 10')
    }
]

export const ALERTS_DATA = {
    INFO: {
        id: 1,
        type: 'info',
        message: 'This is an Info alert.'
    },
    WARNING: {
        id: 1,
        type: 'warning',
        message: 'This is a Warning alert.'
    },
    ERROR: {
        id: 1,
        type: 'error',
        message: 'This is an Error alert.'
    },
    SUCCESS: {
        id: 1,
        type: 'success',
        message: 'This is a Success alert.'
    }
}


export const RADIO_OPTIONS = {
    FRAMEWORKS:[
        { id: 'angular', value: 'angular', label: 'Angular' },
        { id: 'react', value: 'react', label: 'React' },
        { id: 'vue', value: 'vue', label: 'Vue' }
    ]

}

export const FORM_DATA = {
    title: 'Test Form',
    description: 'This is a test form for demonstration purposes.',
    label: 'Submit Form',
}

export const KEY_PRESS = {
    ESCAPE: (e) => e.key === 'Escape',
    UP: (e) => e.key === 'ArrowUp',
    DOWN: (e) => e.key === 'ArrowDown',
    LEFT: (e) => e.key === 'ArrowLeft',
    RIGHT: (e) => e.key === 'ArrowRight',
    ENTER: (e) => e.key === 'Enter',
    SPACEBAR: (e) => e.key === ' '

}
