var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.exportSymbol('proto.google.rpc.Status', null, global);
proto.google.rpc.Status = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.google.rpc.Status.repeatedFields_, null);
};
goog.inherits(proto.google.rpc.Status, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.rpc.Status.displayName = 'proto.google.rpc.Status';
}
proto.google.rpc.Status.repeatedFields_ = [3];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.rpc.Status.prototype.toObject = function (opt_includeInstance) {
        return proto.google.rpc.Status.toObject(opt_includeInstance, this);
    };
    proto.google.rpc.Status.toObject = function (includeInstance, msg) {
        var f, obj = {
            code: jspb.Message.getFieldWithDefault(msg, 1, 0),
            message: jspb.Message.getFieldWithDefault(msg, 2, ""),
            detailsList: jspb.Message.toObjectList(msg.getDetailsList(), google_protobuf_any_pb.Any.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.rpc.Status.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.rpc.Status;
    return proto.google.rpc.Status.deserializeBinaryFromReader(msg, reader);
};
proto.google.rpc.Status.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readInt32());
                msg.setCode(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setMessage(value);
                break;
            case 3:
                var value = new google_protobuf_any_pb.Any;
                reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
                msg.addDetails(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.rpc.Status.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.rpc.Status.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.rpc.Status.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCode();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getMessage();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getDetailsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(3, f, google_protobuf_any_pb.Any.serializeBinaryToWriter);
    }
};
proto.google.rpc.Status.prototype.getCode = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.google.rpc.Status.prototype.setCode = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.rpc.Status.prototype.getMessage = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.google.rpc.Status.prototype.setMessage = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.google.rpc.Status.prototype.getDetailsList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 3));
};
proto.google.rpc.Status.prototype.setDetailsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 3, value);
};
proto.google.rpc.Status.prototype.addDetails = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Any, opt_index);
};
proto.google.rpc.Status.prototype.clearDetailsList = function () {
    this.setDetailsList([]);
};
goog.object.extend(exports, proto.google.rpc);
