import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
