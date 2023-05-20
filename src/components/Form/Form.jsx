import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { BtnAdd, Form, Input, Title } from './Form.styled';

const BookForm = () => {
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

  const addNewName = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    const checkedName = items.find(elem => {
      return elem.name === name.value;
    });

    if (checkedName) {
      alert(`${name.value} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: name.value, phone: number.value }));

    name.value = '';
    number.value = '';
  };

  return (
    <Form action="" onSubmit={addNewName}>
      <Title>Name</Title>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Title>Number</Title>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <BtnAdd type="submit">Add contact</BtnAdd>
    </Form>
  );
};

export default BookForm;
