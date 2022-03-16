import { JSON_SERVER_BASE_URL } from "../constants/app-constants";
import { PropertyType } from "../types/property";
import { get, put } from "./api";

export async function getPropertyList(): Promise<PropertyType[]> {

    const url = `${JSON_SERVER_BASE_URL}/properties`;
    
    const { data, status } = await get<PropertyType[]>(url);

    if(status !== 200) {
        // #TODO handle status errors here
        throw new Error('Error with the request');
    }
 
    if (data.length <= 0) {
        throw new Error('Properties not found');
    }
  
    return data;
  }

  export async function putPropertyById(id: string, params: PropertyType): Promise<PropertyType> {

    const url = `${JSON_SERVER_BASE_URL}/properties/${id}`;

    const { data, status } = await put<PropertyType>(url, params);

    if(status !== 200) {
        throw new Error('Error with the request');
    }
    if(!data) {
        throw new Error('Error updating record');
    }

    return data;
  }