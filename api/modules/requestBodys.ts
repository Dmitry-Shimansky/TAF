const requestBodys = Object.freeze({
    newwidgetbody: {
    "widgetType": "activityStream",
    "contentParameters": {
        "contentFields": [
            "name",
            "user",
            "lastModified",
            "actionType",
            "objectType",
            "projectRef",
            "loggedObjectRef",
            "history"
        ],
            "itemsCount": "50",
            "widgetOptions": {
            "actionType": [
                "startLaunch",
                "finishLaunch",
                "deleteLaunch",
                "postIssue",
                "linkIssue",
                "unlinkIssue",
                "createUser",
                "createDashboard",
                "updateDashboard",
                "deleteDashboard",
                "createWidget",
                "updateWidget",
                "deleteWidget",
                "createFilter",
                "updateFilter",
                "deleteFilter",
                "createIntegration",
                "updateIntegration",
                "deleteIntegration",
                "updateProject",
                "updateAnalyzer",
                "generateIndex",
                "deleteIndex",
                "createDefect",
                "updateDefect",
                "deleteDefect",
                "startImport",
                "finishImport",
                "createPattern",
                "updatePattern",
                "deletePattern",
                "patternMatched"
            ],
                "user": ""
        }
    },
    "filters": [],
    "name": "Project activity panel_670",
    "description": "New Widget created",
    "share": true,
    "filterIds": []
    },
    newdashboardbody: {
        description: 'Better than butter',
        name: 'Elite Board'
    },
});

export {requestBodys};
