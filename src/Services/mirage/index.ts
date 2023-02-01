import { Factory, Model, createServer } from 'miragejs'

type User = {
  name: string;
  email: string;
  create_AT: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {

        },
        createAt() {

        },
      })
    },

    seeds(server) {

    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = '';
      this.passthrough()
    }
  })

  return server;
}