import mockdb from './mockdb';

// It needs a true db driver for this to make sense

const driver = process.env.VUE_APP_DRIVER === 'mock' ? mockdb : mockdb;

export default driver;