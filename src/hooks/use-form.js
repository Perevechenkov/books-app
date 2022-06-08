import { useState } from 'react';
import BookForm from '../components/NewBook/BookForm';

export default function useForm(onSubmit) {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const toggleForm = () => {
    setFormIsVisible(prevState => !prevState);
  };

  const renderForm = () => {
    return (
      <>
        {formIsVisible && (
          <BookForm onAddBook={onSubmit} onToggle={toggleForm} />
        )}
      </>
    );
  };

  return {
    renderForm,
    toggleForm,
  };
}
