import BookForm from 'components/Form/Form';
import { Contacts } from './../Contacs/Contacts';
import SectionTitle from './../SectionTitle/SectionTitle';
import { Container } from './App.styled';

const App = () => {
  return (
    <Container>
      <SectionTitle title="Phonebook" />
      <BookForm />
      <Contacts title={'Contacts'} />
    </Container>
  );
};

export default App;
