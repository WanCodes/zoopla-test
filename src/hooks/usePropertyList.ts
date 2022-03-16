import { useEffect, useState } from "react";
import { PropertyType } from "../types/property";
import { getPropertyList, putPropertyById } from "../services/getPropertyList";

interface PropertyReturn {
    propertyList: PropertyType[];
    onToggleActive: (id: string, params:PropertyType) => void;
}

const usePropertyList = (): PropertyReturn => {

    const [ propertyList, setPropertyList ] = useState<PropertyType[]>([]);

    useEffect(() => {
        const fetchPropertyData = async () => {
            const data = await getPropertyList();
            setPropertyList(data);
        };
        fetchPropertyData();
    }, []);

    const onToggleActive = async (id: string, params:PropertyType ) => {
        const updatedItem = await putPropertyById(id, params);
        if(updatedItem){
            const updatedList = propertyList.map((item) => {
                if(item.id === updatedItem.id) return updatedItem;
                return item;
            });
            setPropertyList(updatedList);
        }
    }

    return {
        propertyList,
        onToggleActive,
    }
}

export default usePropertyList;
