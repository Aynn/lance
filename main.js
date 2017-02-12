var Incheon = {
    GameEngine: require('./src/GameEngine'),
    ServerEngine: require('./src/ServerEngine'),
    ClientEngine: require('./src/ClientEngine'),
    Synchronizer: require('./src/Synchronizer'),
    GameWorld: require('./src/GameWorld'),
    Point: require('./src/Point'),  // TODO: remove this
    serialize: {
        Serializer: require('./src/serialize/Serializer'),
        Serializable: require('./src/serialize/Serializable'),
        PhysicalObject: require('./src/serialize/PhysicalObject'),
        THREEPhysicalObject: require('./src/serialize/THREEPhysicalObject'),
        DynamicObject: require('./src/serialize/DynamicObject'),
        ThreeVector: require('./src/serialize/ThreeVector'),
        Quaternion: require('./src/serialize/Quaternion')
    },
    physics: {
        PhysicsEngine: require('./src/physics/PhysicsEngine'),
        SimplePhysicsEngine: require('./src/physics/SimplePhysicsEngine'),
        CannonPhysicsEngine: require('./src/physics/CannonPhysicsEngine')
    },
    render: {
        Renderer: require('./src/render/Renderer'),
        ThreeRenderer: require('./src/render/ThreeRenderer'),
        AFrameRenderer: require('./src/render/AFrameRenderer')
    }
};

module.exports = Incheon;
