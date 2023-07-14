export interface ParkingVacancyData {
    results: Result[];
}

export interface Result {
    park_Id:     string;
    privateCar:  Coach[];
    LGV?:        Hgv[];
    HGV?:        Hgv[];
    motorCycle?: Coach[];
    coach?:      Coach[];
}

export interface Hgv {
    vacancy_type: VacancyType;
    vacancy:      number;
    lastupdate:   Date;
    vacancyUNL?:  number;
    vacancyEV?:   number;
    category?:    Category;
}

export enum Category {
    Hourly = "HOURLY",
}

export enum VacancyType {
    A = "A",
    B = "B",
    C = "C",
}

export interface Coach {
    vacancy_type: VacancyType;
    vacancy:      number;
    lastupdate?:  Date;
    category?:    Category;
    vacancyEV?:   number;
    vacancyDIS?:  number;
}
