export const imports = {
  'docz/Deck.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-deck" */ 'docz/Deck.mdx'),
  'docz/ListCard.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docz-list-card" */ 'docz/ListCard.mdx'),
}
