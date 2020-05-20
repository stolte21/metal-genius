export const createRequestAction = (action) => {
    return `${action}_REQUEST`;
};

export const createSuccessAction = (action) => {
    return `${action}_SUCCESS`;
};

export const createFailureAction = (action) => {
    return `${action}_FAILURE`;
};