export class Proposal{
    constructor(
        public id?: number,
        public customer?: string,
        public description?: string,
        public tools?: string,
        public estimated_hours?: number,
        public hourly_rate?: number,
        public days_to_complete?: number,
        public client_email?: string,
        public provide_tool?: string,
        public location?: string,
        public service_content?: number,
        public owner_email?: string

    ){}
}