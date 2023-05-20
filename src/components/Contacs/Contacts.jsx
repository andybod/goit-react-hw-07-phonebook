import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, getAllContacts } from 'redux/operations';
import { filterContacts } from 'redux/filterSlice';
import {
  ContactItem,
  ContainerContacts,
  DeleteBtn,
  Input,
  Label,
  ListContacts,
  Title,
} from './Contacts.styled';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = ({ title }) => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const onFilter = e => {
    const filterValue = e.target.value;
    dispatch(filterContacts(filterValue));
  };

  const onItemDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredSearch = () => {
    const normaliseFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normaliseFilter)
    );
  };

  return (
    <ContainerContacts>
      {items.length > 0 && (
        <>
          <Title>{title}</Title>
          <Label>Find contacts by name</Label>
          <Input type="text" name="filter" value={filter} onChange={onFilter} />
        </>
      )}

      <ListContacts>
        {isLoading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        {items.length > 0 &&
          filteredSearch().map(({ id, name, phone }) => (
            <ContactItem key={id}>
              <p>
                {name}: {phone}
              </p>
              <DeleteBtn
                type="button"
                onClick={() => {
                  onItemDelete(id);
                }}
              >
                Delete
              </DeleteBtn>
            </ContactItem>
          ))}
      </ListContacts>
    </ContainerContacts>
  );
};
Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};
