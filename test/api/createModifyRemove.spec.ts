import ApiReportPortal from "../../api/api";
import {assert, expect} from 'chai';
import jsonShema from 'chai-json-schema'
import CommonUtils from "../../core/utilities/CommonUtils";
import widgetSchema from "../../api/jsonSchema/widgetSchema";
import dashboardSchema from "../../api/jsonSchema/dashboardSchema";

describe('Create modify remove dashboard and widget', function () {
    const api = new ApiReportPortal();

    it('Verify dashboard', async function () {
        const getDashboard = await api.getDashboard();
        const getProject = CommonUtils.filterArrayOfObjsByKey(getDashboard.data.content, 'Elite Board');
        if (getProject) {
            const resp = await api.deleteDashboard(getProject.id);
            expect(resp.status).to.equal(200);
        }
        const newDashboard = await api.addNewDashboard();
        expect(newDashboard.status).to.equal(201);
        assert.jsonSchema(newDashboard.data, dashboardSchema);
        const resp = await api.deleteDashboard(newDashboard.data.id);
        expect(resp.status).to.equal(200);
    });

    it('Verify widget', async function () {
        const newWidget = await api.addNewWidgetStructure();
        expect(newWidget.status).to.be.equal(201);
        assert.jsonSchema(newWidget.data, widgetSchema);
        const resp = await api.deleteWidget('18', newWidget.data.id);
        expect(resp.status).to.equal(200);
    });
});
