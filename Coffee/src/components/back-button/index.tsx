import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <button onClick={ handleBack }>Voltar</button>
    </>
  )
}

export default BackButton;