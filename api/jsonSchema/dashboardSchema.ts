export const dashboardSchema = {
    title: 'Response body shema',
    type: 'object',
    required: ['id'],
    // additionalProperties: false,
    properties: {
        id: {
            type: 'number'
        }
    }
};
