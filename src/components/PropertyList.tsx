import { Fragment, useEffect, useState } from "react";
import { getPropertyList, putPropertyById } from "../services/getPropertyList";
import { PropertyStatus, PropertyType } from "../types/property";
import PropertyCard from "./PropertyCard/PropertyCard";
import styled from 'styled-components';
import usePropertyList from "../hooks/usePropertyList";

const ListContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PropertyList = () => {

    const { propertyList, onToggleActive } = usePropertyList();

    return (
        <ListContainer>
            {propertyList.map(property => (
                <Fragment  key={property.id}>
                    <PropertyCard property={property} onToggleActive={onToggleActive}/>
                </Fragment>
            ))}
        </ListContainer>
    );
}

export default PropertyList;
