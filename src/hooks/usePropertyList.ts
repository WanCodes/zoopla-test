import { useEffect, useState } from "react";
import { PropertyType } from "../types/property";
import { getPropertyList, putPropertyById } from "../services/getPropertyList";

export enum RequestStatus {
    LOADING = 'loading',
    ERROR = 'error',
}

interface PropertyReturn {
    propertyList: PropertyType[];
    propertyListState: RequestStatus | null;
    onToggleActive: (id: string, params:PropertyType) => void;
    toggleActiveState: RequestStatus | null;
}

const usePropertyList = (): PropertyReturn => {

    const [ propertyList, setPropertyList ] = useState<PropertyType[]>([]);
    const [ propertyListState, setPropertyListState ] = useState<RequestStatus | null>(null);
    const [ toggleActiveState, setToggleActiveState ] = useState<RequestStatus | null>(null);

    useEffect(() => {
        const fetchPropertyData = async () => {
            setPropertyListState(RequestStatus.LOADING);
            const data = await getPropertyList().catch((err) => {
                setPropertyListState(RequestStatus.ERROR);
            });
            if(!data){ return; }

            setPropertyListState(null);
            setPropertyList(data);
        };
        fetchPropertyData();
    }, []);

    const onToggleActive = async (id: string, params:PropertyType ) => {
        setToggleActiveState(RequestStatus.LOADING);
        const updatedItem = await putPropertyById(id, params).catch((err) => 
            setPropertyListState(RequestStatus.ERROR)
        );

        if(updatedItem){
            const updatedList = propertyList.map((item) => {
                if(item.id === updatedItem.id) return updatedItem;
                return item;
            });
            setPropertyList(updatedList);
            setToggleActiveState(null);
        }
    }

    return {
        propertyList,
        propertyListState,
        onToggleActive,
        toggleActiveState,
    }
}

export default usePropertyList;
