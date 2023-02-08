export interface AppGeneratorSchema {
    name: string;
    templateDirName: string;
    tags?: string;
    disableGenerate?: boolean;
    directory?: string;
}
