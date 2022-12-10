import {getLogger} from "log4js";
const logger = getLogger('[Utils]');

class CommonUtils {
    public deleteUnnecessaryItem(array: string[], feature: any): string[] {
        while (array.indexOf(feature, 0) != -1) {
            const index = array.indexOf(feature, 0);
            array.splice(index, 1);
        }
        return array;
    };

    public filterArrayOfObjsByKey(arrayOfObjs: any[], searchKey: string): any {
        const result = arrayOfObjs.find((item: any) => {
            return Object.keys(item).some((key) => item[key] == searchKey);
        });
        return result;
    };

    async dragAndDrop(originSelector, destinationSelector): Promise<void> {
        const origin = await global.page.waitForSelector(originSelector);
        const destination = await global.page.waitForSelector(destinationSelector);
        const ob = await origin.boundingBox();
        const db = await destination.boundingBox();

        logger.info(`Dragging from ${ob.x + ob.width / 2}, ${ob.y + ob.height / 2}`);
        await global.page.mouse.move(ob.x + ob.width / 2, ob.y + ob.height / 2);
        await global.page.mouse.down();
        logger.info(`Dropping at   ${db.x + db.width / 2}, ${db.y + db.height / 2}`);
        await global.page.mouse.move(db.x + db.width / 2, db.y + db.height / 2);
        await global.page.mouse.up();
    }
}

export default new CommonUtils();
