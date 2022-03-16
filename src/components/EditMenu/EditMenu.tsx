import { EditButton, MenuContainer } from './EditMenu.styled';
import { useRecoilState } from 'recoil';
import { editPropertyState } from '../../state/atom';


const EditMenu = () => {
    const [ isEditProperty, setIsEditProperty ] = useRecoilState(editPropertyState);
    return (
        <MenuContainer>
            <EditButton onClick={() => setIsEditProperty(!isEditProperty)}>
                {isEditProperty? 'Done' : 'Edit'}
            </EditButton>
        </MenuContainer>
    );
}

export default EditMenu;
