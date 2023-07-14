export interface ParkingVacancyData {
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
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    privileges?:     OpeningHour[];
    dayNightParks?:  DayNightPark[];
    hourlyCharges?:  HourlyCharge[];
    unloadings?:     Unloading[];
    monthlyCharges?: MonthlyCharge[];
}

export interface DayNightPark {
    weekdays:             Weekday[];
    excludePublicHoliday: boolean;
    validUntil?:          ValidUntil;
    covered:              Covered;
    type:                 DayNightParkType;
    price:                number;
    periodEnd:            End;
    periodStart:          string;
    remark?:              string;
    usageMinimum?:        number;
}

export enum Covered {
    Covered = "covered",
    Mixed = "mixed",
    OpenAir = "open-air",
    SemiCovered = "semi-covered",
}

export enum End {
    The0800 = "08:00",
    The2000 = "20:00",
    The2400 = "24:00",
}

export enum DayNightParkType {
    DayPark = "day-park",
    HalfHourly = "half-hourly",
    Hourly = "hourly",
    NightPark = "night-park",
    The24HoursPark = "24-hours-park",
}

export enum ValidUntil {
    NoRestrictions = "no-restrictions",
    SameDay = "same-day",
}

export enum Weekday {
    Fri = "FRI",
    Mon = "MON",
    Ph = "PH",
    Sat = "SAT",
    Sun = "SUN",
    Thu = "THU",
    Tue = "TUE",
    Wed = "WED",
}

export interface HourlyCharge {
    weekdays:             Weekday[];
    excludePublicHoliday: boolean;
    covered:              Covered;
    type:                 DayNightParkType;
    usageMinimum?:        number;
    price:                number;
    periodEnd:            string;
    periodStart:          string;
    remark?:              string;
    usageThresholds?:     UsageThreshold[];
    validUntil?:          ValidUntil;
    validUntilEnd?:       End;
}

export interface UsageThreshold {
    price: number;
    hours: number;
}

export interface MonthlyCharge {
    price:    number;
    remark?:  string;
    type:     MonthlyChargeType;
    covered:  Covered;
    reserved: Reserved;
    ranges?:  OpeningHour[];
}

export interface OpeningHour {
    weekdays:             Weekday[];
    excludePublicHoliday: boolean;
    description?:         string;
    periodEnd:            string;
    periodStart:          string;
}

export enum Reserved {
    NonReserved = "non-reserved",
    Reserved = "reserved",
}

export enum MonthlyChargeType {
    MonthlyPark = "monthly-park",
}

export interface Unloading {
    usageThresholds: UsageThreshold[];
    type:            DayNightParkType;
    price:           number;
}

export interface Lgv {
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    privileges?:     OpeningHour[];
    dayNightParks?:  DayNightPark[];
    hourlyCharges?:  DayNightPark[];
    monthlyCharges?: MonthlyCharge[];
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

export enum DcDistrict {
    KwunTongDistrict = "Kwun Tong District",
    WongTaiSinDistrict = "Wong Tai Sin District",
}

export enum Region {
    Kln = "KLN",
}

export enum CarparkType {
    MultiStorey = "multi-storey",
    OffStreet = "off-street",
}

export interface Coach {
    spaceUNL: number;
    spaceEV:  number;
    spaceDIS: number;
    space:    number;
}

export enum Facility {
    Disabilities = "disabilities",
    EvCharger = "evCharger",
    Unloading = "unloading",
    Washing = "washing",
}

export interface GracePeriod {
    minutes: number;
}

export interface HeightLimit {
    height:  number;
    remark?: string;
}

export enum Lang {
    EnUS = "en_US",
}

export interface MotorCycle {
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    monthlyCharges?: MonthlyCharge[];
    hourlyCharges?:  HourlyCharge[];
    dayNightParks?:  HourlyCharge[];
}

export enum Nature {
    Commercial = "commercial",
    Government = "government",
}

export enum OpeningStatus {
    Closed = "CLOSED",
    Open = "OPEN",
}

export enum PaymentMethod {
    AutopayStation = "autopay-station",
    Cash = "cash",
    Master = "master",
    Octopus = "octopus",
    Visa = "visa",
}

export interface PrivateCar {
    hourlyCharges:   HourlyCharge[];
    spaceUNL:        number;
    spaceEV:         number;
    spaceDIS:        number;
    space:           number;
    privileges?:     OpeningHour[];
    monthlyCharges?: MonthlyCharge[];
    dayNightParks?:  HourlyCharge[];
}

export interface RenditionUrls {
    square?:        string;
    thumbnail?:     string;
    banner?:        string;
    carpark_photo?: string;
}
