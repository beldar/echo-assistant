var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.AudioInConfig', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.AudioInConfig.Encoding', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.AudioOut', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.AudioOutConfig', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.AudioOutConfig.Encoding', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseConfig', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseRequest', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseResponse', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseResponse.EventType', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseResult', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseResult.MicrophoneMode', null, global);
goog.exportSymbol('proto.google.assistant.embedded.v1alpha1.ConverseState', null, global);
proto.google.assistant.embedded.v1alpha1.ConverseConfig = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.ConverseConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.ConverseConfig.displayName = 'proto.google.assistant.embedded.v1alpha1.ConverseConfig';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.ConverseConfig.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.ConverseConfig.toObject = function (includeInstance, msg) {
        var f, obj = {
            audioInConfig: (f = msg.getAudioInConfig()) && proto.google.assistant.embedded.v1alpha1.AudioInConfig.toObject(includeInstance, f),
            audioOutConfig: (f = msg.getAudioOutConfig()) && proto.google.assistant.embedded.v1alpha1.AudioOutConfig.toObject(includeInstance, f),
            converseState: (f = msg.getConverseState()) && proto.google.assistant.embedded.v1alpha1.ConverseState.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.ConverseConfig.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.ConverseConfig;
    return proto.google.assistant.embedded.v1alpha1.ConverseConfig.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.google.assistant.embedded.v1alpha1.AudioInConfig;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.AudioInConfig.deserializeBinaryFromReader);
                msg.setAudioInConfig(value);
                break;
            case 2:
                var value = new proto.google.assistant.embedded.v1alpha1.AudioOutConfig;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.AudioOutConfig.deserializeBinaryFromReader);
                msg.setAudioOutConfig(value);
                break;
            case 3:
                var value = new proto.google.assistant.embedded.v1alpha1.ConverseState;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.ConverseState.deserializeBinaryFromReader);
                msg.setConverseState(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.ConverseConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getAudioInConfig();
    if (f != null) {
        writer.writeMessage(1, f, proto.google.assistant.embedded.v1alpha1.AudioInConfig.serializeBinaryToWriter);
    }
    f = message.getAudioOutConfig();
    if (f != null) {
        writer.writeMessage(2, f, proto.google.assistant.embedded.v1alpha1.AudioOutConfig.serializeBinaryToWriter);
    }
    f = message.getConverseState();
    if (f != null) {
        writer.writeMessage(3, f, proto.google.assistant.embedded.v1alpha1.ConverseState.serializeBinaryToWriter);
    }
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.getAudioInConfig = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.AudioInConfig, 1));
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.setAudioInConfig = function (value) {
    jspb.Message.setWrapperField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.clearAudioInConfig = function () {
    this.setAudioInConfig(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.hasAudioInConfig = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.getAudioOutConfig = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.AudioOutConfig, 2));
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.setAudioOutConfig = function (value) {
    jspb.Message.setWrapperField(this, 2, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.clearAudioOutConfig = function () {
    this.setAudioOutConfig(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.hasAudioOutConfig = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.getConverseState = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.ConverseState, 3));
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.setConverseState = function (value) {
    jspb.Message.setWrapperField(this, 3, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.clearConverseState = function () {
    this.setConverseState(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseConfig.prototype.hasConverseState = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.AudioInConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.AudioInConfig.displayName = 'proto.google.assistant.embedded.v1alpha1.AudioInConfig';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.AudioInConfig.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.AudioInConfig.toObject = function (includeInstance, msg) {
        var f, obj = {
            encoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
            sampleRateHertz: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.AudioInConfig.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.AudioInConfig;
    return proto.google.assistant.embedded.v1alpha1.AudioInConfig.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readEnum());
                msg.setEncoding(value);
                break;
            case 2:
                var value = (reader.readInt32());
                msg.setSampleRateHertz(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.AudioInConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getEncoding();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getSampleRateHertz();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.Encoding = {
    ENCODING_UNSPECIFIED: 0,
    LINEAR16: 1,
    FLAC: 2
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.getEncoding = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.setEncoding = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.getSampleRateHertz = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, 0));
};
proto.google.assistant.embedded.v1alpha1.AudioInConfig.prototype.setSampleRateHertz = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.AudioOutConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.AudioOutConfig.displayName = 'proto.google.assistant.embedded.v1alpha1.AudioOutConfig';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.AudioOutConfig.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.AudioOutConfig.toObject = function (includeInstance, msg) {
        var f, obj = {
            encoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
            sampleRateHertz: jspb.Message.getFieldWithDefault(msg, 2, 0),
            volumePercentage: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.AudioOutConfig;
    return proto.google.assistant.embedded.v1alpha1.AudioOutConfig.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readEnum());
                msg.setEncoding(value);
                break;
            case 2:
                var value = (reader.readInt32());
                msg.setSampleRateHertz(value);
                break;
            case 3:
                var value = (reader.readInt32());
                msg.setVolumePercentage(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.AudioOutConfig.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getEncoding();
    if (f !== 0.0) {
        writer.writeEnum(1, f);
    }
    f = message.getSampleRateHertz();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
    f = message.getVolumePercentage();
    if (f !== 0) {
        writer.writeInt32(3, f);
    }
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.Encoding = {
    ENCODING_UNSPECIFIED: 0,
    LINEAR16: 1,
    MP3: 2,
    OPUS_IN_OGG: 3
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.getEncoding = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.setEncoding = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.getSampleRateHertz = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, 0));
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.setSampleRateHertz = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.getVolumePercentage = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, 0));
};
proto.google.assistant.embedded.v1alpha1.AudioOutConfig.prototype.setVolumePercentage = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseState = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.ConverseState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.ConverseState.displayName = 'proto.google.assistant.embedded.v1alpha1.ConverseState';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.ConverseState.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.ConverseState.toObject = function (includeInstance, msg) {
        var f, obj = {
            conversationState: msg.getConversationState_asB64()
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.ConverseState.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.ConverseState;
    return proto.google.assistant.embedded.v1alpha1.ConverseState.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.ConverseState.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readBytes());
                msg.setConversationState(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.ConverseState.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.ConverseState.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getConversationState_asU8();
    if (f.length > 0) {
        writer.writeBytes(1, f);
    }
};
proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.getConversationState = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.getConversationState_asB64 = function () {
    return (jspb.Message.bytesAsB64(this.getConversationState()));
};
proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.getConversationState_asU8 = function () {
    return (jspb.Message.bytesAsU8(this.getConversationState()));
};
proto.google.assistant.embedded.v1alpha1.ConverseState.prototype.setConversationState = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.AudioOut = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.AudioOut, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.AudioOut.displayName = 'proto.google.assistant.embedded.v1alpha1.AudioOut';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.AudioOut.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.AudioOut.toObject = function (includeInstance, msg) {
        var f, obj = {
            audioData: msg.getAudioData_asB64()
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.AudioOut.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.AudioOut;
    return proto.google.assistant.embedded.v1alpha1.AudioOut.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.AudioOut.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readBytes());
                msg.setAudioData(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.AudioOut.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.AudioOut.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getAudioData_asU8();
    if (f.length > 0) {
        writer.writeBytes(1, f);
    }
};
proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.getAudioData = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.getAudioData_asB64 = function () {
    return (jspb.Message.bytesAsB64(this.getAudioData()));
};
proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.getAudioData_asU8 = function () {
    return (jspb.Message.bytesAsU8(this.getAudioData()));
};
proto.google.assistant.embedded.v1alpha1.AudioOut.prototype.setAudioData = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.ConverseResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.ConverseResult.displayName = 'proto.google.assistant.embedded.v1alpha1.ConverseResult';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.ConverseResult.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.ConverseResult.toObject = function (includeInstance, msg) {
        var f, obj = {
            spokenRequestText: jspb.Message.getFieldWithDefault(msg, 1, ""),
            spokenResponseText: jspb.Message.getFieldWithDefault(msg, 2, ""),
            conversationState: msg.getConversationState_asB64(),
            microphoneMode: jspb.Message.getFieldWithDefault(msg, 4, 0),
            volumePercentage: jspb.Message.getFieldWithDefault(msg, 5, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.ConverseResult.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.ConverseResult;
    return proto.google.assistant.embedded.v1alpha1.ConverseResult.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setSpokenRequestText(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setSpokenResponseText(value);
                break;
            case 3:
                var value = (reader.readBytes());
                msg.setConversationState(value);
                break;
            case 4:
                var value = (reader.readEnum());
                msg.setMicrophoneMode(value);
                break;
            case 5:
                var value = (reader.readInt32());
                msg.setVolumePercentage(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.ConverseResult.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSpokenRequestText();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getSpokenResponseText();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getConversationState_asU8();
    if (f.length > 0) {
        writer.writeBytes(3, f);
    }
    f = message.getMicrophoneMode();
    if (f !== 0.0) {
        writer.writeEnum(4, f);
    }
    f = message.getVolumePercentage();
    if (f !== 0) {
        writer.writeInt32(5, f);
    }
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.MicrophoneMode = {
    MICROPHONE_MODE_UNSPECIFIED: 0,
    CLOSE_MICROPHONE: 1,
    DIALOG_FOLLOW_ON: 2
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getSpokenRequestText = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.setSpokenRequestText = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getSpokenResponseText = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.setSpokenResponseText = function (value) {
    jspb.Message.setField(this, 2, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getConversationState = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, ""));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getConversationState_asB64 = function () {
    return (jspb.Message.bytesAsB64(this.getConversationState()));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getConversationState_asU8 = function () {
    return (jspb.Message.bytesAsU8(this.getConversationState()));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.setConversationState = function (value) {
    jspb.Message.setField(this, 3, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getMicrophoneMode = function () {
    return (jspb.Message.getFieldWithDefault(this, 4, 0));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.setMicrophoneMode = function (value) {
    jspb.Message.setField(this, 4, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.getVolumePercentage = function () {
    return (jspb.Message.getFieldWithDefault(this, 5, 0));
};
proto.google.assistant.embedded.v1alpha1.ConverseResult.prototype.setVolumePercentage = function (value) {
    jspb.Message.setField(this, 5, value);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.ConverseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.ConverseRequest.displayName = 'proto.google.assistant.embedded.v1alpha1.ConverseRequest';
}
proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_ = [[1, 2]];
proto.google.assistant.embedded.v1alpha1.ConverseRequest.ConverseRequestCase = {
    CONVERSE_REQUEST_NOT_SET: 0,
    CONFIG: 1,
    AUDIO_IN: 2
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.getConverseRequestCase = function () {
    return (jspb.Message.computeOneofCase(this, proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_[0]));
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.ConverseRequest.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.ConverseRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            config: (f = msg.getConfig()) && proto.google.assistant.embedded.v1alpha1.ConverseConfig.toObject(includeInstance, f),
            audioIn: msg.getAudioIn_asB64()
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.ConverseRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.ConverseRequest;
    return proto.google.assistant.embedded.v1alpha1.ConverseRequest.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.google.assistant.embedded.v1alpha1.ConverseConfig;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.ConverseConfig.deserializeBinaryFromReader);
                msg.setConfig(value);
                break;
            case 2:
                var value = (reader.readBytes());
                msg.setAudioIn(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.ConverseRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getConfig();
    if (f != null) {
        writer.writeMessage(1, f, proto.google.assistant.embedded.v1alpha1.ConverseConfig.serializeBinaryToWriter);
    }
    f = (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeBytes(2, f);
    }
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.getConfig = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.ConverseConfig, 1));
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.setConfig = function (value) {
    jspb.Message.setOneofWrapperField(this, 1, proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.clearConfig = function () {
    this.setConfig(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.hasConfig = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.getAudioIn = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.getAudioIn_asB64 = function () {
    return (jspb.Message.bytesAsB64(this.getAudioIn()));
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.getAudioIn_asU8 = function () {
    return (jspb.Message.bytesAsU8(this.getAudioIn()));
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.setAudioIn = function (value) {
    jspb.Message.setOneofField(this, 2, proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.clearAudioIn = function () {
    jspb.Message.setOneofField(this, 2, proto.google.assistant.embedded.v1alpha1.ConverseRequest.oneofGroups_[0], undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseRequest.prototype.hasAudioIn = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_);
};
goog.inherits(proto.google.assistant.embedded.v1alpha1.ConverseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.assistant.embedded.v1alpha1.ConverseResponse.displayName = 'proto.google.assistant.embedded.v1alpha1.ConverseResponse';
}
proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_ = [[1, 2, 3, 5]];
proto.google.assistant.embedded.v1alpha1.ConverseResponse.ConverseResponseCase = {
    CONVERSE_RESPONSE_NOT_SET: 0,
    ERROR: 1,
    EVENT_TYPE: 2,
    AUDIO_OUT: 3,
    RESULT: 5
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.getConverseResponseCase = function () {
    return (jspb.Message.computeOneofCase(this, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0]));
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.google.assistant.embedded.v1alpha1.ConverseResponse.toObject(opt_includeInstance, this);
    };
    proto.google.assistant.embedded.v1alpha1.ConverseResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            error: (f = msg.getError()) && google_rpc_status_pb.Status.toObject(includeInstance, f),
            eventType: jspb.Message.getFieldWithDefault(msg, 2, 0),
            audioOut: (f = msg.getAudioOut()) && proto.google.assistant.embedded.v1alpha1.AudioOut.toObject(includeInstance, f),
            result: (f = msg.getResult()) && proto.google.assistant.embedded.v1alpha1.ConverseResult.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.assistant.embedded.v1alpha1.ConverseResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.assistant.embedded.v1alpha1.ConverseResponse;
    return proto.google.assistant.embedded.v1alpha1.ConverseResponse.deserializeBinaryFromReader(msg, reader);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new google_rpc_status_pb.Status;
                reader.readMessage(value, google_rpc_status_pb.Status.deserializeBinaryFromReader);
                msg.setError(value);
                break;
            case 2:
                var value = (reader.readEnum());
                msg.setEventType(value);
                break;
            case 3:
                var value = new proto.google.assistant.embedded.v1alpha1.AudioOut;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.AudioOut.deserializeBinaryFromReader);
                msg.setAudioOut(value);
                break;
            case 5:
                var value = new proto.google.assistant.embedded.v1alpha1.ConverseResult;
                reader.readMessage(value, proto.google.assistant.embedded.v1alpha1.ConverseResult.deserializeBinaryFromReader);
                msg.setResult(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.assistant.embedded.v1alpha1.ConverseResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getError();
    if (f != null) {
        writer.writeMessage(1, f, google_rpc_status_pb.Status.serializeBinaryToWriter);
    }
    f = (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeEnum(2, f);
    }
    f = message.getAudioOut();
    if (f != null) {
        writer.writeMessage(3, f, proto.google.assistant.embedded.v1alpha1.AudioOut.serializeBinaryToWriter);
    }
    f = message.getResult();
    if (f != null) {
        writer.writeMessage(5, f, proto.google.assistant.embedded.v1alpha1.ConverseResult.serializeBinaryToWriter);
    }
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.EventType = {
    EVENT_TYPE_UNSPECIFIED: 0,
    END_OF_UTTERANCE: 1
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.getError = function () {
    return (jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 1));
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.setError = function (value) {
    jspb.Message.setOneofWrapperField(this, 1, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.clearError = function () {
    this.setError(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.hasError = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.getEventType = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, 0));
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.setEventType = function (value) {
    jspb.Message.setOneofField(this, 2, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.clearEventType = function () {
    jspb.Message.setOneofField(this, 2, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0], undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.hasEventType = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.getAudioOut = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.AudioOut, 3));
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.setAudioOut = function (value) {
    jspb.Message.setOneofWrapperField(this, 3, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.clearAudioOut = function () {
    this.setAudioOut(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.hasAudioOut = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.getResult = function () {
    return (jspb.Message.getWrapperField(this, proto.google.assistant.embedded.v1alpha1.ConverseResult, 5));
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.setResult = function (value) {
    jspb.Message.setOneofWrapperField(this, 5, proto.google.assistant.embedded.v1alpha1.ConverseResponse.oneofGroups_[0], value);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.clearResult = function () {
    this.setResult(undefined);
};
proto.google.assistant.embedded.v1alpha1.ConverseResponse.prototype.hasResult = function () {
    return jspb.Message.getField(this, 5) != null;
};
goog.object.extend(exports, proto.google.assistant.embedded.v1alpha1);
