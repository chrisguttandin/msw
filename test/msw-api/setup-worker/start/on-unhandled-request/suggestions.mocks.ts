import { setupWorker, rest, graphql } from 'msw'

const resolver = () => null

const worker = setupWorker(
  rest.get('/user', resolver),
  graphql.query('GetUser', resolver),
  graphql.mutation('SubmitCheckout', resolver),
)

worker.start({
  // Set the `onUnhandledRequest` option to enable request handlers
  // suggestions for unhandled requests.
  onUnhandledRequest: 'warn',
})