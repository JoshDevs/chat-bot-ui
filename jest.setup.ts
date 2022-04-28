import '@testing-library/jest-dom';

import { configure } from '@testing-library/react';

window.HTMLElement.prototype.scrollIntoView = jest.fn();

configure({ testIdAttribute: 'data-test-id' });