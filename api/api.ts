import BaseApiClient from "./baseApiClient";
import {ReportPortalUrls} from "./modules/url_config";
import {AxiosResponse} from "axios";
import {requestBodys} from "./modules/requestBodys";

class ApiReportPortal extends BaseApiClient {

    public getDashboard(): Promise<AxiosResponse> {
        return this.getRequest(ReportPortalUrls.DASHBOARDID);
    }

    public addNewDashboard(): Promise<AxiosResponse> {
        return this.postRequest(ReportPortalUrls.DASHBOARD, requestBodys.newdashboardbody);
    };

    public getWidget(): Promise<AxiosResponse> {
        return this.getRequest(ReportPortalUrls.WIDGETBYNAME);
    }

    public addNewWidgetStructure(): Promise<AxiosResponse> {
        return this.postRequest(ReportPortalUrls.WIDGET, requestBodys.newwidgetbody);
    };

    public addNewWidgetContent(dashboardId: string, widgetId: string): Promise<AxiosResponse> {
        return this.putRequest(`${ReportPortalUrls.WIDGETCONTENT}/${dashboardId}/add`, {
            "addWidget": {
                "widgetId": widgetId,
                "widgetName": "Project activity panel_666",
                "widgetType": "activityStream",
                "widgetPosition": {
                    "positionX": 0,
                    "positionY": 0
                },
                "widgetSize": {
                    "width": 6,
                    "height": 7
                }
            }
        });
    };

    public deleteWidget(dashboardId: string, widgetId: string): Promise<AxiosResponse> {
        return this.deleteRequest(`${ReportPortalUrls.DELETE}/${dashboardId}/${widgetId}`);
    };

    public deleteDashboard(dashboardId: string): Promise<AxiosResponse> {
        return this.deleteRequest(`${ReportPortalUrls.DELETE}/${dashboardId}`);
    }
}

export default ApiReportPortal;
