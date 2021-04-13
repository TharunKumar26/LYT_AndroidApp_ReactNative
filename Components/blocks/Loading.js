import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
export default class Loading extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          
         
          <Spinner color='green' />
       
        </Content>
      </Container>
    );
  }
}