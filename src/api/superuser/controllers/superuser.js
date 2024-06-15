'use strict';

/**
 * superuser controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::superuser.superuser');
