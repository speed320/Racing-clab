export const hasPermission = (permissions, entity, action) => {
    const entityPerm = permissions.find(p => p.entity === entity);
    return entityPerm?.actions.includes(action);
};
