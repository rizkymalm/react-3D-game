interface StatProps {
    attack: number;
    defense: number;
    ulti: number;
    ability: number;
}

export interface RoleTypes {
    role: 'fighter' | 'tank' | 'marksman' | 'assasin' | 'mage' | 'support';
    icon: string;
    iconFlat: string;
}

export interface HeroTypes {
    id: number | string;
    name: string;
    description?: string;
    image: string;
    model: string;
    position: any;
    size: number;
    idle: string;
    action: string;
    role: 'fighter' | 'tank' | 'marksman' | 'assasin' | 'mage' | 'support';
    stats: StatProps;
    skill?: string[];
}
