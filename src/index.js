/**
 * Build styles
 */
require('./index.css').toString();

import createInlineStyledElementTool from './tool';

const InfoIcon = createInlineStyledElementTool({
    toolClass: 'info-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/info-icon.svg').default
});

const QuestionIcon = createInlineStyledElementTool({
    toolClass: 'question-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/question-icon.svg').default
});

const DIcon = createInlineStyledElementTool({
    toolClass: 'd-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/d-icon.svg').default
});

const ExternalLinkIcon = createInlineStyledElementTool({
    toolClass: 'external-link-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/external-link-icon.svg').default
});

const InlineButton = createInlineStyledElementTool({
    toolClass: 'inline-button',
    toolTag: 'SPAN',
    toolIcon: require('../assets/inline-button.svg').default
});

const OneIcon = createInlineStyledElementTool({
    toolClass: 'one-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/1-icon.svg').default
});

const TwoIcon = createInlineStyledElementTool({
    toolClass: 'two-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/2-icon.svg').default
});

const CircleIcon = createInlineStyledElementTool({
    toolClass: 'circle-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/circle-icon.svg').default
});

const CircleCheckedIcon = createInlineStyledElementTool({
    toolClass: 'circle-checked-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/circle-checked-icon.svg').default
});

const SquareIcon = createInlineStyledElementTool({
    toolClass: 'square-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/square-icon.svg').default
});

const SquareCheckedIcon = createInlineStyledElementTool({
    toolClass: 'square-checked-icon',
    toolTag: 'SPAN',
    toolIcon: require('../assets/square-checked-icon.svg').default
});

export {
    InfoIcon,
    QuestionIcon,
    DIcon,
    ExternalLinkIcon,
    InlineButton,
    OneIcon,
    TwoIcon,
    CircleIcon,
    CircleCheckedIcon,
    SquareIcon,
    SquareCheckedIcon
}