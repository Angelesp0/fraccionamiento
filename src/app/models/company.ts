export class Company {
    id_company?: number;
    company: string;
    rfc: number;
    state: string;
    city: string;
    type_colony?: string;
    colony: string;
    type_street?: string;
    street: string;
    cp: number;
    tel: number;
    num_ext?: number;
    num_int?: number;
    users_id_user: number;
    img?: string;
    floor?: number;
    local_number?: number;
    type_mall?: string;
    name_mall?: string;
    type_street1?: string;
    street1: string;
    type_street2?: string;
    street2: string;
    type_street3?: string;
    street3: string;

    id_information?: number;
    contact_name: string;
    job: string;
    contact_tel: number;
    contact_email: string;
    company_start: Date;
    facilities?: string;
    scope_of_operations: string;
    sales_range: string;
    distribution: string;

    main_activity: string;
    activity_code?: number;
    employees: number;
    female_employees: number;
    attention_area?: string;
    financing?: string;
    digital_equipment: boolean;
    internet: boolean;
    advertising?: string;
    training?: boolean;
    facebook?: string;
    twiter?: string;
    business_group?: string;
    association?: string;
    cluster?: string;
    productive_chain?: string;
    distinctive?: string;
    company_id_company?: string;

    services_id_service?: number;
    status?: number;
    start_date?: Date;
    end_date?: Date;
}