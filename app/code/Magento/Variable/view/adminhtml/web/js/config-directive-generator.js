/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore'
], function (_) {
    'use strict';

    return _.extend({
        directiveTemplate: '{{config path="%s"}}',

        processConfig: function (path) {
            return this.directiveTemplate.replace("%s", path);
        }
    });
});
