export type SpacexHistory = {
    links:           Links;
    title?:           string;
    event_date_utc:  Date;
    event_date_unix: number;
    details?:         string;
    id?:              string;
    flight_number: number;
}

export type Links = {
    article?: null | string;
}

export type SpacexInfo = {
    name:           string;
    founder:        string;
    founded:        number;
    employees:      number;
    vehicles:       number;
    launch_sites:   number;
    test_sites:     number;
    ceo:            string;
    cto:            string;
    coo:            string;
    cto_propulsion: string;
    valuation:      number;
    headquarters:   Headquarters;
    links:          InfoLinks;
    summary:        string;
}

export type Headquarters = {
    address: string;
    city:    string;
    state:   string;
}

export type InfoLinks = {
    website:      string;
    flickr:       string;
    twitter:      string;
    elon_twitter: string;
}
