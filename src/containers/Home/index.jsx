import { Input } from "components/Input";
import { Button, Container, H1, Section } from "globalStyles";
import { useMessage } from "hooks/useMessage";

const Home = () => {
  const { setNumber, 
          setMessage, 
          setType, 
          isLoding, 
          error, 
          handleSendMessage 
        } = useMessage((state) => state.message);

 
  if (isLoding) return <div> Cargando... </div>;

  if (error) return <div> Error... </div>;

  return (
    <Section>
      <Container>
        <br />
        <H1>ChatApp</H1>
        <br />
        <Input placeholder="Numero de teléfono" setOnChange={setNumber} />
        <br />
        <Input placeholder="Escribe tu mesage" setOnChange={setMessage} />
        <br />
        <Button onClick={handleSendMessage}>enviar</Button>
      </Container>
    </Section>
  );
};

export default Home;
