'use strict';

/**
 * rango service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rango.rango');
