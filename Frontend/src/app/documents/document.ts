export class Document{
    constructor(
    public title?: string,
    public description?: string,
    public file_url?: string,
    public image_url?: string,
    public service_location?: string,
    public service_content?: number,
    public contact?: string,
    public owner_email?: string
    ){}
}
