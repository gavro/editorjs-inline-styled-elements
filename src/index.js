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

export {
    InfoIcon,
    QuestionIcon,
    DIcon,
    ExternalLinkIcon,
    InlineButton
}