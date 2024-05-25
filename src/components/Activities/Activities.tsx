import {
  Container,
  FirstColumn,
  Header,
  Line,
  SecondColumn,
  Title,
} from "./Activities.style";

export const Activities = () => {
  const textTable = [
    ["D'Favela", "Coleta de peças doadas, customização e bazar."],
    ["D'Votar", "Política para leigos em parceria com o IPAD."],
    [
      "D'Reciclar",
      "Coleta e oficina de material reutilizável (Vidro, plástico, madeira, etc).",
    ],
    ["D'Eternizar", "Oficina de tatuagem, quadro e fotografia."],
    ["D'Raiz", "Oficina de trança"],
    ["D'Lei", "Consultas jurídicas com advogados voluntários."],
    ["D'Sorrir", "Parceria com faculdade de odontologia."],
    ["D'Parir", "Educação sexual, planejamento familiar e oficina de doulas."],
  ];
  return (
    <Container>
      <Title>Atividades Prestadas</Title>
      <p>Atualmente, o Instituto de Pé conta com uma série de atividades gratuitas disponíveis ao público:</p>
      <Header>
        <FirstColumn>Nome</FirstColumn>
        <SecondColumn>Atividade</SecondColumn>
      </Header>
      {textTable.map((value, index) => (
        <Line key={index}>
          <FirstColumn>{value[0]}</FirstColumn>
          <SecondColumn>{value[1]}</SecondColumn>
        </Line>
      ))}
    </Container>
  );
};
