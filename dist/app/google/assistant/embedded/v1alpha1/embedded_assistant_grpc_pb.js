'use strict';
var grpc = require('grpc');
var google_assistant_embedded_v1alpha1_embedded_assistant_pb = require('../../../../google/assistant/embedded/v1alpha1/embedded_assistant_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
function serialize_google_assistant_embedded_v1alpha1_ConverseRequest(arg) {
    if (!(arg instanceof google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest)) {
        throw new Error('Expected argument of type google.assistant.embedded.v1alpha1.ConverseRequest');
    }
    return new Buffer(arg.serializeBinary());
}
function deserialize_google_assistant_embedded_v1alpha1_ConverseRequest(buffer_arg) {
    return google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_google_assistant_embedded_v1alpha1_ConverseResponse(arg) {
    if (!(arg instanceof google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse)) {
        throw new Error('Expected argument of type google.assistant.embedded.v1alpha1.ConverseResponse');
    }
    return new Buffer(arg.serializeBinary());
}
function deserialize_google_assistant_embedded_v1alpha1_ConverseResponse(buffer_arg) {
    return google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
var EmbeddedAssistantService = exports.EmbeddedAssistantService = {
    converse: {
        path: '/google.assistant.embedded.v1alpha1.EmbeddedAssistant/Converse',
        requestStream: true,
        responseStream: true,
        requestType: google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseRequest,
        responseType: google_assistant_embedded_v1alpha1_embedded_assistant_pb.ConverseResponse,
        requestSerialize: serialize_google_assistant_embedded_v1alpha1_ConverseRequest,
        requestDeserialize: deserialize_google_assistant_embedded_v1alpha1_ConverseRequest,
        responseSerialize: serialize_google_assistant_embedded_v1alpha1_ConverseResponse,
        responseDeserialize: deserialize_google_assistant_embedded_v1alpha1_ConverseResponse,
    },
};
exports.EmbeddedAssistantClient = grpc.makeGenericClientConstructor(EmbeddedAssistantService);
