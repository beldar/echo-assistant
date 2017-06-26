var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.google.api.CustomHttpPattern', null, global);
goog.exportSymbol('proto.google.api.Http', null, global);
goog.exportSymbol('proto.google.api.HttpRule', null, global);
proto.google.api.Http = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Http.repeatedFields_, null);
};
goog.inherits(proto.google.api.Http, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.Http.displayName = 'proto.google.api.Http';
}
proto.google.api.Http.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.api.Http.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.Http.toObject(opt_includeInstance, this);
    };
    proto.google.api.Http.toObject = function (includeInstance, msg) {
        var f, obj = {
            rulesList: jspb.Message.toObjectList(msg.getRulesList(), proto.google.api.HttpRule.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.api.Http.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.Http;
    return proto.google.api.Http.deserializeBinaryFromReader(msg, reader);
};
proto.google.api.Http.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.google.api.HttpRule;
                reader.readMessage(value, proto.google.api.HttpRule.deserializeBinaryFromReader);
                msg.addRules(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.api.Http.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.Http.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.api.Http.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getRulesList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.google.api.HttpRule.serializeBinaryToWriter);
    }
};
proto.google.api.Http.prototype.getRulesList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 1));
};
proto.google.api.Http.prototype.setRulesList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 1, value);
};
proto.google.api.Http.prototype.addRules = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.api.HttpRule, opt_index);
};
proto.google.api.Http.prototype.clearRulesList = function () {
    this.setRulesList([]);
};
proto.google.api.HttpRule = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.HttpRule.repeatedFields_, proto.google.api.HttpRule.oneofGroups_);
};
goog.inherits(proto.google.api.HttpRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.HttpRule.displayName = 'proto.google.api.HttpRule';
}
proto.google.api.HttpRule.repeatedFields_ = [11];
proto.google.api.HttpRule.oneofGroups_ = [[2, 3, 4, 5, 6, 8]];
proto.google.api.HttpRule.PatternCase = {
    PATTERN_NOT_SET: 0,
    GET: 2,
    PUT: 3,
    POST: 4,
    DELETE: 5,
    PATCH: 6,
    CUSTOM: 8
};
proto.google.api.HttpRule.prototype.getPatternCase = function () {
    return (jspb.Message.computeOneofCase(this, proto.google.api.HttpRule.oneofGroups_[0]));
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.api.HttpRule.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.HttpRule.toObject(opt_includeInstance, this);
    };
    proto.google.api.HttpRule.toObject = function (includeInstance, msg) {
        var f, obj = {
            selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
            get: jspb.Message.getFieldWithDefault(msg, 2, ""),
            put: jspb.Message.getFieldWithDefault(msg, 3, ""),
            post: jspb.Message.getFieldWithDefault(msg, 4, ""),
            pb_delete: jspb.Message.getFieldWithDefault(msg, 5, ""),
            patch: jspb.Message.getFieldWithDefault(msg, 6, ""),
            custom: (f = msg.getCustom()) && proto.google.api.CustomHttpPattern.toObject(includeInstance, f),
            body: jspb.Message.getFieldWithDefault(msg, 7, ""),
            additionalBindingsList: jspb.Message.toObjectList(msg.getAdditionalBindingsList(), proto.google.api.HttpRule.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.api.HttpRule.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.HttpRule;
    return proto.google.api.HttpRule.deserializeBinaryFromReader(msg, reader);
};
proto.google.api.HttpRule.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setSelector(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setGet(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setPut(value);
                break;
            case 4:
                var value = (reader.readString());
                msg.setPost(value);
                break;
            case 5:
                var value = (reader.readString());
                msg.setDelete(value);
                break;
            case 6:
                var value = (reader.readString());
                msg.setPatch(value);
                break;
            case 8:
                var value = new proto.google.api.CustomHttpPattern;
                reader.readMessage(value, proto.google.api.CustomHttpPattern.deserializeBinaryFromReader);
                msg.setCustom(value);
                break;
            case 7:
                var value = (reader.readString());
                msg.setBody(value);
                break;
            case 11:
                var value = new proto.google.api.HttpRule;
                reader.readMessage(value, proto.google.api.HttpRule.deserializeBinaryFromReader);
                msg.addAdditionalBindings(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.api.HttpRule.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.HttpRule.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.api.HttpRule.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getSelector();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = (jspb.Message.getField(message, 2));
    if (f != null) {
        writer.writeString(2, f);
    }
    f = (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
    f = (jspb.Message.getField(message, 4));
    if (f != null) {
        writer.writeString(4, f);
    }
    f = (jspb.Message.getField(message, 5));
    if (f != null) {
        writer.writeString(5, f);
    }
    f = (jspb.Message.getField(message, 6));
    if (f != null) {
        writer.writeString(6, f);
    }
    f = message.getCustom();
    if (f != null) {
        writer.writeMessage(8, f, proto.google.api.CustomHttpPattern.serializeBinaryToWriter);
    }
    f = message.getBody();
    if (f.length > 0) {
        writer.writeString(7, f);
    }
    f = message.getAdditionalBindingsList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(11, f, proto.google.api.HttpRule.serializeBinaryToWriter);
    }
};
proto.google.api.HttpRule.prototype.getSelector = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.google.api.HttpRule.prototype.setSelector = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.api.HttpRule.prototype.getGet = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.google.api.HttpRule.prototype.setGet = function (value) {
    jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearGet = function () {
    jspb.Message.setOneofField(this, 2, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
proto.google.api.HttpRule.prototype.hasGet = function () {
    return jspb.Message.getField(this, 2) != null;
};
proto.google.api.HttpRule.prototype.getPut = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, ""));
};
proto.google.api.HttpRule.prototype.setPut = function (value) {
    jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPut = function () {
    jspb.Message.setOneofField(this, 3, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
proto.google.api.HttpRule.prototype.hasPut = function () {
    return jspb.Message.getField(this, 3) != null;
};
proto.google.api.HttpRule.prototype.getPost = function () {
    return (jspb.Message.getFieldWithDefault(this, 4, ""));
};
proto.google.api.HttpRule.prototype.setPost = function (value) {
    jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPost = function () {
    jspb.Message.setOneofField(this, 4, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
proto.google.api.HttpRule.prototype.hasPost = function () {
    return jspb.Message.getField(this, 4) != null;
};
proto.google.api.HttpRule.prototype.getDelete = function () {
    return (jspb.Message.getFieldWithDefault(this, 5, ""));
};
proto.google.api.HttpRule.prototype.setDelete = function (value) {
    jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearDelete = function () {
    jspb.Message.setOneofField(this, 5, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
proto.google.api.HttpRule.prototype.hasDelete = function () {
    return jspb.Message.getField(this, 5) != null;
};
proto.google.api.HttpRule.prototype.getPatch = function () {
    return (jspb.Message.getFieldWithDefault(this, 6, ""));
};
proto.google.api.HttpRule.prototype.setPatch = function (value) {
    jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearPatch = function () {
    jspb.Message.setOneofField(this, 6, proto.google.api.HttpRule.oneofGroups_[0], undefined);
};
proto.google.api.HttpRule.prototype.hasPatch = function () {
    return jspb.Message.getField(this, 6) != null;
};
proto.google.api.HttpRule.prototype.getCustom = function () {
    return (jspb.Message.getWrapperField(this, proto.google.api.CustomHttpPattern, 8));
};
proto.google.api.HttpRule.prototype.setCustom = function (value) {
    jspb.Message.setOneofWrapperField(this, 8, proto.google.api.HttpRule.oneofGroups_[0], value);
};
proto.google.api.HttpRule.prototype.clearCustom = function () {
    this.setCustom(undefined);
};
proto.google.api.HttpRule.prototype.hasCustom = function () {
    return jspb.Message.getField(this, 8) != null;
};
proto.google.api.HttpRule.prototype.getBody = function () {
    return (jspb.Message.getFieldWithDefault(this, 7, ""));
};
proto.google.api.HttpRule.prototype.setBody = function (value) {
    jspb.Message.setField(this, 7, value);
};
proto.google.api.HttpRule.prototype.getAdditionalBindingsList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.google.api.HttpRule, 11));
};
proto.google.api.HttpRule.prototype.setAdditionalBindingsList = function (value) {
    jspb.Message.setRepeatedWrapperField(this, 11, value);
};
proto.google.api.HttpRule.prototype.addAdditionalBindings = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.api.HttpRule, opt_index);
};
proto.google.api.HttpRule.prototype.clearAdditionalBindingsList = function () {
    this.setAdditionalBindingsList([]);
};
proto.google.api.CustomHttpPattern = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.CustomHttpPattern, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.google.api.CustomHttpPattern.displayName = 'proto.google.api.CustomHttpPattern';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.google.api.CustomHttpPattern.prototype.toObject = function (opt_includeInstance) {
        return proto.google.api.CustomHttpPattern.toObject(opt_includeInstance, this);
    };
    proto.google.api.CustomHttpPattern.toObject = function (includeInstance, msg) {
        var f, obj = {
            kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
            path: jspb.Message.getFieldWithDefault(msg, 2, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.google.api.CustomHttpPattern.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.google.api.CustomHttpPattern;
    return proto.google.api.CustomHttpPattern.deserializeBinaryFromReader(msg, reader);
};
proto.google.api.CustomHttpPattern.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setKind(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setPath(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.google.api.CustomHttpPattern.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.google.api.CustomHttpPattern.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.google.api.CustomHttpPattern.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getKind();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getPath();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
};
proto.google.api.CustomHttpPattern.prototype.getKind = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.google.api.CustomHttpPattern.prototype.setKind = function (value) {
    jspb.Message.setField(this, 1, value);
};
proto.google.api.CustomHttpPattern.prototype.getPath = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.google.api.CustomHttpPattern.prototype.setPath = function (value) {
    jspb.Message.setField(this, 2, value);
};
goog.object.extend(exports, proto.google.api);
