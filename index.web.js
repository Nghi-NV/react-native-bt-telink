class TelinkBt {
    static MESH_ADDRESS_MIN = 0x0001;
    static MESH_ADDRESS_MAX = 0x00FF;
    static GROUP_ADDRESS_MIN = 0x8001;
    static GROUP_ADDRESS_MAX = 0x80FF;
    static HUE_MIN = 0;
    static HUE_MAX = 360;
    static SATURATION_MIN = 0;
    static SATURATION_MAX = 100;
    static BRIGHTNESS_MIN = 1;
    static BRIGHTNESS_MAX = 127;
    static COLOR_TEMP_MIN = 1;
    static COLOR_TEMP_MAX = 127;
    static NODE_STATUS_OFF = 0;
    static NODE_STATUS_ON = 1;
    static NODE_STATUS_OFFLINE = 2;
    static DELAY_MS_AFTER_UPDATE_MESH_COMPLETED = 1;

    static needRefreshMeshNodesClaimed = true;
    static needRefreshMeshNodesBeforeConfig = true;
    static canConfigEvenDisconnected = true;
    static needClaimedBeforeConnect = true;
    static del4GroupStillSendOriginGroupAddress = true;
    static notDefaultAllGroupByGROUP_ADDRESS_MIN = true;
    static isSetNodeGroupAddrReturnAddresses = true;

    static doInit() {}

    static doDestroy() {}

    static addListener(eventName, handler) {}

    static removeListener(eventName, handler) {}

    static notModeAutoConnectMesh() {
        return true;
    }

    // 自动重连
    static autoConnect({
        userMeshName,
        userMeshPwd,
        otaMac
    }) {}

    // 自动刷新 Notify
    static autoRefreshNotify({
        repeatCount,
        Interval
    }) {}

    static idleMode({
        disconnect
    }) {}

    static startScan({
        meshName,
        outOfMeshName,
        timeoutSeconds,
        isSingleNode,
    }) {}

    static sendCommand({
        opcode,
        meshAddress,
        valueArray
    }) {}

    static changePower({
        meshAddress,
        value
    }) {}

    static changeBrightness({
        meshAddress,
        value
    }) {}

    static changeColorTemp({
        meshAddress,
        value
    }) {}

    static changeColor({
        meshAddress,
        hue = 0,
        saturation = 0,
        value,
        type,
    }) {}

    static changeScene({
        meshAddress,
        scene,
        hue = 0,
        saturation = 0,
        value,
        colorIds = [1, 2, 3, 4, 5],
        type,
    }) {}

    static getTypeFromUuid = uuid => uuid;

    static configNode({
        node,
        cfg,
    }) {}

    static getTotalOfGroupIndex({
        meshAddress,
    }) {}

    static setNodeGroupAddr({
        meshAddress,
        groupIndex,
        groupAddress,
    }) {}
}

module.exports = TelinkBt;
