import { useRecoilValue } from 'recoil';
import { editPropertyState } from '../../state/atom';
import { PropertyStatus, PropertyType } from '../../types/property';
import { ActiveButton, CardContainer,
    Content,
    Footer,
    ImageWrapper,
    ImgStyled,
    ListingAddress,
    ListingDetails,
    ListingTitle,
    PriceStyled,
    Text,
    Expired,
} from './PropertyCard.styled';

interface PropertyProps {
    property: PropertyType;
    onToggleActive: (id: string, status:PropertyType ) => void
}

const PropertyCard = ({ property, onToggleActive }:PropertyProps) => {
    const isEditProperty = useRecoilValue(editPropertyState);
    const { 
        id,
        price,
        title,
        address,
        image,
        publishedOn,
        status,
    } = property;

    const onActiveClicked = () => {
        const newStatus = status === PropertyStatus.ACTIVE? PropertyStatus.EXPIRED: PropertyStatus.ACTIVE;
        onToggleActive(id, { ...property, status: newStatus});
    }

    return (
        <CardContainer>
            <Content>
                <ImageWrapper>
                    <ImgStyled src={image.src} alt={title} />
                </ImageWrapper>
                <ListingDetails>
                    {status === PropertyStatus.EXPIRED && (<Expired>Expired</Expired>)}
                    <PriceStyled>{price}</PriceStyled>
                    <ListingTitle>{title}</ListingTitle>
                    <ListingAddress>{address}</ListingAddress>
                </ListingDetails>
            </Content>
            <Footer>
                <Text>{`Listen on: ${publishedOn}`}</Text>
                {isEditProperty && (
                    <ActiveButton onClick={onActiveClicked}>
                        {status === PropertyStatus.ACTIVE? 'Set expired':'Set active'}
                    </ActiveButton>
                )}
            </Footer>
        </CardContainer>
    );
};

export default PropertyCard;