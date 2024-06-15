'use strict';

/**
 * superuser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::superuser.superuser');
