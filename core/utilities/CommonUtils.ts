class CommonUtils {
    public deleteUnnecessaryItem(array: string[], feature: any): string[] {
        while (array.indexOf(feature, 0) != -1) {
            const index = array.indexOf(feature, 0);
            array.splice(index, 1);
        }
        return array;
    }
}

export default new CommonUtils();
