import React, { Component } from 'react';
import { Text , View, Button, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Image source={require('./img/logo.png')}/>
        <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
          <Text style={styles.textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 20,
    paddingHorizontal: 50,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  textoBotao:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
}

const gerarNovaFrase = () =>{
  let numAleatorio = Math.floor(Math.random() * 20)

  let frases = [
      'Sou feliz por ser como sou, por ter o que tenho, mas amanhã quero ser ainda mais e para isso luto diariamente.',
      'Nada melhor para a alma que treinar a gratidão e diariamente agradecer pelas bênçãos que receber.',
      'Amar a vida é amar seus amigos, pois sem eles nada mais faz sentido no seu dia a dia.',
      'Nem toda mudança importante acontece de repente e faz barulho, algumas são silenciosas e vão se fazendo no dia a dia.',
      'Desejo uma boa semana a todos aqueles que diariamente persistem em lutar pelos seus objetivos!',
      'Viver não é fácil, mas com coragem para suportar os desafios do dia a dia tudo se torna mais simples.',
      'Porque a vida é mágica, aproveite os milagres do dia a dia. Boa tarde!',
      'Gratidão não é pagamento, mas um reconhecimento que se demonstra no dia a dia.',
      'Felicidade não se compra, mas se conquista diariamente com pensamentos positivos!',
      'A fé é conquistada na tranquilidade do dia a dia e é capaz de maravilhas inexplicáveis!',
      'Mais importante que mostrar ao mundo que temos valores e princípios é lutar por eles, e viver diariamente sua verdade.',
      'A alegria está sempre à nossa disposição, basta que a deixemos entrar na nossa vida e seremos felizes no dia a dia.',
      'Amor incondicional e sensações memoráveis fazem parte do dia a dia de uma mãe com seus filhos!',
      'É tempo de esquecer os problemas, jogar fora as frustrações do dia a dia e desfrutar do Carnaval em grande estilo!',
      'A vida somos nós que a construímos diariamente por isso lute e nunca desista de criar a que sempre sonhou.',
      'Alimente seus sonhos diariamente, pois são eles que dão verdadeiro sentido à sua vida.',
      'Sou apenas um pequeno planeta que se perde diariamente em todo o seu universo.',
      'Os maiores gestos de coragem não estão nos livros, mas nos atos que praticamos no dia a dia.',
      'Novas amizades serão sempre bem-vindas para darem cor e alegria ao meu dia a dia.',
      'Obrigado aos professores que lutam diariamente para que todos os seus alunos tenham a melhor educação possível!'
    ] 

  Alert.alert(frases[numAleatorio])
}
