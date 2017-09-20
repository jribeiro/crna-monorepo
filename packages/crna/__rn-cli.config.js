'use strict';
const path = require('path');

const config = {
    getProjectRoots() {
        return [
            '/Users/jribeiro/code/test-monorepo/packages/crna',
            '/Users/jribeiro/code/test-monorepo',
        ];
    },
    extraNodeModules: {
        'react-native': path.resolve(__dirname, '../../node_modules/react-native'),
    },
};

module.exports = config;
