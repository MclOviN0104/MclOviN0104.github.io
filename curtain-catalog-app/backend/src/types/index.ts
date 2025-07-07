export interface Curtain {
    id: number;
    name: string;
    pricePerMeter: number;
    fabricType: string;
    installationSystem: string;
}

export interface Budget {
    width: number;
    height: number;
    fabricType: string;
    installationSystem: string;
    totalCost: number;
}

export interface AdminPanelData {
    fabricTypes: string[];
    installationSystems: string[];
    prices: { [key: string]: number };
}