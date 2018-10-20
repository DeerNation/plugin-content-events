/**
 * Generates a graphql+ query for the event payload.
 *
 * @param payloadFilter {proto.dn.PayloadFilter}
 * @param protoProcessor {ProtoProcessor}
 */
function getPayloadQuery (payloadFilter, protoProcessor) {
  return {
    options: 'orderasc: event.start',
    filter: `ge(event.start, "${payloadFilter.fromDate}") AND lt(event.start, "${payloadFilter.toDate}")`,
    properties: protoProcessor.getEdgeNames(payloadFilter.type)
  }
}

module.exports = getPayloadQuery
