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
}

export default new CommonUtils();
