export interface ParkingInfoData {
    results: Result[];
}

export interface Result {
    park_Id:         string;
    name:            string;
    nature?:         Nature;
    carpark_Type?:   CarparkType;
    address?:        Address;
    displayAddress:  string;
    district?:       string;
    latitude:        number;
    longitude:       number;
    contactNo?:      string;
    renditionUrls?:  RenditionUrls;
    website:         string;
    opening_status:  OpeningStatus;
    openingHours?:   OpeningHour[];
    gracePeriods?:   GracePeriod[];
    heightLimits?:   HeightLimit[];
    facilities?:     Facility[];
    paymentMethods?: PaymentMethod[];
    privateCar?:     PrivateCar;
    LGV?:            Lgv;
    HGV?:            Hgv;
    coach?:          Coach;
    motorCycle?:     MotorCycle;
    creationDate?:   Date;
    modifiedDate?:   Date;
    publishedDate?:  Date;
    lang:            Lang;
}

export interface Hgv {
    spaceUNL:       number;
    spaceEV:        number;
    spaceDIS:       number;
    space:          number;
    privileges?:    OpeningHour[];
    dayNightParks?: DayNightPark[];
    hourlyCharges?: DayNightPark[];
    unloadings?:    Unloading[];
}

export interface DayNightPark {
    weekdays:             Weekday[];
    excludePublicHoliday: boolean;
    validUntil?:          ValidUntil;
    covered:              Covered;
    type:                 Type;
    price:                number;
    periodEnd:            string;
    periodStart:          string;
    usageMinimum?:        number;
    remark?:              string;
    usageThresholds?:     UsageThreshold[];
    validUntilEnd?:       string;
}

export type Covered = "open-air" | "covered" | "mixed" | "semi-covered";

export type Type = "night-park" | "hourly" | "half-hourly" | "day-park" | "24-hours-park";

export interface UsageThreshold {
    price: number;
    hours: number;
}

export type ValidUntil = "no-restrictions" | "same-day";

export type Weekday = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | "PH";

export interface OpeningHour {
    weekdays:             Weekday[];
    excludePublicHoliday: boolean;
    description?:         string;
    periodEnd:            string;
    periodStart:          string;
}

export interface Unloading {
    usageThresholds: UsageThreshold[];
    type:            Type;
    price:           number;
}

export interface Lgv {
    spaceUNL:       number;
    spaceEV:        number;
    spaceDIS:       number;
    space:          number;
    privileges?:    OpeningHour[];
    dayNightParks?: DayNightPark[];
    hourlyCharges?: DayNightPark[];
}

export interface Address {
    buildingName?: string;
    streetName:    string;
    buildingNo?:   string;
    floor?:        string;
    subDistrict:   string;
    dcDistrict:    DcDistrict;
    region:        Region;
}

export type DcDistrict = "Kwun Tong District" | "Wong Tai Sin District";

export type Region = "KLN";

export type CarparkType = "off-street" | "multi-storey";

export interface Coach {
    spaceUNL: number;
    spaceEV:  number;
    spaceDIS: number;
    space:    number;
}

export type Facility = "disabilities" | "evCharger" | "unloading" | "washing";

export interface GracePeriod {
    minutes: number;
}

export interface HeightLimit {
    height:  number;
    remark?: string;
}

export type Lang = "en_US";

export interface MotorCycle {
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    monthlyCharges?: MotorCycleMonthlyCharge[];
    hourlyCharges?:  DayNightPark[];
    dayNightParks?:  DayNightPark[];
}

export interface MotorCycleMonthlyCharge {
    reserved: string;
    covered:  Covered;
    type:     string;
    price:    number;
}

export type Nature = "commercial" | "government";

export type OpeningStatus = "OPEN" | "CLOSED";

export type PaymentMethod = "octopus" | "visa" | "cash" | "master" | "autopay-station";

export interface PrivateCar {
    hourlyCharges:   DayNightPark[];
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    privileges?:     OpeningHour[];
    monthlyCharges?: PrivateCarMonthlyCharge[];
    dayNightParks?:  DayNightPark[];
}

export interface PrivateCarMonthlyCharge {
    reserved: string;
    covered:  Covered;
    type:     string;
    remark?:  string;
    price:    number;
    ranges?:  OpeningHour[];
}

export interface RenditionUrls {
    square?:        string;
    thumbnail?:     string;
    banner?:        string;
    carpark_photo?: string;
}
