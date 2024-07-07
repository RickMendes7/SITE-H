function Botao(props){
   
   const buttonStyle = {
      color: props.color   
   }

 return (
    <button style={buttonStyle}>
        Botao estilizado
    </button>
 );

 function App() {
    return (
        <>
        <Botao color='yellow'></Botao>
        </>
    )
 }
}