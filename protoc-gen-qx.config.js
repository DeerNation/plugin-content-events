module.exports = {
  baseNamespace: 'app',
  sourceDir: '',
  embed: true,
  skipCoreFiles: true,
  messageType: {
    'app.plugins.event.Payload': {
      extend: 'proto.core.BaseMessage',
      include: ['app.plugins.event.MEvent', 'app.api.MUpdate']
    }
  },
  skipDeps: ['google-protobuf.js', 'grpc-web-client.js'],
  require: ['node_modules/protoc-gen-qx/extensions_pb'],
  skipDepLoadingFallback: true,
  withoutSemi: true,
  repeatedClass: 'app.api.Array'
}
