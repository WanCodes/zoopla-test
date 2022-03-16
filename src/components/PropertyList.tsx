import { Fragment, useEffect, useState } from "react";
import { getPropertyList, putPropertyById } from "../services/getPropertyList";
import { PropertyStatus, PropertyType } from "../types/property";
import PropertyCard from "./PropertyCard/PropertyCard";
import styled from 'styled-components';
import usePropertyList, { RequestStatus } from "../hooks/usePropertyList";

const ListContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const PropertyList = () => {

    const {
        propertyList,
        propertyListState,
        onToggleActive,
        // toggleActiveState, // @TODO handle loading state when toggling between Active and Expired
    } = usePropertyList();

    return (
        <ListContainer>
            {propertyListState === RequestStatus.LOADING && (
                <div>Loading...</div>
            )}
            {propertyListState === RequestStatus.ERROR && (
                <div>Error loading list...</div>
            )}
            {propertyList.map(property => (
                <PropertyCard
                    key={property.id}
                    property={property}
                    onToggleActive={onToggleActive}
                />
            ))}
        </ListContainer>
    );
}

export default PropertyList;
