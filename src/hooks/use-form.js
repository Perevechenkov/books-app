import { useState } from 'react';
import BookForm from '../components/NewBook/BookForm';

export default function useForm(
  onSubmit,
  defaultValues = { title: '', author: '', cover: '' }
) {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const toggleForm = () => {
    setFormIsVisible(prevState => !prevState);
  };

  const renderForm = () => {
    return (
      <>
        {formIsVisible && (
          <BookForm
            onAddBook={onSubmit}
            onToggle={toggleForm}
            defaultValues={defaultValues}
          />
        )}
      </>
    );
  };

  return {
    renderForm,
    toggleForm,
  };
}
