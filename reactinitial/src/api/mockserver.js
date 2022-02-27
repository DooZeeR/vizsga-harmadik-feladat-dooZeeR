import { createServer } from 'miragejs';

/**
 * 
 * 
 * DO NOT TOUCH THIS FILE!!!!!!
 * 
 * 
 */

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,
    models: {
    },
    seeds(server) {
    },
    routes() {
      this.urlPrefix = 'https://seriescharacters.com';
      this.namespace = '/api';
      this.timing = 2000

      this.get('/howimetyourmother', (schema, request) => {
        return [
            { name: "Ted Mosby", details: "He is the main protagonist of the series..."},
            { name: "Barney Stinson", details: "He is best friend of the protagonist..."},
            { name: "Marshall Eriksen", details: "He is also the best friend of the protagonist..."},
          ]
      })

      this.post('/newsletter', (schema, request) => {
        return { done: true }
      })
    },
  });
  return server;
}