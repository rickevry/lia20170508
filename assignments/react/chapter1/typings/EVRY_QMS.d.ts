
interface SharePointUser {
    id: number;
    title: string;
    loginName: string;
    systemUserKey: string;
    email: string;
    userId: number;
}

interface EVRY_QMS_INTERFACE {
    /**
     * Get current SharePoint user.
     * @public
     * @static
     */
    getCurrentUser(): PromiseLike<SharePointUser>;
    getDocumentNodes(currentNode, callback);
    getInfo(callback);
    getNodes(currentNode, callback);
    loadScripts(scriptArray, callback);
    searchUser(search, callback);
    getDocumentImageFileName(fileType: string): string;
    saveProperties(jsonObject: {[key: string]: any}, callback?: (success: boolean) => void): void;
    loadProperties(callback: (success: boolean, props: {[key: string]: any}) => void): void;

    createAndattachTerm(pmData:any, title:string, termSet:string, callback?: (success: boolean) => void);
    detachTerm(pmData:any, callback?: (success: boolean) => void);
    attachTerm(pmData:any, termGuid:string, callback?: (success: boolean) => void);
    getTermTitle(termGuid:string, callback?: (title: string) => void);

    // getSiteId(): void;
}

declare interface Window {
    EVRY_QMS: EVRY_QMS_INTERFACE;
}

// declare var EVRY_QMS : EVRY_QMS_INTERFACE;