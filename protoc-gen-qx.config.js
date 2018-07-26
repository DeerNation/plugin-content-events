module.exports = {
    messageType: {
      'proto.dn.model.payload.Event': {
        include: ['app.plugins.message.MEvent', 'app.api.MUpdate']
      }
    },
    skipDeps: ['google-protobuf.js', 'grpc-web-client.js'],
    skipDepLoadingFallback: true,
    withoutSemi: true,
    repeatedClass: 'app.api.Array'
  }
  