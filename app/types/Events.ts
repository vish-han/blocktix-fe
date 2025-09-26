export interface Events{
_id:string;
id:number;
name: string;
description: string;
category: 'SPORTS'|'COMEDY'|'MUSIC'|'EDUCATION';
venue: string;
imageUrl: string;
metadataUrl: string;
status:'UPCOMING'|'ONGOING'|'COMPLETED'|'CANCELLED';
}

export interface IEventService{
    getAllEvents(): Promise<Events[]>;
    getEventById(id: number): Promise<Events>;
}
